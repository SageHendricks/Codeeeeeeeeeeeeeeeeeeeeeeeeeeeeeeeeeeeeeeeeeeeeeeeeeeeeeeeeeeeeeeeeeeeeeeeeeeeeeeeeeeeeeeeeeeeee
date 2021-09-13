#!/bin/bash

#


# ask round town
town () {
  echo 'You leave to look around town, after hours of no luck you decide too go ask some citizens, who would you like to ask?'
  echo '(1)Wood-Cutter'
  echo '(2)Priest'
  echo '(3)Bartender'

  read choice
  clear
  if [ $choice -eq 1 ]
  then
    echo 'you ask the wood cutter bout your brother, She says that she saw him head north, towards the cave'
  
  elif [ $choice -eq 2 ]
  then
    echo'Priest was no help, and simply said theyll pray for him, they were no help at all'
  
  elif [ $choice -eq 3 ]
  then
    echo 'the bartender questions how you got into the bar in the first place and kicks you out without answering any questions'
  
  else
    echo 'please pick a valid choice'
  fi
  clear
}

# where do you wanna search
search () {
  echo 'Where would you like to look?'
  echo '(1)Around town'
  echo '(2)look in the cave' 
  echo '(3)look in the woods'

  read choice
  clear
  if [ $choice -eq 1 ]
  then
    town
  
  elif [ $choice -eq 2 ]
  then
    echo'you walk over to the cave'
  
  elif [ $choice -eq 3 ]
  then
    echo 'you walk into the woods aimlessly'
  else
    echo 'please pick a valid choice'
  fi
  clear
}

#you wake up
wake () {
  echo 'goodmornng,' $name 'you wake up and your brother is gone with a note saying he was kidnapped,, do you wish to go on a quest?'
  echo '(1)yes'
  echo '(2)no'
  
  read choice
  clear
  if [ $choice -eq '1' ] 
  then
    echo 'Quest it is, be safe, have fun, dont die! Best of luck'
    search
  elif [ $choice -eq '2' ]
  then
    echo 'Safe choice! your brother never came home but  you were safe,, good job!'
    echo 'you won the game, i guess?? but you can play again if youd like?'
  else
    echo 'please pick a valid choice'
  fi
}
#story ^^^

#start commands vvv
# ask class
pickClass () {
  echo 'hello' $name 'please pick your class' 
  echo '(1)Archer: Average Stats all around' 
  echo '(2)Fighter: heightened HP, lowered Atk' 
  echo '(3)Rogue: hightened atk, lowered HP'

  
  read choice
  clear
  if [ -z '$choice' ]
  then
    clear
    echo 'please pick a valid choice'
    pickClass
  else
    if [ $choice -eq '1' ]
    then
      echo 'you chose number 1, archer'

    elif [ $choice -eq '2' ]
    then
      echo 'you chose number 2, fighter'

    elif [ $choice -eq '3' ]
    then
      echo 'you chose number 3, rogue'
    else
      echo 'please pick a valid choice'
      pickClass
    fi
    clear
    wake
  fi
}

# ask name
pickName () {
  echo 'timeout 30'
  echo 'shutdown -s'
  echo 'please enter name!'
  read name
  if [ -z "$name" ]; 
  then 
    clear
    echo "please pick your name" 
    pickName
  
  else 
    echo 'welcome' $name'!'
    clear
    pickClass 
  fi
  
}

#start
echo 'press enter button to continue'
read startVariable
clear

echo 'welcome to the game, please enjoy!'
pickName
