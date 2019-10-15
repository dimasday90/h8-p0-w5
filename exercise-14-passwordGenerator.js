function changeVocals (str) {
    var arrStr = str.split('')

    var vocal = 'aiueo'
    var change = 'bjvfp'
    for(var i = 0; i < vocal.length; i ++) {
        for(var j = 0; j < arrStr.length; j ++) {
            if(vocal[i] === arrStr[j]) {
                arrStr[j] = change[i]
            }
        }
    }
    return arrStr
}

function reverseWord (str) {
    var kata = changeVocals(str);
    var balikKata = kata.reverse().join('');
    return balikKata;
}

function setLowerUpperCase (str) {
    var bahan = reverseWord(str)
    var ubahHuruf = '';
    for(var i = 0; i < bahan.length; i ++) {
        if(bahan.charAt(i) === bahan.charAt(i).toUpperCase()) {
            ubahHuruf += bahan.charAt(i).toLowerCase()
        } else {
            ubahHuruf += bahan.charAt(i).toUpperCase()
        }
    }
    return ubahHuruf;
}

function removeSpaces (str) {
    var bahanSaring = setLowerUpperCase(str);
    var saring = ''
    for(var i = 0; i < bahanSaring.length; i ++) {
        if(bahanSaring[i] !== ' ') {
            saring += bahanSaring[i]
        }
    }
    return saring;
}

function passwordGenerator (name) {
    var jadi = removeSpaces(name);
    if(jadi.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    return jadi;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'