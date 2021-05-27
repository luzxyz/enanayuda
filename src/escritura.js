
function formato_texto(lista){
	return	`<li>\n<a href="${lista.url}"> ${lista.titulo}</a> \n <p> ${lista.descripcion} </p>\n</li>`;
}


function imprimir_datos(lista){
	let recursos = '<div class="pop_bubble">\n<ul>\n';
	let contador = 0;

	for (const indice in lista){
		if(contador > 2){
			recursos+='\n\n</ul>\n</div>\n\n<div class="pop_bubble">\n<ul>\n\n';	
			contador = 0;
		}
		recursos+="\n"+formato_texto(lista[indice]);
		contador++;
	}


	recursos+="\n\n</ul>\n</div>\n\n";
	
	$("#pop_datos").append(recursos);
}


function agregar_datos(jsonKey){
	// sustituir con el metodo de get o getJSON de JQuery cuando
	// se puedan realizar peticiones HTTP
	let lista = datos["datos"][0][jsonKey];

	$('#pop_datos .pop_bubble').remove();
	imprimir_datos(lista);
}

