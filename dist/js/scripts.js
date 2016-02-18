/*!	Conceitual Map Navigation v0.0.1
*	http://tiagoporto.github.io/conceitual-map-navigation
*	Copyright (c) 2014-2016 Tiago Porto (http://tiagoporto.com)
*	Released under the MIT license
*/

jQuery(document).ready(function($) {

		//Caminho percorrido
	var currentPath = new Array(),
		$_divWrapper = $('#is-wrapper'),
		$_allLinksScroll = $('a.js-scroll-to'),
		$_buttonScrollTo = $('.js-scroll-to'),

		url = window.location,
		url = url.toString(),

		linkHome = "#home";

	window.linkPage1   = "#page1",
			linkPage11 = "#page11",
			linkPage12 = "#page12",
			linkPage13 = "#page13",
			linkPage2  = "#page2",
			linkPage21 = "#page21",
			linkPage22 = "#page22",
			linkPage23 = "#page23",
			linkPage3  = "#page3",
			linkPage31 = "#page31",
			linkPage32 = "#page32",
			linkPage33 = "#page33",
			linkPage4  = "#page4",
			linkPage41 = "#page41",
			linkPage42 = "#page42",
			linkPage43 = "#page43";

	function changeURL(link){
		if(window.location.hash == ""){
			window.location.href = linkHome;

			$('#js-home').addClass('js-selected');
		}else{
			$('a[href="' + window.location.hash + '"]').addClass('js-selected');

			for (var i = 1; i <= 4; ++i) {
				if (window.location.hash == window["linkPage" + i]){
					currentPath = [linkHome, window.location.hash];
				}

				for (var j = 1; j <= 3; ++j) {
					if(window.location.hash == window["linkPage" + i + j]){
						currentPath = [linkHome, window["linkPage" + i], window.location.hash];
					}
				}
			}
		}

		console.log(currentPath)
	}

	$_buttonScrollTo.click(function (){
		//reset and highlight the clicked link
		$_allLinksScroll.removeClass('selected');
		$(this).addClass('selected');

		//grab the current item, to be used in resize function
		current = $(this);

		//scroll it to the destination
		scroll($(this));

		window.location.href = $(this).attr('href');

		changeURL();

		return false;
	});

	function scroll(link){
		if(link.hasClass('js-direct-path')){
			//Acrescenta o atributo href do link no array e rola até o id
			currentPath.push(link.attr('href'));

			$_divWrapper.scrollTo(link.attr('href'), 700);
		}else if(link.hasClass('js-continue-path')){
			//Acrescenta o path anterior e atributo href do link no array e rola caminho por caminho até o id
			currentPath.push(link.attr('data-path'), link.attr('href'));

			for(i = currentPath.length - 2; i < currentPath.length; i++){
				$_divWrapper.scrollTo($('' + currentPath[i] + ''), 700);
			}
		}else if(link.hasClass('js-return-path')){
			//Retorna caminho do array

			for(i = currentPath.length - 2; i >= 0; i--){
				currentPath.pop();

				$_divWrapper.scrollTo($('' + currentPath[i] + ''), 700);

				if(i == 0){
					currentPath = new Array();

					currentPath.push(link.attr('data-path'), link.attr('href'));

					$_divWrapper.scrollTo(link.attr('href'), 700);

					if(link.attr('href') == "#formacao-professor-autor"){
						currentPath = new Array();
					}

				}else if(currentPath[i] == link.attr('href')){
					break;
				}
			}

		}else{
			currentPath.push(link.attr('data-path'), link.attr('href'));

			$_divWrapper.scrollTo(link.attr('href'), 700);
		}
		//console.log(currentPath);
	}

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
});