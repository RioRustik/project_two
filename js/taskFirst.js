let str1 = document.getElementById('inputFirstFormFirst');
let str2 = document.getElementById('inputSecondFormFirst');
let str3 = document.getElementById('inputThirdFormFirst');
let str4 = document.getElementById('inputFourthFormFirst');
let str5 = document.getElementById('inputFifthFormFirst');

document.getElementById('buttonFormFirst').onclick = function() 
{
    if(document.getElementById('buttonFormFirst').onclick)
    {      
        if (str1.validity.valid&&
            str2.validity.valid&&
            str3.validity.valid&&
            str4.validity.valid&&
            str5.validity.valid) 
            {
                let inputData = [str1.value,
                            str2.value,
                            str3.value,
                            str4.value,
                            str5.value];

                bubbleSort(inputData);

                let elementsLargest = [],
                    finalArray = [],
                    elementLength=0, 
                    tV=0; /*temporary variable*/
                
                inputData.forEach(function(item) 
                {
                    elementLength=item.length;
                    if(elementLength>=tV)
                    {
                        elementsLargest.length++;
                            for(let j = 0; j < elementsLargest.length; j++)
                            {
                                if(elementLength>tV)
                                {
                                    elementsLargest[j] = item;
                                    break;
                                }
                                else if(elementsLargest[j]==null)
                                {
                                    elementsLargest[j] = item;
                                }        
                            }
                    tV=elementLength;       
                    }  
                });
                
                finalArray = elementsLargest.filter(function(item) 
                {
                    return item.length > 0;
                });
                
                alert(finalArray);
        }
    }
}

function lineSpace() 
{
    str1.value = str1.value.trim();
    str2.value = str2.value.trim();
    str3.value = str3.value.trim();
    str4.value = str4.value.trim();
    str5.value = str5.value.trim();
}

function bubbleSort(item) 
{
    var swapped;
    do 
    {
        swapped = false;
        for (var i = 0; i < item.length - 1; i++) 
        {
            if (item[i].length < item[i + 1].length) 
            {
                var temp = item[i];
                item[i] = item[i + 1];
                item[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
