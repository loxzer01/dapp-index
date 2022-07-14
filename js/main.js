/*Preloader*/
    $('#pre').hide('fade');
/*Scripts Start*/
$(document).ready(function(){
    /////////Control del login
    //Open
    $('#open-login').click(function(){
        $('.pdo').show('fade',function(){
            $('.conect').show('drop',{direction: 'up'});
        });
    });
    //Close
    $('#close-login').click(function(){
        $('.conect').hide('drop',{direction: 'up'},function(){
            $('.pdo').hide('fade');
        });
    });


});
