$(function(){function e(){var e=GB.utils.getParamString("loginlink");switch(e){case"recharge":location.href=htmlbasePath+"/account/charge.html";break;default:location.href=htmlbasePath+"/account/me.html?type=login"}}function i(){var e=$.trim($("#verificationTelInput").val());if(!e)return c.showveriErr("请输入手机号码"),!1;if(11!=e.length)return c.showveriErr("请输入正确的手机号码"),!1;var t=!1;return $.ajax({url:basePath+"/user/checkphonenum",data:{telephone:e},type:"POST",async:!1,success:function(e){e.success?t=!0:"0023"==e.code?c.showveriErr("手机号未注册，请注册"):c.showveriErr(e.msg)}}),t?(u=l,$.ajax({type:"POST",url:basePath+"/user/code",data:{telephone:e,type:"4",authCodeType:"2"},success:function(e){if("0000"==e.code)$("#_yz").hide(),$("#busy").hide(),$("#yuYinCode").unbind("click"),$("#yuYinCode").html("("+u+"s)"),$("#yuyinText").html("请留意来电"),$("#yuYinCode").css("color","#a3a3a3"),$("#yuYinCode").css("text-decoration","none"),s=window.setInterval(function(){0==u?(window.clearInterval(s),$("#yuYinCode").bind("click",i),$("#yuYinCode").css("color","#bc6a00"),$("#yuYinCode").css("text-decoration","underline"),$("#yuYinCode").html("语音验证码")):(u--,$("#yuYinCode").html("("+u+"s)"),$("#yuyinText").html("请留意来电"),$("#yuYinCode").css("color","#a3a3a3"),$("#yuYinCode").css("text-decoration","none"))},1e3);else{if("0021"==e.code)return c.showveriErr(e.msg),!1;"0043"==e.code&&$("#busy").show()}}}),!1):!1}var t=GB.utils.getParamString("depositType"),n=GB.utils.getParamString("newTagName"),o=GB.utils.getParamString("oldTagName"),a=$(".error"),r=$(".verificationError"),c={showpassErr:function(e){a.html("*"+e),a.show()},showveriErr:function(e){r.html("*"+e),r.show()}};$("#passwordInput,#verificationWordInput").bind("focus",function(){a.hide(),r.hide()}),$("#telInput,#verificationTelInput").bind("keyup",function(){var e=/\D/g;1==e.test(this.value)&&(this.value=this.value.replace(/\D/g,"")),this.value.length>11&&(this.value=this.value.substring(0,11))}).bind("focus",function(){a.hide(),r.hide()}),$("#submit").on("click",function(){var i=$("#telInput").val(),n=$("#passwordInput").val();return""==i?(c.showpassErr("手机号不能为空"),!1):""==n?(c.showpassErr("密码不能为空"),!1):($.ajax({type:"POST",url:basePath+"/user/updateUserLogin",data:{telephone:i,password:n},success:function(n,o){var a=n.msg;"0000"==n.code?(GB.cookie.addCookie("telephone",i),t?window.history.go(-1):e()):"0026"!=n.code&&"0003"!=n.code&&c.showpassErr(a)}}),!1)}),$(".before").bind("click",function(){var e=$(".intro .image").children().length,i=$(".intro .image").find(".active").index(),t=(i+e-1)%e;$(".intro .image").children().removeClass("active"),$(".intro .image").children().eq(t).addClass("active")}),$(".after").bind("click",function(){var e=$(".intro .image").children().length,i=$(".intro .image").find(".active").index(),t=(i+e+1)%e;$(".intro .image").children().removeClass("active"),$(".intro .image").children().eq(t).addClass("active")}),$(document).keyup(function(e){13==e.keyCode&&$("#submit").trigger("click")}),$(".verification-code").click(function(e){$(".nomal-login").hide(),$(".verification-login").show("500");var i=$("#telInput"),t=$("#verificationTelInput"),n=$.trim(i.val());n&&t.val(n)}),$(".nomal-code").click(function(e){$(".verification-login").hide(),$(".nomal-login").show("500");var i=$("#telInput"),t=$("#verificationTelInput"),n=$.trim(t.val());n&&i.val(n)}),$("#getVerification").click(function(e){function i(){function e(){t.html(i+"s"),i=parseInt(i)-1,0>i?(t.removeAttr("disabled"),t.removeClass("disabled"),t.html("重新发送")):setTimeout(function(){e()},1e3)}var i=60,t=$("#getVerification");t.attr("disabled",!0),t.addClass("disabled"),e()}var t=$("#verificationTelInput").val();return t?void($(this).attr("disabled")||$.ajax({url:basePath+"/user/checkphonenum",data:{telephone:t},type:"POST",success:function(e){"0000"==e.code?$.ajax({url:basePath+"/user/code",data:{type:"4",telephone:t,authCodeType:"1"},type:"POST",success:function(e){"0000"==e.code?i():c.showveriErr(e.msg)}}):"0023"==e.code?c.showveriErr("手机号未注册，请注册"):c.showveriErr(e.msg)}})):void c.showveriErr("请输入正确的手机号！")});var s,l=60,u=0;$("#yuYinCode").bind("click",i),$("#verificationSubmit").click(function(i){var a=$.trim($("#verificationTelInput").val()),r=$.trim($("#verificationWordInput").val());return a?r&&6==r.length?void $.ajax({type:"POST",url:basePath+"/user/loginByValid",data:{telephone:a,authCode:r},success:function(i,r){var s=i.msg;"0000"==i.code?(GB.cookie.addCookie("telephone",a),t?location.href=htmlbasePath+"/layouts/invitePrivilegeDouble.html?depositType="+t+"&newTagName="+n+"&oldTagName="+o:e()):"0026"!=i.code&&"0003"!=i.code&&c.showveriErr(s)}}):void c.showveriErr("请输入正确的验证码！"):void c.showveriErr("请输入正确的手机号！")})});