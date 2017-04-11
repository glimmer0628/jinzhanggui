$(document).ready(function() {
	
	if(sessionStorage.user==undefined){
		
		$("#ceilLogin").css('display','none');
	}else{
		var phone=tell(sessionStorage.user);
		$("#celTelephone").html(phone);
		$("#ceilLogin").css('display','block');
		$("#ceilUnlogin").css('display','none');
	}
//	退出
	$("#J_logout").click(function() {
		sessionStorage.clear();
		$("#ceilLogin").css('display','none');
		$("#ceilUnlogin").css('display','block');
	});
//	充值
//	$(".J-nav-recharge").click(function(){
//		if(sessionStorage.user==undefined){
//		window.location.href='../loginPage/loginPage.html';
//	}else{
//		window.location.href='../recharge/recharge.html';
//	}
//	});
});