# Shad-REM

Welcome to **Shad-REM**, a PostCSS plugin designed to help you work with REM units within shadow DOMs. Shad-REM allows you to use a new CSS custom unit property called `--shadrem` which lets you base your REM calculations on the shadow root instead of the document root node.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In web development, managing CSS units within shadow DOMs can be challenging. Traditional REM units are based on the root font size of the document, which may not always be what you want when working within shadow roots. Shad-REM solves this problem by introducing a new CSS unit, `shad rem`, that respects the font size of the shadow root.

## Features

- **Shadow Root Aware:** Converts REM units to `shad rem` units based on the shadow root's font size.
- **Seamless Integration:** Works seamlessly with your existing PostCSS setup.
- **Flexible:** Allows you to maintain consistent styling within shadow DOMs.

## Installation

To install Shad-REM, you need to have PostCSS and the PostCSS CLI set up in your project. Then, you can install Shad-REM via npm:

```bash
npm install postcss-shad-rem --save-dev
```

## Usage

Once installed, you need to configure PostCSS to use the Shad-REM plugin. Create or update your PostCSS configuration file (e.g., `postcss.config.js` or `postcss.config.cjs`) to include Shad-REM.

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-shad-rem'),
    // other plugins
  ]
};
```

## Examples

Here are some examples of how Shad-REM transforms your CSS:

### A note before using ShadREM.
Before using ShadREM, if you have a root font size other than what is set in your browser default, ensure your shadow root element has that font size set up. I.e:

```
  // What used to be in the document root element.
  :host {
    font-size: 16px;
  }
```

### Before Shad-REM

```css
/* Input CSS */
.my-element {
  font-size: 1.5rem;
  margin: 2rem;
}
```

### After Shad-REM

Assuming a base font size of `16px` in the shadow root, the output CSS will be:

```css
/* Output CSS */
.my-element {
  font-size: calc(1.5 * var(--shadrem)); /* Equivalent to 24px if base font size is 16px */
  margin: calc(2 * var(--shadrem));      /* Equivalent to 32px if base font size is 16px */
}
```

## Contributing

We welcome contributions to Shad-REM! If you find any issues or have ideas for improvements, please submit a pull request or open an issue on our GitHub repository.

## License

Shad-REM is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for more information.

---

Feel free to customize and extend Shad-REM to better fit your needs. Happy coding!
