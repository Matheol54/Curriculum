$(function(){
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();
});

$('.icon-menu').on('click', function(){
    $('.sidebar').toggleClass('abrir');     
})