let vocals = ["a","e","i","o","u","A","E","I","O","U"];
let counter = 0; 
let vocalFind = [];

function countSentences() {
    let  vocalInput = document.getElementById("vcinput").value

    for (let i = 0; i < vocalInput.length; i++) {
        const vocal = vocalInput[i];
    
        if(vocals.includes(vocal)) {
            counter++;
            vocalFind.push(vocal)
        }   
    }
    console.log(`Se encontraron ${counter} vocales, las cuales son: ${vocalFind}`);
    vocalInput = ""
};