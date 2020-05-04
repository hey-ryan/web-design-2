$(document).ready(function () {

    $('#covidUpdate').click(function (){

            $('#protocol').addClass('covidStyle');
            $('#button-container').hide(2000);
    });

    setTimeout(function(){
        $('#dismiss').hide();
    }, 3000);

});

