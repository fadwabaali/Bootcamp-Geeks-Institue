class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}
        
    
    def add_animal(self, animal, number=1):
        
        if animal in self.animals:
            self.animals[animal] += number
        else:
            self.animals[animal] = number
            
    def get_info(self):
        
        output = f"{self.name}'s farm"
        
        for animal,number in self.animals.items():
            output += f"\n{animal} : {number}"
            
        output += f" E-I-E-I-0!"
        
        return output

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())