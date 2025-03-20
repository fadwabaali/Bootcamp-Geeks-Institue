from menu_item_class import Menu_Item
from menu_managers_class import Menu_Managers

def show_user_menu():
    """Display the program menu and handle user input."""
    while True:
        print("\n--- Restaurant Menu Manager ---")
        print("V: View an Item")
        print("A: Add an Item")
        print("D: Delete an Item")
        print("U: Update an Item")
        print("S: Show the Menu")
        print("E: Exit")
        user_choice = input("Please choose an option: ").upper()

        if user_choice == 'V':
            view_item()
        elif user_choice == 'A':
            add_item_to_menu()
        elif user_choice == 'D':
            remove_item_from_menu()
        elif user_choice == 'U':
            update_item_from_menu()
        elif user_choice == 'S':
            show_restaurant_menu()
        elif user_choice == 'E':
            print("Here is the restaurant's menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice, please try again.")
def view_item():
    """View a single item from the menu."""
    item_name = input("Enter the name of the item to view: ")
    
    # Use Menu_Managers to fetch the item from the database
    item = Menu_Managers.get_by_name(item_name)
    
    if item:
        # Item found, display details
        print(f"\nItem: {item.name}\nPrice: {item.price}")
    else:
        # Item not found
        print(f"Item '{item_name}' not found in the menu.")

def add_item_to_menu():
    item_name = input("Enter the name of the item: ")
    item_price = float(input("Enter the price of the item: "))
    item = Menu_Item(item_name, item_price)
    item.save()
    print(f"{item_name} was added successfully.")

def remove_item_from_menu():
    """Ask the user to input the name of the item they want to remove."""
    item_name = input("Enter the name of the item to remove: ")
    item = Menu_Item(item_name, 0)
    item.delete()

def update_item_from_menu():
    """Ask the user for the item’s name and price to update."""
    item_name = input("Enter the name of the item to update: ")
    item_price = float(input("Enter the current price of the item: "))
    new_name = input("Enter the new name for the item: ")
    new_price = float(input("Enter the new price for the item: "))
    item = Menu_Item(item_name, item_price)
    item.update(new_name, new_price)

def show_restaurant_menu():
    """Show the entire restaurant menu."""
    items = Menu_Managers.all_items()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(f"Name: {item.name}, Price: {item.price}")
    else:
        print("The menu is currently empty.")

if __name__ == "__main__":
    show_user_menu()
