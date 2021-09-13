$(document).ready(function(){

    $('p').click(function(){
        $('p').hide();
    });

    $('h1').click(function(){
        $('p').show();
    });

    $('#myButton').click(function(){
        $('p').toggle();
    })

    $('#slideButton').click(function(){
        $('p').slideToggle(3000);
    })

    $('#fadeButton').click(function(){
        $('p').fadeToggle(3000);
    })

});