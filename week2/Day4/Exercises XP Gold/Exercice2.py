# Exercise 1 : Authentication database
import sqlite3
# Connect to the SQLite database
conn = sqlite3.connect('postgres.db')
cursor = conn.cursor()
# Create a users table if it doesn't exist
cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                    username TEXT PRIMARY KEY,
                    password TEXT)''')

def add_user_to_db(username, password):
    """Inserts a new user into the database."""
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
    conn.commit()  # Save (commit) the changes

def check_user_in_db(username, password):
    """Checks if a user exists and the password matches."""
    cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    return cursor.fetchone()  # Returns None if no user found

def user_exists(username):
    """Checks if the username already exists in the database."""
    cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
    return cursor.fetchone() is not None  # Returns True if user exists, False otherwise

# Main loop for user interaction
logged_in = None  # Variable to store logged-in user

while True:
    action = input("Enter 'login' to log in, 'signup' to sign up, 'exit' to exit: ").lower()

    if action == 'exit':
        break  # Exit the program

    if action == 'login':
        username = input("Enter your username: ")
        password = input("Enter your password: ")

        # Check if the user exists and the password matches
        if check_user_in_db(username, password):
            print("You are now logged in.")
            logged_in = username
        else:
            print("Invalid username or password.")
    
    elif action == 'signup':
        while True:
            new_username = input("Enter a username: ")
            
            # Check if the username is already taken
            if not user_exists(new_username):
                break  # Username is available, so break out of the loop
            else:
                print("Username already taken, please choose another one.")
        
        new_password = input("Enter your password: ")
        
        # Add the new user to the database
        add_user_to_db(new_username, new_password)
        print(f"User {new_username} created successfully!")

# Close the database connection when done
conn.close()


