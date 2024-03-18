function vowel() {
    var b = false
    var num = "0123456789 "
    var s = document.getElementById('userInput').value;
    var n = s.length;
    var vow = 0;
    var cons = 0;
    for(i=0;i<n;i++){
       if(s[i]== "a" || s[i] == "e"|| s[i] == "i" || s[i] == "o" || s[i] == "u"||s[i]=="A"||s[i] == "E"||s[i] == "I"|| s[i] =="O"||s[i] =="U") {
       vow = vow + 1;
    }
    for(j =0; j<num.length; j ++){
        if(s[i]==num[j]){
            b = true;

        }
    }
    if(b==false) {
        cons = cons + 1;
    }

}
document.getElementById('output').innerHTML = "vowels are : "  + vow + " consonants are : " + cons;
}