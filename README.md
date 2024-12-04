### README for Python ATM Simulation Program

# ATM Simulation in Python

This repository contains an **ATM simulation program** implemented in Python. It demonstrates the use of **OOP (Object-Oriented Programming)** principles, such as encapsulation, private attributes, and modular design. The program allows users to create a PIN, deposit money, withdraw funds, and check their balance through an interactive menu-driven interface.

---

## Features

1. **PIN Management**:
   - Create a secure PIN.
   - Authenticate transactions using the PIN.

2. **Banking Transactions**:
   - Deposit funds into the account.
   - Withdraw money with balance validation.
   - Check account balance securely.

3. **Encapsulation**:
   - Private attributes (`__pin` and `__balance`) ensure data security.
   - Controlled access to sensitive operations.

4. **User-Friendly Menu**:
   - Interactive text-based interface for ease of use.

---

## How It Works

### 1. Initialization
- The program starts by creating an `Atm` object, which automatically displays the main menu.

### 2. Menu Options
- **Option 1**: Create a PIN.
- **Option 2**: Deposit funds (requires PIN authentication).
- **Option 3**: Withdraw funds (requires PIN authentication and checks for sufficient balance).
- **Option 4**: Check balance (requires PIN authentication).
- **Option 5**: Exit the program.

---

## Code Structure

### Main Class: `Atm`

- **Attributes**:
  - `__pin`: Stores the user's PIN securely.
  - `__balance`: Tracks the user's account balance.

- **Methods**:
  - `menu()`: Displays the menu and handles user input.
  - `create_pin()`: Allows the user to set their PIN.
  - `deposit()`: Enables deposits after PIN verification.
  - `withdraw()`: Allows withdrawals after PIN verification and balance checks.
  - `check_balance()`: Displays the account balance after PIN verification.

### Example Code Snippet
```python
class Atm:
    def __init__(self):
        self.__pin = ""
        self.__balance = 0
        self.menu()

    def menu(self):
        while True:
            user_input = input("""
                Hello, how would you like to proceed?
                1. Enter 1 to create PIN
                2. Enter 2 to deposit
                3. Enter 3 to withdraw
                4. Enter 4 to check balance
                5. Enter 5 to exit
            """)
            if user_input == "1":
                self.create_pin()
            elif user_input == "2":
                self.deposit()
            elif user_input == "3":
                self.withdraw()
            elif user_input == "4":
                self.check_balance()
            else:
                print("Goodbye!")
                break
```

---

## Usage Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/atm-simulation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd atm-simulation
   ```

3. Run the program:
   ```bash
   python atm.py
   ```

4. Follow the on-screen instructions to interact with the ATM.

---

## Example Walkthrough

1. **Launch the Program**:
   - The program displays a menu with available options.

2. **Create a PIN**:
   - Enter a secure PIN for your account.

3. **Deposit Money**:
   - Input the PIN to authenticate and add funds to your balance.

4. **Withdraw Funds**:
   - Input the PIN, specify an amount, and withdraw money if sufficient balance is available.

5. **Check Balance**:
   - Input the PIN to view your current account balance.

6. **Exit**:
   - Select option `5` to terminate the program.

---

## Learning Objectives

- Understand how to implement basic banking functionalities using Python.
- Learn the concept of private attributes for data encapsulation.
- Explore interactive menu-driven programming for user interaction.

---

## Contribution

Contributions are welcome! Feel free to:
- Submit improvements for the code.
- Propose additional features (e.g., multi-account support, transaction history).

---

## License

This project is licensed under the MIT License. You are free to use and modify the code for personal or educational purposes.

---

## Feedback and Support

If you encounter any issues or have suggestions for improvement, feel free to:
- Open an issue on GitHub.
- Contact the repository owner via email.

---

If you find this repository helpful, please ⭐ it on GitHub and share it with others! 🚀
