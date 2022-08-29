var addTwoNumbers = function(l1, l2) {
    function reverse(num)
    {
        let reversed="";
        for(let i=num.length-1;i>=0;i--)
        {
          reversed+=num[i];
        }
        return Number(reversed)
    }
    let sum =reverse(l1)+reverse(l2);
    return sum;
};
//????????????