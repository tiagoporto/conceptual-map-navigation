	changeURL();

	var buttonScrollTo = $('.js-scroll-to');

	var divWrapper = $('#is-wrapper');

	var allLinksScroll = $('a.js-scroll-to');

	buttonScrollTo.click(function (){
		//reset and highlight the clicked link
		allLinksScroll.removeClass('selected');
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
			path.push(link.attr('href'));

			divWrapper.scrollTo(link.attr('href'), 700);
		}else if(link.hasClass('js-continue-path')){
			//Acrescenta o path anterior e atributo href do link no array e rola caminho por caminho até o id
			path.push(link.attr('data-path'), link.attr('href'));

			for(i = path.length - 2; i < path.length; i++){
				divWrapper.scrollTo($('' + path[i] + ''), 700);
			}
		}else if(link.hasClass('js-return-path')){
			//Retorna caminho do array

			for(i = path.length - 2; i >= 0; i--){
				path.pop();

				divWrapper.scrollTo($('' + path[i] + ''), 700);

				if(i == 0){
					path = new Array();

					path.push(link.attr('data-path'), link.attr('href'));

					divWrapper.scrollTo(link.attr('href'), 700);

					if(link.attr('href') == "#formacao-professor-autor"){
						path = new Array();
					}

				}else if(path[i] == link.attr('href')){
					break;
				}
			}

		}else{
			path.push(link.attr('data-path'), link.attr('href'));

			divWrapper.scrollTo(link.attr('href'), 700);
		}
		//console.log(path);
	}