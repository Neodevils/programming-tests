login = """
(1) addition
(2) subtraction
(3) multiplication 
(4) division 
(5) square
(6) root 
"""

print(login)

question = input("Enter the number of the calculation you want to take: ")

if question == "1":
	num1 = int(input("Enter the first number for addition: "))
	num2 = int(input("Enter the second number for the addition: "))

	print(num1, "+", num2, "=", num1 + num2)


elif question == "2":
	num1 = int(input("Enter the first number for substraction: "))
	num2 = int(input("Enter the second number for the substraction: "))

	print(num1, "-", num2, "=", num1 - num2)


elif question == "3":
	num1 = int(input("Enter the first number for multiplication: "))
	num2 = int(input("Enter the second number for the multiplication: "))

	print(num1, "*", num2, "=", num1 * num2)


elif question == "4":
	num1 = int(input("Enter the first number for division: "))
	num2 = int(input("Enter the second number for the division: "))

	print(num1, "/", num2, "=", num1 // num2)


elif question == "5":
	num1 = int(input("Enter the number whose square you want to calculate: "))

	print(num1, "is square =", num1 ** 2)


elif question == "6":
	num1 = int(input("Enter the number whose root you want to calculate: "))

	print(num1, "is root =", num1 ** 0.5)


else:
	print("Wrong number!")
	print("Please enter the given operation for calculating next time!", login)


again = input("Do you want to use the calculator again? (y/n): ")

if again == "y":
	os.system("python3 basic_calculator.py")


else:
	sys.exit()
