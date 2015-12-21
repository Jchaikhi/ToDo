$(document).ready(function(){

	$('ul').on("click", ".check", function(){ 

		$(this).parent('div').toggleClass('bar'); 
		compteur();

	});

	// bien joué les commentaires ;)
	$('form').on("submit", function(event){
		event.preventDefault();
		var add = $('input[name=text1]').val(); // definit une variable, et lui donne pour valeur la saisie de texte
		$('input[name="text1"]').val('');
		$('#ajout').append('<div class="newtext"> <input type="checkbox" class="check"> <a href="#" class="delete"></a>' + add + '</div>'); // ajoute une div qui va contenir se qui l'utilisateur a entrée
		$('.newtext').last().toggleClass('fond'); // modifie la couleur de la div definit juste au-dessus avec 'fond' qui es definit en css
		compteur();
	});	
// Indentation
	$('ul').on("click", ".delete", function(){ 

		$(this).parent('div').remove(); 
		compteur();

	});

	$('#all').click(function(){
		$('.newtext').show();
	});

	$('#cacher').click(function(){
		$('.bar').remove();
		$('.newtext').hide();
	});

	$('#active').click(function(){
		$('.newtext').show();
		$('.bar').hide();

	});

	$('#completed').click(function(){
		$('.newtext').hide();
		$('.bar').show();
	});
	
	// Préférer un verbe d'action pour d'écrire l'action de la fonction : 
	// updateCompteur() pour bien signaler que cela va changer les données Html.
	function compteur() {
		var compte = $('.newtext:not(.bar) ').length;
		if (compte>1) {
			$('#compter').text(compte + " " + "Elements");
		}

		else {
			$('#compter').text(compte + " " + "Elements");
		};
	}



 });