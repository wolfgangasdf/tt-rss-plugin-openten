require(['dojo/_base/kernel']);
function openUnstarNext10() {
	try {
		query = "#headlines-frame > div[id*=RROW]";
		var children = $$(query);
		var processed = 0;
		children.each(function(child) {
			var id = child.getAttribute("data-article-id");
			console.log("id: " + id + " " + processed);
			if (child.hasClassName("marked")) { // only for starred articles!
				//get the URL, open and toggle marked.
				$$("#RTITLE-" + id + " > a").each(function(ahref){
					console.log("XXX: " + ahref);
					window.open(ahref, '_blank')
					toggleMark(id, false);
					processed++;
				});
			}
			if (processed >= 10) throw $break; // TODO 10
		});


	} catch (e) {
		exception_error("shareArticle", e);
	}
}
