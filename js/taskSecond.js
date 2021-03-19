document.getElementById('buttonFormSecond').onclick = function() 
{
    if(document.getElementById('buttonFormSecond').onclick)
    {   
        let maxCharStr,
            strValue = "",
            strValueDoc;

        strValueDoc = document.getElementById('inputFirstFormSecond').value;
        strValue = strValueDoc.replace(/\s/g, '');
        
        maxCharStr = maxRecurringChar(strValue);

        sessionStorage.setItem('strValue', strValue);
        sessionStorage.setItem('maxCharStr', maxCharStr);

        alert(maxCharStr);
    }
}

function maxRecurringChar(text) 
{
    let charMap = {};
    let maxCharValue = 0;
    let maxChar = '';

    for (let char of text) 
    {
        if (charMap.hasOwnProperty(char)) 
            charMap[char]++
        else 
            charMap[char] = 1
    }

    for (let char in charMap) 
    {
        if (charMap[char] > maxCharValue) 
        {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}