//Variável que guarda o caminho percorrido
var path = new Array();

var divWrapper = $('#is-wrapper');

var allLinksScroll = $('a.js-scroll-to');

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
		var c = ca[i].trim();
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

// if (currentPage == "discuss.php"){
// 	window.location = rootDirectory + "/course/view.php?id=" + courseID;
// }

//if(window.location.href == rootDirectory + "/course/view.php?id=" + courseID){
if(window.location.hash == ""){
	window.location.href = "#formacao-professor-autor";

	$('#js-home').addClass('js-selected');
}else{
	$('a[href="' + window.location.hash + '"]').addClass('js-selected');

	if (window.location.hash == '#uma-conversa-sobre-ead' || window.location.hash == '#habilidades-e-competencias-do-professor-autor' || window.location.hash == '#abordagens-pedagogicas' || window.location.hash == '#atividades-e-provas-para-ead') {
		path = ["#formacao-professor-autor", window.location.hash];

	} else if(window.location.hash == '#producao-de-materiais-em-ead'){
		path = ["#formacao-professor-autor", "#uma-conversa-sobre-ead", window.location.hash];

	}else if (window.location.hash == '#autoria-em-ead') {
		path = ["#formacao-professor-autor", "#habilidades-e-competencias-do-professor-autor", window.location.hash];

	} else if(window.location.hash == '#objetos-de-aprendizagem'){
		path = ["#formacao-professor-autor", "#abordagens-pedagogicas", window.location.hash];

	}else if (window.location.hash == '#provas') {
		path = ["#formacao-professor-autor", "#atividades-e-provas-para-ead", window.location.hash];


	}else if(window.location.hash == '#o-que-e-ead'){
		path = ["#formacao-professor-autor", "#uma-conversa-sobre-ead", "#path-2", window.location.hash];

	}else if (window.location.hash == '#direitos-autorais-e-normalizacao') {
		path = ["#formacao-professor-autor", "#habilidades-e-competencias-do-professor-autor", "#path-4", window.location.hash];

	} else if(window.location.hash == '#conceito'){
		path = ["#formacao-professor-autor", "#abordagens-pedagogicas", "#path-6", window.location.hash];

	}else if (window.location.hash == '#atividades-para-ead') {
		path = ["#formacao-professor-autor", "#atividades-e-provas-para-ead", "#path-8", window.location.hash];
	};
}

if(window.location.href == rootDirectory + "/course/view.php?id=" + courseID + "#section-0"){
	window.location.href = rootDirectory + "/course/view.php?id=" + courseID + "#formacao-professor-autor";

	//codigo duplicado de navigation_page.js resizePanel()
	width = $(window).width();
	height = $(window).height();

	//get the mask width: width * total of items
	mask_width = width * $('.item').length;

	//set the dimension
	$('#is-wrapper, .item').css({width: width, height: height});
	$('#is-mask').css({width: mask_width, height: height});

	//if the item is displayed incorrectly, set it to the corrent pos
	divWrapper.scrollTo($('#formacao-professor-autor'), 0);
}