$(document).ready(function() {
		$(".calc").css('display', 'none');
		$.ajax({
            	url: 'calc.html',
            	type: 'GET',
            	beforeSend: function(){
                	$('body').empty();
            	},
            	success: function(responce){        
                    $('body').append(responce);
            	error: function(){
                	alert('Error!');            
            	}
        });
});