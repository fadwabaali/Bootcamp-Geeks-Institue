# Challenge 1
def generate_multiples(number, length):
    return [number * i for i in range(1, length + 1)]

# Get user input
num = int(input("Enter a number: "))
length = int(input("Enter the length: "))

# Print result
print(generate_multiples(num, length))

# Challenge 2
def remove_consecutive_duplicates(word):
    result = word[0]  # Start with the first character
    for i in range(1, len(word)):
        if word[i] != word[i - 1]:  # Add character only if different from previous
            result += word[i]
    return result

# Get user input
user_word = input("Enter a word: ")

# Print result
print(remove_consecutive_duplicates(user_word))
