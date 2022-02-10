var left_num = '';
var right_num = '';
var operation = '';
var pow_value_l = '';
var pow_value_r = '';
var root_flag_l = false;
var root_flag_r = false;
var pow_flag_l = false;
var pow_flag_r = false;
const operands_list = ['0','1','2','3','4','5','6','7','8','9','.'];
const operation_list = ['+', '-', '*', '/', '%'];
const spec_operation_list = ['√', '%'];
$(function(){
 	$("[class~='clear']").click(function(){ 
 		left_num = '';
		right_num = '';
		operation = '';
		pow_value_l = '';
		pow_value_r = '';
		$(".result").text("0");
		all_string = "";
		root_flag_l = false;
		root_flag_r = false;
		pow_flag_l = false;
		pow_flag_r = false;
 	});
 });
$(function(){
	$("[class~='item']").click(function(){
		const key = $(this).text();
		if(operands_list.includes(key)){
			if(pow_flag_l === true && operation === ''){
				if(pow_value_l.length != (83 - (+left_num.length))){
					pow_value_l += key;
					$(".result").html(left_num + $("[class~='pow']").text() + pow_value_l);
				}
			}
			else{
				if(left_num.length !== 84){
					if(root_flag_l === false){
						if(operation === ''){
							left_num += key;
							$(".result").html(left_num);
						}
					}
				}
			}
		}
		if(operation_list.includes(key)){
			if(pow_flag_l === true){ if(pow_value_l === ''){ return; }}
			if(left_num !== '' && right_num === ''){
				$(".result").html("");
				operation = key;
				$(".result").html(operation);
			}
		}
		if(operands_list.includes(key) && left_num !== '' && operation !== ''){
			if(pow_flag_r === true){
				pow_value_r += key;
				$(".result").html(right_num + $("[class~='pow']").text() + pow_value_r);
			}
			else{
				if(right_num.length != 84){
					if(root_flag_r === false){
						right_num += key;
						$(".result").html(right_num);
					}
				}
			}
		}
	});
});
$(function(){
	$("[class~='root']").click(function(){
		if(left_num === ''){
			return;
		}
		if(left_num !== '' && operation === '' && root_flag_l === false && pow_flag_l === false){
			$(".result").html(left_num + $(this).text());
			root_flag_l = true;
			left_num = Math.sqrt(+left_num);
		}
		if(right_num !== '' && root_flag_r === false && pow_flag_r === false){
			$(".result").html(right_num + $(this).text());
			root_flag_r = true;
			right_num = Math.sqrt(+right_num);
		}
	});
});
$(function(){
	$("[class~='pow']").click(function(){
		if(left_num === ''){
			return;
		}
		if(left_num !== '' && operation === '' && root_flag_l === false && pow_flag_l === false){
			pow_flag_l = true;
			$(".result").html(left_num + $(this).text());
		}
		if(right_num !== '' && pow_flag_r === false && root_flag_r === false){
			pow_flag_r = true;
			$(".result").html(right_num + $(this).text());
		}
	});
});
$(function(){
 	$(".item_result").click(function(){
 		console.log(left_num, right_num, pow_value_l);
 		if(right_num === '' && root_flag_r === false && root_flag_l === false && pow_flag_l === false && pow_flag_r === false){
 			return;
 		}
 		if(pow_flag_r === true){
 			right_num = Math.pow(+right_num, +pow_value_r);
 		}
 		if(pow_flag_l === true && right_num !== ''){
 			left_num = Math.pow(+left_num, +pow_value_l);
 		}
 		if(root_flag_l === true && right_num === ''){
 			//пропуск		
 		}
 		else if(pow_flag_l === true && right_num === ''){
 			left_num = Math.pow(+left_num, +pow_value_l);
 		}
 		else
 		{
 			console.log(left_num, right_num);
 			switch (operation){
 				case "+":
 					left_num = (+left_num) + (+right_num);
 					break;
	 			case "-":
 					left_num = (+left_num) - (+right_num);
	 				break;
	 			case "*":
 					left_num = (+left_num) * (+right_num);
 					break;
 				case "/":
 					if(+right_num === 0) {
 						$(".result").html("You can't divide by zero!"); left_num=''; right_num=''; operation=''; 
 						root_flag_l=false; root_flag_r = false; pow_flag_l = false; pow_flag_r = false; pow_value = ''; 
 						pow_value_r = ''; pow_value_l = ''; return; 
 					}
 					left_num = (+left_num) / (+right_num);
 					break;
 				case "%":
 					left_num = (+left_num) % (+right_num);
 			}
 		}
 		$(".result").html(left_num);
 		right_num = '';
 		operation = '';
 		root_flag_l = false;
 		root_flag_r = false;
 		pow_flag_l = false;
		pow_flag_r = false;
		pow_value_l = '';
		pow_value_r = '';
 	});
 });