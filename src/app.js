import fetch  from 'node-fetch';

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    const filtrado = data.products.filter( p => p.price >= 1000 )
    const transformado = filtrado.map( p => {   return { nombre: p.title, precio: p.price, stock: p.stock, valuacion: p.price * p.stock } })
    console.log(transformado);
    
    let acum = 0
    transformado.forEach(element => {
      acum += element.valuacion
    });

    console.log(acum);
  })
  .catch(err => {
    console.error(err);
  });

