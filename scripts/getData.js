let btnhombre = document.getElementById("btnhombre");
let btnMujer = document.getElementById("btnMujer");

const getElementos = async (url) => {
    let mostrarElementos = document.querySelector(".grid-elementos");
    mostrarElementos.innerHTML = "";

    const resp = await fetch(url);
    const data = await resp.json();

    data.forEach((element) => {
        const { id,imagen, tipo, precio } = element;
        mostrarElementos.innerHTML += `
        <div class="col elementos">
        <a href="javascript:getItemDetalle ('${url}/${id}');" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">
                    <img src="${imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${tipo}</h5>
                            <p>Precio ${precio}</p>
                    </div>
                </div>
            </a>
        </div>

        `;
    });
};

btnhombre.addEventListener("click", () => {
    getElementos("http://localhost:4000/hombres");
});
btnMujer.addEventListener("click", () => {
    getElementos("http://localhost:4003/mujeres");
});

const getItemDetalle = async (url) => {
    let muestraRopaDetalle = document.querySelector(".detalle-elementos");
    let muestraMascota = document.querySelector(".grid-elementos");
    let muestraMascotas = document.querySelector("header");
    muestraMascota.classList.add("ocultarmascotas");
    muestraMascotas.classList.add("ocultarmascotas");
    muestraRopaDetalle.innerHTML = "";
    const resp = await fetch(url);
    const data = await resp.json();
    const { id, imagen,imagen1, imagen2, nombre, precio } = data;
    muestraRopaDetalle.innerHTML += `
          <div class="col mascotas-info">
          <a href="#" class="enlace-detalle-elemento"></a>
  
              <div class="card gradiente">     

              <div class="card-info" >
              <div id="Info1">
                  <div id="Info2>
                      <h1 class="card-text body2Bold">${nombre}</h1>
                      <p class="card-text body2Regular">${precio}</p>
                      <button id="carrito"><img id="imgCarrito" src="https://res.cloudinary.com/dvh5dsa7s/image/upload/v1638032117/APP_Principe_Fresco/CarIcon_pkayar.png" alt="" width="30" height="30"> 
                      </div>
                </div>
                <div>                 
                 <img src="${imagen}" class="card-img-info" alt="...">
                 <img src="${imagen1}" class="card-img-info" alt="...">
                 <img src="${imagen2}" class="card-img-info" alt="...">



                </div>
                  

  
  
                  </div>
  
              </div>
          </a>
      </div>
          `;



document.getElementById("carrito").addEventListener("click",() => {
    const favoritesString = localStorage.getItem("favorites") || "[]"
    const favorites = JSON.parse(favoritesString)
    toggleArrayItem(favorites,data)
    localStorage.setItem("favorites", JSON.stringify(favorites))
  })
};

function toggleArrayItem(array, value) {
const indice = array.findIndex(element => element.id === value.id);
if (indice === -1)
    array.push(value);
else
    array.splice(indice,1);
}


