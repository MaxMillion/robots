var Leap = require('leapjs');

Leap.loop(function(frame){

  if (frame.hands[0]) {
  	console.log('hand position:', frame.hands[0].palmPosition)
  	//console.log('yaw is:', frame.hands[0].yaw());
  }

  if (frame.pointables && frame.pointables.length >= 2) {
      var distance = frame.pointables[1].tipPosition[0] - frame.pointables[0].tipPosition[0]
      //console.log(frame.pointables.length);
      //console.log('Pointer distance: ', distance)
    }
});