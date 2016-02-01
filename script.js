$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});


$('body').bind('touchstart', function() {});

$(document).ready(function() {

$('body').css('display', 'none');

<<<<<<< HEAD
$('body').fadeIn(800);
=======
$('body').fadeIn(600);
>>>>>>> master


$('.link').click(function() {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(500, newpage);

});

function newpage() {

window.location = newLocation;

}

});
