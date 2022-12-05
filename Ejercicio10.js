"use strict";
class Electricidad {

    constructor() { 
        this.first = true
        this.lang = "es"
        this.category = "mercados"
        this.err = "Error fecha introducida no valida"
        this.widget = "precios-mercados-tiempo-real"
        this.query = ""
        this.url = ""
        this.datos = ""
    }

    getPrecios() {
        var fecha = $("input:first").val()
        this.query = "start_date=" + fecha + "T00:00&end_date=" + fecha + "T23:59&time_trunc=hour"
        this.url = "https://apidatos.ree.es/" + this.lang + "/datos/" + this.category + "/" + this.widget + "?" + this.query
        this.cargarDatos(fecha)
    }

    cargarDatos(fecha) {
        if(this.first) this.first = false
        else $("section:last").remove()

        if(this.errorFormat(fecha)) return

        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: data => {
                this.datos = data;
                this.verDatos();           
            },
            error: () => {
                $("section").after("<section> </section>")
                $("section:last").append("<h3> ERROR </h3>")
                $("section:last").append("<p> " + this.err + " </p>");
            }
        });
    }

    errorFormat(fecha) {
        if(fecha == "" || fecha == null) 
        {
            $("section").after("<section> </section>")
            $("section:last").append("<h3> Error, fecha necesaria</h3>")
            $("section:last").append("<p> Es necesario introducir una fecha</p>");
            return true
            
        } else if(fecha.split("-")[0] > 2022 ||fecha.split("-")[0] < 2014)
         {
            $("section").after("<section> </section>")
            $("section:last").append("<h3> Error, fecha no valida </h3>")
            $("section:last").append("<p> Fecha no valida, revise las instrucciones</p>");
            return true
        }
        return false
    }

    verDatos() {
        $("section").after("<section> </section>")
        $("section:last").append("<h3> " + this.datos.data.attributes.title + " </h3>");
        $("section:last").append("<ul> </ul>")
        
        var i = 0
        var total = new Number(0)
        while(i < 24) {
            var instant = this.datos.included[0].attributes.values[i].datetime + ""

            var day = instant.substring(0,10) + ""
            var hour = instant.substring(11,16) + ""
            var precio = this.datos.included[0].attributes.values[i].value + ""

            total += new Number(precio)

            if(this.haveDot(precio) && (precio.split(".")[1] + "").length == 1) precio += "0"
            else if(!this.haveDot(precio)) precio += ".00"

            $("ul").append("<li> DIA [" + day + "] HORA [" + hour + "h]  PRECIO: " + precio + " € </li>")
            i++
        }

        var media = new Number(total / 24)
        $("ul").after("<p>Precio de la electricidad: " + Number(media.toFixed(2)) + "€ </p>")
        $("#result").val(Number(media.toFixed(2)));
    }

    haveDot(n) {
        var separated = (n + "").split(".")
        if(separated[1] == null) return false;
        return true;
    }
    
}

var electricidad = new Electricidad();
