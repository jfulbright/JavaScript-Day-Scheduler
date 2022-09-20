$(document).ready(function init() {
  // call functions to initialize app
  SetTimeBlockStyle()
  getSavedEvents ()
})

// Declare variable with current time:
var currentDate = moment().format("dddd, MMMM Do");
let currentHour = moment().format("HH");
$("#currentDay").text(currentDate);



// function to display styles based on past, present and future time blocks
function SetTimeBlockStyle() {
  $(".time-div").each(function() {
    var timeDiv = $(this).attr("id");
    if (currentHour > timeDiv) {
      $(this).find( "textarea" ).addClass("past");
    } else if (currentHour < timeDiv) {
      $(this).find( "textarea" ).addClass("future");
    } else if (currentHour == timeDiv) {
      $(this).find( "textarea" ).addClass("present");
    }
    
  })
}


// function to save event description on save button click
$( ".saveBtn" ).click(function() {
  var timeBlockID = $(this).parent().attr("id");
  var timeBlockDesc = $(this).siblings(".time-block").val();
  // set local storage 
  localStorage.setItem(timeBlockID, timeBlockDesc);
});


// display saved schedule events from localStorage
function getSavedEvents (){
  $(".time-div").each(function() {
  var timeDiv = $(this).attr("id");
  // get event description from local storage using div ID as key
  var localTimeID = localStorage.getItem(timeDiv);
  
  $(this).find( "textarea" ).text(localTimeID);

  });
} 