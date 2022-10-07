const $acordeon = document.querySelectorAll('.sub-titles');
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

//Boton "quiero" para recibir informacion por whatsapp
function goWasaap(){
  
  let nombre = document.getElementById('nombre_cliente').value;
  let url = "https://api.whatsapp.com/send?phone=5493548436047&text=Hola SMART MONEY SCHOOL%0a, estoy interesado en los cursos.%0a"+
  " Mi nombre es: "+nombre+"%0a Espero su respuesta. Gracias";
  if(nombre != ""){
    window.open(url, '_blank');
    //limpiar casilla
    document.getElementById('nombre_cliente').value = "";
  }else{
    alerta();
  }
    
}

function alerta(){
  Swal.fire({
    icon: 'warning',
    text: 'Debe ingresar su nombre para poder contactarse con nosotros',
    setTimeout: 5000,
  })
}