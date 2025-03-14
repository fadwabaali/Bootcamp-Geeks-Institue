class Circle :
    def __init__(self, radius, diameter):
        self.radius = radius
        self.diameter = diameter
        
    def circle_area(self):
        return 3.14 * (self.radius ** 2)
    
    def __str__(self):
        return f"Circle with radius {self.radius} and diameter {self.diameter} and area {self.circle_area():.2f}"
    
    def __add__(self, other_circle):
        return Circle(self.radius + other_circle.radius, self.diameter + other_circle.diameter)
    
    def __eq__(self, other_circle):
        return self.radius == other_circle.radius 
    
    def __gt__(self, other_circle):
        return self.radius > other_circle.radius
        
circle1 = Circle(5, 10)
circle2 = Circle(5, 10)

print(circle1)
print(circle2)

circle3 = circle1 + circle2

print(circle3)

print(circle1 == circle2)

print(circle1 > circle2)
