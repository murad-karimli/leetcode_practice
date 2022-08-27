var isPalindrome = function (x) {
    if(x<0) return false
    let z=x;
    let reverse= 0;
    while(z>0) {
       let digit=z%10;
       reverse=(reverse*10)+digit;
       z=parseInt(z/10);
    }
    if (reverse==x) {
        return true;
     }
    return false
};