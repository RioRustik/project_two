let films = [];

document.getElementById('popup').onclick = function()
{
    if(document.getElementById('popup').onclick)
    {
        rer();
    }
}


document.getElementById('dsf').onclick = function()
{
    if(document.getElementById('dsf').onclick)
    {
        document.getElementById('servisForm').classList.remove('qq');
        document.getElementById('servisForm').classList.add('qq12');
        document.getElementById('servisForm1').classList.remove('qq12');
        document.getElementById('servisForm1').classList.remove('fq1');
        document.getElementById('servisForm1').classList.add('qq');
       
    }
}
document.getElementById('dsf1').onclick = function()
{
    if(document.getElementById('dsf1').onclick)
    {
        document.getElementById('servisForm').classList.add('qq');
        document.getElementById('servisForm').classList.remove('qq12');
        document.getElementById('servisForm1').classList.add('qq12');
        document.getElementById('servisForm1').classList.add('fq1');

        document.getElementById('servisForm1').classList.remove('qq');
    }
}

class Film
{
    constructor(title, country, genre, director, scenario, producer, operator, composer,  budget, money, rating, length, date, poster)
    {
        this.title = title;
        this.country = country;
        this.genre = genre;
        this.director = director;
        this.scenario = scenario;
        this.producer = producer;
        this.operator = operator;
        this.composer = composer;
        this.budget = budget;
        this.money = money;
        this.rating = rating;
        this.length = length;
        this.date = date;
        this.poster = poster;
    }
}
document.getElementById('buttonServisForm').onclick = function()
{
    if(document.getElementById('buttonServisForm').onclick)
    {
        if(sessionStorage.getItem('str')){
            films = JSON.parse(sessionStorage.getItem('str'));
            films.push(new Film(
                title = document.getElementById('inputFirstServisForm').value,
                country = document.getElementById('inputSecondServisForm').value,
                genre = document.getElementById('inputThirdServisForm').value,
                director = document.getElementById('inputFourthServisForm').value,
                scenario = document.getElementById('inputFifthServisForm').value,
                producer = document.getElementById('inputSixthServisForm').value,
                operator = document.getElementById('inputSeventhServisForm').value,
                composer = document.getElementById('inputEighthServisForm').value,
                budget = document.getElementById('inputNinthServisForm').value,
                money = document.getElementById('inputTenthServisForm').value,
                rating = document.getElementById('inputEleventhServisForm').value,
                length = document.getElementById('inputTwelfthServisForm').value,
                date = document.getElementById('inputThirteenthServisForm').value,
                poster = document.getElementById('inputFourteenthServisForm').value

            ));
            sessionStorage.setItem('str', JSON.stringify(films));
            i = films.length-1;
            myfunc(i);
        }else
        {
            films.push(new Film(
                title = document.getElementById('inputFirstServisForm').value,
                country = document.getElementById('inputSecondServisForm').value,
                genre = document.getElementById('inputThirdServisForm').value,
                director = document.getElementById('inputFourthServisForm').value,
                scenario = document.getElementById('inputFifthServisForm').value,
                producer = document.getElementById('inputSixthServisForm').value,
                operator = document.getElementById('inputSeventhServisForm').value,
                composer = document.getElementById('inputEighthServisForm').value,
                budget = document.getElementById('inputNinthServisForm').value,
                money = document.getElementById('inputTenthServisForm').value,
                rating = document.getElementById('inputEleventhServisForm').value,
                length = document.getElementById('inputTwelfthServisForm').value,
                date = document.getElementById('inputThirteenthServisForm').value,
                poster = document.getElementById('inputFourteenthServisForm').value

            ));
            sessionStorage.setItem('str', JSON.stringify(films)); 
            i = films.length-1;
            myfunc(i);
        }
        document.getElementById("inputFirstServisForm").value = "";
        document.getElementById("inputSecondServisForm").value = "";    
        document.getElementById('inputThirdServisForm').value = "";
        document.getElementById('inputFourthServisForm').value = "";
        document.getElementById('inputFifthServisForm').value = "";
        document.getElementById('inputSixthServisForm').value = "";
        document.getElementById('inputSeventhServisForm').value = "";
        document.getElementById('inputEighthServisForm').value = "";
        document.getElementById('inputNinthServisForm').value = "";
        document.getElementById('inputTenthServisForm').value = "";
        document.getElementById('inputEleventhServisForm').value = "";
        document.getElementById('inputTwelfthServisForm').value = "";
        document.getElementById('inputThirteenthServisForm').value = "";
        document.getElementById('inputFourteenthServisForm').value = ""; 
          
    }
}
test();
function test()
{
    if(sessionStorage.getItem('str'))
    {
        films = JSON.parse(sessionStorage.getItem('str'));
        for(let i = 0; i < films.length; i++)
        {
            myfunc(i);         
        }
    }
}
function myfunc(i)
{    
    // блок front
    let mainFront=document.createElement('div');
    mainFront.classList.add('picture');
        let labelTitle=document.createElement('div');
        labelTitle.classList.add('front');
        labelTitle.classList.add('favorite-f');
        if(films[i].poster=="")
            labelTitle.style.background = "    background: linear-gradient( rgba(255, 18, 18, 0), rgb(252, 11, 11) )";
        else
            labelTitle.style.backgroundImage=`url(${films[i].poster})`;   
        let title1=document.createElement('h2');
        title1.classList.add('s23');
        title1.innerHTML = films[i].title;
    // блок back
    let mainBack=document.createElement('div');
    mainBack.classList.add('back');
    mainBack.classList.add('favorite-f-back');
        let properties=document.createElement('div');
        properties.classList.add('s33');


    let deletFilm=document.createElement('button');
    deletFilm.classList.add('deletbuttun');
    deletFilm.innerHTML = "del";
    deletFilm.onclick = function () { 
            labelTitle.parentNode.remove();
            films.splice(i, 1);
            sessionStorage.setItem('str', JSON.stringify(films)); 
    };

    // блок страна
    let propCountry=document.createElement('div');
    propCountry.classList.add('s4');
        let labelCountry=document.createElement('div');
        labelCountry.classList.add('s5');
        labelCountry.innerHTML = "Страна:";
        let country1=document.createElement('div');
        country1.classList.add('s6');
        country1.innerHTML = films[i].country;
    // блок жанр
    let propGenre=document.createElement('div');
    propGenre.classList.add('s4');
        let labelGenre=document.createElement('div');
        labelGenre.classList.add('s5');
        labelGenre.innerHTML = "Жанр:";
        let genre1=document.createElement('div');
        genre1.classList.add('s6');
        genre1.innerHTML = films[i].genre;
    // блок режиссер
    let propDirector=document.createElement('div');
    propDirector.classList.add('s4');
        let labelDirector=document.createElement('div');
        labelDirector.classList.add('s5');
        labelDirector.innerHTML = "Режиссёр:";
        let director1=document.createElement('div');
        director1.classList.add('s6');
        director1.innerHTML = films[i].director;
    // блок сценарий
    let propScenario=document.createElement('div');
    propScenario.classList.add('s4');
        let labelScenario=document.createElement('div');
        labelScenario.classList.add('s5');
        labelScenario.innerHTML = "Сценарий:";
        let scenario1=document.createElement('div');
        scenario1.classList.add('s6');
        scenario1.innerHTML = films[i].scenario;
    // блок продюсер
    let propProducer=document.createElement('div');
    propProducer.classList.add('s4');
        let labelProducer=document.createElement('div');
        labelProducer.classList.add('s5');
        labelProducer.innerHTML = "Продюсер:";
        let producer1=document.createElement('div');
        producer1.classList.add('s6');
        producer1.innerHTML = films[i].producer;
    // блок оператор
    let propOperator=document.createElement('div');
    propOperator.classList.add('s4');
        let labelOperator=document.createElement('div');
        labelOperator.classList.add('s5');
        labelOperator.innerHTML = "Оператор:";
        let operator1=document.createElement('div');
        operator1.classList.add('s6');
        operator1.innerHTML = films[i].operator;          
    // блок композитор
    let propComposer=document.createElement('div');
    propComposer.classList.add('s4');
        let labelComposer=document.createElement('div');
        labelComposer.classList.add('s5');
        labelComposer.innerHTML = "Композитор:";
        let composer1=document.createElement('div');
        composer1.classList.add('s6');
        composer1.innerHTML = films[i].composer;         
    // блок бюджет
    let propBudget=document.createElement('div');
    propBudget.classList.add('s4');
        let labelBudget=document.createElement('div');
        labelBudget.classList.add('s5');
        labelBudget.innerHTML = "Бюджет:";
        let budget1=document.createElement('div');
        budget1.classList.add('s6');
        budget1.innerHTML = films[i].budget;
    // блок сборы
    let propMoney=document.createElement('div');
    propMoney.classList.add('s4');
        let labelMoney=document.createElement('div');
        labelMoney.classList.add('s5');
        labelMoney.innerHTML = "Сборы:";
        let money1=document.createElement('div');
        money1.classList.add('s6');
        money1.innerHTML = films[i].money;
    // блок рейтинг
    let propRating=document.createElement('div');
    propRating.classList.add('s4');
        let labelRating=document.createElement('div');
        labelRating.classList.add('s5');
        labelRating.innerHTML = "Рейтинг:";
        let rating1=document.createElement('div');
        rating1.classList.add('s6');
        rating1.innerHTML = films[i].rating;
    // блок длительность
    let propLength=document.createElement('div');
    propLength.classList.add('s4');
        let labelLength=document.createElement('div');
        labelLength.classList.add('s5');
        labelLength.innerHTML = "Длительность:";
        let length1=document.createElement('div');
        length1.classList.add('s6');
        length1.innerHTML = films[i].length;    
    // блок дата
    let propDate=document.createElement('div');
    propDate.classList.add('s4');
        let labelDate=document.createElement('div');
        labelDate.classList.add('s5');
        labelDate.innerHTML = "Дата выхода:";
        let date1=document.createElement('div');
        date1.classList.add('s6');
        date1.innerHTML = films[i].date;

    // блок front
    document.getElementById('vid1').append(mainFront);
    mainFront.append(labelTitle);
    labelTitle.append(title1);
    // блок back
    mainFront.append(mainBack);
    mainBack.append(properties);
    mainBack.append(deletFilm);
    // блок страна
    properties.append(propCountry);
    propCountry.append(labelCountry);
    propCountry.append(country1);
    // блок жанр
    properties.append(propGenre);
    propGenre.append(labelGenre);
    propGenre.append(genre1);
    // блок режиссер
    properties.append(propDirector);
    propDirector.append(labelDirector);
    propDirector.append(director1);
    // блок сценарий
    properties.append(propScenario);
    propScenario.append(labelScenario);
    propScenario.append(scenario1);
    // блок продюсер
    properties.append(propProducer);
    propProducer.append(labelProducer);
    propProducer.append(producer1);
    // блок оператор
    properties.append(propOperator);
    propOperator.append(labelOperator);
    propOperator.append(operator1);
    // блок композитор
    properties.append(propComposer);
    propComposer.append(labelComposer);
    propComposer.append(composer1);
    // блок бюджет
    properties.append(propBudget);
    propBudget.append(labelBudget);
    propBudget.append(budget1);
    // блок сборы
    properties.append(propMoney);
    propMoney.append(labelMoney);
    propMoney.append(money1);
    // блок рейтинг
    properties.append(propRating);
    propRating.append(labelRating);
    propRating.append(rating1);
    // блок длительность
    properties.append(propLength);
    propLength.append(labelLength);
    propLength.append(length1);
    // блок дата
    properties.append(propDate);
    propDate.append(labelDate);
    propDate.append(date1);       
}
document.getElementById('filterDate').onclick = function()
{
    if(document.getElementById('filterDate').onclick)
    { 
        films = JSON.parse(sessionStorage.getItem('str'));  
        let cal=document.getElementById('calendar').value;//поле календарь
        let g=document.getElementById('g').value;//;поле genre
        let c=document.getElementById('c').value;//поле country
        for(let i=0;i<films.length;i++)
        {  
           
            let str1=films[i].date;
            let string=films[i].genre;
            let string1=films[i].country;
            let elem =document.getElementsByClassName('picture')[i];

            // if(c!=""&&g!=""&&cal!="")
            // {
            //     if((string.indexOf(g) + 1)&&(string1.indexOf(c) + 1)&&(str1.indexOf(cal) + 1)){
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }
            // if(c!=""&&g!=""&&cal=="")
            // {
            //     if((string.indexOf(g) + 1)&&(string1.indexOf(c) + 1)) {
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }
            // if(cal!=""&&g!=""&&c==""){
            //     if((str1.indexOf(cal) + 1)&&(string.indexOf(g) + 1)) {
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }
            // if(cal!=""&&c!=""&&g==""){
            //     if((str1.indexOf(cal) + 1)&&(string1.indexOf(c) + 1)) {
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }
            // if(cal!=""&&c==""&&g==""){
            //     if((str1.indexOf(cal) + 1)){
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }
            // if(g!=""&&cal==""&&c==""){
            //     if((string.indexOf(g) + 1)){
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }
            // if(c!=""&&cal==""&&g==""){
            //     if((string1.indexOf(c) + 1)){
            //         console.log(films[i]);
            //     }else{
            //         elem.classList.remove('picture');
            //         elem.classList.add('none');
            //     }
            // }         
            if((cal=="")&&(g=="")&&(c=="")){

            }
           else if((cal="")&&(g=="")&&(c!="")){
                                if((string1.indexOf(c) + 1)){
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
            }
           else  if((cal=="")&&(c=="")&&(g!="")){
                                if((string.indexOf(g) + 1)){
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
            } 
           else if((g=="")&&(c=="")&&(cal!="")){
                                if((str1.indexOf(cal) + 1)){
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
            }
            else if((cal=="")&&(c!="")&&(g!="")){
                                if((string.indexOf(g) + 1)&&(string1.indexOf(c) + 1)) {
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
            }
           else if((g=="")&&(c!="")&&(cal!="")){
                                if((str1.indexOf(cal) + 1)&&(string1.indexOf(c) + 1)) {
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
            }
          else  if((c=="")&&(cal!="")&&(g!="")){
                                if((str1.indexOf(cal) + 1)&&(string.indexOf(g) + 1)) {
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
            }
            else{
                                if((string.indexOf(g) + 1)&&(string1.indexOf(c) + 1)&&(str1.indexOf(cal) + 1)) {
                                    console.log(films[i]);
                                }else{
                                    elem.classList.remove('picture');
                                    elem.classList.add('none');
                                }
         }
                            
                
                // document.getElementById('filterDate').onclick = function()
                // {
                //     if(document.getElementById('filterDate').onclick)
                //     { 
                //         films = JSON.parse(sessionStorage.getItem('str'));  
                //         for(let i=0;i<films.length;i++){  
                //             let elem =document.getElementsByClassName('picture')[i];
                //             let str1=films[i].date;
                //             let string=films[i].genre;
                //             let string1=films[i].country;
                //             let cal=document.getElementById('calendar').value;
                //             let g=document.getElementById('g').value;
                //             let c=document.getElementById('c').value;
                //             if(cal==""&&g==""){
                
                //             }else if(cal==""){
                //                 if((string.indexOf(g) + 1)||(string1.indexOf(g) + 1)) {
                //                     console.log(films[i]);
                //                 }
                //                 else{
                //                     elem.classList.remove('picture');
                //                     elem.classList.add('none');
                //                 }
                //             }else if(g==""){
                //                 if((str1.indexOf(cal) + 1)) {
                //                     console.log(films[i]);
                //                     console.log(cal);
                                  
                //                 }
                //                 else{
                //                     elem.classList.remove('picture');
                //                     elem.classList.add('none');
                //                 }
                //             }else{
                //                 if((string.indexOf(g) + 1)||(string1.indexOf(g) + 1)&&(str1.indexOf(cal) + 1)) {
                //                     console.log(films[i]);
                //                 }else{
                //                     elem.classList.remove('picture');
                //                     elem.classList.add('none');
                //                 }
                //             }   
                            
                //          }
                //     }
                // }
                
        }
     }
}
