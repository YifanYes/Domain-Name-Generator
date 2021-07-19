const PRONOUNS = ['the','our','your','my'];
const ADJS = ['great','big','incredible','impeccable','just'];
const NOUNS = ['investor', 'lastOfUs','doit','malcom','italia','breathecode'];
const EXTS= ['com','es','io','net','it','de'];

window.onload = () => {
    let result = document.querySelector('#domain');
    let listDomain = generateDomain();
    for (const domain of listDomain){
        console.log(domain);
        result.innerHTML = result.innerHTML.concat('<li>',domain,'</li>');
    }
};

function generateDomain () {
    let domain = [];

    for(const pronoun of PRONOUNS){
        for(const adj of ADJS){
            for(const noun of NOUNS){
            	for(const extension of EXTS){
                    let firstPart = pronoun + noun;

                    if (checkExtension(firstPart,extension)) {

                        let auxList = [...firstPart];
                        auxList.splice(firstPart.length - extension.length, 0 , '.');
                        domain.push(auxList.join(''));
                    } else {
                        domain.push(firstPart + '.' + extension);
                    }
	            }
            }
        }
    }

    return domain;
}

const checkExtension = (domainFirstPart, extension) => {
    return domainFirstPart.includes(extension, domainFirstPart.length - extension.length);
};
