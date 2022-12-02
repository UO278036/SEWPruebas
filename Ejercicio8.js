"use strict";
class Meteo {
	constructor(){
		this.apikey = "d100878c0f46d2422aa60c1379f6eee7";
		this.codigoPais = "ES";
		this.unidades = "&units=metric";
		this.idioma = "&lang=es";
	}
	cargarDatos(){
		$.ajax({
			dataType: "json",
			url: this.url,
			method: 'GET',
			success: function(datos){
				var stringDatos = "<h2>Datos de Laviana desde <a href='https://openweathermap.org'>OpenWeatherMap</a></h2>";
					stringDatos += "<ul><li><img src=https://openweathermap.org/img/w/" + datos.weather[0].icon + ".png"+ " alt=IconoTiempo" +"></li>";
					stringDatos += "<li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
					stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
					stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
					stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
					stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
					stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
					stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
					stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
					stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
					stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
					stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
					stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
					stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
					stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
					stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
					 
					stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    console.log("El valor actual de los datos es " + stringDatos);
					

				$("section").html(stringDatos);

			},
			error:function(){
				$("h3").html("¡Tenemos problemas!"); 
				$("div").remove();
				$("h4").remove();
				$("p").remove();
			}
		});
	}
	crearElemento(tipoElemento, texto, insertarAntesDe){
		var elemento = document.createElement(tipoElemento); 
		elemento.innerHTML = texto;
		$(insertarAntesDe).before(elemento);
	}
	verOviedo(){
		$("h3").remove();
		$("div").remove();
		$("h4").remove();
		$("p").remove();
		this.ciudad = "Oviedo";
		this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.correcto = "¡Todo correcto!"
		this.crearElemento("h3",this.correcto,"#botonOviedo");
		this.crearElemento("div","","#botonOviedo");
		this.crearElemento("h4","Datos","#botonOviedo");
		this.crearElemento("p","","#botonOviedo");
		this.cargarDatos();
	}
	verLaviana(){
		$("h3").remove();
		$("div").remove();
		$("h4").remove();
		$("p").remove();
		this.ciudad = "Laviana";
		this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.correcto = "¡Todo correcto!"
		this.crearElemento("h3",this.correcto,"#botonOviedo");
		this.crearElemento("div","","#botonOviedo");
		this.crearElemento("h4","Datos","#botonOviedo");
		this.crearElemento("p","","#botonOviedo");
		this.cargarDatos();
	}
	verFelguera(){
		$("h3").remove();
		$("div").remove();
		$("h4").remove();
		$("p").remove();
		this.ciudad = "Felguera";
		this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.correcto = "¡Todo correcto!"
		this.crearElemento("h3",this.correcto,"#botonOviedo");
		this.crearElemento("div","","#botonOviedo");
		this.crearElemento("h4","Datos","#botonOviedo");
		this.crearElemento("p","","#botonOviedo");
		this.cargarDatos();
	}

	verVigo(){
		$("h3").remove();
		$("div").remove();
		$("h4").remove();
		$("p").remove();
		this.ciudad = "Vigo";
		this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.correcto = "¡Todo correcto!"
		this.crearElemento("h3",this.correcto,"#botonOviedo");
		this.crearElemento("div","","#botonOviedo");
		this.crearElemento("h4","Datos","#botonOviedo");
		this.crearElemento("p","","#botonOviedo");
		this.cargarDatos();
	}

	verLeon(){
		$("h3").remove();
		$("div").remove();
		$("h4").remove();
		$("p").remove();
		this.ciudad = "Leon";
		this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.correcto = "¡Todo correcto!"
		this.crearElemento("h3",this.correcto,"#botonOviedo");
		this.crearElemento("div","","#botonOviedo");
		this.crearElemento("h4","Datos","#botonOviedo");
		this.crearElemento("p","","#botonOviedo");
		this.cargarDatos();
		
	}
}
var meteo = new Meteo();