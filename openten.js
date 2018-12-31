require(['dojo/_base/kernel']);
function openUnstarNext10() {
	try {
		var children = $$("#headlines-frame > div[id*=RROW]");
		var processed = 0;
		children.each(function(child) {
			var id = child.getAttribute("data-article-id");
			console.log("openten: id: " + id + " processed: " + processed);
			if (child.hasClassName("marked")) { // only for starred articles!
				console.log("openten: id: " + id + " marked, get URL...");
				//get the URL, open and toggle marked.
				$$("#RROW-" + id + " > div.header > span > a.title").each(function(ahref){
					console.log("openten: open in background tab: " + ahref);
					res = window.open(ahref, '_blank');
					if (res == null) {
						alert("Could not open (all) new browser windows, please allow this host to open new windows/popups in your browser settings!");
						throw $break;
					}
					Headlines.toggleMark(id);
					processed++;
				});
			}
			if (processed >= 10) throw $break;
		});


	} catch (e) {
		exception_error("openten", e);
	}
}
