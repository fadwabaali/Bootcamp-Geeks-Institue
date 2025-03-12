# 🌟 Exercise 3 : Dogs Domesticated

from Exercise1 import Dog

import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained
        
    def train (self):
        self.bark()
        self.trained = True
        
    def play(self, *args):
        dog_names = ', '.join(dog.name for dog in args)
        return f"{dog_names} all play together"
    
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            return random.choice(tricks)
        else:
            return f"{self.name} is not trained "
    
dog1 = PetDog("Rokkie", 5, 15)
dog2 = PetDog("simsim", 7, 20)
dog3 = PetDog("Leo", 2, 50)

print(dog1.train())
print(dog1.play(dog2, dog3))

print(dog1.do_a_trick())

dog4 = PetDog("mol", 3,18)
print(dog4.do_a_trick())
