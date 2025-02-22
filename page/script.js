/**
@const slider : Elemento que contiene las imagenes
@const progressBar : Elemento que contiene la barra de progreso
@const images : Elementos que contienen las imagenes
@const totalImages : Cantidad de imagenes
@const index : Indice de la imagen actual
@const imagesPerView : Cantidad de imagenes por pantalla
@const totalSlides : Cantidad de slides

@function moveSlider : Mueve el slider
@const offset : Desplazamiento del slider
@const index : Indice de la imagen actual
@const totalSlides : Cantidad de slides
@const offset : Desplazamiento del slider

@setInterval : Mueve el slider cada 2 segundos
*/
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const progressBar = document.getElementById('progressBar');
  const images = slider.children;
  const totalImages = images.length;

  let index = 0;
  const imagesPerView = 2;
  const totalSlides = Math.ceil(totalImages / imagesPerView);

  function moveSlider() {
      index = (index + 1) % totalSlides;
      const offset = -(index * 100); // Desplaza por "pantalla completa"

      slider.style.transform = `translateX(${offset}%)`;

      progressBar.style.width = `${((index + 1) / totalSlides) * 100}%`;
  }

  setInterval(moveSlider, 2000);
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
});

/**
 *@addEventListener : Escucha el evento 'DOMContentLoaded' y ejecuta la función
 de movimiento de la navbar al hacer clic en los botones con sus respectivas animaciones
 */

document.addEventListener('DOMContentLoaded', () => {
  const BtnSobreNosotros = document.getElementById('BtnSobreNosotros');
  const SobreNosotros = document.getElementById('SobreNosotros');

  BtnSobreNosotros.addEventListener('click', () => {

      SobreNosotros.scrollIntoView({ behavior: 'smooth' });

      SobreNosotros.classList.remove('animate__animated', 'animate__fadeInUp');

      void SobreNosotros.offsetWidth;

      SobreNosotros.classList.add('animate__animated', 'animate__fadeInUp');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const BtnMenu = document.getElementById('BtnMenu');
  const Menu = document.getElementById('Menu');

  BtnMenu.addEventListener('click', () => {

      Menu.scrollIntoView({ behavior: 'smooth' });

      Menu.classList.remove('animate__animated', 'animate__fadeInUp');

      void Menu.offsetWidth;

      Menu.classList.add('animate__animated', 'animate__fadeInUp');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const BtnContacto = document.getElementById('BtnContacto');
  const Contacto = document.getElementById('Contacto');

  BtnContacto.addEventListener('click', () => {

      Contacto.scrollIntoView({ behavior: 'smooth' });

      Contacto.classList.remove('animate__animated', 'animate__fadeInUp');

      void Contacto.offsetWidth;

      Contacto.classList.add('animate__animated', 'animate__fadeInUp');
  });
});

let selectedDish = '';

  function selectDish(dish, element) {
    // Si ya se ha seleccionado un platillo, quitamos el estilo de selección
    const previousSelected = document.querySelector('.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }

    // Marcamos el platillo como seleccionado
    element.classList.add('selected');
    selectedDish = dish; // Guardamos el platillo seleccionado

    const messageField = document.getElementById('message');
    messageField.value = `¡Me gustaría pedir el siguiente platillo: ${selectedDish}\n\n${messageField.value}`; // Añadimos el platillo al mensaje

}

document.getElementById('whatsappButton').addEventListener('click', function(event) {
  event.preventDefault();
  const message = document.getElementById('message').value;
  const phoneNumber = "+584248973345"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});
