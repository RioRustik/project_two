let films = [];

class Film
{
    constructor(title, country) 
    {
        this.title = title;
        this.country = country;
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
                country = document.getElementById('inputSecondServisForm').value
            ));
            sessionStorage.setItem('str', JSON.stringify(films));
        }else{
            films.push(new Film(
                title = document.getElementById('inputFirstServisForm').value,
                country = document.getElementById('inputSecondServisForm').value
            ));
            sessionStorage.setItem('str', JSON.stringify(films));  
        }
        document.getElementById("inputFirstServisForm").value = "";
        document.getElementById("inputSecondServisForm").value = "";     
    }
}

if(sessionStorage.getItem('str'))
{
    films = JSON.parse(sessionStorage.getItem('str'));
    for(let i = 0; i < films.length; i++)
    {
        let d=document.createElement('div');
        d.classList.add('s2')
            let b=document.createElement('div');
            b.classList.add('s3');
            b.innerHTML = films[i].title;

            let w=document.createElement('div');
            w.classList.add('s3');
            w.innerHTML = films[i].country;
        document.getElementById('vid').appendChild(d);
        document.getElementsByClassName('s2')[i].appendChild(b);
        document.getElementsByClassName('s2')[i].appendChild(w);
        
        console.log(films[i])
    }
}