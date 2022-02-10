$(document).ready(function() {
    $("#button_start").click(function(){
        $.ajax({
            url: 'calc.html',
            type: 'GET',
            beforeSend: function(){
                $('body').empty();
            },
            success: function(responce){        
                $('body').append(responce);
            },
            error: function(){
                alert('Error!');            
            }
        });
    });
});
