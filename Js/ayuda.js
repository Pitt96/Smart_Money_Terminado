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
  
  let email = document.getElementById('email_cliente').value;
  let url = "https://api.whatsapp.com/send?phone=5493548436047&text=Hola SMART MONEY SCHOOL%0a, estoy interesado en los cursos.%0a"+
  " Mi email es: "+email+"%0a Espero su respuesta. Gracias";
  if(email != ""){
    window.open(url, '_blank');
  }else{
    alerta();
  }
    
}

function alerta(){
  Swal.fire({
    icon: 'warning',
    text: 'Debe llenar el campo de email para poder contactarse con nosotros',
    setTimeout: 5000,
  })
}