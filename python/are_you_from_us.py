company = "Data Devils"

name = input("Welcome to " + company + ", customer!\nMay I know your name?\n")

if name.lower() == "neo" or name.lower() == "micha":
    evil_status = input("Are you evil?\n")

    if evil_status.lower() == "yes":
        print("Welcome back to Data Devils", name)
        exit()
    else:
        good_deeds = int(input("How many good deeds are you done today?\n"))

        if good_deeds < 4:
            print("You're evil, stay in c:")
        else:
            print("You're not evil, get out!")
else:
    print("You don't seemed like a dev or devil.")
