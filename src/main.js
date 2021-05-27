function imprimir_datos(datos){
	console.info('works?');
}


function agregar_datos(jsonKey){
	var lista = [];	
	let datos = [];	

	$.getJSON('datos.json',function (datos) {
		var lista = [];
		$.each(datos,function(llave, valor){
				lista.push({
					llave: llave,
					valor: valor});
			});
		})
		.done(function () {
			console.info('0: OK getJSON');
		})
		.fail(function(){
			console.error('0: error funcion getJSON');
		});

	for(const contenido of lista){
		if(contenido.llave = jsonKey)
			datos = contenido.valor
	}
}

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
			case 'Seguridad y dev ops':
				jsonKey = "server_dev_ops"
				break;
			case 'IA y análisis de datos':
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

		if (json_key.length > 0){
			agregar_datos(jsonKey);
		}else{console.warn('0: json_key vacio');}	

	});

});
