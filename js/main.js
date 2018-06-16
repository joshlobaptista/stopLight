//users will be able to see the stop light switch from green to yellow then to red and then reset back to green
//red light and green light will have the longest interval (time displayed)
//yellow light will have shortest time interval (time displayed)

// document
$(document).ready(function(){
var lights = ['green','yellow','red'];
var displayColor = 0;
  setInterval(stopLight, 1500)

  function stopLight(){
    if (displayColor === 0) {
      $('#greenLight').toggleClass('hidden')
      $('#walk').css('opacity',.01)
      $('#redLight').css('opacity', .01)
      lights[displayColor++]
    } else if (displayColor === 1) {
      $('#walk').css('opacity',.01)
      $('#greenLight').toggleClass('hidden')
      $('#yellowLight').toggleClass('hidden')
      lights[displayColor++]
    }else if (displayColor === 2){
      $('#redLight').css('opacity',1)
      $('#walk').css('opacity',.01)
      $('#yellowLight').toggleClass('hidden')
      $('#redLight').toggleClass('hidden')
      lights[displayColor++]
    }else {
      $('#walk').css('opacity',1)
      $('#redLight').css('opacity',1)
      displayColor = 0
    }
  }
});
//function for green light w/ interval method
//
// var greenFlash = setInterval(function(){
//   go = greenFlash
//
//
//   //toggle green light
//   $('#greenLight').toggleClass('greenLight')
// },500)
// //clear interval
//
// //function for yellow light w/ interval method
// var yellowFlash = setInterval(function(){
//
//   //toggle yellow light
//   $('#yellowLight').toggleClass('yellowLight')
// },1000)
// //clear interval
//
// //function for red light w/interval method
// var redFlash = setInterval(function(){
//   stop=redFlash
//   i
//   // toggle red light
//   $('#redLight').toggleClass('redLight')
// },1500)
//
//
// //clear interval
//
// })
//
//
// //create a condition where if red light is on, then the yellow and green lights are hidden
