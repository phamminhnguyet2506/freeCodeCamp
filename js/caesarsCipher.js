//giá trị mỗi chữ cái tăng thêm 13 đvi
function rot13(str){
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var newStr = [];
    var newAbc = [];
    for(let i=0; i<abc.length; i++){
        let index = i+13;
        if(index>=26){
            index %= 26;
        }
        newAbc[i] = abc[index];
    }
    for(let i=0; i<str.length; i++){
        let index = abc.indexOf(str[i]);
        if(index === -1){
            newStr.push(str[i]);
        }
        else{
            newStr.push(newAbc[index]);
        }
    }
    return newStr.join("");
}
//test
console.log(rot13("SERR PBQR PNZC"));