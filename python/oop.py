class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show(self):
        print(f"My name is {self.name} and I am {self.age} years old.")


class Cat(Pet):
    def __init__(self, name, age, color):
        super().__init__(name, age)
        self.color = color

    def meow(self):
        print("Meow")

    def show(self):
        print(
            f"My name is {self.name} and I am {self.age} years old and my color is {self.color}.")


class Dog(Pet):
    def bark(self):
        print("Woof")


p = Pet("Fido", 3)
p.show()
