// Current Date
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

//Change timeblock colors
    //Current Hour
    var hourNOW = moment().hours();

   //Loops through each timeblock to see if its past, present or future
   $(".time-block").each(function () {
       var blockHour = parseInt(this.id);

       if (blockHour < hourNOW) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        }
        else if (blockHour === hourNOW) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        }
        else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        }
    })


//Saving text information for timeblocks
$(".saveBtn").on("click", function () {
    var text = $(this).closest('.time-block').children('.text').val();
    var time = $(this).closest('.time-block').attr('id'); 
    //console.log(text, time);
    localStorage.setItem(time, text);
})

//Loading saved text information for timeblocks
function loadSchedule () {
    $(".time-block").each(function () {
        var loadedText = localStorage.getItem(this.id);
        if (loadedText !== null) {
            $(this).closest('.time-block').children('.text').val(loadedText);
        }
    });

}

loadSchedule();
