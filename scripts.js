//PREMIUM
//4.Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.
const getRandom = (input) => {
    //Validación de que los valores no sean undefined 
    if (!Array.isArray(input)) {
        console.log('Esto no es un array. Vuelve a intentarlo');    
    };

    //Método forEach + Math.round(redondea al entero más dercano) + Math.random para devolver un valor del array aleatorio
    let valorAleatorio = input[Math.round(Math.random() * input.length)];
    return valorAleatorio;
};

//5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
const coloresAleatorios = ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'];

//6.Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
const gifsAleatorios = ['./assets/abracadabra.gif', './assets/magic-1.gif', './assets/magic-2.gif', './assets/magic-3.gif', './assets/magic-4.gif', './assets/magic-5.gif', './assets/magic-6.gif'];




//1.Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const cambiarLinks = () => {
    const links = document.querySelectorAll('a');

    for (let element of links) {
        element.addEventListener('click', event => event.preventDefault());
    }
    
};

cambiarLinks();



//2.Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const cambiarImagen = () => {
    const imagen = document.querySelectorAll('img');

    for (let i = 0; i< imagen.length; i++) {
     imagen[i].onclick = function () {
        imagen[i].setAttribute('src', './assets/magic-1.gif')
     }
    }

};

cambiarImagen();


//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const cambiarColores = () => {
    const parrafos = document.querySelectorAll('p');
    parrafos.forEach((element) => {
        element.onclick = () => {element.style.color = 'white', element.style.backgroundColor = 'black';}
    });
};

cambiarColores(); 

//2.3 Bloques de article o section: Cambia el color de fondo.
const cambiarColorArticle = () => {
    const articles = document.querySelectorAll('article');
    articles.forEach((element) => {
        element.onclick = () => element.style.backgroundColor = 'red';
    });
   
};

cambiarColorArticle(); 

const cambiarColorSection = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((element) => {
        element.onclick = () => element.style.backgroundColor = 'blue';
    });
};

cambiarColorSection();

//3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

//Versión INICIAL
/*const cambiarImagen2 = () => {
    const imagen = document.querySelectorAll('img');
   
    for (let element of imagen) {
        const originalValue = element.getAttribute('src');
        element.addEventListener('mouseenter', event => element.setAttribute('src', './assets/abracadabra.gif'));
        element.addEventListener('mouseleave', event => element.setAttribute('src', originalValue));
    }

};*/

//VERSIÓN CON GIF ALEATORIO
const cambiarImagen2 = () => {
    const imagen = document.querySelectorAll('img');
   
    for (let element of imagen) {
        const originalValue = element.getAttribute('src');
        let gifAleatorio = getRandom(gifsAleatorios);
        element.addEventListener('mouseenter', event => element.setAttribute('src', gifAleatorio));
        element.addEventListener('mouseleave', event => element.setAttribute('src', originalValue));
    }

};

cambiarImagen2();



//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const cambiarParrafos2 = () => {
    const parrafos = document.querySelectorAll('p');
    let colorAleatorio = getRandom(coloresAleatorios);

    for (let element of parrafos) {
        const originalColor = element.getAttribute('color');
        const originalBackground = element.getAttribute('backgroundColor');
        element.addEventListener('mouseenter', event => {
            element.style.color = colorAleatorio;
        element.style.backgroundColor = colorAleatorio});

        element.addEventListener('mouseleave', event => {
            element.style.color = originalColor;
            element.style.backgroundColor = originalBackground});
    }
};

cambiarParrafos2();


//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
const cambiarColorArticle2 = () => {
    const article = document.querySelectorAll('article');
    let colorAleatorio = getRandom(coloresAleatorios);

    article.forEach((element) => {
        const originalColor = element.getAttribute('color');
        element.addEventListener('mouseenter', event => element.style.color = colorAleatorio);
        element.addEventListener('mouseleave', event => element.style.color = originalColor);
        const originalBakcground = element.getAttribute('backgroundColor');
        element.addEventListener('mouseenter', event => element.style.backgroundColor = colorAleatorio);
        element.addEventListener('mouseleave', event => element.style.backgroundColor = originalBakcground);
    });

};

cambiarColorArticle2();

const cambiarColorSection2 = () => {
    const section = document.querySelectorAll('section');
    let colorAleatorio = getRandom(coloresAleatorios);

    section.forEach((element) => {
        const originalColor = element.getAttribute('color');
        element.addEventListener('mouseenter', event => element.style.color = colorAleatorio);
        element.addEventListener('mouseleave', event => element.style.color = originalColor);
        const originalBackground = element.getAttribute('backgroundColor');
        element.addEventListener('mouseenter', event => element.style.backgroundColor = colorAleatorio);
        element.addEventListener('mouseleave', event => element.style.backgroundColor = originalBackground);
    });

};

cambiarColorSection2();


