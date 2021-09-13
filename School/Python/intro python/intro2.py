greeting = 'hello there young one,  welcome to narnia. what is to your name?'

def the_intro():
    print(greeting)
    char_name = input('please enter your name: ')
    print('It is nice to have you here ' + char_name + '. walk with mre as i tell you a story.')

def math_addition():
    x = float(input('please input your first number to add: '))
    y = float(input('please input your second number to add: '))
    print(f'{str(x)} + {str(y)} = {str(x + y)}')

math_addition()