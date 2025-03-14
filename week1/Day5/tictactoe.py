import tkinter as tk
from tkinter import messagebox

class TicTacToe:
    def __init__(self, root):
        self.root = root
        self.root.title("Tic-Tac-Toe")
        self.current_player = "X"  # Start with player X
        self.board = [""] * 9  # Represents the 3x3 grid
        self.buttons = []  # To store the buttons

        # Create the buttons for the grid
        for i in range(3):
            for j in range(3):
                button = tk.Button(
                    root,
                    text="",
                    font=("Arial", 20),
                    width=5,
                    height=2,
                    command=lambda i=i, j=j: self.on_button_click(i, j),
                )
                button.grid(row=i, column=j)
                self.buttons.append(button)

        # Reset button
        reset_button = tk.Button(root, text="Reset", command=self.reset_game)
        reset_button.grid(row=3, column=1)

    def on_button_click(self, row, col):
        # Calculate the index in the board list
        index = 3 * row + col

        # Check if the cell is already occupied
        if self.board[index] == "":
            self.board[index] = self.current_player
            self.buttons[index].config(text=self.current_player)

            # Check for a win or draw
            if self.check_win():
                messagebox.showinfo("Game Over", f"Player {self.current_player} wins!")
                self.reset_game()
            elif self.check_draw():
                messagebox.showinfo("Game Over", "It's a draw!")
                self.reset_game()
            else:
                # Switch players
                self.current_player = "O" if self.current_player == "X" else "X"

    def check_win(self):
        # Check rows, columns, and diagonals for a win
        win_conditions = [
            [0, 1, 2],  # First row
            [3, 4, 5],  # Second row
            [6, 7, 8],  # Third row
            [0, 3, 6],  # First column
            [1, 4, 7],  # Second column
            [2, 5, 8],  # Third column
            [0, 4, 8],  # First diagonal
            [2, 4, 6],  # Second diagonal
        ]

        for condition in win_conditions:
            if (
                self.board[condition[0]]
                == self.board[condition[1]]
                == self.board[condition[2]]
                != ""
            ):
                return True
        return False

    def check_draw(self):
        # Check if all cells are filled
        return all(cell != "" for cell in self.board)

    def reset_game(self):
        # Reset the board and buttons
        self.current_player = "X"
        self.board = [""] * 9
        for button in self.buttons:
            button.config(text="")

# Create the main window
root = tk.Tk()
game = TicTacToe(root)
root.mainloop()
