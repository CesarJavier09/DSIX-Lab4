const FECHA = new Date();
const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DIAS_SEMANA = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado"];

let mostrarFecha = () =>{
    let annio = FECHA.getFullYear();
    let mes = MESES[FECHA.getMonth()];
    let diaM = FECHA.getDate();
    let diaS = DIAS_SEMANA[FECHA.getDay()];
    let hora = "Hora: " + FECHA.getHours() + ":" + FECHA.getMinutes();
    document.write("<h1>Fecha Actual</h1><br>Hoy es, " + diaS+ " " +diaM+ " de " + mes + " de " + annio );
    alert(hora);
}

mostrarFecha();