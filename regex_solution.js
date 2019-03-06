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