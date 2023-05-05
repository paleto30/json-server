import {
    addUser,
    addProduct,
    getOneUser,
    deleteProduct,
}from "./api.js";




const formulario = document.querySelector("#myForm");

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user = Object.fromEntries(new FormData(e.target));
    const userr = {
        email: document.querySelector("#email").value,
        pass: document.querySelector("#pass").value
    }
    
    addUser(userr);
    alert("Se ah registrado un usuario");
    formulario.reset();
})


const form =  document.querySelector("#myFormp");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const product = Object.fromEntries(new FormData(e.target));
    addProduct(product);  
    alert("Se ah registrado un producto"); 
    form.reset();
})



const body = document.querySelector("#xx");
let html = ''
for (let i = 0; i <= 5; i++) {

    html+= /*html*/`
        <tr>
            <td>${i}</td>
            <td>paleto@correo.com</td>
            <td>12123</td>
            <td>
            <button type="button" class="btn btn-danger borrar" data-user="${i}">drop</button>
            <button type="button" class="btn btn-info update" data-bs-toggle="modal" data-bs-target="#update" data-user="${i}" >update</button>
            </td>
        </tr>
    `
    body.innerHTML = html;
}



const tabla = document.querySelector("#tablaa");

console.log(tabla);

tabla.addEventListener("click",(e)=>{

    console.log(e);
    
    if (e.target.classList.contains("borrar")) { 
        const id = e.target.dataset;
        console.log(id);
        const confirma  =  confirm("¿desea eliminarlo?")
        if (confirma) {
            // deleteUser(id)
            console.log("se borro el usuario con id: ",id);
        }
    }
    
    
    
    if (e.target.classList.contains("update")) {
        document.querySelector("#emailU").value = "Andres lara",
        document.querySelector("#passU").value = "12345";
        document.querySelector("#")
    }

})


