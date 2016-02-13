	var breadcrumb = $(".breadcrumb > p");
   	var url = window.location;
	var url = url.toString();


	function changeURL(link){
		//URL
		if (link) {
			window.location.href = rootDirectory + "/course/view.php?id=" + courseID + link.attr('href');
		};

		if(window.location.href == rootDirectory + "/course/view.php?id=" + courseID + "#formacao-professor-autor"){
			$(".internal-side-nav").css('margin-left', '-500px');
			$(".home-side-nav").css('margin-left', '0');
			breadcrumb.empty();
			breadcrumb.append('Home');
		}else if(url.indexOf(rootDirectory + "/course/view.php?id=" + courseID + "#") >= 0){
			$(".internal-side-nav").css('margin-left', '0');
			$(".home-side-nav").css('margin-left', '-500px');
		}else{
			breadcrumb.empty();
			breadcrumb.append('<a href="' + rootDirectory + '/course/view.php?id=' + courseID + '#formacao-professor-autor' + '" class="js-scroll-to js-return-path">Home</a>');
		}

		//Marca o menu lateral
		$(".internal-side-nav a").removeAttr('style');
		$(".internal-side-nav a[href='" + window.location.hash + "']").addClass("is-visited js-selected").css('cursor', 'default');

		//Breadcrumb
		for (var i = 0; i <= path.length - 1; i++) {
			var linkName = $('a[href="' + path[i] + '"]').first().text();

			if (linkName == "") {
				continue;
			};

			var dataPath = $('a[href="' + path[i] + '"]').attr('data-path');


			switch(i){
				case 0:
					breadcrumb.empty();
					breadcrumb.append('<a href="' + path[i] + '" class="js-scroll-to js-return-path">' + linkName + '</a>' + ' &gt; ');
					break;

				case path.length - 1:

					if (path.length > 3) {
						breadcrumb.append(linkName + '<a href="' + path[i - 2] + '" class="js-scroll-to js-return-path is-back"> Voltar </a>');
					}else{
						breadcrumb.append(linkName + '<a href="' + path[i - 1] + '" class="js-scroll-to js-return-path is-back"> Voltar </a>');
					}

					break;

				default:
					breadcrumb.append('<a href="' + path[i] + '" data-path="' + dataPath + '" class="js-scroll-to js-return-path">' + linkName + '</a>' + ' &gt; ');
			};
		};

		$('.item .box-scroll').css('overflow-y', 'scroll');
	}