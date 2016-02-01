$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});


$('body').bind('touchstart', function() {});

$(document).ready(function() {

$('body').css('display', 'none');

$('body').fadeIn(600);


$('.link').click(function() {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(500, newpage);

});

function newpage() {

window.location = newLocation;

}

});
