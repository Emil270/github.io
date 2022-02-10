$(document).ready(function() {
		$.ajax({
            	url: 'calc.html',
            	type: 'GET',
            	beforeSend: function(){
                	$('#bbody').empty();
            	},
            	success: function(responce){        
                    $('#bbody').append(responce);
            	error: function(){
                	alert('Error!');            
            	}
        });
});
