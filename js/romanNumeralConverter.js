function convertToRoman(num){
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L','XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    numbers.forEach(function(number, i){
        while(num >= number){
            result += roman[i];
            num -= number;
        }
    });
    return result;
}
//test
console.log(convertToRoman(2));