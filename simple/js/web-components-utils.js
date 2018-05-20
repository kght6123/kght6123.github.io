// http://www.html5rocks.com/ja/tutorials/webcomponents/template/

// 
// Web ComponentsのHTML Templates＆HTML Imports
// ＆ShadowDomを組み合わせてインポート
// 
function importHtml(_customTagName, _shadow) {
	// linkタグの取得
	var imports = 
		document.querySelector('link[href*="' + _customTagName + '"]').import;
	// templateタグの取得
	var templates = imports.querySelector('template');
	if(templates) {
		var contents = templates.content;
		// カスタムタグの取得
		var xcomponents = document.querySelectorAll('x-' + _customTagName);
		xcomponents.forEach(function(_xcomponent) {
			if(_shadow) {// ShadowDomを作成し注入
				_xcomponent.createShadowRoot().appendChild(contents.cloneNode(true));
			} else {
				_xcomponent.appendChild(contents.cloneNode(true));
			}
		});
	} else {
		console.log("templateタグが未定義です");
	}
}
