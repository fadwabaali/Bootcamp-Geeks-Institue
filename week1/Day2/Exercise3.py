# Exercise 1: Cars

string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrole"

cars = string.split(", ") 

print("how many manufacturers/companies: ", len(cars))
print("reverse:", cars.sort(reverse=True))

names_o = 0
names_i = 0


for car in cars:
    if 'o' == car.lower():
        names_o += 1
    
    if 'i' == car.lower():
        names_i += 1

print(f"Number of manufacturers with the letter 'o' in their name: {names_o}")
print(f"Number of manufacturers without the letter 'i' in their name: {names_i}")

# Exercise 2: What’s your name?

def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        return f"{first_name.title()} {middle_name.title()} {last_name.title()}"
    else:
        return f"{first_name.title()} {last_name.title()}"
    
first_name = input("Enter your first name: ")

middle_name = input("Enter your middle name (optional): ")

last_name = input("Enter your last name: ")

full_name = get_full_name(first_name, last_name, middle_name)

print("Full name:", full_name)

# Exercise 3: From English to Morse
morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 
    'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
    ', ': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-', ' ': '/'
}

def english_to_morse(text):
    text = text.upper()
    morse_code = []
    for char in text:
        if char in morse_code_dict:
            morse_code.append(morse_code_dict[char])
    return ' '.join(morse_code)

def morse_to_english(morse):
    morse_dict_rev = {v: k for k, v in morse_code_dict.items()}  # Reverse the dictionary for decoding
    words = morse.split(' / ')  # Split Morse code into words (separated by '/')
    decoded_message = []
    
    for word in words:
        letters = word.split()  # Split the word into individual characters
        decoded_word = ''.join([morse_dict_rev.get(letter, '') for letter in letters])  # Decode each character
        decoded_message.append(decoded_word)
    
    return ' '.join(decoded_message)

text = input("Enter English text: ")

morse_code = english_to_morse(text)

print("English to Morse code:", morse_code)

morse_text = input("Please enter your Morse code")

english_text = morse_to_english(morse_text)

print("Morse to English:", english_text)