
var time = moment().format("dddd, MMMM Do")
$("#currentDay").text(time);

var keyPresses = []; //Store user keypresses in an array

// Create an object for all timeblocks text.
const timeBlocks = [];

// jQuery UI Selectable 
  $( function() {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );

          // update timeBlockObject
          console.log(index);
          // updateTimeblock (index, `My Task${index}`);
        });
      }
    });
  } );



  // Function that captures users key strokes in a variable, 
   document.addEventListener("keypress", keyPressAction);

  // Function that displays them in the time block <li>
      function keyPressAction(event) {
        keyPresses.push(event.key);
        document.querySelector(".ui-selected").innerHTML = keyPresses.join('');
      }




 // Function to create timeBlock object
 function updateTimeblock (index, text) {
 
 timeBlocks = {
  index: index,
  text: text,
 }
 console.log(timeBlocks);
  
}
 
 
  // Function that saves timeblock text to Localstorage


  // Function that retrieves timeblock text from Local Storage and displays in timeblock



  // Function that switches timeblock css id depending on time of day
    // Previous: if timeblock time (rounded to whol number) is less than current time
    // Current: if timeblock time is between current time