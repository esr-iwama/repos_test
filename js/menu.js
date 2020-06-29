var ID_TOP_MENU='top_menu';

$(document).ready(function() {
    toggleMenuBar();
});

$(window).resize(function() {
    toggleMenuBar();
});

function toggleMenuBar(){
    if ($(window).width() < 768) {
        $('#' + ID_TOP_MENU).hide();
        $('#dashboard').css({width:'97%', margin:'0 10px 0 10px', float:'right'});
    } else {
        $('#' + ID_TOP_MENU).fadeIn(250);
        $('#dashboard').css({width:'70%', margin:'0 10px 0 0', float:'right'});
    }
}