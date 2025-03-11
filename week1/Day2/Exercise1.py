# 🌟 Exercise 1 : Convert lists into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

convert_dict = dict(zip(keys, values))

print(convert_dict)

# 🌟 Exercise 2 : Cinemax #

family = {}

fam_members = int(input("Enter ur family members number: "))

for i in range(fam_members):
    name = input('Enter your name')
    age = int(input('Enter your age'))
    family[name] = age

ticket_cost = 0

for name, age in family.items():
    if age < 3 :
        print(f"{name} has to pay 0$")
        ticket_cost += 0
    elif age >= 3 and age < 12 :
        print(f"{name} has to pay 10$")
        ticket_cost += 10
    else :
        print(f"{name} has to pay 15$")
        ticket_cost += 15

print(f"total cost for the family : ${ticket_cost} ")

# 🌟 Exercise 3: Zara

brand = {
    "name": "Zara",
    "creation_date": 1975 ,
    "creator_name": "Amancio Ortega Gaona ",    
    "type_of_clothes":[ "men", "women", "children", "home" ],
    "international_competitors":[ "Gap", "H&M", "Benetton" ],
    "number_stores": 7000 ,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US":[ "pink", "green"],
    }
}

print ("brand", brand)
# change the num of stores 2
brand["number_stores"] = 2
print ("brand", brand)

#zara clients
print(f"Zara offers clothing for {', '.join(brand['type_of_clothes'])}.")

#Add a key called country_creation with a value of Spain
brand["country_creation"] = "spain"
print ("brand", brand)

#Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

if "international_competitors" in brand :
    brand["international_competitors"].append("Desigual")
    print ("brand", brand)

# Delete the information about the date of creation.
del brand["creation_date"]
print ("brand", brand)

# Print the last international competitor.
print("the last competitors", brand["international_competitors"][-1])
print("the last competitors", brand["major_color"]["US"])

# Print the amount of key value pairs (ie. length of the dictionary).
print ("the amount of key value pairs", len(brand))

# Print the keys of the dictionary.
print ("the keys of the dictionary" , brand.keys())

#Create another dictionary called more_on_zara

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000,
}

# add the information from the dictionary
brand.update(more_on_zara)

# number of stores in the dictionary
print(brand["number_stores"]) 


#🌟 Exercise 4 : Some Geography

def describe_city(city, country = "france") :
    print(f"The city of {city} is located in {country}.")

describe_city("Paris")

# 🌟 Exercise 5 : Random

def random_num ( num ) : 
    import random
    if 1 <= num <= 100 :
        random_number = random.randint(1, 100)
        if num == random_number:
            print("Congratulations! You guessed the correct number.")
        else:
            print(f"Sorry, the correct number was {random_number}")
    else :
        print("Please enter a number between 1 and 100")

user_num = int(input("Enter a number between 1 and 100"))

random_num(user_num)

# 🌟 Exercise 6 : Let’s create some personalized shirts !
def make_shirt (size = "large",txt = "I love python") :
    print(f"The size of the shirt is {size}, The size of the shirt is {txt}")
    
make_shirt()
make_shirt("medium")
make_shirt("small", "I love coding")

# 🌟 Exercise 7 : Temperature Advice
import random
def get_random_temp(season) : 
    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(5, 25), 1)
    elif season == "summer":
        return round(random.uniform(20, 40), 1)
    elif season == "autumn" or season == "fall":
        return round(random.uniform(0, 20), 1)
    else:
        return round(random.uniform(-10, 40), 1) 

def get_season_from_month(month):
    """Converts a month number (1-12) into a season."""
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
 

def main ():
    month = int(input("Enter the number of the month (1-12): "))
    season = get_season_from_month(month)
    
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")
    
    if temp < 0 :
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp <16 :
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp <= 23 :
        print("It's just right, enjoy your day")
    elif 24 <= temp < 32 :
        print("Too hot! Dress in layers")
    elif 32 <= temp < 40 :
        print("Hot! Stay indoors for a while")

main()

# 🌟 Exercise 8 : Star Wars Quiz

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def ask_questions():
    correct_ans = 0
    incorrect_ans = 0
    wrong_ans = []
    
    for item in data : 
        user_ans = input (f"{item['question']} \n")
        if user_ans.lower() == item['answer'].lower():
            print("correct answer \n")
            correct_ans += 1
        else : 
            print(f"Incorrect answer, the correct answer is {item['answer']} \n")
            incorrect_ans += 1
            wrong_ans.append({"question": item['question'], "your_answer": user_ans, "answer": item['answer']})
    return correct_ans, wrong_ans, incorrect_ans

def show_results(correct, wrong, incorrect):
    print("QUIZ RESULTS :)")
    print(f"Correct answers : {correct}")
    print(f"Incorrect answers : {incorrect}")
    
    if incorrect > 0 :
        print("Here are the questions you got wrong:\n")
        for item in wrong :
            print(f"{item['question']}- Your Answer: {item['your_answer']} - Correct Answer: {item['answer']}\n")
    if incorrect > 3:
        print("You didn't pass the quiz.")
        retry =  input("Would you like to play again? (yes/no): ").strip().lower()
        
        if retry == "yes":
            start_quiz()
        else :
            print("Thank you for playing")

def start_quiz():
    correct, wrong, incorrect = ask_questions()
    show_results(correct, wrong, incorrect)

start_quiz()