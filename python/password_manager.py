master_pwd = input("What is your master password? ")


def view():
    with open("python\password.txt", 'r') as f:
        for line in f:
            data = line.rstrip()
            user, password = data.split("|")
            print("Username:", user, "| Password:", password)


def add():
    name = input("Account Name: ")
    pwd = input("Account Password: ")

    with open("python\password.txt", 'a') as f:
        f.write(name + "|" + pwd + "\n")


while True:
    mode = input("Please pick a type to view or add password (view/add)? ")

    if mode == "q":
        break

    if mode == "view":
        view()

    elif mode == "add":
        add()
    else:
        print("Invalid input has given.")
