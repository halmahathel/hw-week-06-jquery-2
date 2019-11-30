$(document).ready(function(){
$('#pic2').hide();
$('#clicker').on('click', function(){

    $('#secret').fadeOut(1000)
})

$('#clicker1').on('click', function(){

    $('#secret').fadeIn(1000)
})

$('#clicker2').on('click', function(){

    $('#secret').toggle(1000)
})

$('#clicker3').on('click', function(){

    $('#secret').slideUp(1000)
})

$('#clicker4').on('click', function(){

    $('#pic1').hide(1000);
    $('#pic2').show(1000);
})




})