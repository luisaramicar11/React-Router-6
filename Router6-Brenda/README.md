# Paso a paso para exponer el paso de parametros

1. Crear el componente Productos.jsx inicialmente asi:
   export function Productos() {
   const [productos, setProductos] = useState([
   { id: 1, nombre: "Producto 1", precio: 100 },
   { id: 2, nombre: "Producto 2", precio: 200 },
   { id: 3, nombre: "Producto 3", precio: 300 },
   { id: 4, nombre: "Producto 4", precio: 400 },
   { id: 5, nombre: "Producto 5", precio: 500 },
   ]);
   return (
     <section>
     <h1>Productos</h1>
     <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
     </section>
   );
   }

2. Voy a App.jsx y creo dentro del BrowserRouter creo la ruta donde renderizo ese componente Productos.jsx asi:
   <Route
   path="/productos"
   element={<Productos/>}></Route>
   Recordar importar el componente Productos.jsx

3. Voy a components y busco Menu.jsx y dentro de la nav antes del link de error404 pongo otro link asi:
<Link to="/productos">Productos</Link>

4. Vamos a ver como va quedando (nos damos cuenta que ya quedo una lista con los productos). Esa lista seria mejor si fueran enlaces de navigacion. Para eso vamos a hacer la url dinamica

5. Antes de seguir vamos al index.css y en el body quito el display: flex para que el menu se vea mas organizado

6. Volvemos al componente Producto y vamos a agregar en el li el Link con la construccion de la url dinamica:

import { Link } from "react-router-dom";
export function Productos() {
const [productos, setProductos] = useState([
{ id: 1, nombre: "Producto 1", precio: 100 },
{ id: 2, nombre: "Producto 2", precio: 200 },
{ id: 3, nombre: "Producto 3", precio: 300 },
{ id: 4, nombre: "Producto 4", precio: 400 },
{ id: 5, nombre: "Producto 5", precio: 500 },
]);
return (

<section>
<h1>Productos</h1>
<ul>
{productos.map((producto) => (
<li key={producto.id}>
<Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
</li>
))}
</ul>
</section>
);
}

Si vamos y renderizamos me va a salir Error404 porque todavia no tengo asignada la ruta dinamica en el App.jsx. Entonces vamos al App.jsx y debajo de la ruta de productos, escribo la ruta dinamica
<Route
path="/productos/:id"
element={<Productos/>} ></Route>
Ahora si renderizo voy a ver en la parte superior el cambio en la url, sin embargo para todos los productos me estaria renderizando el componente Producto cuando lo que me conviene seria renderizar el detalle de cada producto

7. Por eso vamos a hacer un componente llamado ProductoDetalle.jsx. Lo que hara esta pagina es capturar ese producto por id y en base a eso poder renderizar la informacion correspondiente al producto solicitado

export function ProductoDetalle() {
const [productos, setProductos] = useState([
{ id: 1, nombre: "Producto 1", precio: 100 },
{ id: 2, nombre: "Producto 2", precio: 200 },
{ id: 3, nombre: "Producto 3", precio: 300 },
{ id: 4, nombre: "Producto 4", precio: 400 },
{ id: 5, nombre: "Producto 5", precio: 500 },
]);
}
return (

<section>
<h1>Detalle del Producto</h1>
</section>
);
}

8. Como ya creamos el componente detalleProductos.jsx vamos a App.jsx y cambiamos en la ultima ruta que puse (la que tiene el paso de parametro el componente Producto por el componente ProductoDetalle), asi:

<Route
path="/productos/:id"
element={<ProductoDetalle/>} ></Route>

9. Ahora volvemos al componente ProductoDetalle.jsx. Para yo poder cachar el id tengo que hacer uso de un hook llamado useParams, que lo que hace es coger las variables que vienen por la url. Eso quiere decir que el useParams esta capturando el id. Si quieres poner un console.log(useParams()).

asi que dentro de la funcion ProductoDetalle escribo:

const {id}=useParams();

y creamos la constante productos

import { useParams} from "react-router-dom";
export function ProductoDetalle() {
const [productos, setProductos] = useState([
{ id: 1, nombre: "Producto 1", precio: 100 },
{ id: 2, nombre: "Producto 2", precio: 200 },
{ id: 3, nombre: "Producto 3", precio: 300 },
{ id: 4, nombre: "Producto 4", precio: 400 },
{ id: 5, nombre: "Producto 5", precio: 500 },
]);
const { id } = useParams();

const producto = productos.find((producto) => producto.id.toString() === id);

return (

<section>
<h1>Detalle del Producto</h1>
<h2>{producto.nombre}</h2>
<h2>{producto.id}</h2>
<h2>{producto.precio}</h2>
</section>
);
}

10. Para generar un enlace que me regrese a la lista de productos, puedo usar un hook que se llama useNavigate (que guarda el historial de navegacion que hemos recogido).
    para ello guardamos en una variable la ejecucion de ese hook, asi

    const navigate=useNavigate();

    Ahora creamos una funcion que maneje el ir hacia atras en las paginas y queda asi:

    function handleGoBack(){
    navigate(-1)
    }

ya solo me resta dentro del return poner un boton con esa funcion y queda al final todo
import { useParams, useNavigate } from "react-router-dom";
export function ProductoDetalle({ productos }) {
const { id } = useParams();

const navigate = useNavigate();
const producto = productos.find((producto) => producto.id.toString() === id);

function handleGoBack() {
navigate(-1);
}
return (

<section>
<h1>Detalle del Producto</h1>
<h2>{producto.nombre}</h2>
<h2>{producto.id}</h2>
<h2>{producto.precio}</h2>
<button onClick={handleGoBack}>Regresar</button>
</section>
);
}
