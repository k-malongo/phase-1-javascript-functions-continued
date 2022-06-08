// code your solution here
function saturdayFun(fun="roller-skate"){

    return `This Saturday, I want to ${fun}!`
}
saturdayFun()
function mondayWork(plan='go to the office') {
    return `This Monday, I will ${plan}.`
   }
   mondayWork('This Monday, I will work from home.')

   function wrapAdjective(adjective){
    const specialChar=function(char){
        return `You are ${adjective}${char}${adjective}!`
    }
    return specialChar

   }
   wrapAdjective('*')