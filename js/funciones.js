const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const verProducto = (id) => {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "pages/producto.html";
}

const cargarProducto = () => {
    return JSON.parse(localStorage.getItem("producto"));
}

const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.some(item => item.id === id);
}

const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();

    if (estaEnElCarrito(id)) {
        let pos = productos_carrito.findIndex(item => item.id === id);
        productos_carrito[pos].cantidad += 1;
        Toastify({
            text: "Producto agregado con éxito",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }   
    
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
}

const eliminarProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const productos = productos_carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}

const vaciarCarrito = () => {
    
    Swal.fire({
        title: 'Está a punto de perder todos los productos agregados al carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'vaciar carrito',
        cancelButtonText: 'No vaciar el carrito'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito");
            renderProductosCarrito();
            renderBotonCarrito();
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El archivo ha sido borrado'
            })
        }
    });

    
};

const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad, 0);
}

const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-light position-relative">
        <img src="../images/carrito.png" alt="Carrito" width="24">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}

const agregarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id);
    productos_carrito[pos].cantidad += 1;
    Toastify({
        text: "Producto agregado con éxito",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    guardarProductosCarrito(productos_carrito);
    renderProductosCarrito();
    renderBotonCarrito();
}

const eliminarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    let pos = productos_carrito.findIndex(item => item.id === id);
    productos_carrito[pos].cantidad -= 1;
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, red, yellow)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    if (productos_carrito[pos].cantidad == 0) {
        eliminarProducto(id);
    } else {
        guardarProductosCarrito(productos_carrito);
        renderProductosCarrito();
        renderBotonCarrito();
    }    
}

const buscarProducto = (id) => {
    const productos = cargarProductosLS();

    return productos.find(item => item.id === id);
}