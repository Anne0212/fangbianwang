$(function() {
    var flag1 = true;
    var flag2 = true;
    var flag3 = true;
    var flag4 = true;
    var flag5 = true;
    checkPhone();
    checkPwd();
    checkRepwd();
    checkEmail();
    checkValidate();
    applyBtn();

    //点击申请注册按钮进行注册
    function applyBtn() {
        $("#applybtn").click(function() {
        	//localStorage.clear();
            if (flag1 && flag2 && flag3 && flag4 && flag5 && ($("#agree")[0].checked)) {
                var count = localStorage.count;
                if (!count) {
                    count = 1;
                } else {
                    count++;
                }
                localStorage.setItem("phone" + count, $("#phone").val());
                localStorage.setItem("password" + count, $("#pwd").val());
                localStorage.setItem("email" + count, $("#email").val());
                localStorage.setItem("count", count);
                //console.log(localStorage);
                //alert("恭喜你注册成功");
                $("#applybtn").html("正在跳转中...");
                setTimeout(doDelay, 2000);
            }
        });
    }

    //点击申请注册按钮，延迟提交，变成正在跳转中
    function doDelay(){       
        location.href="regist.html";
    }

    //验证手机号格式是否正确
    function checkPhone() {
        $("#phone").blur(function() {
            var reg = /^1[0-9]{10}$/;
            var phone = $("#phone").val();
            if (reg.test(phone)) {
                //console.log("1234");
                $("#phoneOk").show();
                $("#phoneInfor").hide();
                $("#phoneWrong").hide();
                flag1 = true;
            } else {
                $("#phoneInfor").show();
                $("#phoneWrong").show();
                $("#phoneOk").hide();
                $("#phone").addClass("wrongYellow");
            }
            //判断号码是否存在
            var count = localStorage.count;
            for (var i = 1; i <=count; i++) {
                var phoneName = localStorage.getItem("phone"+i);
                if (phoneName == $(this).val()) {
                    $("#phoneInfor").show();
                    $("#phoneWrong").show();
                    $("#phoneOk").hide();
                    $("#phoneWrong").html("<img src='images/icon21.png'>号码已存在");
                    flag1 =false ;
                }
            }
        });
    }
    //验证密码格式是否正确
    function checkPwd() {
        $("#pwd").blur(function() {
            var reg = /\w{4,8}/;
            var pwd = $("#pwd").val();
            if (reg.test(pwd)) {
                $("#pwdOk").show();
                $("#pwdInfor").hide();
                $("#pwdWrong").hide();
                flag2 = true;
            } else {
                $("#pwdInfor").show();
                $("#pwdWrong").show();
                $("#pwdOk").hide();
                flag2 = false;
            }
        });
    }
    //验证两次密码是否一致
    function checkRepwd() {
        $("#repwd").blur(function() {
            var pwd = $("#pwd").val();
            var repwd = $("#repwd").val();
            if (repwd == pwd && repwd != "") {
                $("#repwdInfor").hide();
                $("#repwdWrong").hide();
                $("#repwdOk").show();
                flag3 = true;
            } else {
                $("#repwdInfor").show();
                $("#repwdWrong").show();
                $("#repwdOk").hide();
                flag3 = false;
            }
        });
    }
    //验证邮箱格式是否正确
    function checkEmail() {
        $("#email").blur(function() {
            var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
            var email = $("#email").val();
            if (reg.test(email)) {
                $("#emailOk").show();
                $("#emailInfor").hide();
                $("#emailWrong").hide();
                flag4 = true;
            } else {
                $("#emailInfor").show();
                $("#emailWrong").show();
                $("#emailOk").hide();
                flag = false;
            }
        });
    }
    //验证码是否正确
    function checkValidate() {
        $("#val").blur(function() {
            var str = "nodick";
            var valnumber = $("#val").val();
            if (valnumber == str) {
                $("#valInfor").html("<img src='images/icon35.png'>&nbsp;验证码正确");
                flag5 = true;
            } else {
                $("#valInfor").html("<img src='images/icon21_1.png'>&nbsp;验证码错误");
                flag5 = false;
            }
        });
    }
});
