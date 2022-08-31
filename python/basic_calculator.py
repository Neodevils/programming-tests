# basito-py - A simple Python3 script to create a basic calculator

# Importing the required modules
import sys
import os

# Asking the user for the first number
num1 = input("Enter the first number: ")

# Asking the user for the second number
num2 = input("Enter the second number: ")

# Asking the user for the operation
operation = input("Enter the operation: ")

# Checking if the user entered a valid operation
if operation == "+" or operation == "-" or operation == "*" or operation == "/" or operation == "%" or operation == "**":

	# Checking if the user entered a valid operation
	if operation == "+":

		# Adding the two numbers
		result = float(num1) + float(num2)

		# Printing the result
		print("The result is: " + str(result))

	elif operation == "-":

		# Subtracting the two numbers
		result = float(num1) - float(num2)

		# Printing the result
		print("The result is: " + str(result))

	elif operation == "*":

		# Multiplying the two numbers
		result = float(num1) * float(num2)

		# Printing the result
		print("The result is: " + str(result))

	elif operation == "/":

		# Dividing the two numbers
		result = float(num1) / float(num2)

		# Printing the result
		print("The result is: " + str(result))

	elif operation == "%":

		# Getting the remainder of the two numbers
		result = float(num1) % float(num2)

		# Printing the result
		print("The result is: " + str(result))

	elif operation == "**":

		# Getting the power of the two numbers
		result = float(num1) ** float(num2)

		# Printing the result
		print("The result is: " + str(result))

# If the user entered an invalid operation
else:

	# Printing an error message
	print("Invalid operation!")

	# Exiting the script
	sys.exit()

# Asking the user if they want to use the calculator again
again = input("Do you want to use the calculator again? (y/n): ")

# Checking if the user wants to use the calculator again
if again == "y":

	# Restarting the script
	os.system("python3 basic_calculator.py")

# If the user doesn't want to use the calculator again
else:

	# Exiting the script
	sys.exit()

# End of script