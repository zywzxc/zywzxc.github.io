$(function(){
	function scroll(){
		if(window.pageYOffset!=null){
			return {
				left: window.pageXOffset,
				top: window.pageYOffset
			}
		}else if(document.compateMode==="CSS1Compat"){
			return {
				left: document.documentElement.scrollLeft,
				top: document.documentElement.scrollTop
			}
		}
		return {
			left: document.body.scrollLeft,
        	top: document.body.scrollTop
		}
	}

	var scr_t=document.getElementById("scr_t");

	window.onscroll=function(){
		var val=scroll().top;
		if(val>=300){
			scr_t.style.display="block";
			scr_t.style.top=val+"px";
		}else if(val<300){
			scr_t.style.display="none";
		}
	}


	// 北京
	$(".nav_fl_li").mouseenter(function(){
		$(".nav_bj").show();
	});
	$(".nav_fl_li").mouseleave(function(){
		$(".nav_bj").hide();
		$(".nav_bj").mouseenter(function(){
			$(this).show();
		});
		$(".nav_bj").mouseleave(function(){
			$(this).hide();
		});
	});

	// 我的京东
	$("#wd").mouseenter(function(){
		$(".myjd").show();
	});
	$("#wd").mouseleave(function(){
		$(".myjd").hide();
		$(".myjd").mouseenter(function(){
			$(this).show();
		});
		$(".myjd").mouseleave(function(){
			$(this).hide();
		});
	});
	
	// 企业采购
	$("#qy").mouseenter(function(){
		$(".qycg").show();
	});
	$("#qy").mouseleave(function(){
		$(".qycg").hide();
		$(".qycg").mouseenter(function(){
			$(this).show();
		});
		$(".qycg").mouseleave(function(){
			$(this).hide();
		});
	});

	// 客户服务
	$("#kh").mouseenter(function(){
		$(".khfw").show();
	});
	$("#kh").mouseleave(function(){
		$(".khfw").hide();
		$(".khfw").mouseenter(function(){
			$(this).show();
		});
		$(".khfw").mouseleave(function(){
			$(this).hide();
		});
	});
	
	// 网站导航
	$("#dh").mouseenter(function(){
		$(".wzdh").show();
	});
	$("#dh").mouseleave(function(){
		$(".wzdh").hide();
		$(".wzdh").mouseenter(function(){
			$(this).show();
		});
		$(".wzdh").mouseleave(function(){
			$(this).hide();
		});
	});


	$(".fs_li1").mouseenter(function(){
		$(".fs_nr1").show();
	});
	$(".fs_li1").mouseleave(function(){
		$(".fs_nr1").hide();
		$(".fs_nr1").mouseenter(function(){
			$(this).show();
		});
		$(".fs_nr1").mouseleave(function(){
			$(this).hide();
		});
	});


	// 登录块(第三块)
	function animate_top(ele,target){
		clearInterval(ele.timer);
		var speed=target>ele.offsetTop?10:-10;
		ele.timer=setInterval(function(){
			var val=target-ele.offsetTop;
			ele.style.top=ele.offsetTop+speed+"px";
			if(Math.abs(val)<Math.abs(speed)){
				ele.style.top=target+"px";
				clearInterval(ele.timer);
			}
		},20);
	}

	var u_hf=document.getElementById("u_hf");
	var u_jp=document.getElementById("u_jp");
	var u_jd=document.getElementById("u_jd");
	var u_yx=document.getElementById("u_yx");
	var fsr2f_u=document.getElementById("fsr2f_u");
	var fsr2fd_p=document.getElementById("fsr2fd_p");
	var fs_z1=document.getElementById("fs_z1");
	var d_hf=document.getElementById("d_hf");
	var d_jp=document.getElementById("d_jp");
	var d_jd=document.getElementById("d_jd");
	var d_yx=document.getElementById("d_yx");

	// 话费
    u_hf.onmouseover=function(){
		animate_top(fsr2f_u,-37);
		fsr2fd_p.style.display="block";
		animate_top(fs_z1,20);
		$(".d_hf").css("border-bottom","2px solid red");
		$(".d_jp").css("border-bottom","2px solid white");
		$(".d_jd").css("border-bottom","2px solid white");
		$(".d_yx").css("border-bottom","2px solid white");
	}
	// 机票
	u_jp.onmouseover=function(){
		animate_top(fsr2f_u,-37);
		fsr2fd_p.style.display="block";
		animate_top(fs_z1,20);
		$(".d_hf").css("border-bottom","2px solid white");
		$(".d_jp").css("border-bottom","2px solid red");
		$(".d_jd").css("border-bottom","2px solid white");
		$(".d_yx").css("border-bottom","2px solid white");
	}
	// 酒店
	u_jd.onmouseover=function(){
		animate_top(fsr2f_u,-37);
		fsr2fd_p.style.display="block";
		animate_top(fs_z1,20);
		$(".d_hf").css("border-bottom","2px solid white");
		$(".d_jp").css("border-bottom","2px solid white");
		$(".d_jd").css("border-bottom","2px solid red");
		$(".d_yx").css("border-bottom","2px solid white");
	}
	// 游戏
	u_yx.onmouseover=function(){
		animate_top(fsr2f_u,-37);
		fsr2fd_p.style.display="block";
		animate_top(fs_z1,20);
		$(".d_hf").css("border-bottom","2px solid white");
		$(".d_jp").css("border-bottom","2px solid white");
		$(".d_jd").css("border-bottom","2px solid white");
		$(".d_yx").css("border-bottom","2px solid red");
	}
	fsr2fd_p.onclick=function(){
		animate_top(fsr2f_u,0);
		fs_z1.style.top="176px";
		this.style.display="none";
		$(".d_hf").css("border-bottom","2px solid white");
		$(".d_jp").css("border-bottom","2px solid white");
		$(".d_jd").css("border-bottom","2px solid white");
		$(".d_yx").css("border-bottom","2px solid white");
	};
// border-bottom: 2px solid red;
	// 话费充值
	$(".fszl1_hf").mouseover(function(){
		$(this).css("color","red");
		$(".fszl1_ll").css("color","#999");
		$(".fszl1_tc").css("color","#999");
		$(".d_hf").css("border-bottom","2px solid red");
		$(".hfcz").show();
		$(".llcz").hide();
		$(".tcbg").hide();
	});

	// 流量充值
	$(".fszl1_ll").mouseover(function(){
		$(".fszl1_hf").css("color","#999");
		$(this).css("color","red");
		$(".fszl1_tc").css("color","#999");
		$(".hfcz").hide();
		$(".llcz").show();
		$(".tcbg").hide();
	});

	//套餐变更
	$(".fszl1_tc").mouseover(function(){
		$(".fszl1_hf").css("color","#999");
		$(this).css("color","red");
		$(".fszl1_ll").css("color","#999");
		$(".hfcz").hide();
		$(".llcz").hide();
		$(".tcbg").show();
	});


	// 倒计时
	var djs1=document.getElementById("left_time1");
	var djs2=document.getElementById("left_time2");
	var djs3=document.getElementById("left_time3");

	var timer=setInterval(fn,1);
	function fn(){
		// 定义时间
		var nowtime=new Date();
		// 设置到期时间
		var future=new Date("2020/12/02 20:00:00");
		var timeSum=future.getTime()-nowtime.getTime();
		var day=parseInt(timeSum/1000/60/60/24);
		// var day=parseInt(timeSum/24/60/60/1000);
		var hour=parseInt(timeSum/1000/60/60%24);
		// var day=parseInt(timeSum%24/60/60/1000);
		var minu=parseInt(timeSum/1000/60%60);
		// var day=parseInt(timeSum%60/60/1000);
		var sec=parseInt(timeSum/1000%60);
		// var day=parseInt(timeSum%60/1000);
		var millsec=parseInt(timeSum%1000);

		day=day<10?"0"+day:day;
		hour=hour<10?"0"+hour:hour;
		minu=minu<10?"0"+minu:minu;
		sec=sec<10?"0"+sec:sec;
		if(millsec<10){
			millsec="00"+millsec;
		}else if(millsec<100){
			millsec="0"+millsec;
		}

		djs1.innerHTML=hour;
		djs2.innerHTML=minu;
		djs3.innerHTML=sec;
	}


	// 京东秒杀最右侧轮播
	var fclb_ul=document.getElementById("fclb_ul");
	var timer=setInterval(autoPlay1,2000);
	var key=0;
	var imgTop=275;
	function autoPlay1(){
		key++;
		if(key>1){
			fclb_ul.style.top=0;
			key=0;
		}
		animate_top(fclb_ul,-key*imgTop);
	}
	fclb_ul.onmouseover=function(){
		clearInterval(timer);
	}
	fclb_ul.onmouseout=function(){
		timer=setInterval(autoPlay1,2000);
	}

});