var htmlTpl=new Array();


function getHtml(url,callBack){
	
	if(undefined == htmlTpl[url]){
		$.get(url, function(result){
			
			htmlTpl[url] = result;
		    callBack(result);
	    });
	}else{
		
		callBack(htmlTpl[url]);
		
	}
	
}

function postData(_url,_data,ok){
	
	$.ajax({
	    type: "POST",
	    cache:false,
	    async:true,
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",//返回值类型
	    url: _url,
	    data:JSON.stringify(_data),
	    success: ok,
	    error : function(xhr, ts, et) {
	    	alert("服务调用失败!");
        	 
	      
	    }
	});
}

function getData(_url,ok){
	
	$.ajax({
	    type: "GET",
	    cache:false,
	    async:true,
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",//返回值类型
	    url: _url,
	    success: ok,
	    error : function(xhr, ts, et) {
	    	alert("服务调用失败!");
         
	      
	    }
	});
}

function setHtml(result,data){
	  $("#list").html(template.render(result, data));
}

function setDataHtml(hrmlUrl,dataUrl){
	getHtml(hrmlUrl, 
			 function(result){
	               getData(dataUrl,function(data){
	            	   if(data.code==0){
	            		   setHtml(result,data);
	            	   }else{
	            		   alert(data.msg);
	            	   }
	            	   
	               });
	               
	        }
   );
}

