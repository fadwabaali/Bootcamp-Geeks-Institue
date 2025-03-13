import random
from RockPaper import get_user_menu_choice, print_results, main

class Game:    
    def __init__(self):
        self.choices = ['rock', 'paper', 'scissors']
    
    def get_user_item(self):
        while True:
            user_choice = input("Choose rock, paper, or scissors: ").lower()
            if user_choice in self.choices:
                return user_choice
            else:
                print("Invalid choice. Please select rock, paper, or scissors.")
    
    def get_computer_item(self):
        return random.choice(self.choices)
    
    def get_game_result(self, user_choice, computer_choice):
        if user_choice == computer_choice:
            return "draw"
        elif (user_choice == "rock" and computer_choice == "scissors") or \
             (user_choice == "scissors" and computer_choice == "paper") or \
             (user_choice == "paper" and computer_choice == "rock"):
            return "win"
        else:
            return "loss"
        
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You selected {user_item}. The computer selected {computer_item}. You {result}!")
        return result
        

# Create the game object
game = Game()

# Call the play method to play the game
result = game.play()

# Define the results dictionary
results = {"win": 0, "loss": 0, "draw": 0}

# Update the results based on the game outcome
results[result] += 1

# Pass the results to the print_results function
print_results(results)

# Menu logic (if needed)
get_user_menu_choice()

main()