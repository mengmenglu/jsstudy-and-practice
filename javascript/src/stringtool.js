/**
 * 
 */
	
//给string添加一个去除两端空白的方法。trim();
string.prototype.trim=function(){
	
	//1.定义头角标和尾角标。
	var start=0,end=this.length-1;
	//去除前端空白。
	while(start<=end && this.charAt(start)==" "){
		start++;
	}

	//去除尾部空白。
	while(start<=end && this.charAt(end)==" "){
		end--;
	}
	return this.substring(start,end+1);
};
	