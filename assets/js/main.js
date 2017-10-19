; // Start custom code
function setEqualHeight(column) {
	var mainDivs = $(column);
	var maxHeight = 0;
	for (var i = 0; i < mainDivs.length; ++i) {
		if (maxHeight < $(mainDivs[i]).height()) {
			maxHeight = $(mainDivs[i]).height();
		}
	}
	for (var i = 0; i < mainDivs.length; ++i) {
		$(mainDivs[i]).height(maxHeight);
	}
}

$(document).ready(function () {
	setEqualHeight($('.column'));
});
