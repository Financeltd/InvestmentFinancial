$(function(){

	calc();

	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);

});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 45 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;

	switch (plan) {
		case '1':
			switch (true) {
				case (amount<20):
					percent = 0;
					break;
				case (amount>1000):
					percent = 0;
					break;
				case (amount<=1000):
					percent = 200;
					break;	

			   default:
					percent = 0;
			}
			break;
			
		case '2':
			switch (true) {
				case (amount<1000):
					percent = 0;
					break;
				case (amount>50000):
					percent = 0;
					break;
				case (amount<=50000):
					percent = 400;
					break;	

			   default:
					percent = 0;
			}
			break;
			
		case '3':
			switch (true) {
				case (amount<200):
					percent = 0;
					break;
				case (amount>5000):
					percent = 0;
					break;
				case (amount<=5000):
					percent = 700;
					break;	

			   default:
					percent = 0;
			}
			break;
			
		case '4':
			switch (true) {
				case (amount<30):
					percent = 0;
					break;
				case (amount>300000):
					percent = 0;
					break;
				case (amount<=300000):
					percent = 1000;
					break;	

			   default:
					percent = 0;
			}
			break;
			
			
		case '5':
			switch (true) {
				case (amount<1000):
					percent = 0;
					break;
				case (amount>50000):
					percent = 0;
					break;
				case (amount<=50000):
					percent = 130;
					break;	

			   default:
					percent = 0;
			}
			break;
			
			
		case '6':
			switch (true) {
				case (amount<2000):
					percent = 0;
					break;
				case (amount>50000):
					percent = 0;
					break;
				case (amount<=50000):
					percent = 200;
					break;	

			   default:
					percent = 0;
			}
			break;
		
			
			
	}

$('#assign_per').val(percent+'%');
	var total = amount*percent/100;
	$('#total_return').val('$'+total.toFixed(2));
	
	if(total <= 0){
		$('#net_profit').val('0.00');
	}else{
		$('#net_profit').val('$'+(total-amount).toFixed(2));
	}
	
	
	

}