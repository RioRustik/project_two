let films = [];

class Film
{
    // добавить атрибуты ввода фильма
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
                // добавить атрибуты ввода фильма
                title = document.getElementById('inputFirstServisForm').value,
                country = document.getElementById('inputSecondServisForm').value
            ));
            sessionStorage.setItem('str', JSON.stringify(films));
            test();
        }else{
            films.push(new Film(
                // добавить атрибуты ввода фильма
                title = document.getElementById('inputFirstServisForm').value,
                country = document.getElementById('inputSecondServisForm').value
            ));
            sessionStorage.setItem('str', JSON.stringify(films)); 
            test();

        }
        document.getElementById("inputFirstServisForm").value = "";
        document.getElementById("inputSecondServisForm").value = "";     
    }
}
function test()
{
    if(sessionStorage.getItem('str'))
    {
        films = JSON.parse(sessionStorage.getItem('str'));
        for(let i = 0; i < films.length; i++)
        {
            // проименовать переменные адекватно
            let d=document.createElement('div');
            d.classList.add('picture');
                let b=document.createElement('div');
                b.classList.add('front');
                b.classList.add('favorite-f');
                    let w=document.createElement('h2');
                    w.classList.add('s23');
                    w.innerHTML = films[i].title;
    
            document.getElementById('vid').appendChild(d);
            document.getElementsByClassName('picture')[i].appendChild(b);
            document.getElementsByClassName('front')[i].appendChild(w);
            
            
            let r=document.createElement('div');
            r.classList.add('back');
            r.classList.add('favorite-f-back');
                let t=document.createElement('div');
                t.classList.add('s33');
                    let y=document.createElement('div');
                    y.classList.add('s4');
                        let u=document.createElement('div');
                        u.classList.add('s5');
                        u.innerHTML = "Страна";
                        let o=document.createElement('div');
                        o.classList.add('s6');
                        o.innerHTML = films[i].country;
    
            document.getElementsByClassName('picture')[i].appendChild(r);
            document.getElementsByClassName('back')[i].appendChild(t);
            document.getElementsByClassName('s33')[i].appendChild(y);
            document.getElementsByClassName('s4')[i].appendChild(u);
            document.getElementsByClassName('s4')[i].appendChild(o);
            
            // дописать ввод вех остальных элементов аналогично вводу country
            // продумать как добавлять картинку не в innerHTML а в свойство определенного тиля как его атрибут
            // 
        }
    }
}
test();
