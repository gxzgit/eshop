// JavaScript Document
$(function(){
	$("#floor_ul>li").click(function(){
		$(".xd-tag.c").removeClass("c");
		$(this).addClass("c");
		$("#add_url").addClass("hide");
		$("#upload_onsale").addClass("hide");
		$("#operation").addClass("hide");
	})
})



$(function(){
	$(".change").click(function(){
		$("#url").val("");
		$("#result").html("请输入点击时打开的页面地址");
		$("#onsale_picture").attr("src","");
		if($(this).val()=="更换3"){
			$("#add_url").removeClass("hide");
			$("#upload_onsale").removeClass("hide");
			$("#operation").removeClass("hide");
			$("#msg_onsale").html("图片比例约为3:5，宽度不小于300");
			$("#url").focus()
		}else{
			$("#add_url").removeClass("hide");
			$("#upload_onsale").removeClass("hide");
			$("#operation").removeClass("hide");
			$("#msg_onsale").html("图片比例约为4:5，宽度不小于200");
			$("#url").focus()
		}
	})
})



$(function(){
	$("#cancel").click(function(){
		$("#add_url").addClass("hide");
		$("#upload_onsale").addClass("hide");
		$("#operation").addClass("hide");
	})
})



