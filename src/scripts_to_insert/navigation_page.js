	changeURL();
	validLinksVisited();

	$(document).on("click", "a.js-scroll-to",  function (){
		$('.item .box-scroll').css("overflow", "hidden");

		if ($(this).attr('href') == window.location.hash) {
			return false;
		};

		var date = new Date();

		date.setTime(date.getTime()+31536000000);

		document.cookie = $(this).attr('href') + "=Visited; expires=" + date.toGMTString() + "; path=/";

		validLinksVisited();

		//reset and highlight the clicked link
		allLinksScroll.removeClass('js-selected');
		$(this).addClass('js-selected');

		//grab the current item, to be used in resize function
		current = $(this);

		//scroll it to the destination
		scroll($(this));

		if ($(this).attr('href') != rootDirectory + "/course/view.php?id=" + courseID + "#formacao-professor-autor") {
			return false;
		};
	});

	function scroll(link){
		if(link.hasClass('js-direct-path')){
			//Acrescenta o atributo href do link no array e rola até o id
			path.push(link.attr('href'));

			divWrapper.scrollTo(
				link.attr('href'), 700, {
					onAfter:function(){
						changeURL(link);
						getContent(link.attr('href'));
					}
				}
			);
		}else if(link.hasClass('js-continue-path')){
			//Acrescenta o path anterior e atributo href do link no array e rola caminho por caminho até o id
			path.push(link.attr('data-path'), link.attr('href'));

			for(i = path.length - 2; i < path.length; i++){
				if (i == path.length - 1) {
					divWrapper.scrollTo(
						$('' + path[i] + ''), 700, {
							onAfter:function(){
								changeURL(link);
								getContent(link.attr('href'));
							}
						}
					);
				}else{
					divWrapper.scrollTo($('' + path[i] + ''), 700);
				}
			}

		}else if(link.hasClass('js-return-path')){
			//Retorna caminho do array
			for(i = path.length - 2; i >= 0; i--){
				path.pop();

				if(path[i] != link.attr('href')){
					divWrapper.scrollTo($('' + path[i] + ''), 700);
				}else{
					divWrapper.scrollTo(
						$('' + path[i] + ''), 700, {
							onAfter:function(){
								if(path[i] == link.attr('href')){
									changeURL(link);
								}
							}
						}
					);
				}

				if(i == 0){
					path = new Array();

					path.push(link.attr('data-path'), link.attr('href'));

					divWrapper.scrollTo(
						link.attr('href'), 700, {
							onAfter:function(){
								changeURL(link);
							}
						}
					);

					if(link.attr('href') == "#formacao-professor-autor"){
						path = new Array();
					}

				}else if(path[i] == link.attr('href')){
					break;
				}
			}
		}else{
			path.push(link.attr('data-path'), link.attr('href'));

			divWrapper.scrollTo(
				link.attr('href'), 700, {
					onAfter:function(){
						changeURL(link);
					}
				}
			);
		}

	}

	//resize all the items according to the new browser size
	$(window).resize(function () {
		resizePanel();
	});

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
		divWrapper.scrollTo($('a.js-selected').attr('href'), 0);
	}