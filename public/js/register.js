
//	En el codigo javascript hay que hacer la base de datos de los productos con un vector por ejemplo...




//BASE DE DATOS
	var usuarios = ["lety@gmail.com", "root@gmail.com"];
	var passwords = ["A12cB","12345"];	
	
//JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA:	
	window.onload = function(){

	

		
	
		//Botones que llevaran a cabo la ejecucion de determinadas secuencias de codigo JavaScript:
	
		document.getElementById("botonDatos").onclick = pideDatos;

		document.getElementById("botonConfirmar").onclick = validaDatos;
	}



//FUNCION DE PEDIR DATOS
	function pideDatos(elEvento) {
		document.getElementById("divDatos").className = "divsNo";
/**/	
/**/
		document.getElementById("botonPago").disabled = false;
	}	

	

	
//FUNCION DE VALIDACION DE DATOS PERSONALES:
	function validaDatosPersonales(elEvento) {

		var todoBien = true;
	
	
		 //Nombre:
			var vNombre = document.getElementById("nombre").value;
			if( vNombre == null || vNombre.length == 0 || /^\s+$/.test(vNombre) || !isNaN(vNombre)) {
				todoBien=false;
				document.getElementById("nombre").className = "textMal";
			}
			else{
				document.getElementById("nombre").className = "textBien";
			}	
	
	
		//DNI:	
			var vDNI = document.getElementById("dni").value;
			var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
			'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
			
			if( !(/^\d{8}[A-Z]$/.test(vDNI)) ) {
				todoBien=false;
				document.getElementById("dni").className = "textMal";
			}
			else{
				document.getElementById("dni").className = "textBien";
			}
			
			if(vDNI.charAt(8) != letras[(vDNI.substring(0, 8))%23]) {
				todoBien=false;
				document.getElementById("dni").className = "textMal";
			}	
			else{
				document.getElementById("dni").className = "textBien";
			}	
	
	
		//Fecha de nacimiento DIA:
			var vFechaNacimientoDia = document.getElementById("fechaNacimientoDia").selectedIndex;
			if( vFechaNacimientoDia == null || vFechaNacimientoDia == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoDia").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoDia").className = "textBien";
			}
		//Fecha de nacimiento MES:
			var vFechaNacimientoMes = document.getElementById("fechaNacimientoMes").selectedIndex;
			if( vFechaNacimientoMes == null || vFechaNacimientoMes == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoMes").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoMes").className = "textBien";
			}	
		//Fecha de nacimiento AÑO:
			var vFechaNacimientoAnio = document.getElementById("fechaNacimientoAnio").selectedIndex;
			if( vFechaNacimientoAnio == null || vFechaNacimientoAnio == 0 ) {
				todoBien=false;
				document.getElementById("fechaNacimientoAnio").className = "textMal";
			}
			else{
				document.getElementById("fechaNacimientoAnio").className = "textBien";
			}	
	
	
		//Telefono:
			var vMovil = document.getElementById("movil").value;
			if( !(/^\d{9}$/.test(vMovil))  ) {
				todoBien=false;
				document.getElementById("movil").className = "textMal";
			}
			else{
				document.getElementById("movil").className = "textBien";
			}	
	
	
		//email:
			var vEmail1 = document.getElementById("email1").value;
			var vEmail2 = document.getElementById("email2").value;

			//email 1
			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail1)) ) {
				todoBien=false;
				document.getElementById("email1").className = "textMal";
			}
			else{
				document.getElementById("email1").className = "textBien";
			}
			
			//email 2
			if( !(/^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(vEmail2)) ) {
				todoBien=false;
				document.getElementById("email2").className = "textMal";
			}
			else{
				document.getElementById("email2").className = "textBien";
			}

			//Comparacion email 1 y 2
			if (vEmail1 != vEmail2){
				todoBien=false;
				document.getElementById("email2").className = "textMal";
			}

			
		 //Localidad:
			var vLocalidad = document.getElementById("localidad").value;
			if( vLocalidad == null || vLocalidad.length == 0 || /^\s+$/.test(vLocalidad) || !isNaN(vLocalidad)) {
				todoBien=false;
				document.getElementById("localidad").className = "textMal";
			}
			else{
				document.getElementById("localidad").className = "textBien";
			}					

			
		//Codigo Postal:	
			var vCodigoPostal = document.getElementById("codigoPostal").value;
			if( vCodigoPostal.length!=5 || vCodigoPostal=="" || isNaN(vCodigoPostal) ) {
				todoBien=false;
				document.getElementById("codigoPostal").className = "textMal";
			}	
			else{
				document.getElementById("codigoPostal").className = "textBien";
			}	
	
	
		//Provincia:
			var vProvincia = document.getElementById("provincia").selectedIndex;
			if( vProvincia == null || vProvincia == 0 ) {
				todoBien=false;
				document.getElementById("provincia").className = "textMal";
			}
			else{
				document.getElementById("provincia").className = "textBien";
			}	
	
	
		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de mostrar el formulario de los datos personales:
		if (todoBien){
			validaDatos();
		}
		else{
			document.getElementById("botonConfirmar").disabled = true;
		}
	}
{}	


//FUNCION DE VALIDAR Registro
	function validaDatos(elEvento) {
		alert("Estas registrado ");
		window.location.reload()
	}

	
	
	
