import random
import sys 
import os

stories = [
    ["Today I went to my favorite Taco Stand called the ", ["Adjective"], " ", ["Animal"], ". Unlike most food stands, they cook and prepare the food in a ", ["Something you would ride in"], " while you ", ["Verb"], ". The best thing on the menu is the ", ["Color"], " ", ["Noun"], ". Instead of ground beef they fill the taco with ", ["Noun"], ", cheese, and top it off with a salsa made from ", ["Foods (plural)"], ". If that doesn't make your mouth water, then it' just like ", ["Person"], " always says: ", ["Saying"], "!"],
    ["Today a ", ["Occupation (a job)"], " named ", ["Noun"], " came to our school to talk to us about her job. She said the most important skill you need to know to do her job is to be able to ", ["Verb"], " around (a) ", ["Adjective"], " ", ["Noun"], ". She said it was easy for her to learn her job because she loved to ", ["Verb"], " when she was my age--and that helps a lot! If you're considering her profession, I hope you can be near (a) ", ["Adjective"], " ", ["Noun"], ". That's very important! If you get too distracted in that situation you won't be able to ", ["Verb"], " next to (a) ", ["Noun"], "!"],
    ["Say '", ["Food"], ",' the photographer said as the camera flashed! ", ["A Person"], " and I had gone to ", ["A Place"], " to get our photos taken today. The first photo we really wanted was a picture of us dressed as ", ["Animals"], " pretending to be a ", ["A Professional (like “Baker”)"], ". When we saw the proofs of it, I was a bit ", ["Feeling"], " because it looked different than in my head. (I hadn't imagined so many ", ["Things (plural)"], " behind us.) However, the second photo was exactly what I wanted. We both looked like ", ["Things (plural)"], " wearing ", ["A Piece of Clothing"], " and ", ["Verb (ending in “ing”)"], "--exactly what I had in mind!"],
]

def var_reset () :
    global story, output, value
    story = random.choice(stories)
    value = 0
    output = ""

def clear(): os.system('cls')

def play_again () :
    clear ()
    print (output)
    reset = input("Play Again? (y) yes or (n) no \n> ")
    if reset == "y" : 
        clear ()
        var_reset ()
        start ()
    elif reset == "n" :
        clear ()
        input ("goodbye, thanks for playing, press anything to continue")
        sys.exit ()
    else :
        play_again ()

def character_input (item) :
    global value, story
    temp_input = input(item + " : ")
    try :
        temp_input
    except TypeError :
        character_input(item)
    else :
        if not temp_input == "" : 
            story[value] = temp_input
            value += 1
            start ()
        character_input(item)

def start () :
    global value, output
    try :
        story[value]
    except IndexError :
        clear()
        for x in story :
            output = output + x
        print (output)
        play_again ()
    else :
        if isinstance(story[value], list) :
            character_input (story[value][0])
        value += 1
        start ()

var_reset ()
start ()