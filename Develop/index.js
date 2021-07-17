var currentDay = document.getElementById('currentDay')
currentDay.textContent = moment().format("dddd, MMM Do, YYYY")
var currentHour = moment().format('H')

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings("textarea").val()
        var timeBlock = $(this).parent().attr('id')
        localStorage.setItem(timeBlock, text)

    });

    $(".time-block").each(function () {
        var timeId = $(this).attr('id')
        if (parseInt(currentHour) === parseInt(timeId)) {
            $(this).find("textarea").addClass("present")
        }

        if (parseInt(currentHour) > parseInt(timeId)) {
            $(this).find("textarea").addClass("past")
        }

        if (parseInt(currentHour) < parseInt(timeId)) {
            $(this).find("textarea").addClass("future")
        }
    });

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));

})