var events = JSON.parse(localStorage.getItem("eventsList")) || [];
var currentTimeInt = moment().hour();
var saveBtn = $(".saveBtn");


// display current date at top of page
const now  = moment().format("dddd MMMM Do YYYY");
$("#currentDay").text(now)

// Set data attributes to each hour input element
$("#row8").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
$("#row9").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
$("#row10").attr("data-time", moment("10:00am", "h:mm a").format("HH"));
$("#row11").attr("data-time", moment("11:00am", "h:mm a").format("HH"));
$("#row12").attr("data-time", moment("12:00pm", "h:mm a").format("HH"));
$("#row1").attr("data-time", moment("1:00pm", "h:mm a").format("HH"));
$("#row2").attr("data-time", moment("2:00pm", "h:mm a").format("HH"));
$("#row3").attr("data-time", moment("3:00pm", "h:mm a").format("HH"));
$("#row4").attr("data-time", moment("4:00pm", "h:mm a").format("HH"));
$("#row5").attr("data-time", moment("5:00pm", "h:mm a").format("HH"));


// save user input to localStorage
$(".saveBtn").on("click",function() {
    var eventInput = $(this).siblings("textarea").val().trim();
    console.log($(this).siblings("textarea").attr("id"));

    var hour = $(this).siblings("textarea").attr("id");
    localStorage.setItem(hour, eventInput);
})

// Set data attributes to each hour input element
$("#row8").val(localStorage.getItem("row8"));
$("#row8").val(localStorage.getItem("row9"));
$("#row8").val(localStorage.getItem("row10"));
$("#row8").val(localStorage.getItem("row11"));
$("#row8").val(localStorage.getItem("row12"));
$("#row8").val(localStorage.getItem("row1"));
$("#row8").val(localStorage.getItem("row2"));
$("#row8").val(localStorage.getItem("row3"));
$("#row8").val(localStorage.getItem("row4"));
$("#row8").val(localStorage.getItem("row5"));



//color code time blocks based on past, present or future (in day)
for (var i = 1; i <= 12; i++) {
    var inputTime = $("#" + i + "Row").attr("data-time");
    var inputTimeInt = parseInt(inputTime);
    console.log(currentTimeInt);

 if (currentTimeInt === inputTimeInt) {
     $("#" + i + "Row").addClass("present");
 }

if (currentTimeInt > inputTimeInt) {
    $("#" + i + "Row").addClass("past");
 }

 if (currentTimeInt > inputTimeInt) {
    $("#" + i + "Row").addClass("future");
 }
}



//when i refresh, tasks are saved