function tell(tell){
	
	var phone = tell.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
	return phone;
}
