$(document).ready(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(document).ready(function() {
    $("#signInBtn").click(function(){
            $("#logBtn").children("i").removeClass("fa fa-sign-in fa-lg");
            $("#logBtn").children("i").addClass("far fa-user fa-lg");
    });
});

$(document).ready(function() {
    $("#sendMailBtn").click(function(){
        $("#thankYou").modal();
    });
});

$(document).ready(function() {
    $("#reserveBtn").click(function(){
        $("#reservationConfirmation").modal();
    });
});