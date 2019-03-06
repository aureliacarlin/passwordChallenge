/*The Challenge:

Write a function, that takes in one parameter, N, where N is a string of whole positive integers and letters.
The function must take that string, and find the longest sub-string within that string, that
consists of only letters, and has at least 1 uppercase letter,
and return the length of that substring
*/

function gex(X){
    let lengths = [];
    try {
        let k = X.match(/\D+/g)
        console.log(k)
        for(let i = 0; i < k.length; i++){
            if(k[i].match(/[A-Z]/)) {
                lengths.push(k[i].length);
                //console.log(lengths)
            }
        }
        console.log(Math.max(...lengths))
    } catch (e) {
        console.log(-1)
    }
}

gex('aSdf345sdGf123lsjfij7463ASfght')