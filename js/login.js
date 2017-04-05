$(function(){

	//获取本地存储中iphone数据
	var count=localStorage.count;
	var phone=localStorage.getItem("phone"+count);
	$("#name").text(phone);

	//点击登录按钮，出现登录弹框
	$("#loginbtn").click(function(){
		$(".over").show();
		$(".login").show();
	});
	//点击切换登录模式
	$(".logintop ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("click").siblings().removeClass("click");
			$(".login .wrap>div").hide().eq(index).show();
		});
	});

	//离开密码框时，进行手机号和密码是否一致进行验证
	$(".pwd").blur(function(){
		phoneSame();
	});

	//密码登录时，点击登录按钮时，进行页面跳转
	$(".loginbtn1").click(function(){
		doLogin();
	});
	//手机号登录时，点击登录按钮，进行页面跳转
	$(".loginbtn2").click(function(){
		doLogin();
	});

	//点击阴影部分，弹框和阴影消失
	var n=0;
	$(".login").siblings().click(function(){
		n++;
		if(n>=2){
			$(".over").hide();
			$(".login").hide();
			n=0;
		}
	});
});


//密码登录时，手机号密码是否一致
function phoneSame(){
	var count=localStorage.count;
	var myphone=$(".phonenum").val();
	var mypwd=$(".pwd").val();
	for(var i=1;i<=count;i++){
		var phoneNum=localStorage.getItem("phone"+i);
		var pwd=localStorage.getItem("password"+i);
		if(phoneNum!=myphone||pwd!=mypwd){
			$(".pwderror").show();
			return false;
		}
		else{
			$(".pwderror").hide();
			return true;
		}
	}
			
}
	//登录
	function doLogin(){
		if(phoneSame()){
			alert("您已登录成功，正在为您跳转...");
			location.href="succes";
		}
	}




