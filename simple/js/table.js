$(function(){
	var sidebarSize = 245;
	var tableCutBackWidthSidebar = sidebarSize + tweakWidth;
	var tableCutBackWidth = tweakWidth;
	var tableCutBackHeight = sidebarSize + tweakRollWidth;
	
	$(window).on("load resize", function() {
		var $table = $(tableSelector);
		var $tbody = $(tableSelector + " > tbody");
		var $thead = $(tableSelector + " > tbody");

		var always = $(tableSelector + ".always > tbody").exists()
		    && $(tableSelector + ".always > thead");
		
		if (window.matchMedia('(min-width: 850px)').matches) {/* 850px以上 */
			if(always) {
				$table.width("calc(100vw - " + tableCutBackWidthSidebar + "px)");
				$thead.width("calc(100vw - " + tableCutBackWidthSidebar + "px)");
				$tbody.width("calc(100vw - " + tableCutBackWidthSidebar + "px)");	
			} else {
				$table.width("calc(100vw - " + tableCutBackWidth + "px)");
				$thead.width("calc(100vw - " + tableCutBackWidth + "px)");
				$tbody.width("calc(100vw - " + tableCutBackWidth + "px)");
			}
			$tbody.heihgt("calc(100vh - " + tweakHeight + "px)");
		}
		if (window.matchMedia('(min-width: 400px)').matches
			&& window.matchMedia('(max-width: 849px)').matches) {/* 400px以上、849px以下 */
			$table.width("calc(100vw - " + tableCutBackWidth + "px)");
			$thead.width("calc(100vw - " + tableCutBackWidth + "px)");
			$tbody.width("calc(100vw - " + tableCutBackWidth + "px)");
			if($tbody.heihgt) $tbody.heihgt("calc(100vh - " + tweakHeight + "px)");
		}
		if (window.matchMedia('(max-width: 400px)').matches) {/* 400px以下 */
			$table.width("auto");
			$thead.width("auto");
			$tbody.width("auto");
			if($tbody.heihgt) $tbody.heihgt("calc(100vh - " + tweakHeight + "px)");
			if($thead.heihgt) $thead.heihgt("calc(100vh - " + tweakHeight + "px)");
		}
	});
	$(tableSelector + " > tbody").on("scroll", function() {
		if (window.matchMedia('(min-width:400px)').matches) {/* 400px以上 */
			$(tableSelector + " > thead").scrollLeft($(this).scrollLeft());
		} else {
			$(tableSelector + " > thead").scrollTop($(this).scrollTop());
		}
	});
	$(tableSelector + " tbody tr").on("click", function() {
		if($("[type=checkbox]", this).prop("checked")) {
			$("[type=checkbox]", this).prop("checked", false);
		} else {
			$("[type=checkbox]", this).prop("checked", true);
		}
	});
	$("[for=selected-h]").on("click", function() {
		if($("#selected-h:checked").exists()) {
			$("[name=selected]").prop("checked", false);
		} else {
			$("[name=selected]").prop("checked", true);
		}
	});
	
	$("[id^='selected-'][id!='selected-h']").on("click", function() {
		if($(this).prop("checked")) {
			$("#selected-h").prop("checked", false);
		}
	});
});