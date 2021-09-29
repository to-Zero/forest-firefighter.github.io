function schoolnews(jiangeshijian){
	var nowleft = 0;	//信号量
	var mytimer;
	var sum = 0;	//总和0

	//让计算机帮我们统计所有li的总宽度
	$(".hz-detail .company-right .liu ul li").each(
		function(){
			sum = sum + $(this).outerWidth(true);
		}
	);

	//复制一倍结点
	$(".hz-detail .company-right .liu ul").html($(".hz-detail .company-right .liu ul").html() + $(".hz-detail .company-right .liu ul").html());

	//调用gun函数
	gun();

	//gun函数：
	function gun(){
		//设表先关
		window.clearInterval(mytimer);
		mytimer = window.setInterval(
			function(){
				if(nowleft == -sum){
					nowleft = 0;
				}else{
					nowleft = nowleft - 1;	//往左边跑。
				}
				$(".hz-detail .company-right .liu ul").css("left",nowleft);
			},jiangeshijian);
	}

	//鼠标进入的事件监听
	$(".hz-detail .company-right .liu").mouseenter(
		function(){
			window.clearInterval(mytimer);
		}
	);

	//鼠标离开的事件监听
	$(".hz-detail .company-right .liu").mouseleave(gun);
}