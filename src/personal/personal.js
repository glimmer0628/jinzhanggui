$(document).ready(function() {
	var user=tell(localStorage.user);
	$("#celTelephone").html(user);
	$(".account-name .number").html(user);
	
	//充值
	$("#me_charge").click(function() {
		window.location.href='../recharge/recharge.html';
	});
	//退出
	$("#J_logout").click(function() {
		sessionStorage.clear();
		window.location.href="../loginPage/loginPage.html";
	});
});
