# Simple JavaScript Calculator

A web-based calculator built with HTML, CSS, and JavaScript. This project supports basic arithmetic operations (+, -, *, /, ^), decimal numbers, backspace functionality, and clear/reset. The calculator displays input and results dynamically and prevents invalid inputs such as multiple decimals in one number.

---

## Features

- Addition, subtraction, multiplication, division, and exponentiation (`^`)
- Supports decimal numbers with input validation to prevent multiple decimals
- Backspace button to delete the last input character (number or operator)
- Clear (`C`) button to reset all input
- Responsive and visually appealing UI using CSS Grid and Flexbox
- Displays current expression and results in a read-only input field

---

## Demo Screenshot

![image](https://github.com/user-attachments/assets/2526ade2-e506-4312-9028-46f7349bef0b)


---

## Technologies Used

- **HTML** for structure
- **CSS** for styling and layout (flexbox, grid)
- **JavaScript** for calculator logic and interactivity

---

## Installation and Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/simple-js-calculator.git

## File Structure
```bash
/simple-js-calculator
│
├── index.html         # Main HTML file
├── style.css          # Stylesheet for UI
├── script.js          # JavaScript logic for calculator
└── README.md
```

## How it works

- Number Buttons: Clicking on number buttons appends digits to the current operand (either first or second number depending on operator presence).
- Operator Buttons: Clicking on an operator (+, -, *, /, ^) stores the current number and operator for calculation.
- Decimal Button: Adds a decimal point to the current operand if one is not already present.
- Backspace Button: Removes the last character from the current input (number or operator).
- Clear Button: Resets the entire input and clears stored values.
- Equals Button: Computes the result based on the selected operator and inputs, then displays the result.

## Code Highlights

- Use of event listeners for interactive buttons.
- Input validation to prevent multiple decimals in one operand.
- Use of string manipulation for backspace and input display.
- Calculation logic implemented using JavaScript Number() conversion and arithmetic operators.

