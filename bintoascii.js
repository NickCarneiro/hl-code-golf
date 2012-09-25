input = '0110011001110101011000110110101100100000011011010110100101100011011100100110111101100011011011110110010001100101'
function b(bin) {
    if (bin.length % 8 != 0) {
        return false;
    } else {
        var output = ''
        for (i = 0; i < bin.length; i += 8) {
            substr = bin.substr(i, 8)
            output += String.fromCharCode(parseInt(substr, 2));                    
        }
		return output;
    }    
}
console.log(b(input)​​)