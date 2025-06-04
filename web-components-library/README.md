# Web Components Library

This project is a collection of reusable web components designed to be easily integrated into various applications. Each component is modular, allowing for flexible usage and customization.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Button](#button)
  - [Card](#card)
  - [Nav](#nav)
  - [Slider](#slider)
- [Styles](#styles)
- [Utilities](#utilities)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the library, clone the repository and run the following command:

```bash
npm install
```

## Usage

Import the components you need in your project:

```javascript
import { Button } from './src/components/button/button.js';
import { Card } from './src/components/card/card.js';
import { Nav } from './src/components/nav/nav.js';
import { Slider } from './src/components/slider/slider.js';
```

## Components

### Button

The `Button` component allows you to create customizable buttons.

```javascript
const myButton = new Button({
    text: 'Click Me',
    onClick: () => alert('Button clicked!')
});
```

### Card

The `Card` component is used to display content in a card format.

```javascript
const myCard = new Card({
    title: 'Card Title',
    description: 'This is a description of the card.',
    image: 'path/to/image.jpg'
});
```

### Nav

The `Nav` component creates a navigation bar.

```javascript
const myNav = new Nav({
    links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Contact', href: '#' }
    ]
});
```

### Slider

The `Slider` component displays content in a carousel format.

```javascript
const mySlider = new Slider({
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg']
});
```

## Styles

The library includes several CSS files for styling components:

- `theme.css`: Overall theme styles.
- `typography.css`: Typography styles.
- `variables.css`: CSS variables for consistent styling.

## Utilities

The `helpers.js` file contains utility functions that can be used throughout the components.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.