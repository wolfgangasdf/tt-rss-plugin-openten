require(['dojo/_base/kernel']);
function openUnstarNext10() {
	// get all article div's which are marked==starred
	var children = document.querySelectorAll("#headlines-frame > div.marked[id*=RROW]");
	var processed = 0;
	for (let child of children) {
		var id = child.getAttribute("data-article-id");
		console.log("openten: id: " + id + " processed: " + processed);
		var ahref = document.querySelector("#RROW-" + id + " > div.header > span > a.title").href
		console.log("openten: open in background tab: " + ahref);
		res = window.open(ahref, '_blank');
		if (res == null) {
			alert("Could not open (all) new browser windows, please allow this host to open new windows/popups in your browser settings!");
			return;
		}
		Headlines.toggleMark(id); // toggle starred
		processed++;
		if (processed >= 10) break;
	}
}
