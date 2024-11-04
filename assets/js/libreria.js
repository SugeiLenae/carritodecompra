
let LibrosVendidos = [];


const libros = [
    {id:1, photo:'https://images.cdn3.buscalibre.com/fit-in/360x360/c2/3c/c23c70613dc1a56084d04b3ce04cc890.jpg', name:'Heartless', author:'Marissa Meyer (Autor)', description:'Mucho antes de convertirse en el terror del País de las Maravillas, la Reina de Corazones era una chica que tan solo quería enamorarse.Catherine es una de las jóvenes más deseadas de Corazones...',price:23880},
    {id:2, photo:'https://images.cdn3.buscalibre.com/fit-in/360x360/c2/3c/c23c70613dc1a56084d04b3ce04cc890.jpg', name:'Heartless', author:'Marissa Meyer (Autor)', description:'Mucho antes de convertirse en el terror del País de las Maravillas, la Reina de Corazones era una chica que tan solo quería enamorarse.Catherine es una de las jóvenes más deseadas de Corazones...',price:23880}
]

function GenerarCatalogo(IdElemento, data){
    let div = document.getElementById(IdElemento);
    let htmlInject = '';

    data.forEach(Element=>{
        htmlInject += `
        <div class="col mb-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${Element.photo}"
                            class="card-img-top tamaño" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${Element.name}</h5>
                            <p>${Element.author}</p>
                            <p class="card-text">${Element.description} </p>
                            <center><a href="#" class="btn btn-primary" for="${Element.id}" onClick="AgregarLibro(${Element.id})"data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasWithBothOptions"><i class="fa-solid fa-cart-shopping"></i>
                                    ${Element.price}</a>
                            </center>
                            <input id="${Element.id}" type="checkbox" checked style="display: none;">
                        </div>
                    </div>
                </div>
        `
    });

    div.innerHTML = htmlInject;
}

function AgregarLibro (id){
    const valor = document.querySelector(`input[type="checkbox"][id="${id}"]`).checked;

    if(valor){
        let LibroAgregado = libros.find((libros1)=>libros1.id===id);
        console.log(LibroAgregado);
        LibrosVendidos.push(LibroAgregado);
        document.getElementById(id).checked = false;
    }else{
        let index = LibrosVendidos.findIndex((libros1)=>libros1.id===id);
        LibrosVendidos.splice(index,1);
        document.getElementById(id).checked = true;
    }
    console.log(LibrosVendidos);

    CalcularVenta();

}


function CalcularVenta()
{
    let total = LibrosVendidos.reduce((total, libro)=>{
        return total + libro.price;
    },0)

    document.getElementById('TotalLibros').innerHTML = Number(total).toLocaleString("es-CL");
    document.getElementById("resultado").innerHTML = '';
    LibrosVendidos.forEach((game)=>{
        document.getElementById("resultado").innerHTML+=`<div>${game.name} - $ ${game.price}</div>`
        })
}

GenerarCatalogo('Libros', libros);


