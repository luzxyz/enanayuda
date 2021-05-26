
			<p class="menu-button">Web front-end</p>
			<p class="menu-button">Back-end</p>
			<p class="menu-button">Seguridad y dev ops</p>
			<p class="menu-button">IA y análisis de datos</p>
			<p class="menu-button">Matemáticas</p>
			<p class="menu-button">Programación videojuegos</p>
			<p class="menu-button">Otros</p>

$(document).ready(function(){

	$('.menu-button').click(()=>{
		let eleNombre = $(this).content;

		switch(eleNombre){

			case 'Web front-end':
				break;
			case 'Back-end':
				break;
			case 'Seguridad y dev ops':
				break;
			case 'IA y análisis de datos':
				break;
			case 'Matemáticas':
				break;
			case 'Videojuegos':
				break;
			case 'Otros';
				break;
		
		}

	});

});
