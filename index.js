let hamburguer = document.getElementById('Hamburguer');
let modal = document.getElementById('MenuMob');
let close = document.getElementById('close');

hamburguer.onclick = () => {
    modal.style.marginTop = '-220px'
}
close.onclick = () => {
    modal.style.marginTop = '-500%'
}




let contact = document.getElementById('ContactUs');

contact.onclick = () => {
    window.scroll(0, 3000);
}

let color = document.getElementById('imgColor');
let boton1 = document.getElementById('btn1');
let boton2 = document.getElementById('btn2');

boton1.onclick = () => {
    color.src = './00_Recursos/Tshirt1.png'
}
boton2.onclick = () => {
    color.src = './00_Recursos/Tshirt2.png'
}

let checkbox = document.getElementById('checkbox');

checkbox.onclick = () => {
        checkbox.innerText =
            'check_box'
        checkbox.onclick = () => {
            checkbox.innerText =
                'check_box_outline_blank'
        }
}



