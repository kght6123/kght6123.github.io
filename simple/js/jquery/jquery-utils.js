/**
 * jQueryのSelector実行結果が存在するか判定する
 * 	[例] 
 * 		if ($("#id").exists()) {
 * 		  // #idが存在するとき
 * 		}
 */
jQuery.fn.exists = function(){return Boolean(this.size() > 0);}
jQuery.fn.notExists = function(){return !this.exists();}