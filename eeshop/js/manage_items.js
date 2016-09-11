// JavaScript Document
function selectAll(obj){
	var arrChk = $("[name='check_this']");
	if(obj.checked){
		for(var i =0;i<arrChk.length;i++){
			arrChk[i].checked = true;
		}
	}else{
		for(var j =0;j<arrChk.length;j++){
			arrChk[j].checked = false;
		}
	}
}


$(function(){
	$("#items_id").blur(function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var itemsId = $(this).val();
		var ritemsId = /^\d{4}$/;
		if(itemsId==null || itemsId==""){
		}else if(!ritemsId.test(itemsId)){
			$(this).val("");
			$(this).focus();
		}
	});
})



$(function(){
	$("#price_start").blur(function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var priceStart = $(this).val();
		var rpriceStart =  /^\d{1,6}(\.\d{0,4})?$/;
		if(priceStart==null || priceStart==""){
		}else if(!rpriceStart.test(priceStart)){
			$(this).val("");
			$(this).focus();
		}else{
			$(this).val(parseFloat($(this).val()).toFixed(2));
		}
	});
})


$(function(){
	$("#price_end").blur(function(){
		$(this).val($(this).val().replace(/(^\s*)|(\s*$)/g,""));
		var priceEnd = $(this).val();
		var rpriceEnd =  /^\d{1,6}(\.\d{0,4})?$/;
		if(priceEnd==null || priceEnd==""){
		}else if(!rpriceEnd.test(priceEnd)){
			$(this).val("");
			$(this).focus();
		}else{
			$(this).val(parseFloat($(this).val()).toFixed(2));
		}
	});
})



$(function(){
	$("#empty").click(function(){
		$("#items_name,#items_id,#price_start,#price_end").val("");
	});
})



$(function(){
	$(".digg").delegate(".page","click",function(){
		var oldPage = $(".digg>.current").html();
		$(".digg>.current").replaceWith("<a href='#?page="+oldPage+"' class='page'>"+oldPage+"</a>");
		var newPage = $(this).html();
		var previousPage = parseInt(newPage)-1;
		$(this).replaceWith("<span class='current'>"+newPage+"</span>");
		if(newPage!=1){
			$(".digg>.disabled").replaceWith("<a href='#?page="+previousPage+"' id='previous_page'>&lt;</a>")
		}else{
			$(".digg>#previous_page").replaceWith("<span class='disabled'>&lt; </span>")
		}
	})
})


$(function(){
	$(".digg").delegate("#previous_page","click",function(){
		var oldPage  = $(".digg>.current").html();
		var newPage =  parseInt(oldPage)-1;
		var obj = $(".digg>.current");
		$(".digg>.current").prev(".page").replaceWith("<span class='current'>"+newPage+"</span>");
		if(parseInt(oldPage)==2){
			$(this).replaceWith("<span class='disabled'>&lt; </span>");
		}
		obj.replaceWith("<a href='#?page="+oldPage+"' class='page'>"+oldPage+"</a>");
	})
})