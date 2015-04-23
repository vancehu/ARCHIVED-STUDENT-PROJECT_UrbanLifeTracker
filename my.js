console.log(global.issueExpanded);
var verticalToolbarHandler = function () {
    if ($(document).scrollTop() < 100) {
        $('#navVertical').fadeOut(300);
    } else {
        $('#navVertical').fadeIn(300);
    }
    ;
};
verticalToolbarHandler();
$(document).scroll(verticalToolbarHandler);

$(document).ready(function (e) {
    if (global.lifeExpanded) {
        $("#life").find(".fa-expand").hide();
        $("#life").find(".fa-compress").show();
        $("#life").find(".content-expanded").show();
        $("#life").find(".content-compressed").hide();
    } else {
        $("#life").find(".fa-expand").show();
        $("#life").find(".fa-compress").hide();
        $("#life").find(".content-expanded").hide();
        $("#life").find(".content-compressed").show();
    }
    if (global.issueExpanded) {
        $("#issue").find(".fa-expand").hide();
        $("#issue").find(".fa-compress").show();
        $("#issue").find(".content-expanded").show();
        $("#issue").find(".content-compressed").hide();
    } else {
        $("#issue").find(".fa-expand").show();
        $("#issue").find(".fa-compress").hide();
        $("#issue").find(".content-expanded").hide();
        $("#issue").find(".content-compressed").show();
    }

});


$(".theme-block").click(function (e) {
    theme = $(e.currentTarget).attr("index");
    updateLocation(true);
});

var updateLocation = function (reload) {
    location.replace("http://localhost:63342/UrbanLifeTracker/index.html#/t" + global.theme + "/l" + Number(lifeExpanded) + "/i" + Number(issueExpanded));
    if (reload) {
        location.reload();
    }
};

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(global, 'href')).offset().top
    }, 500);
    return false;
});

$('.fa-expand').click(function (e) {
    var parent = $(e.currentTarget).parent().parent();
    if (parent.attr("id") === "life") {
        lifeExpanded = true;
    } else {
        issueExpanded = true;
    }
    parent.animate({height: 452}, 1000);
    parent.find(".fa-expand").hide();
    parent.find(".fa-compress").show();
    parent.find(".content-expanded").show();
    parent.find(".content-compressed").hide();
    updateLocation();
});

$('.fa-compress').click(function (e) {
    var parent = $(e.currentTarget).parent().parent();
    if (parent.attr("id") === "life") {
        lifeExpanded = false;
    } else {
        issueExpanded = false;
    }
    parent.animate({height: 252}, 1000);
    parent.find(".fa-expand").show();
    parent.find(".fa-compress").hide();
    parent.find(".content-expanded").hide();
    parent.find(".content-compressed").show();
    updateLocation();
});

$('.fa-collapse').click(function (e) {
    $(e.currentTarget).parent().parent().animate({height: $('#life').height() - 200}, 1000);
});