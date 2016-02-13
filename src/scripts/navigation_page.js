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
