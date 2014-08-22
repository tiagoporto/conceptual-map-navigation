	function resizePanel() {
		//get the browser width and height
		width = $(window).width();
		height = $(window).height();

		//get the mask width: width * total of items
		mask_width = width * $('.item').length;

		//set the dimension
		$('#is-wrapper, .item').css({width: width, height: height});
		$('#is-mask').css({width: mask_width, height: height});

		//if the item is displayed incorrectly, set it to the corrent pos
		$_divWrapper.scrollTo($('a.js-selected').attr('href'), 0);
	}

	//resize all the items according to the new browser size
	$(window).resize(function () {
		resizePanel();
	});