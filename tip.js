function tip(){
    var a = parseInt(document.getElementById('user').value);
    var b = parseInt(document.getElementById('per').value);

    document.getElementById('output').innerHTML =  a + (a*(b/100))
}