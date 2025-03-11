# 🌟 Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat ("choclate", 3)
cat2 = Cat ("milka", 2)
cat3 = Cat ("leo", 1)

def find_oldest_cat(*cats):
    return max(cats, key=lambda cat: cat.age)

oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"oldest cat name: {oldest_cat.name} , and is now: {oldest_cat.age}")

# 🌟 Exercise 2 : Dogs

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
        
    def bark(self):
        print(f"{self.name} woof!")
    
    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")
        
davids_dog = Dog ("Rex", 20)
print(f"David's dog: Name - {davids_dog.name}, Height - {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog ("Teacup", 20)
print(f"Sarah's dog: Name - {sarahs_dog.name}, Height - {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"the bigger dog: {davids_dog.name}")
else:
    print(f"the bigger dog: {sarahs_dog.name}")
    
# 🌟 Exercise 3 : Who’s the song producer?

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
        
    def sing_me_a_song (self):
        for line in self.lyrics:
            print(line)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    
    def add_animal (self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} added to {self.name} zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")
    
    def get_animals(self):
        if self.animals:
            print("Animals in the zoo:")
            for animal in self.animals:
                print(animal)
        else:
            print("There are no animals in the zoo.")
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} sold")
        else:
            print(f"{animal_sold} is not in the zoo.")
            
    def sort_animals (self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)
        
        return grouped_animals
    
    def get_groups(self):
        grouped_animals = self.sort_animals()
        print("Animals grouped by their first letter:")
        for letter, animals in grouped_animals.items():
            print(f"{letter}: {', '.join(animals)}")
        
zoo = Zoo("The Great Zoo")

zoo.add_animal("Giraffe")
zoo.add_animal("Elephant")
zoo.add_animal("Zebra")
zoo.add_animal("Bear")
zoo.add_animal("liom")
zoo.add_animal("tiger")
zoo.add_animal("Cat")
zoo.add_animal("Dog")

zoo.get_animals()

zoo.sell_animal("Elephant")

zoo.get_animals()

zoo.get_groups()