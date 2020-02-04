// Night and Day Mode

var quote = document.getElementById("quotes");
var quoteBtn = document.getElementById("quote-btn");

$(document).ready(function() {
    $("#night-mode-js").click(function() {
        $(".quote-container, .quote, .btn").toggleClass("night-mode");
        if ($('#night-mode-js').hasClass('night-mode')) {
            $('#night-mode-js').html('Night-mode');
        } else {
            $('#night-mode-js').html('Day-mode');
        }
    });
});

//End of Night and Day Mode


//Editable Drag, Drop, Add and Remove Function

var html = '<tr><td><input type="text" name="name"></td><td><button class="remove">-</button></td></tr>';

$(function() {

    $('tbody').sortable();

    $('#add-task').click(function() {
        var x = document.getElementById("tables").rows.length;
        if (x > 8) {
            return alert(" Daily Task Limit ");

        }

        $('tbody').append(html);

    });

    $(document).on('click', '.remove', function() {
        $(this).parents('tr').remove();
    });

});

// End of Editable Drag, Drop, Add and Remove Function

// Date Function

function renderTimeClock() {
    var myDate = new Date();
    var year = myDate.getYear();
    if (year < 1000) {
        year += 1900
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,");
    var monthArray = new Array("JAN,", "FEB,", "MAR,", "APR,", "MAY,", "JUN,", "JULY,", "AUG,", "SEP,", "OCT,", "NOV,", "DEC,");

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM"
    }
    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    var myClock = document.getElementById("clockDisplay");
    // myClock.textContent = "" + dayArray[day] + " " + dayM + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s + " " + session;
    myClock.innerText = "" + dayArray[day] + " " + dayM + " " + monthArray[month] + " " + year + " | " + h + ":" + m + ":" + s + " " + session;

    setTimeout("renderTimeClock()", +1000);

}

renderTimeClock();

// End of Date Function