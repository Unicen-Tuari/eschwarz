$('document').ready(function(){

	// Definicion de Variables
	grupo = 71;
	function guardarEquipo(grupo){
			var posicion = $("#posicion").val();
			$("#posicion").val('');
		  var equipo = $("#equipo").val();
			$("#equipo").val('')
		  var puntos = $("#puntos").val();
			$("#puntos").val('');
		  var informacion = [posicion, equipo, puntos];
		  var info = {
		      "group": grupo,
		      "thing": informacion
		      };

		  if (grupo && informacion){
		    $.ajax({
		       type: "POST",
		       dataType: 'JSON',
		       data: JSON.stringify(info),
		       contentType: "application/json; charset=utf-8",
		       url: "http://web-unicen.herokuapp.com/api/create",
					success: function(data){
							traerTabla(grupo);
			       },
			       error:function(data){
			         alert('No se pudo comunicar con el servidor');
			       }
		    });
		  }
	}

	function traerTabla(grupo){
	  $.ajax({
	     type: "GET",
	     dataType: 'JSON',
	     url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
	     success: function(data){
	        var posicion = "";
	        var equipo = "";
	        var puntos = "";
					var registro = "";
					$("#cuerpotabla").html('');
	        for (var i = 1; i < data.information.length; i++) {
		         posicion = data.information[i]['thing'][0];
		         equipo = data.information[i]['thing'][1];
		         puntos = data.information[i]['thing'][2];
		         registro = "<tr><td>" + posicion + "</td><td>" + equipo + "</td><td>" + puntos + "</td></tr>";
						$("#cuerpotabla").append(registro);
	        }

	     }
	  });
	}

		traerTabla(grupo);

		// Llama a la Funcion cargarActividades cuando se Presiona el Boton Correspondiente
		$('#agregar').on('click', function(event){
			event.preventDefault();
			guardarEquipo(grupo);
		});
	});
