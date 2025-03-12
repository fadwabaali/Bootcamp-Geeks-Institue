# 🌟 Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal_cat = Bengal(name="Simba", age=3)
chartreux_cat = Chartreux(name="Luna", age=2)
siamese_cat = Siamese(name="Milo", age=4)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()

# 🌟 Exercise 2 : Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    
    def bark(self):
        return f"{self.name} is barking\n"
    def run_speed(self):
        return (self.weight/self.age *10)
    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        
        if self_power > other_power:
            return f"{self.name} wins the fight with power {self_power}\n"
        else:
            return f"{other_dog.name} wins the fight with power {other_power}\n"
    
        
dog1 = Dog("Buddy", 5, 15)
dog2 = Dog("Max", 7, 20)
dog3 = Dog("Leo", 2, 50)

print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))

# Exercise 4 : Family
class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name
    
    def born (self, **kwargs):
        self.members.append(kwargs)
        print(f"{kwargs['name']} {self.last_name} was born Congrats\n")
        print(f"The new family members are: {self.members}")
    
    def is_18(self, name):
        for member in self.members:
            if member["name"] == name :
                return member["age"] >= 18
        return False
        
    def family_presentation(self):
        print(f"Family {self.last_name} presentation:")
        for member in self.members:
            print(f"{member['name']} is {member['age']} years old")
            
family = Family("Johnson")
family.members.append({'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False})
family.members.append({'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False})
family.born(name="James", age=5, gender="Male", is_child=True)

print(f"Is Michael over 18? {family.is_18('Michael')}")
print(f"Is James over 18? {family.is_18('James')}")

family.family_presentation()

# Exercise 5 : TheIncredibles Family

class TheIncrediblesFamily(Family):
    def __init__(self, last_name):
        super().__init__(last_name)
    
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    print(f"{member['name']}'s power: {member['power']}")
                    return
                else:
                    raise Exception(f"{member['name']} is not over 18 years old")
        print("Member not found")
    
    def incredible_presentation (self):
        print(f"Here is our powerful {self.last_name} family :")
        super().family_presentation()
        

incredibles_family = TheIncrediblesFamily("Incredibles")
incredibles_family.members.append({
    'name': 'Fadwa',
    'age': 18,
    'gender': 'Female',
    'is_child': False,
    'power': 'fly',
    'incredible_name': 'JettFly'
})
incredibles_family.members.append({
    'name': 'Abdo',
    'age': 26,
    'gender': 'male',
    'is_child': False,
    'power': 'read minds',
    'incredible_name': 'chamber'
})

incredibles_family.incredible_presentation()

incredibles_family.born(
    name="bouchra",
    age=0,
    gender="female",
    is_child=True,
    power="Unknown Power",
    incredible_name="BabyJack"
)

incredibles_family.incredible_presentation()

try:
    incredibles_family.use_power("Fadwa")
except Exception as e:
    print(e)

try:
    incredibles_family.use_power("bouchra")
except Exception as e:
    print(e)