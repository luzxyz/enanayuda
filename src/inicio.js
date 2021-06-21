$(document).ready(function(){

	$('.menu-boton').click(function(){
		let eleNombre = $(this).text();
		let jsonKey = "";

		switch(eleNombre){

			case 'Front-end':
				jsonKey = "front_end"
				break;
			case 'Back-end':
				jsonKey = "back_end"
				break;
			case 'Seguridad y Dev ops':
				jsonKey = "server_dev_ops"
				break;
			case 'IA y Ciencia de datos':
				jsonKey = "ia_analisis"
				break;
			case 'Matemáticas':
				jsonKey = "matematicas"
				break;
			case 'Videojuegos':
				jsonKey = "videojuegos"
				break;
			case 'Otros':
				jsonKey = "otros"
				break;
			default:
				break;
		}

		if (jsonKey.length > 0){
			agregar_datos(jsonKey);
		}else{console.warn('0: json_key vacio');}	

	});

});
