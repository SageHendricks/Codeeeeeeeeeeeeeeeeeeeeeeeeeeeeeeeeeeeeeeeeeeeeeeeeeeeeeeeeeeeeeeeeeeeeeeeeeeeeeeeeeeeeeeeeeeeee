import random as r
import sys
import os
sys.setrecursionlimit(2000000)

correct = r.randrange(1,101)
guess_list = []

clearConsole = lambda: os.system('cls' if os.name in ('nt', 'dos') else 'clear')

def guess_loop () :
    global guess_list
    guess = r.randrange(1,101)
    if not guess == correct :
        guess_list.append(str(guess))
        for x in guess_list :
            if guess == x :
                guess_list.pop()
                guess_loop () 
        guess_loop ()
    clearConsole()
    print ("I guessed it in " + str(len(guess_list)) + " guesses!! \n" + "I Guessed: " + ", ".join(guess_list) + "\nThe correct guess was " + str(correct))
guess_loop()