$(function(){
	
	//二维码
	var a = document.getElementsByClassName("n1")[0];
	var div=document.getElementsByClassName("erweima")[0];
	q1(a,div);
	
	//地点
	var d=document.getElementsByClassName("uu")[0];
	var dn=document.getElementsByClassName("nav1")[0];
	q1(d,dn);
	
	var jd1=document.getElementById("wd");
	var jd2=document.getElementsByClassName("nav2")[0];
	q1(jd1,jd2);
	
	var qy1=document.getElementById("qy");
	var qy2=document.getElementsByClassName("nav3")[0];
	q1(qy1,qy2);
	
	var kh1=document.getElementById("kh");
	var kh2=document.getElementsByClassName("nav4")[0];
	q1(kh1,kh2);

	
	var dh1=document.getElementById("dh");
	var dh2=document.getElementsByClassName("nav5")[0];
	q1(dh1,dh2);
	
	
	function q1(ele1,ele2){
		var ele1;
		var ele2;
		ele1.onmouseover=m1;
		ele1.onmouseout=m2;
		ele2.onmouseover=m1;
		ele2.onmouseout=m2;
		function m1(){
			ele2.style.display='block';
		}
		function m2(){
			ele2.style.display='none';
		}
	}
	
	var du1=document.getElementById("du1");
	var s3_div01=document.getElementsByClassName("s3_div01")[0];
	var du2=document.getElementById("du2");
	var s3_div02=document.getElementsByClassName("s3_div02")[0];
	
	du1.onmouseover=function(){
		s3_div01.className="s3_div01 show";
		s3_div02.className="s3_div02 hide";
	}
	du2.onmouseover=function(){
		s3_div02.className="s3_div02 show";
		s3_div01.className="s3_div01 hide";
	}
	
	
	var hfcz1=document.getElementById("hfcz");
	var hfcz2=document.getElementsByClassName("hfcz")[0];
	var llcz1=document.getElementById("llcz");
	var llcz2=document.getElementsByClassName("llcz")[0];
	var tcbg1=document.getElementById("tcbg");
	var tcbg2=document.getElementsByClassName("tcbg")[0];
	
	hfcz1.onmouseover=function(){
		hfcz2.className="hfcz show";
		llcz2.className="llcz hide";
		tcbg2.className="tcbg hide";
		hfcz1.style.color="red";
		llcz1.style.color="#878686";
		tcbg1.style.color="#878686";
	}
	llcz1.onmouseover=function(){
		hfcz2.className="hfcz hide";
		llcz2.className="llcz show";
		tcbg2.className="tcbg hide";
		hfcz1.style.color="#878686";
		llcz1.style.color="red";
		tcbg1.style.color="#878686";
	}
	tcbg1.onmouseover=function(){
		hfcz2.className="hfcz hide";
		llcz2.className="llcz hide";
		tcbg2.className="tcbg show";
		hfcz1.style.color="#878686";
		llcz1.style.color="#878686";
		tcbg1.style.color="red";
	}
	
	var　g1 = document.getElementById("gnjp");
	var gnjp=document.getElementsByClassName("gnjp")[0];
	var　g2 = document.getElementById("gjgat");
	var gjgat=document.getElementsByClassName("gjgat")[0];
	var　g3 = document.getElementById("th");
	var th=document.getElementsByClassName("th")[0];
	g1.onmouseover=function(){
		gnjp.className="gnjp show";
		gjgat.className="gjgat hide";
		th.className="th hide";
		g1.style.color="red";
		g2.style.color="#878686";
		g3.style.color="#878686";
	}
	g2.onmouseover=function(){
		gnjp.className="gnjp hide";
		gjgat.className="gjgat show";
		th.className="th hide";
		g1.style.color="#878686";
		g2.style.color="red";
		g3.style.color="#878686";
	}
	g3.onmouseover=function(){
		gnjp.className="gnjp hide";
		gjgat.className="gjgat hide";
		th.className="th show";
		g1.style.color="#878686";
		g2.style.color="#878686";
		g3.style.color="red";
	}
	
	var gnjd1=document.getElementById("gnjd");
	var gnjd2=document.getElementsByClassName("gnjd")[0];
	var cxhd1=document.getElementById("cxhd");
	var cxhd2=document.getElementsByClassName("cxhd")[0];
	gnjd1.onmouseover=function(){
		gnjd2.className="gnjd show";
		cxhd2.className="cxhd hide";
		gnjd1.style.color="red";
		cxhd1.style.color="#878686";
	}
	cxhd1.onmouseover=function(){
		gnjd2.className="gnjd hide";
		cxhd2.className="cxhd show";
		gnjd1.style.color="#878686";
		cxhd1.style.color="red";
	}
	
	var header=document.getElementById("header");
	var header1=document.getElementsByClassName("header")[0];
	header.onclick=function(){
 		header.className="header hide";
 	}
	
	var　m1 = document.getElementById("m-icon1");
	var　m2 = document.getElementById("m-icon2");
	var　m3 = document.getElementById("m-icon3");
	var　m4 = document.getElementById("m-icon4");
	var　btn = document.getElementById("s3_bul");
	var  btn1 = document.getElementById("hf");
	var btn2 = document.getElementById("jp");
 	var btn3 = document.getElementById("jdjd");
 	var sc = document.getElementById("sc");
 	
 	sc.onclick=function(){
 		btn1.className="hf hide";
 		btn2.className="jp hide";
		btn3.className="jdjd hide";
		sc.className="sc hide";
		animate(btn,0);
 	}
 	
    m1.onmouseover = function () {
        animate(btn,-37);
        animate(btn1,396);
        btn1.className="hf show";
		btn2.className="jp hide";
		btn3.className="jdjd hide";
		sc.className="sc show";
    }
    m2.onmouseover = function () {
        animate(btn,-37);
        animate(btn2,396);
        btn1.className="hf hide";
		btn2.className="jp show";
		btn3.className="jdjd hide";
		sc.className="sc show";
    }
    m3.onmouseover = function () {
        animate(btn,-37);
        animate(btn3,396);
        btn1.className="hf hide";
		btn2.className="jp hide";
		btn3.className="jdjd show";
		sc.className="sc show";
    }
    m4.onmouseover = function () {
        animate(btn,-37);
        animate(btn1,396);
        animate(btn2,396);
        btn1.className="hf hide";
		btn2.className="jp hide";
		btn3.className="jdjd show";
        sc.className="sc show";
    }
	function animate(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = (target-ele.offsetTop)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style.top = ele.offsetTop + step + "px";
            if(Math.abs(target-ele.offsetTop)<=Math.abs(step)){
                ele.style.top = target + "px";
                clearInterval(ele.timer);
            }
        },10);
    }
	
	
	var djs1=document.getElementById("left_time1");
	var djs2=document.getElementById("left_time2");
	var djs3=document.getElementById("left_time3");
	
	var timer=setInterval(fn,1);
	function fn(){
		var nowtime=new Date();
		var future=new Date("2018/12/02 20:00:00");
		var timeSum=future.getTime()-nowtime.getTime();
		var day=parseInt(timeSum/1000/60/60/24);//天
		var hour=parseInt(timeSum/1000/60/60%24);//时
		var minu=parseInt(timeSum/1000/60%60);//分
		var sec=parseInt(timeSum/1000%60);//秒
		var millsec=parseInt(timeSum%1000);//毫秒
		
		day=day<10?"0"+day:day;
		hour=hour<10?"0"+hour:hour;
		minu=minu<10?"0"+minu:minu;
		sec=sec<10?"0"+sec:sec;
		if(millsec<10){
			millsec="00"+millsec;
		}else if(millsec<100){
			millsec="0"+millsec;
		}
		
		
		if(timeSum<0){
			div.innerHTML="00:00:00"
			clearInterval(timer);
			return;
		}
		djs1.innerHTML=hour;
		djs2.innerHTML=minu;
		djs3.innerHTML=sec;
		
	}
	
})
