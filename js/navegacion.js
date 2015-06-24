$(document).ready(function(){
	$(".home").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "home.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#clasificacion").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "clasificacion.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#cantitos").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "cantitos.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#caricaturas").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "caricaturas.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#otras").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "otras.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#torneo2015").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "torneo2015.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});


$(document).ready(function(){
	$("#vestimenta").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "vestimenta.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});


$(document).ready(function(){
	$("#contacto").on("click",function(event){
	event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "contacto.html",
			success: function(data){
				$("#contenido").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});
