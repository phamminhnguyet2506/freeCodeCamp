//palindrome: chuỗi đối xứng, k xét các kí tự k phải là chữ hoặc số
function palindrome(str){
    var newStr = str.replace(/[\W_]/g, '');
    //xóa các phần tử k phải là số hoặc chữ
    const l = newStr.length - 1;
    for(let i=0; i<l/2; i++){
        if(newStr[i].toLowerCase() !== newStr[l-i].toLowerCase()){
            return false;
        }
    }
    return true;
}
//test
console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));