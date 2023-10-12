import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";

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

    const navigate = useNavigate();
    function handleGoBack() {
        navigate(-1);
    }
    return (
      <section>
      <h1> Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
        <h3>{producto.precio}</h3>
        <h2>{producto.id}</h2>
        <button onClick={handleGoBack}>Volver</button>
      </section>
    );
 }