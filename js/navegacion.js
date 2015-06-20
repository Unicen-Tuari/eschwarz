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

  cargarHome();

  $("#home").on('click',cargarHome(event));

})
