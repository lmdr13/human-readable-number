module.exports = function toReadable (number) {
    let map = new Map([
        ['1', 'one '],
        ['2', 'two '],
        ['3', 'three '],
        ['4', 'four '],
        ['5', 'five '],
        ['6', 'six '],
        ['7', 'seven '],
        ['8', 'eight '],
        ['9', 'nine '],
        ['0', ''],
        
    ]);
    let map10 = new Map([
        ['10', 'ten'],
        ['11', 'eleven'],
        ['12', 'twelve'],
        ['13', 'thirteen'],
        ['14', 'fourteen'],
        ['15', 'fifteen'],
        ['16', 'sixteen'],
        ['17', 'seventeen'],
        ['18', 'eighteen'],
        ['19', 'nineteen'],
        ['2', 'twenty '],
        ['3', 'thirty '],
        ['4', 'forty '],
        ['5', 'fifty '],
        ['6', 'sixty '],
        ['7', 'seventy '],
        ['8', 'eighty '],
        ['9', 'ninety '],        
        ['0', ''],
    ]);
    let str = '';
    let numstr = String(number);
    if (numstr.length == 3) {
        str += map.get(numstr[0]);
        str += 'hundred ';
        if (numstr[1] == 1)  { 
            str += map10.get(numstr.substring(1)) ; 
            return str; 
        }
        str += map10.get(numstr[1]);
        str += map.get(numstr[2]);
        if (str[str.length-1] == ' ') {
            return str.substring(0, str.length - 1);
        }
        return str;
    }

    else if (numstr.length == 2) {
        if (numstr[0] == 1)  { 
            str += map10.get(numstr.substring(0)); 
            return str; 
        }
        str += map10.get(numstr[0]);
        str += map.get(numstr[1]);
        if (str[str.length-1] == ' ') {
            return str.substring(0, str.length - 1);
        }
        return str;
    }
    if (number == 0) {
        return 'zero';
    }
    str += map.get(numstr[0]);
    return str.substring(0, str.length-1);
    
}