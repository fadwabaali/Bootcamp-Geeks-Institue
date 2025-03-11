# Exercise 1: What is the Season?
month = int(input("Enter a num between 1 and 12: "))

def get_season_from_month(month):
    if 3 <= month <= 5 :
        return "spring"
    elif 6 <= month <= 8 :
        return "summer"
    elif 9 <= month <= 11 :
        return "autumn"
    elif 12 > month <= 2 :
        return "winter"
    else :
        return "Invalid month please enter a number between 1 and 12"
    
print(get_season_from_month(month))

# Exercise 2: For Loop

numbers = list(range(1, 21))

for i in range(len(numbers)):
    if i % 2 == 0:
        print(numbers[i])
    

# Exercise 3: While Loop

while True :
    user_name = input("Please enter your name").lower()
    
    if user_name == "fadwa" :
        print("Hello Fadwa!")
        break
    else :
        print("Hello", user_name, "but please enter my name")
        
# Exercise 4: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

while True:
    user_name = input("Please enter your name (or type 'exit' to quit): ").lower()
    
    if user_name == 'exit':
        print("Goodbye!")
        break  

    for name in names:
        if name.lower() == user_name:
            print(f"Hello {name}! Your name appears at index {names.index(name)}")
            break 
    else:
        print("Name not found. Try again.")


# Exercise 5: Greatest Number

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
num3 = int(input("Enter third number: "))

max = 0
if num1 > num2 and num1 > num3 :
    max = num1
    print(f"{num1} is the greatest number")

elif num2 > num1 and num2 > num3 :
    max = num2
    print(f"{num2} is the greatest number")

else :
    max = num3
    print(f"{num3} is the greatest number")

# Exercise 6: Random number
import random

win = 0
losses = 0

while True :
    num = input("Enter a random number from 1 - 9 (or 'q' to quit):")

    if num.lower() == 'q' :
        print(f"Total wins: {win}, Total losses: {losses}")
        break
    if not num.isdigit():
        print("Invalid input, please enter a number")
        continue
    user_num = int(num)
    
    if user_num < 1 or user_num > 9 :
        print("Invalid input, please enter a number between 1 and 9")
        continue
    
    randomnum = random.randint(1, 9)
    
    if num == randomnum :
        print("winner")
        win += 1
    else :
        print("Better luck next time")
        losses += 1
