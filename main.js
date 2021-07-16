//Cada vez que se cliquea en el boton, llama a la funcion generateDomain y reemplaza el texto en el html
window.onload = () => {
	document.querySelector('#btn').addEventListener("click", () => {
		document.querySelector('#domain').innerHTML = generateDomain();
	});

};

//Genera un string random a partir de un array
let generateDomain = () => {

	let pronoun = ['the','our','your','my'];
	let adj = ['great','big','incredible','impeccable'];
	let noun = ['investor', 'developer', 'kendoka','writer'];
	let ext= ['.com','.es','.io','.net'];

	let pronounIndex = Math.floor(Math.random() * pronoun.length);
	let adjIndex = Math.floor(Math.random() * adj.length);
	let nounIndex = Math.floor(Math.random() * noun.length);
	let extIndex = Math.floor(Math.random() * ext.length);

	return pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ext[extIndex];
};