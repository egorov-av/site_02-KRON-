function setEqualHeight(column) {
		var mainDivs = $(column); //Получаем все элементы с классом column
		var maxHeight = 0;
		for (var i = 0; i < mainDivs.length; ++i) {
			if (maxHeight < $(mainDivs[i]).height()) { //Находим максимальную высоту
				maxHeight = $(mainDivs[i]).height();
			}
		}
		for (var i = 0; i < mainDivs.length; ++i) {
			$(mainDivs[i]).height(maxHeight); //Устанавливаем всем элементам максимальную высоту
		}
}

$(document).ready(function () {
	setEqualHeight($('.column'));
});