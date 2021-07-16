const PRONOUN = ['the','our','your','my'];
const ADJ = ['great','big','incredible','impeccable'];
const NOUN = ['investor', 'developer', 'kendoka','writer'];
const EXT= ['.com','.es','.io','.net'];

function generateDomain (p1, p2, p3, p4) {
    for(let a=0; a<p1.length; a++){
        for(let b=0; b<p2.length; b++){
            for(let c=0; c<p3.length; c++){
            	for(let d=0; d<p4.length; d++){
	                let dominio = p1[a] + p2[b] + p3[c] + p4[d];
	                let elemento = document.querySelector('#domain');
	 				elemento.innerHTML += '<li>' + dominio + '</li>';
	            }
            }
        }
    }
}
