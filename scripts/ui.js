
// sensor coordinates
var sensor_x = 400;
var sensor_y = 0;

// this gets polled and sent out via Socket.io
var MAX_DIST = 10000;
var current_dist = MAX_DIST;

var sensor_hz = 30;
var sensor_timeout_ms = Math.floor(1000 / sensor_hz);


jQuery(function() {

  var video = $('#platformvideo');
  video.removeAttr( 'controls' );

  var assignment_container = $('#assignment_container');
  var distance_gage = $('#distance_gage');
  var platform_state_gage = $('#platform_state_gage');

  assignment_container.mouseleave(function (e) {
    // distance goes off the charts!
    current_dist = MAX_DIST;
  });

  assignment_container.mousemove(function (e){
    var parentOffset = $(this).parent().offset();
    var posX = Math.floor(e.pageX - parentOffset.left);
    var posY = Math.floor(e.pageY - parentOffset.top);

    var dx = posX - sensor_x;
    var dy = posY - sensor_y;

    var dist = Math.round(Math.sqrt(dx*dx + dy * dy)) / 10;
    current_dist = dist;

    //console.log("Mouse x,y,D " + posX + " " + posY + " " + dist);

    distance_gage.text(dist +" cm");
  })

  // socket io stuff
  var socket = io.connect('http://localhost:4200');

 // send updates of the current distance in 30hz intervals
 setInterval(function(){
    socket.emit("sensorUpdate", current_dist);
    //console.log("Updating " + current_dist);
  }, sensor_timeout_ms);

  socket.on("extendPlatform", function(){
    // TODO: platform extend animation
    console.log("Extending Platform");
    video.get(0).pause();
    video.html('<source src="platform.mp4" type="video/mp4"></source>' );
    video.get(0).load();
    video.get(0).play();
    platform_state_gage.text("extended");

  })

  socket.on("retractPlaform", function(){
    console.log("Retracting Platform");
    video.get(0).pause();
    video.html('<source src="platform_rev.mp4" type="video/mp4"></source>' );
    video.get(0).load();
    video.get(0).play();
    platform_state_gage.text("retracted");
  })

});
