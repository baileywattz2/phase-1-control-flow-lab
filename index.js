
function scuberGreetingForFeet(distance){
  let greeting 

  if(distance<=400){
    greeting='This one is on me!';
  }else if(distance>2000 && distance<2500){
    greeting='I will gladly take your thirty bucks.';
  }else if(distance>2500){
    greeting='No can do.';
  }
  return greeting
}

function ternaryCheckCity(city){
  return city==='NYC' ? 'Ok, sounds good.': 'No go.'
   }



function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return('Thank you so much.');
      break;
    case 'not as generous':
      return('Thank you.');
      break;
    default:
    case 'Anything else':
      return('Bye.')
      break;

  }
} 