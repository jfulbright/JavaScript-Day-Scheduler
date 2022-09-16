
// Declare variable with current time:
var time = moment().format("dddd, MMMM Do");
let currentHour = moment().format("HH");
$("#currentDay").text(time);

// Create an object to store timeblock attributes
var timeBlocks = {};

// jQuery UI Selectable Utilitie
  $( function() {
    $( "#selectable" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          result.append( " #" + ( index + 1 ) );

          // update timeBlockObject
          console.log(index);
          updateTimeblock (index, `My Task${index}`);

          // Function that captures users key strokes in a variable, 
          document.addEventListener("keydown", keyPressAction);

          // Declare an array to store user keypresses
          var keyPresses = [];

          // Function that pushes keys to array and displays in timeblock
              function keyPressAction(event) {
                
                keyPresses.push(event.key);
                document.querySelector(".ui-selected").innerHTML = keyPresses.join('');
              }

          // listener function for save button that passes index and keypresses to object 

        });
      }
    });
  } );



  




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





    //ToDo:
    // App Flow:
      // Selectable Function identifies timeBlock Index
      // Event listener captures keydown events
        // diplays on timeBlock
        // Saves in variable
      // Event listener on Save button:
        // Updates TimeEvent Block with index and keystroke vars. 
      // Pass timeBlock Index to 