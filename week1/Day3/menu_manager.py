class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten": True}
        ]
    
    def add_item(self,name, price, spice, gluten):
        new_dish = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }
        self.menu.append(new_dish)
        print(f"'{name}' has been added to the menu.")
        
    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"'{name}' has been updated in the menu.")
            else :
                print(f"'{name}' not found in the menu.")
                
    def remove_item(self, name):
        # Remove a dish from the menu
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"'{name}' has been removed from the menu.")
                print("Updated menu:", self.menu)
                return
        print(f"'{name}' is not in the menu. Unable to remove.")    
        

new_menu = MenuManager()
new_menu.add_item("Pizza", 20, "A", True)

new_menu.add_item("Soup", 10, "B", False)

new_menu.update_item("Salad", 20, "A", True)

new_menu.remove_item("French Fries")

new_menu.remove_item("Sushi")

