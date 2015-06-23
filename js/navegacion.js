$(document).ready(function(){

	function cargarHome(event){
		$.ajax({
			method:'GET',
			url:'home.html',
			dataType:'HTML',
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(data){
				$("#contenido").html('Error imposible cargar');
			}
		});
	}

  function cargarClasificacion(event){
		$.ajax({
			method:'GET',
			url:'caricaturas.html',
			dataType:'HTML',
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(data){
				$("#contenido").html('Error imposible cargar');
			}
		});
	}

  function cargarCantitos(event){
    $.ajax({
      method:'GET',
      url:'cantitos.html',
      dataType:'HTML',
      success: function(data){
        $("#contenido").html(data);
      },
      error: function(data){
        $("#contenido").html('Error imposible cargar');
      }
    });
  }

  function cargarCaricaturas(event){
    $.ajax({
      method:'GET',
      url:'caricaturas.html',
      dataType:'HTML',
      success: function(data){
        $("#contenido").html(data);
      },
      error: function(data){
        $("#contenido").html('Error imposible cargar');
      }
    });
  }

  function cargarOtras(event){
    $.ajax({
      method:'GET',
      url:'otras.html',
      dataType:'HTML',
      success: function(data){
        $("#contenido").html(data);
      },
      error: function(data){
        $("#contenido").html('Error imposible cargar');
      }
    });
  }

  function cargarTorneo2015(event){
    $.ajax({
      method:'GET',
      url:'torneo2015.html',
      dataType:'HTML',
      success: function(data){
        $("#contenido").html(data);
      },
      error: function(data){
        $("#contenido").html('Error imposible cargar');
      }
    });
  }

  function cargarVestimenta(event){
    $.ajax({
      method:'GET',
      url:'vestimenta.html',
      dataType:'HTML',
      success: function(data){
        $("#contenido").html(data);
      },
      error: function(data){
        $("#contenido").html('Error imposible cargar');
      }
    });
  }

  function cargarContacto(event){
    $.ajax({
      method:'GET',
      url:'contacto.html',
      dataType:'HTML',
      success: function(data){
        $("#contenido").html(data);
      },
      error: function(data){
        $("#contenido").html('Error imposible cargar');
      }
    });
  }



  cargarHome();

  $(".home").on('click',cargarHome(event));
  $("#clasificacion").on('click',cargarClasificacion(event));
  $("#cantitos").on('click',cargarCantitos(event));
  $("#caricaturas").on('click',cargarCaricaturas(event));
  $("#otras").on('click',cargarOtras(event));
  $("#torneo2015").on('click',cargarTorneo2015(event));
  $("#vestimenta").on('click',cargarVestimenta(event));
  $("#contacto").on('click',cargarContacto(event));
})
