let state = false;
const p = document.querySelectorAll("p");

function visibilityHidden(id){
    const divHavi = document.getElementById(id);
    divHavi.classList.toggle("hidden");
}

function botonLuz() {
    state = !state;
    if(state === true){
        //p[2].innerHTML = "Led Encendido";
        consultaGET("Encendido");
    } else {
        //p[2].innerHTML = "Led Apagado";
        consultaGET("Apagado");
    }
}

function consultaGET(consulta) {
	const Http = new XMLHttpRequest();
	console.log("Consultando " + consulta);
	Http.open("GET", consulta);
	Http.send();

	Http.onreadystatechange = (e) => {
		console.log(Http.status);
		console.log(Http.responseText);
	};
}
