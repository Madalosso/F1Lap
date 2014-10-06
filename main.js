$(document).ready(function(){
  	$("p").click(function(){
    	$(this).hide();
	});
	$("#getData").click(function(){
		$.get("http://ergast.com/api/f1/2008/5/qualifying",function(data,status){
			alert("Status "+status +"DATA> "+data);
		});
	});
});