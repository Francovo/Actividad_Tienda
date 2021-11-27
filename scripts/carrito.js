
const carro = localStorage.getItem("favorites")
const carroFav = JSON.parse(carro)

const endpointHombres = "http://localhost:4000/hombres"
const endpointMujeres = "http://localhost:4003/mujeres"


  const getCarrito = (carritofav) => {
    let muestraCarrito = document.querySelector(".muestra_carrito");
    muestraCarrito.innerHTML = "";
    carritofav.forEach( favorite => {
      const { id,imagen, tipo, precio} = favorite;
      let url;
      if (tipo === "mujer") {
         url = endpointMujeres
      }else{
         url = endpointHombres
      }

      muestraCarrito.innerHTML += `
      <div class="col elementos">
      <a href="javascript:Detalle_carrito ('${url}/${id}');" class="enlace-detalle-elemento">
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
  
  
  const Detalle_carrito = async (url) => {
    let muestra_mascota_fav = document.querySelector(".carro");
    muestra_mascota_fav.innerHTML = "";
    const resp = await fetch(url);
    const data = await resp.json();
    const {
      id,
      imagen,
      nombre,
      precio,
      imagen1,
      imagen2,
    } = data;
    muestra_mascota_fav.innerHTML += `
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
}


getCarrito(carroFav)