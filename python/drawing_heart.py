import turtle

turtle.bgcolor("black")
turtle.pensize(2)
turtle.speed(0)
turtle.color("#fcbfcb")


def curve():
    i = 1
    while i >= 0:
        turtle.right(1)
        turtle.forward(1)
        i = i + 1


turtle.begin_fill()
turtle.left(140)
turtle.forward(111.65)
curve()
turtle.done()
