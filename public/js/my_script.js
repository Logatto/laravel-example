$(function () {
    var host = 'http://testlaravel.local'
    $('#registerBtn').on('click',function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: host+'/register',
            data: $('#registerForm').serialize(),
        }).done(function( msg ) {

            location.reload();
            
        }).fail(function(msg){
            console.log("ERROR",msg);

            alertify.logPosition("top right");

            var error = '<b>ERROR</b></br>';

            $.each(msg.responseJSON,function(inx,value){
                error+=value[0]+"</br>";
            });


            alertify.error(error);


        });
    });
});



