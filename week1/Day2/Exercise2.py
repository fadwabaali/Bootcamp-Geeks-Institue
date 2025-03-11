# Exercise 1: Birthday Look-up

birthdays = {
    "Alice": "1995/04/23",
    "Bob": "1998/09/17",
    "Charlie": "2002/12/05",
    "David": "1990/06/30",
    "Emma": "1993/11/14"
}

print("You can look up the birthdays of the people in the list!")

print("Here are the people whose birthdays we have:")
for name in birthdays:
    print(f"- {name}")

name = input("Enter the name of the person: ").strip()

if name in birthdays :
    print(f"{name}'s birthday is {birthdays[name]}.")
else :
    print(f"I'm sorry, but I don't have the birthday of {name}.")
    
# Exercise 3: Sum

def sum (X):
    str_X = str(X)
    # Concatenate and convert back to integers
    result = X + int(str_X * 2) + int(str_X * 3) + int(str_X * 4)
    return result
X = int(input("Enter a number: "))
print(f"The result of {X} + {X*2} + {X*3} + {X*4} is: {sum(X)}")

# Exercise 4: Double Dice
import random
def throw_dice() :
    return random.randint(1, 6)


def throw_until_doubles() :
    first_roll = throw_dice()
    second_roll = throw_dice()
    count = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        count += 1
        if dice1 == dice2:
            break
    return count

def main():
    total_throws = 0
    throws_list = []
    
    for _ in range(100):
        throws = throw_until_doubles()
        throws_list.append(throws)
        total_throws += throws
    
    average_throws = total_throws / 100
    
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws:.2f}")

main()