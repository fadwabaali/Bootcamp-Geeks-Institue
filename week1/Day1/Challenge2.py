from datetime import datetime

def is_leap_year(year):
    """Check if a year is a leap year."""
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def display_cake(candles):
    """Display the birthday cake with the given number of candles."""
    candle_str = " " * (9 - candles // 2) + "i" * candles + " " * (9 - candles // 2)
    cake = f"""
       _{candle_str}_  
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
    """
    print(cake)

# Ask user for birthdate
birthdate = input("Enter your birthdate (DD/MM/YYYY): ")

# Convert input to datetime object
birth_date = datetime.strptime(birthdate, "%d/%m/%Y")
current_year = datetime.now().year
age = current_year - birth_date.year

# Get last digit of age for candles
candles = age % 10 if age % 10 != 0 else 1  # Ensure at least 1 candle

# Display cake(s)
if is_leap_year(birth_date.year):
    print("You were born in a leap year! You get two cakes! 🎂🎂")
    display_cake(candles)
    display_cake(candles)
else:
    display_cake(candles)
