# Interactive Periodic Table

An interactive periodic table web application that allows users to explore information about elements dynamically. This project can be used for educational purposes or as a reference for chemistry-related applications.

## Features

- **Interactive UI**: Hover, click, and interact with elements to see more details.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Element Details**: Provides atomic information like symbol, atomic number, atomic weight, and more.

## Demo

[Click here to view the demo](https://your-demo-url.com)

## Screenshots

![Interactive Periodic Table](./screenshots/periodic_table.png)

## Installation

To set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/interactive-periodic-table.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd interactive-periodic-table
    ```

3. **Install dependencies** (if applicable, e.g., if you're using npm or another package manager):
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage

- **Hover**: Hover over an element to display its name, atomic number, and symbol.
- **Click**: Click on an element to see additional details like atomic mass, electron configuration, and other properties.

### Customization

You can customize the styles and functionality by modifying the following files:

- **CSS**: Modify styles in `src/styles/periodic-table.css` to fit your desired theme.
- **JavaScript**: Update the interactivity in `src/scripts/periodic-table.js`.

### Dark Theme

A dark theme is included! Toggle the theme in the settings, or change the hover color by editing the CSS hover effect:

```css
.element:hover {
  background-color: #334;
  color: #fff;
}
