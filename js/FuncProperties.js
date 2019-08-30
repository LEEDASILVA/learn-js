//eval()
//The argument of the eval() function is a string
//if it represent a expressin it evaluates the expressin 
console.log(eval("2 * 2"));

//uneval()
//converts an object(basacaly anithing to a string)
/*var a = uneval(function foo () {return 'hi';});
var foo = eval(a);
console.log(foo);*/

//isNaN()
//returns true if the given value is NaN otherwise false
function milliseconds(x) {
    if (isNaN(x)) {
        return 'Not a Number!';
    }
    return x*1000;
}

console.log(milliseconds(100),milliseconds("100S"))

//parseFloat()
//it returnsa floating point number, if its not a number it returns NaN
function circumference(r) {
    return parseFloat(r)*2.0*Math.PI;
}

console.log(circumference(4.567));
console.log(circumference('4.567was'));
console.log(circumference("asda"));

//parseInt(str :string, radix?: number) number
//basecaly returns the string on the base 10 
//base could be 16 10 2 ....
function roughScale(x, base) {
    var parsed = parseInt(x, base);
    return parsed * 100;
}

console.log(roughScale(' 0xF', 16));


//decodeURI()
//encodeURI()
//URI(Uniform Resource Identifier) é uma cadeia de caracteres compacta usada para identificar ou denominar um recurso na 
//Internet. O principal propósito desta identificação é permitir a interação com representações do recurso através de uma
//rede, tipicamente a Rede Mundial, usando protocolos específicos. URIs são identificados em grupos definindo uma sintaxe 
//específica e protocolos associados. 
var uri = 'https://github.com/?x=шеллы';
var encoded = encodeURI(uri);
console.log(encoded);

try {
    console.log(decodeURI(encoded));
} catch(e) {
    //catches a malformed URI
    console.error(e);
}

//decodeURIComponent(encodedURI)
//encodeURIComponent(encodeURI)
//the same thing that decodeURI but just a component of the URI 
console.log(decodeURIComponent('JavaScript__%D1%88%D0%B5%D0%BB%D0%BB%D1%8B'));

//escape(str)
//returns a new string in which certain characters have been escaped
console.log(escape('abáã'))
console.log(escape('ab'))

//unescape(str) does the opesed thing
console.log(unescape(escape('abśśâ')))