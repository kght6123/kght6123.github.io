// Prettify
addEventListener("load", PR.prettyPrint, false);

$(function(){
	// 行をハイライトする処理
	$(".prettyprint").each(function(_index, _el){
		$($(_el).attr("class").split(" ")).each(function(_clsIdx, _clsName){
			var matchList = _clsName.match(/^hl:([1-9]+)$/);
			if(matchList && matchList.length > 1) {
				$("li.L" + (parseInt(matchList[1]) - 1), _el).addClass("pretty-highlight");
			}
		});
	});
	// コードをクリップボードにコピーする処理
	$("pre.prettyprint").click(function (_e) {
		var temp = document.createElement('div');
		temp.appendChild(document.createElement('pre')).textContent = this.innerText;
		
		document.body.appendChild(temp);
		document.getSelection().selectAllChildren(temp);
		document.execCommand('copy');
		document.body.removeChild(temp);
	});
});