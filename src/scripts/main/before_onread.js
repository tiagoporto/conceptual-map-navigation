var path = new Array(), //Caminho percorrido
	divWrapper = $('#is-wrapper'),
	allLinksScroll = $('a.js-scroll-to'),

	url = window.location,
	url = url.toString(),

	linkHome = "#home",
	linkPage1 = "#page1",
	linkPage11 = "#page11",
	linkPage12 = "#page12",
	linkPage13 = "#page13",
	linkPage2 = "#page2",
	linkPage21 = "#page21",
	linkPage22 = "#page22",
	linkPage23 = "#page23",
	linkPage3 = "#page3",
	linkPage31 = "#page31",
	linkPage32 = "#page32",
	linkPage33 = "#page33",
	linkPage4 = "#page4",
	linkPage41 = "#page41",
	linkPage42 = "#page42",
	linkPage43 = "#page43";


if(window.location.hash == ""){
	window.location.href = linkHome;

	$('#js-home').addClass('js-selected');
}else{
	$('a[href="' + window.location.hash + '"]').addClass('js-selected');

	if (window.location.hash == '#uma-conversa-sobre-ead' || window.location.hash == '#habilidades-e-competencias-do-professor-autor' || window.location.hash == '#metodologias-em-ead' || window.location.hash == '#atividades-e-provas-para-ead') {
		path = ["#formacao-professor-autor", window.location.hash];

	} else if(window.location.hash == '#como-funciona-uma-fabrica-ead'){
		path = ["#formacao-professor-autor", "#uma-conversa-sobre-ead", window.location.hash];

	}else if (window.location.hash == '#perfil-do-professor-autor') {
		path = ["#formacao-professor-autor", "#habilidades-e-competencias-do-professor-autor", window.location.hash];

	} else if(window.location.hash == '#objetos-da-aprendizagem'){
		path = ["#formacao-professor-autor", "#metodologias-em-ead", window.location.hash];

	}else if (window.location.hash == '#provas') {
		path = ["#formacao-professor-autor", "#atividades-e-provas-para-ead", window.location.hash];



	}else if(window.location.hash == '#o-que-e-ead'){
		path = ["#formacao-professor-autor", "#uma-conversa-sobre-ead", "#path-2", window.location.hash];

	}else if (window.location.hash == '#direitos-autorais-e-normalizacao') {
		path = ["#formacao-professor-autor", "#habilidades-e-competencias-do-professor-autor", "#path-4", window.location.hash];

	} else if(window.location.hash == '#conceito'){
		path = ["#formacao-professor-autor", "#metodologias-em-ead", "#path-6", window.location.hash];

	}else if (window.location.hash == '#atividades-para-ead') {
		path = ["#formacao-professor-autor", "#atividades-e-provas-para-ead", "#path-8", window.location.hash];

	};
		console.log(path)
}