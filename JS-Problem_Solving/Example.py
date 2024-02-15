import math

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius**2
    
    def circumference(self):
        return 2 * math.pi * self.radius

# Test the class
circle1 = Circle(3)
print("Area:", circle1.area())  # Output: ~28.27
print("Circumference:", circle1.circumference())  # Output: ~18.85

class Employee:
    def __init__(self, name, age, salary):
        self.name = name
        self.age = age
        self.salary = salary
    
    def display_details(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Salary:", self.salary)
    
    def give_raise(self):
        self.salary *= 1.05  # 5% annual raise

# Test the class
employee1 = Employee("John", 30, 50000)
employee1.display_details()
employee1.give_raise()
print("After raise:")
employee1.display_details()
