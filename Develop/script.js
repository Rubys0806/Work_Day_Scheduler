// Current Date
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

//Change timeblock colors
    //Current Hour
    var hourNOW = moment().hours();
    //var hourNOW = 11;

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