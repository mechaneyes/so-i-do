// Keep track of our socket connection
var socket;
var x, y, z;
var red, green, blue;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(11, 98, 145);
  background(0);

  

  // Start a socket connection to the server
  socket = io('http://localhost');



  // This does the work of actually painting the dots to the screen
  socket.on('painter',

    // When we receive data
    function(data) {
      console.log("Received: " + data.x + " " + data.y);

      // Draw a circle
      fill(data.red, data.green, data.blue);
      noStroke();
      ellipse(data.x, data.y, data.z, data.z);

    }
  );




  // Paint the history of previous stokes to the 
  // screen when a new user connects. No blank canvas.

  socket.on('connect', function(history) {
    console.log('connected');


    socket.on('new painter', function(data){
      console.log('data: ' + data);


      // console.log('data.message[i].x: ' + data.message[i].x);


      data.forEach( function (arrayItem) {
      
        console.log('arrayItem.x : ' + arrayItem.x);
        // console.log('arrayItem.y : ' + arrayItem.y);

        fill(arrayItem.red, arrayItem.green, arrayItem.blue);
        noStroke();
        ellipse(arrayItem.x, arrayItem.y, arrayItem.z, arrayItem.z);

      });




    });

  });





  // Counting and emitting number of simultaneous users

  socket.on('counter', function(data){
    console.log('Num Painters: ' + data.message);
    $('#numUsers').html(data.message + " Painters");
  });
}







function draw() {

}




function touchStarted() {
    
    diameter = random(20, 180);

    red = random(255);
    green = random(255);
    blue = random(255);

    fill(red, green, blue);
    noStroke();

    ellipse(touchX, touchY, diameter, diameter);
    senddeets(touchX, touchY, diameter, red, green, blue);

}


function mousePressed() {

    diameter = random(20, 180);

    red = random(255);
    green = random(255);
    blue = random(255);

    fill(red, green, blue);
    noStroke();

    ellipse(mouseX, mouseY, diameter, diameter);
    senddeets(mouseX, mouseY, diameter, red, green, blue);

}








// Function for sending to the socket

function senddeets(xpos, ypos, diam, red, green, blue) {
  // We are sending!
  console.log("dot details: " + xpos + " " + ypos + " " + diam);
  
  // Create an object
  var data = {
    x: xpos,
    y: ypos,
    z: diam,
    red: red,
    green: green,
    blue: blue
  };


  // Send that object to the socket
  socket.emit('painterPusher',data);

  socket.emit('counter',data);

}

















