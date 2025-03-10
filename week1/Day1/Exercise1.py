# 🌟 Exercise 1 : Hello World

print( "Hello World")
print( "Hello World")
print( "Hello World")
print( "Hello World")

# 🌟 Exercise 2 : Some Math

calc = (99 ** 3)*8
print( "Some Math", calc)

# 🌟 Exercise 3 : What’s your name ?

name = input("What's your name? ")
print("name", name)
if name == "Fadwa":
    print("Hello my fake version!")
else:
    print("Hello", name, "We are not the same!")

# 🌟 Exercise 4 : Tall enough to ride a roller coaster
height = float(input("Enter ur Height in cm: "))

if height >= 145:
    print("You are tall enough to ride a roller coaster!")
else :
    print("You need to grow some more to ride.")
    
# 🌟 Exercise 5 : Favorite Numbers

my_fav_numbers = {1,5,7,9}

print("My favorite numbers are:", my_fav_numbers)

# Adding two new numbers
my_fav_numbers.add(14)  
my_fav_numbers.add(2)  

#Remove the last number.

last_number = my_fav_numbers.pop()
print("The last number removed was:", last_number)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.

friend_fav_numbers = {2,3,5,7,9,11}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("Our favorite numbers are:", our_fav_numbers)

# 🌟 Exercise 6: Tuple
my_tuple = (1, 2, 3)
new_tuple = my_tuple + (4, 5) 
print(new_tuple)

# 🌟 Exercise 7: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove Banana from the list.

basket.remove("Banana")

print(basket)

# emove Blueberries from the list.

basket.pop()

print(basket)

# Add Kiwi to the end of the list.
basket.append("Kiwi")

print(basket)

# Add Apples to the beginning of the list.
basket.insert(0, "Apples")

print(basket)

# Count how many apples are in the basket.
print(basket.count("Apples"))

# Empty the basket.

basket.clear()

print(basket)

# 🌟 Exercise 8 : Sandwich Orders

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    print("Removed Pastrami sandwich.")
    
finished_sandwiches = []

while sandwich_orders :
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)

print("Finished Sandwiches:", finished_sandwiches)

for prepared_sandwich in finished_sandwiches:
    print("I made your", prepared_sandwich)