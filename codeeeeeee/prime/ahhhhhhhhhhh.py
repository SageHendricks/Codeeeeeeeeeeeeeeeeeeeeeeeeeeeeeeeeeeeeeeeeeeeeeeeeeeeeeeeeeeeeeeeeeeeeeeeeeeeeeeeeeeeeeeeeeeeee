from math import floor
try:
    user_input = int(input ("input a number to check if its prime \n> "))
except ValueError:
   print("youre not nice :grumpy face: goodbye.")
else:
    output = "prime"
    for a in range(2, floor(pow(user_input,0.5))) :
        if (user_input % a) == 0:
            output = "not prime " + str(a)
            break
    print (output)
