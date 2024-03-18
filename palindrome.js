function palindrome() {
    var s = document.getElementById('userInput').value;
    var i = 0;
    var j = s.length - 1;
    var b = false;
    while(i<=j){
        if(s[i]==s[j]){
            i = i+1;
            j = j-1;
        }
        else{
            return document.getElementById('check').innerHTML = "Not a palindrome"
        }
    }
    return document.getElementById('check').innerHTML = "is a palindrome"
}