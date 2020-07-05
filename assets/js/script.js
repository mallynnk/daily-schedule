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
$(".saveBtn").on("click", function() {
    var eventInput = $(this).siblings("textarea").val().trim();
    var hour = $(this).siblings("textarea").attr("id");
    localStorage.setItem(hour, eventInput);         
})


$("#row8").val(localStorage.getItem("row8"));
$("#row9").val(localStorage.getItem("row9"));
$("#row10").val(localStorage.getItem("row10"));
$("#row11").val(localStorage.getItem("row11"));
$("#row12").val(localStorage.getItem("row12"));
$("#row1").val(localStorage.getItem("row1"));
$("#row2").val(localStorage.getItem("row2"));
$("#row3").val(localStorage.getItem("row3"));
$("#row4").val(localStorage.getItem("row4"));
$("#row5").val(localStorage.getItem("row5"));


//color code time blocks based on past, present or future (in day)
// for (var i = 1; i <= 12; i++) {
//     var inputTime = $("#" + i + "row").attr("data-time");
//     var inputTimeInt = parseInt(inputTime);
//     console.log(currentTimeInt);

//  if (currentTimeInt === inputTimeInt) {
//      $("#" + i + "row").addClass("present");
//  }

// if (currentTimeInt > inputTimeInt) {
//     $("#" + i + "row").addClass("past");
//  }

//  if (currentTimeInt > inputTimeInt) {
//     $("#" + i + "row").addClass("future");
//  }
// }

for (var i = 1; i <= 12; i++) {
    var inputTime = $("#" + "row" + i).attr("data-time");
    var inputTimeInt = parseInt(inputTime);
    console.log(currentTimeInt);

    if (currentTimeInt === inputTimeInt) {
        $("#" + "row" + i).removeClass("");
        $("#" + "row" + i).addClass("present");
    }

    if (currentTimeInt > inputTimeInt) {
        $("#" + "row" + i).removeClass("");
        $("#" + "row" + i).addClass("past");
    }
    if (currentTimeInt > inputTimeInt) {
        $("#" + "row" + i).removeClass("");
        $("#" + "row" + i).addClass("future");
    }
}

