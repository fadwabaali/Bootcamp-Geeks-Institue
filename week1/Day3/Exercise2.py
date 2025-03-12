# Exercise 1 : Geometry

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def perimeter(self):
        return 2 * 3.14 * self.radius
    
    def area(self):
        return 3.14 * (self.radius ** 2)
    
    def definition(self):
        print("A circle is a set of points in a plane that are equidistant from a given point, called the center.")

circle = Circle (7)

print("Perimeter of the circle:", circle.perimeter())
print("Area of the circle:", circle.area())

circle.definition()
    
# Exercise 2 : Custom List Class

class MyList:
    def __init__(self, letters):
        self.letters = letters
        
    def reverseList(self):
        return self.letters[::-1]
    
    def sortedList(self):
        return sorted(self.letters)
    
    def randomList(self):
        import random
        random_num = []
        
        for _ in range(len(self.letters)):
            random_num.append(random.randint(0,50))
        
        return random_num

    
    
mylist = MyList(['a', 'b', 'c', 'd', 'e'])

print("Reversed List:", mylist.reverseList())

print("Sorted List:", mylist.sortedList())

print("Random List:", mylist.randomList())


# Exercise 3 : Restaurant Menu Manager
        