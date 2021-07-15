// close button to connect to Webside 

$(document).ready(function () {
    function showModel() {
        $('#popup').show();
        // $('html body').css('overflow','hidden');
    }

    function closeModel() {
        $('#popup').hide();
    }

    setTimeout(showModel, 3000);

    $('#close').click(function () {
        closeModel();
    })
});


$(document).ready(function () {
    function showModel() {
        $('#popup').show();
    }

    function closeModel() {
        $('#popup').hide();
    }

    setTimeout(showModel, 3000);

    $('#start-btn').click(function () {
        closeModel();
    })
});

// preW and Next Button Work

var visibleDiv = 0;

function showDiv() {
    $(".assistant_box").hide();
    $(".assistant_box:eq(" + visibleDiv + ")").show();
}
showDiv()

function showNext(para) {
    if (visibleDiv == $(".assistant_box").length - 1) {
        visibleDiv = 0;
    } else {
        visibleDiv++;
    }
    setImage(para)
    showDiv();
}

function showPrew(para) {
    if (visibleDiv == 0) {
        visibleDiv = $(".assistant_box").length - 1;
    } else {
        visibleDiv--;
    }
    setImage(para)
    showDiv();
}

var images = ['Assistant1.png', 'Assistant2.png', 'Assistant3.png', 'Assistant4.png', 'Assistant5.png', 'Assistant6.png', 'Assistant7.png'];
// var i = 0; //Current Image Index
function setImage(para) {
    document.getElementById("image_slider").src = "img/" + para;
}