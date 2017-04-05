var timer;
$(function(){
	//向某某手机上已发送验证码
	var count=localStorage.count;
	var pnumber=localStorage.getItem("phone"+count);
	$("#pnumber").text(pnumber);

	//显示随机数
	$(".radnum").html(generateRandomCode());

	//倒计时
	$("#sendbtn").click(function(){
		timer=setInterval(send,1000);
	});
	//验证输入的验证码是否正确
	valRandNumber();

	//验证成功，跳转
	doRegist();

//随机生成验证码
function generateRandomCode(){
			var str="";
			for(i=1;i<=4;i++){
				var n=Math.floor(Math.random()*62);
				if(n<10){
					str+=n;
				}else if(n<36){
					str+=String.fromCharCode(65+n-10);
				}else{
					str+=String.fromCharCode(97+n-36);
				}
			}
			return str;
} 

//30s倒计时后重新发送验证码
var num=5;
function send(){
	num--;
	$("#seconds").text(num);
	if(num==0){
		num=5;
		$("#seconds").text(num);
		$(".radnum").html(generateRandomCode());
			clearInterval(timer);
	}
}

//验证输入的验证码是否正确
var flag=true;
function valRandNumber(){
	$("#number").blur(function(){
		var radnum=$(".radnum").text().toLowerCase();
		var number=$(this).val().toLowerCase();
		if(number==radnum){
			$("#wronum").html("验证码正确");
			flag=true;
		}
		else{
			$("#wronum").html("验证码不正确");
			generateRandomCode();
			flag=false;
			//console.log("111");
		}
	});
}
	
	//点击注册按钮，页面跳转
	function doRegist(){
		$("#regist").click(function(){
			if(flag){
				alert("注册成功");
				location.href="login.html";
			}
		});
	}
});

