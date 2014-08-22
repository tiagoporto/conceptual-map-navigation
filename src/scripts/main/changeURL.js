	function changeURL(link){
		if(window.location.hash == ""){
			window.location.href = linkHome;

			$('#js-home').addClass('js-selected');
		}else{
			$('a[href="' + window.location.hash + '"]').addClass('js-selected');

			if (window.location.hash == '#uma-conversa-sobre-ead' || window.location.hash == '#habilidades-e-competencias-do-professor-autor' || window.location.hash == '#metodologias-em-ead' || window.location.hash == '#atividades-e-provas-para-ead') {
				path = [linkHome, window.location.hash];

			} else if(window.location.hash == '#como-funciona-uma-fabrica-ead'){
				path = [linkHome, "#uma-conversa-sobre-ead", window.location.hash];

			}else if (window.location.hash == '#perfil-do-professor-autor') {
				path = [linkHome, "#habilidades-e-competencias-do-professor-autor", window.location.hash];

			} else if(window.location.hash == '#objetos-da-aprendizagem'){
				path = [linkHome, "#metodologias-em-ead", window.location.hash];

			}else if (window.location.hash == '#provas') {
				path = [linkHome, "#atividades-e-provas-para-ead", window.location.hash];



			}else if(window.location.hash == '#o-que-e-ead'){
				path = [linkHome, "#uma-conversa-sobre-ead", "#path-2", window.location.hash];

			}else if (window.location.hash == '#direitos-autorais-e-normalizacao') {
				path = [linkHome, "#habilidades-e-competencias-do-professor-autor", "#path-4", window.location.hash];

			} else if(window.location.hash == '#conceito'){
				path = [linkHome, "#metodologias-em-ead", "#path-6", window.location.hash];

			}else if (window.location.hash == '#atividades-para-ead') {
				path = [linkHome, "#atividades-e-provas-para-ead", "#path-8", window.location.hash];

			};
				console.log(path)
		}

	}