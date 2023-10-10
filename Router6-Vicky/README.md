# Paso a paso para exponer rutas anidadas

1. Voy a App.jsx y creo la ruta debajo de la de DetalleProducto asi:
   <Route path="/servicios" element={<h1>Servicios</h1>>}>
   <Route index element={<h2>Este es el home de servicios</h2>} />
   </Route>

   Al renderizar vamos a ver que se ve el titulo Servicios mas no el contenido del h2. Para arreglar ese problema vamos a hacer uso del Outlet.

2. Primero creamos un componente Servicios.jsx asi:

export function Servicios(){
return(
<><h1>Servicios</h1>
</>
)
}

Adicionalmente vamos a agregar el componente Outlet propio de react que va a representar cualquier contenido dentro de las rutas anidadas y queda asi:

export function Servicios(){
return(
<><h1>Servicios</h1>
<Outlet/>
</>)

3. Ahora volvemos App.jsx y renderizamos en componente Servicios donde antes teniamos el titulo Servicios y queda asi:

<Route path="/servicios" element={<Servicios/>}>
<Route index element={<h2>Este es el home de servicios</h2>} />
</Route>
Recordar hacer la importacion de Servicios.jsx

4.  Ahora renderizamos y vemos que el titulo h2 ya si se muestra.

5.  Ahora vamos a poner otras rutas anidadas asi:
    <Route path="garantia" element={<ServiciosGarantias />} />
    <Route
    path="lista"
    element={<ServiciosLista />}
    />

Como las rutas estan anidadas ya puedo omitir la ruta principal que es servicios por eso en el path ya no es necesario escribir path="servicios/garantia" sino solo path="garantia"

Recordar crear ese componente ServiciosGarantias. ServiciosLista e importarlo en el App.jsx
Tambien podemos cambiar ese titulo h2 con un componente llamado ServiciosHome.
Ambos componente basta con ponerles solo un titulo.

7. Voy al componente Servicios.jsx y creo un menu de navegacion asi:
   import { Link, Outlet } from "react-router-dom";
   export function Servicios() {
   return (
   <>
   <h1>Servicios</h1>
   <nav className="menu">
   <Link to="/servicios">Inicio</Link>
   <Link to="/servicios/garantia">Garantia</Link>
   <Link to="/servicios/lista">Lista</Link>
   </nav>
   <Outlet />
   </>
   );
   }

   8. Renderizo para mostrar que al dar click en Servicios ya aparece ese segundo menu de navegacion

   9. Ahora les hablas de la actividad. Recordar que se encuentra en el readme.md de la carpeta que se llama Router6 donde esta todo
