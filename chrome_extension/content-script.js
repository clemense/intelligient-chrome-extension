var abstracttext = document.querySelector('.abstract').innerText + '\n';

var sentences = [];
var sentence_sep = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/g;
var prev_match = 0;
while ((match = sentence_sep.exec(abstracttext)) != null) {
    sentences.push(abstracttext.slice(prev_match, match.index));
    prev_match = match.index;
}

const magicsauce = (592).toString(36).toLowerCase().split('').map(function (g) { return String.fromCharCode(g.charCodeAt() + (-71)) }).join('') + (17).toString(36).toLowerCase().split('').map(function (N) { return String.fromCharCode(N.charCodeAt() + (-39)) }).join('') + (28).toString(36).toLowerCase() + (16).toString(36).toLowerCase().split('').map(function (F) { return String.fromCharCode(F.charCodeAt() + (-71)) }).join('') + (1180361).toString(36).toLowerCase() + (16).toString(36).toLowerCase().split('').map(function (k) { return String.fromCharCode(k.charCodeAt() + (-71)) }).join('') + (879).toString(36).toLowerCase() + (16).toString(36).toLowerCase().split('').map(function (x) { return String.fromCharCode(x.charCodeAt() + (-71)) }).join('') + (20).toString(36).toLowerCase().split('').map(function (K) { return String.fromCharCode(K.charCodeAt() + (-39)) }).join('') + (18673).toString(36).toLowerCase() + (29).toString(36).toLowerCase().split('').map(function (H) { return String.fromCharCode(H.charCodeAt() + (-39)) }).join('') + (24169).toString(36).toLowerCase() + (23).toString(36).toLowerCase().split('').map(function (v) { return String.fromCharCode(v.charCodeAt() + (-71)) }).join('') + (function () { var Z = Array.prototype.slice.call(arguments), K = Z.shift(); return Z.reverse().map(function (U, C) { return String.fromCharCode(U - K - 28 - C) }).join('') })(8, 80, 158, 162, 77, 154, 154, 147, 156, 155, 144, 147, 69, 151) + (48177338).toString(36).toLowerCase() + (16).toString(36).toLowerCase().split('').map(function (F) { return String.fromCharCode(F.charCodeAt() + (-71)) }).join('') + (1895269089534638).toString(36).toLowerCase() + (30254).toString(36).toLowerCase() + (1024).toString(36).toLowerCase().split('').map(function (u) { return String.fromCharCode(u.charCodeAt() + (-71)) }).join('');
var improvedabstract = sentences.slice(0, -2).join('') + magicsauce + sentences.at(-1).trim().charAt(0).toLowerCase() + sentences.at(-1).trim().slice(1);

document.querySelector('.abstract').innerHTML = improvedabstract;
