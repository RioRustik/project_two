let strAnagramOne;
let strAnagramTwo;
document.getElementById('buttonFormFourth').onclick = function() 
{
    if(document.getElementById('buttonFormFourth').onclick)
    {  
        strAnagramOne = document.getElementById('inputFirstFormFourth').value;
        strAnagramTwo = document.getElementById('inputSecondFormFourth').value;
        strAnagramOne = strAnagramOne.replace(/\s/g, '');
        strAnagramTwo = strAnagramTwo.replace(/\s/g, '');
        console.log(strAnagramOne.length);
        console.log(strAnagramTwo.length);
        if(strAnagramOne.length == strAnagramTwo.length){
            let s1 = strAnagramOne.toLowerCase().split("").sort().join("");
            let s2 = strAnagramTwo.toLowerCase().split("").sort().join("");
            if (s1==s2) 
                alert(true);
            else
                alert(false);
        }
        else{
            alert(false);
        }
        
    }
}