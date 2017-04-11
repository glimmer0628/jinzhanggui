$(document).ready(function() {
	if(sessionStorage.user==undefined){
		$("#ceilLogin").css('display','none');
	}else{
		var phone=tell(sessionStorage.user);
		$("#celTelephone").html(phone);
		$("#ceilLogin").css('display','block');
		$("#ceilUnlogin").css('display','none');
		$(".account-name .number").html(phone);
	}
	//退出
	$("#J_logout").click(function() {
		sessionStorage.clear();
//		window.location.href="../loginPage/loginPage.html";
	});
});
