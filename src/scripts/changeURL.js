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
