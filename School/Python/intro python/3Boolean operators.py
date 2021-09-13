import getpass as no

def check_boolean ():
    print(10 > 9)
    print(10 == 9)
    print(10 < 9)
#check_boolean()

def boolean_condition ():
    username = input('please input a username: ')
    password = no.getpass('please input a password: ')
    if username == 'admin' and password == 'ninjacoder':
        print('youre in')
    else:
        print('go away')
        try_again = input('would you like to try again? y or n: ')
        if try_again == 'y':
            boolean_condition()
        else:
            print('have a good day')
boolean_condition()