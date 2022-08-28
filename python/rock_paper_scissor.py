import random

user_wins =  0
computer_wins = 0
draw = 0

options = ["rock", "scissor", "paper"]

while True:
	user_input = input("Please pick 'rock, scissor, paper' or Q to quit: ").lower()

	if user_input == "q":
		break

	if user_input not in options:
		continue

	random_number = random.randint(0, 2)
	computer_picked = options[random_number]
	print("Computer picked", computer_picked + ".")

	if user_input == "rock" and computer_picked == "scissor":
		print("You won!")
		user_wins += 1

	elif user_input == "scissor" and computer_picked == "paper":
		print("You won!")
		user_wins += 1

	elif user_input == "paper" and computer_picked == "rock":
		print("You won!")
		user_wins += 1

	elif user_input == computer_picked:
		print("Draw!")
		draw += 1

	else:
		print("You lost!")
		computer_wins += 1

print("You have won", user_wins, "times.")
print("Computer has won", computer_wins, "times.")
print("There was", draw, "draw matches.")
print("Goodbye!")
