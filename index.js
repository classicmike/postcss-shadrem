/**
 * Gets a boolean if the value contains the 'rem' unit.
 * @param value - the CSS value used to check
 * @returns {boolean} - if the value contains a 'rem' unit.
 */
const hasRems = (value) => {
  return !!getRemMatches(value);
};

/**
 * Gets all the matches of CSS values that have a 'rem' unit attached.
 * @param value - The CSS value used to check
 * @returns {*} - all instances containing the 'rem' unit.
 */
const getRemMatches = (value) => {
  return value.match(/(-?\d*\.?\d+rem)/ig, "");
};

/**
 * Returns an array with all instances of 'rem' with the required replacements.
 * @param matches
 * @returns {*}
 */
const getRemsReplacements = (matches) => {
  return matches.map((match) => {
    const regExVal = new RegExp(/-?\d*\.?\d+/, 'g');

    return { match, replace: `calc(${regExVal.exec(match)} * var(--shadrem))` };
  });
};

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  return {
    postcssPlugin: 'postcss-shadrem',

    Declaration(decl) {
      if(hasRems(decl.value)){
        const remsMatches = getRemMatches(decl.value);
        const replacements = getRemsReplacements(remsMatches);

        let stringReplace = decl.value;

        replacements.forEach(replacement => {
           stringReplace = stringReplace.replace(replacement.match, replacement.replace);
        });

        decl.value = stringReplace;
      }
    }
  }
}

module.exports.postcss = true;
