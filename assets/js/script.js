var events = JSON.parse(localStorage.getItem("eventsList")) || [];

// display current date at top of page
const now  = moment().format("MMMM Do YYYY");
$("#currentDay").text(now)


function renderevents(events) {
    //empties out the html
    $("events-to-add").empty();

    // Iterates over the 'list'
    for (var i = 0; i < events.length; i++) {
    // Creates a new variable 'toDoItem' that will hold a "<p>" tag
    // Sets the `list` item's value as text of this <p> element
    var addedevent = $("<p>");
    addedevent.text(events[i]);

    // Creates a button `toDoClose` with an attribute called `data-to-do` and a unique `id`
    var eventSave = $('saveBtn');
    eventSave.attr('saveB', i);

    addedevent = addevent.prepend(eventSave)

    // Adds 'toDoItem' to the To-Do List div
    $('#events-to-add').append(addedevent);


}
};

renderevents(events)


    $('#addevent').on('click', function(events) {
        events.preventDefault();

      // Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
        var addedevent = $("#textarea").val().trim()
        console.log(addedevent)

        // Add the new to-do to our local 'list' variable
        events.push(addedevent)
       

        // Update the to-dos on the page
        renderevents(events);

        // Save the to-dos into localStorage
        var eventsString = JSON.stringify(events)
        localStorage.setItem("eventsList", eventsString) 

        // Clear the textbox when done using `.val()`
        $("#textarea").val("")
      });

      $("saveBtn").on('click', function() {
        // Get the `id` of the button from its data attribute and hold in a variable called 'toDoNumber'
        var saveevent = $(this).attr("");

        // Delete the to-do with that `id` from our local `list` using `.splice()`
        events.splice(saveevent, 1);
        //
        // Update the to-dos on the page
        renderevents(events);

        // Save the to-dos into localStorage
        // We need to use JSON.stringify to turn the list from an array into a string
        var eventString = JSON.stringify(events)
        localStorage.setItem("eventsList", eventsString);
        //
      });







 // STOP building Time box portion of row


//color code time blocks based on past, present or future (in day)


//ability to enter event in time blocks

//when click "save" for a time block. text is saved to localStorage

//when i refresh, tasks are saved