$(document).ready(function() {
  $('#realInfo_submit').click(function() {
    if (isNameNo($('#hasRealInfo_name').val())) {
      if (isCardNo($('#hasRealInfo_ID').val())) {

      } else {
        $('.card-err-wrap').css({'display': 'block'});
        $('.card-err-wrap').html('*输入的身份证有误');
      }
    } else {
      $('.card-err-wrap').css({'display': 'block'});
      $('.card-err-wrap').html('*输入的姓名格式有误');
    }
  });
	//查看银行卡
  $('.support_card').click(function() {
    $('#checkWrapper').css({
      'height': $('body').height(),
      'display': 'block'
    });
  });
  $('#checkWrapper').click(function() {
    $(this).css({
      'display': 'none'
    });
  });
  //用户名
if(localStorage.user==undefined){
		
		$("#ceilLogin").css('display','none');
	}else{
		
		var phone=tell(localStorage.user);
		
		$("#celTelephone").text(phone);
		$("#ceilLogin").css('display','block');
		$("#ceilUnlogin").css('display','none');
		
		$(".account-name .number").html(phone);
	}
	//	退出
	$("#J_logout").click(function() {
		sessionStorage.clear();
		
	});
	//获取验证码按钮
	var check=true;
	var time;
	$(".checkNo").click(function() {
		var num=60;
		if(check){
			
			$(this).css('background','#BEBEBE');
			//向后台发请求
//			$.ajax({
//				type:"get",
//				url:""
//			});
			check=false;
			$(".checkNo").html(num+'秒');
			
			time=window.setInterval(function() {
				num=num-1;
				$(".checkNo").html(num+'秒');
			},1000);
			//	60秒后重新获取
			window.setTimeout(function() {
				$(".checkNo").css('background','#fd8624');
				check=true;
				$(".checkNo").html('获取验证码');
				window.clearInterval(time);
			},60000);
			
		}else{
			
		}
	})
});

function isCardNo(card)  
{  
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
  if(reg.test(card) === false)  
  { 
    return  false;  
  }
  return true;
}  

function isNameNo(name) {
  var reg = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
  if(reg.test(name) === false)  
  { 
    return  false;  
  }
  return true;
}

