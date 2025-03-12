# Exercise 1: Bank Account

class BankAccount:
    def __init__(self, balance=0, username="", password=""):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False
        
    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise ValueError("Authentication failed: Incorrect username or password.")
        
    def deposit(self, amount):
        if not self.authenticated:
            raise ValueError("Authentication required")
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self.balance += amount
    
    def withdraw(self, amount):
        
        if not self.authenticated:
            raise ValueError("Authentication required")
        if amount <= 0:
            raise ValueError("withdraw must be positive")
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
    
    def get_balance(self):
        if not self.authenticated:
            raise ValueError("Authentication required")
        return self.balance
    
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0, username="", password=""):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance
        
    def withdraw(self, amount):
        if not self.authenticated:
            raise ValueError("Authentication required")
        if amount <= 0:
            raise ValueError("Withdraw must be positive")
        if self.balance - amount < self.minimum_balance:
            raise ValueError("Insufficient funds or minimum balance not met")
        self.balance -= amount
        
class ATM :
    def __init__(self, account_list, try_limit=2):
        if not isinstance(account_list, list) or not all(isinstance(acc, (BankAccount, MinimumBalanceAccount)) for acc in account_list):
            raise ValueError("account_list must be a list of BankAccount or MinimumBalanceAccount instances.")
        if not isinstance(try_limit, int) or try_limit <= 0:
            raise ValueError("try_limit must be a positive integer.")
        
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
    
    def show_main_menu(self):
        while True:
            print("\nATM Menu:")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ")
            
            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid option. Please try again.")


account = BankAccount(100, "fadwa", "fadwa123")

account.authenticate("fadwa", "fadwa123")
account.deposit(50)
account.withdraw(30)

print(account.get_balance()) 

min_account = MinimumBalanceAccount(100,20, "fifi", "fifi123")
min_account.authenticate("fifi", "fifi123")
min_account.withdraw(50)

print(min_account.get_balance())
# min_account.withdraw(40)