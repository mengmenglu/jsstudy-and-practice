/**
 * 
 */
Array.prototype.getMax=function(){//给数组对象添加了一个方法，叫getMax。

	var max=0;
	for(var x=1;x<this.length;x++){
		if (this[x]>this[max]){
			max=x;
		}
	}
	return this[max];
};
