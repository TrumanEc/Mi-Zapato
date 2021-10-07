function openNav() {
    document.querySelector('.pages').style.width = "100%";
}

function closeNav() {
    document.querySelector('.pages').style.width = "0%";
}


function like(heart){
    heart.style.color != 'red' ? heart.style.color = 'red' : heart.style.color = '#ccc';   
}


const createCard= (img,nombre,precio,referencia)=>{
    const content=`<div class="card" id="${nombre}" onclick="verProducto(this.id)">
                    <div class="like"onclick="like(this)">
                        <i id="heart" class="fas fa-heart"></i>
                    </div>
                    <img src="./img/${img}" alt="">
                    <div class="info">
                        <p class="nombre">${nombre}</p>
                        <p class="precio">$${precio}</p>
                    </div> 
                    
                </div>`;
    
    return content;
}

const cargarPublicaciones = () =>{
    const productos = document.querySelector('.productos');
    fetch('zapato.json')
        .then(respuesta => respuesta.json())
        .then(zapatos =>{
            zapatos.forEach(zapato => {
                const elemento = createCard(zapato.foto, zapato.nombre , zapato.precio, zapato.referencia);
                productos.innerHTML += elemento;
            });
        })
}
function obtenerProducto() {
    const cod = localStorage.getItem("referencia");
    console.log(cod)
    fetch('zapato.json')
        .then(respuesta => respuesta.json())
        .then(productos => {
            productos.forEach( producto => {
                if(producto.nombre == cod){
                    cargarProducto(producto.foto, producto.nombre , producto.precio, producto.referencia);
                }
            })
        })
}

function verProducto(cod) {
    localStorage.setItem("referencia", cod );
    window.open("./producto.html");
}



function cargarProducto(foto, nombre , precio, referencia){
    const picture = `<img src="./img/${foto}" alt="">
                    <div class="picture__types">
                        <img src="./img/${foto}" alt="">
                        <img src="./img/${foto}" alt="">
                        <img src="./img/${foto}" alt="">
                    </div>`;
    const info = `<p class="nombre">${nombre}</p>
                <p class=precio>$${precio}</p>
                <p class="referencia">Codigo del producto: ${referencia}</p>`;
    document.querySelector(".picture").innerHTML = picture;
    document.querySelector(".info").innerHTML = info;
    document.querySelector('#img-color').setAttribute('src',`./img/${foto}`);
}
