
// Declare variable with current time:
var time = moment().format("dddd, MMMM Do");
let currentHour = moment().format("HH");
$("#currentDay").text(time);

// Create an object to store timeblock attributes






  

 
 
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