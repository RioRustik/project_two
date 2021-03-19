document.getElementById('buttonFormThird').onclick = function() 
{
    if(document.getElementById('buttonFormThird').onclick)
    {   
        let strSaved = sessionStorage.getItem('strValue'),
            charArr = [],
            transformArr = [],
            transformStr,
            newstr;

        for(let i = 0; i<strSaved.length; i++)
        {
            charArr[i] = strSaved.charAt(i);
        }
        
        charArr.forEach(function(item) 
        {
            transformArr.push(test(item));
        });

        transformStr = transformArr.toString();
        newstr = transformStr.replace(/,/gi, '');
        
        alert(newstr);
    }
}

function test(item)
{
    let charReplac = document.getElementById('inputFirstFormThird').value;
    let   maxCharSaved = sessionStorage.getItem('maxCharStr');
    
    if(item==maxCharSaved){
        item=charReplac;
    }
    return item;
}