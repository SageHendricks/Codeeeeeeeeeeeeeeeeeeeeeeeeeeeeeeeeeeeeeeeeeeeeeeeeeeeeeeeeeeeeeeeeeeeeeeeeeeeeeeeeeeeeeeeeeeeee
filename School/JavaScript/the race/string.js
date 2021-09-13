let raceNumber = Math.floor( Math.random() * 1000 );
var regesteredStatus = true;
var runnerAge = 124;

if( runnerAge >= 18 && regesteredStatus == true ){
  raceNumber += 1000;
}

if( runnerAge >= 18 && raceNumber > 1000 ){
  console.log('Racer', raceNumber, ', your race time is 9:30 am, thank you for racing with us!^^ good luck!!');
} else if ( runnerAge >= 18 ){
  console.log('Racer', raceNumber, ', your race time is 11:00 am, thank you for racing with us!^^ good luck!!');
} else if ( runnerAge < 18 ){
  console.log('Racer', raceNumber, ', your race time is 12:30 pm, thank you for racing with us!^^ good luck!!');
}

