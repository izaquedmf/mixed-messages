const fs = require('fs');

//get all phrases from the files to insert into arrays
try{
    var pAstrology = fs.readFileSync('./Mixed Messages/messages/random astrology.txt','utf-8'); //astrology phrases
    pAstrology = pAstrology.split('\n').map(line => line.trim());

    var pFacts = fs.readFileSync('./Mixed Messages/messages/random facts.txt','utf-8'); //facts phrases
    pFacts = pFacts.split('\n').map(line => line.trim());

    var pQuotes = fs.readFileSync('./Mixed Messages/messages/random quotes.txt','utf-8'); //facts quotes
    pQuotes = pQuotes.split('\n').map(line => line.trim());
} catch(err){
    console.error("error to read a file",err );
}

/* concat all arrays and pass the result as argument for shuffleArray function.
allPhrases receive an array shuffled*/
const allPhrases = shuffleArray(pAstrology.concat(pFacts, pQuotes));

//insert a random item from AllPhrases into message variable
const message = selectMessage(allPhrases);

console.log(message);

function selectMessage(messages){
    return messages[Math.floor(Math.random() * messages.length)];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

