import random
import os

clear = lambda: os.system('cls')
clear()

restraunts = [['House of China','Imperial Garden','Main Moon','China Star'],['Hanami Express','Asuka Japanese Cuisine','izumi Japanese Restaurant','Mizu Sushi'],['Cafe India','Bombay Curry And Grill','Nick&Mintu da dhaba','Jaipur Junction'],['Bella Napoli Pizza & Pasta','Gionino\'s Pizzeria','Cocca\'s Pizza','Inner Circle Pizza Canfield']]

def main ():
    user_choice = input('Which would you like to eat\n(1)Chinese\n(2)Japanese\n(3)Indian\n(4)Pizza\n(5)I Don\'t Know\n')
    if user_choice <= str(len(restraunts)) and user_choice > '0':
        x = random.choice(restraunts[int(user_choice) - 1])
    elif user_choice == str(len(restraunts) + 1):
        x = random.choice(restraunts[random.randrange(0, len(restraunts), 1)])
    else:
        clear()
        print('Please select a real option')
        main()
    print(x)
main()