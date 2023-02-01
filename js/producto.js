const productos = [
    {id:1, nombre:"Aceite Lira", precio:750, descripcion:"Aceite de Girasol marca Lira X 1.5L", imagen:"../images/lira.png", codigo: 30618 ,categoria:"cocina"},
    {id:2, nombre:"Mayonesa Hellmann`s", precio: 150, descripcion:"Mayonesa marca Hellmann`s X 237g", imagen:"../images/mayonesa.png", codigo:22094, categoria:"cocina"},
    {id:3, nombre:"Jardinera Okey", precio:113, descripcion:"Jardinera marca Pkey X 350g", imagen:"../images/okey.png", codigo:7993 , categoria:"cocina"},
    {id:4, nombre:"Nesquik", precio:200, descripcion:"Cacao para chocolatada marca Nesquik X 360g", imagen:"../images/nesquik.png", categoria:"cocina"},
    {id:5, nombre:"Yerba mate Amanda", precio:570, descripcion:"Paquete de yerba Mate Amanda X 1Kg elaborada con palo", imagen:"../images/amanda.png", categoria:"cocina"},
    {id:6, nombre:"Queso cremoso La Paulina", precio:1169, descripcion:"Queso cremoso marca La Paulina X 1Kg", imagen:"../images/quesocremoso.png", codigo:7516, categoria:"lacteos"},
    {id:7, nombre:"Mozzarella la Paulia", precio:1199, descripcion:"Queso Mozzarella marca La Paulina X 1Kg", imagen:"../images/mozzarella.png", codigo:8024,categoria:"lacteos"},
    {id:8, nombre:"Queso Dambo La Paulina", precio:1350, descripcion:"Queso Dambo marca La Paulina X Kg", imagen:"../images/quesodambo.png", codigo:8025,categoria:"lacteos"},
    {id:9, nombre:"Queso Pategras", precio:1699, descripcion:"Queso Pategras/Sandwich marca La Paulina X Kg", imagen:"../images/quesopategras.png", codigo:7219,categoria:"lacteos"},
    {id:10, nombre:"Queso rallado La Paulina", precio:449, descripcion:"Queso rallado marca Sancor X 150g", imagen:"../images/ralladosancor.png", codigo:2987,categoria:"lacteos"},
    {id:11, nombre:"Gancia", precio:249, descripcion:"Aperitivo Lima Limon Gancia X 470ml", imagen:"../images/latagancia.png", codigo:27176,categoria:"bebidas"},
    {id:12, nombre:"Vodka New Style", precio:529, descripcion:"Vodka marca New Style X l", imagen:"../images/vodkanewstyle.png", codigo:44628,categoria:"bebidas"},
    {id:13, nombre:"Speed", precio:219, descripcion:"Energizante marca Speed", imagen:"../images/speed.png", codigo:14373,categoria:"bebidas"},
    {id:14, nombre:"Agua Saborizada Levite", precio:317, descripcion:"Agua saborizada marca Levité sabor: Naranja - Manzana - Pomelo", imagen:"../images/levite.png", codigo:18305,categoria:"bebidas"},
    {id:15, nombre:"Vino Malbec Callia", precio:544, descripcion:"Vino Malbec bodega Callia X 750ml", imagen:"../images/malbeccalia.png", codigo:45576,categoria:"bebidas"},
];

    const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);




// const datos="../js/productos.JSON"
// const fasync=async()=>{
//     const res=await fetch(datos)
//     const data=await res.json()
//     return data
// }
// const productos=fasync()
// const guardarProductosLS = (productos) => {
//     localStorage.setItem("productos", JSON.stringify(productos));
// }

// const cargarProductosLS = () => {
//     return JSON.parse(localStorage.getItem("productos")) || [];
// }

// guardarProductosLS(productos);
// console.log(productos)



