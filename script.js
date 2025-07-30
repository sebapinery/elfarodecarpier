/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header")
  if (this.scrollY >= 50) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
function scrollReveal() {
  const sections = document.querySelectorAll(".section")

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight - 100) {
      section.classList.add("show")
    }
  })
}

window.addEventListener("scroll", scrollReveal)
window.addEventListener("load", scrollReveal)

/*=============== SLIDESHOW ===============*/
let slideIndex = 0
let slideInterval

function showSlides() {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")

  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  // Show current slide and activate current dot
  if (slides[slideIndex]) {
    slides[slideIndex].classList.add("active")
  }
  if (dots[slideIndex]) {
    dots[slideIndex].classList.add("active")
  }
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide")
  slideIndex++
  if (slideIndex >= slides.length) {
    slideIndex = 0
  }
  showSlides()
}

function currentSlide(n) {
  slideIndex = n - 1
  showSlides()
  resetSlideInterval()
}

function resetSlideInterval() {
  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 4000)
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", function() {
  showSlides()
  slideInterval = setInterval(nextSlide, 4000)
})

/*=============== GALLERY MODAL ===============*/
let galleryModal, galleryClose, galleryImages, galleryTitle

// Inicializar variables del modal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  galleryModal = document.getElementById("gallery-modal")
  galleryClose = document.querySelector(".gallery-close")
  galleryImages = document.getElementById("gallery-images")
  galleryTitle = document.getElementById("gallery-title")
  
  console.log('Modal elements:', { galleryModal, galleryClose, galleryImages, galleryTitle })
  
  // Close modal when clicking on X or outside the modal
  if (galleryClose) {
    galleryClose.addEventListener("click", closeGallery)
  }

  window.addEventListener("click", function(event) {
    if (event.target === galleryModal) {
      closeGallery()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && galleryModal && galleryModal.style.display === "block") {
      closeGallery()
    }
  })
})

// Gallery data
const galleryData = {
  'monoambiente': {
    title: 'Monoambiente',
    images: [
      './assets/img/portfolio/monoambiente/1.jpg',
      './assets/img/portfolio/monoambiente/2.jpg',
      './assets/img/portfolio/monoambiente/3.jpg',
      './assets/img/portfolio/monoambiente/4.jpg'
    ]
  },
  'dos-ambientes': {
    title: 'Dos Ambientes',
    images: [
      './assets/img/portfolio/dos_ambientes/1.jpg',
      './assets/img/portfolio/dos_ambientes/2.jpg',
      './assets/img/portfolio/dos_ambientes/3.jpg',
      './assets/img/portfolio/dos_ambientes/4.jpg',
      './assets/img/portfolio/dos_ambientes/5.jpg',
      './assets/img/portfolio/dos_ambientes/6.jpg'
    ]
  },
  'planta-alta-parejas': {
    title: 'Planta Alta (Parejas)',
    images: [
      './assets/img/portfolio/planta alta/1.jpg',
      './assets/img/portfolio/planta alta/2.jpg',
      './assets/img/portfolio/planta alta/3.jpg',
      './assets/img/portfolio/planta alta/4.jpg',
      './assets/img/portfolio/planta alta/5.jpg',
      './assets/img/portfolio/planta alta/6.jpg',
      './assets/img/portfolio/planta alta/7.jpg',
      './assets/img/portfolio/planta alta/8.jpg',
      './assets/img/portfolio/planta alta/9.jpg',
      './assets/img/portfolio/planta alta/10.jpg',
      './assets/img/portfolio/planta alta/11.jpg',
      './assets/img/portfolio/planta alta/12.jpg'
    ]
  },
  'planta-alta-4-adultos': {
    title: 'Planta Alta (4 Adultos)',
    images: [
      './assets/img/portfolio/planta alta/1.jpg',
      './assets/img/portfolio/planta alta/2.jpg',
      './assets/img/portfolio/planta alta/3.jpg',
      './assets/img/portfolio/planta alta/4.jpg',
      './assets/img/portfolio/planta alta/5.jpg',
      './assets/img/portfolio/planta alta/6.jpg',
      './assets/img/portfolio/planta alta/7.jpg',
      './assets/img/portfolio/planta alta/8.jpg',
      './assets/img/portfolio/planta alta/9.jpg',
      './assets/img/portfolio/planta alta/10.jpg',
      './assets/img/portfolio/planta alta/11.jpg',
      './assets/img/portfolio/planta alta/12.jpg'
    ]
  },
  'comedor': {
    title: 'Comedor',
    images: [
      './assets/img/portfolio/comedor/comedor_2.jpg',
      './assets/img/portfolio/comedor/comedor_3.jpg',
      './assets/img/portfolio/comedor/comedor_4.jpg',
      './assets/img/portfolio/comedor/comedor_5.jpg',
      './assets/img/portfolio/comedor/comedor_6.jpg'
    ]
  },
  'desayunos': {
    title: 'Desayunos Caseros',
    images: [
      './assets/img/portfolio/desayunos/desayunos_2.jpg',
      './assets/img/portfolio/desayunos/desayunos_3.jpg',
      './assets/img/portfolio/desayunos/desayunos_4.jpg'
    ]
  },
  'parque': {
    title: 'Parque',
    images: [
      './assets/img/portfolio/parque/parque_1.jpg',
      './assets/img/portfolio/parque/parque_2.jpg',
      './assets/img/portfolio/parque/parque_3.jpg',
      './assets/img/portfolio/parque/parque_4.jpg',
      './assets/img/portfolio/parque/parque_5.jpg',
      './assets/img/portfolio/parque/parque_6.jpg',
      './assets/img/portfolio/parque/parque_7.jpg',
      './assets/img/portfolio/parque/parque_8.jpg',
      './assets/img/portfolio/parque/parque_9.jpg',
      './assets/img/portfolio/parque/parque_10.jpg',
      './assets/img/portfolio/parque/parque_11.jpg',
      './assets/img/portfolio/parque/parque_12.jpg',
      './assets/img/portfolio/parque/parque_13.jpg',
      './assets/img/portfolio/parque/parque_14.jpg',
      './assets/img/portfolio/parque/parque_15.jpg',
      './assets/img/portfolio/parque/parque_16.jpg',
      './assets/img/portfolio/parque/parque_17.jpg'
    ]
  },
  'piscina': {
    title: 'Piscina',
    images: [
      './assets/img/portfolio/piscina/piscina_900px.jpg'
    ]
  }
}

function openGallery(galleryType) {
  console.log('openGallery called with:', galleryType)
  
  const data = galleryData[galleryType]
  if (!data) {
    console.error(`Galería no encontrada: ${galleryType}`)
    alert('Galería no encontrada')
    return
  }

  // Obtener elementos del modal
  const modal = document.getElementById("gallery-modal")
  const imagesContainer = document.getElementById("gallery-images")
  const titleElement = document.getElementById("gallery-title")
  
  if (!modal || !imagesContainer || !titleElement) {
    console.error('Elementos del modal no encontrados')
    alert('Error: No se pudo cargar la galería')
    return
  }

  console.log(`Abriendo galería: ${galleryType}`, data)
  
  // Actualizar título
  titleElement.textContent = data.title
  
  // Limpiar contenedor de imágenes
  imagesContainer.innerHTML = ""

  // Agregar imágenes
  data.images.forEach((imageSrc, index) => {
    const img = document.createElement("img")
    img.src = imageSrc
    img.alt = `${data.title} - Imagen ${index + 1}`
    img.className = "gallery-image"
    
    // Click para abrir imagen en tamaño completo
    img.onclick = () => {
      const fullScreenModal = document.createElement("div")
      fullScreenModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        cursor: pointer;
      `
      
      const fullScreenImg = document.createElement("img")
      fullScreenImg.src = imageSrc
      fullScreenImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      `
      
      fullScreenModal.appendChild(fullScreenImg)
      document.body.appendChild(fullScreenModal)
      
      fullScreenModal.onclick = () => {
        document.body.removeChild(fullScreenModal)
      }
    }
    
    // Manejo de errores
    img.onerror = function() {
      console.warn(`No se pudo cargar: ${imageSrc}`)
      this.style.display = 'none'
    }
    
    img.onload = function() {
      console.log(`Imagen cargada: ${imageSrc}`)
    }
    
    imagesContainer.appendChild(img)
  })

  // Mostrar modal
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal")
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

/*=============== IMAGE MODAL FOR FULL SIZE VIEW ===============*/
function openImageModal(imageSrc, title) {
  const modal = document.createElement("div")
  modal.className = "image-modal"
  modal.style.cssText = `
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `

  const img = document.createElement("img")
  img.src = imageSrc
  img.alt = title
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 0.5rem;
  `

  const closeBtn = document.createElement("span")
  closeBtn.innerHTML = "&times;"
  closeBtn.style.cssText = `
    position: absolute;
    top: 1rem;
    right: 2rem;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
    z-index: 2001;
  `

  modal.appendChild(img)
  modal.appendChild(closeBtn)
  document.body.appendChild(modal)

  function closeImageModal() {
    document.body.removeChild(modal)
  }

  modal.addEventListener("click", closeImageModal)
  closeBtn.addEventListener("click", closeImageModal)

  // Close with Escape key
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeImageModal()
    }
  })
}

/*=============== CLOUDBEDS WIDGET ===============*/
// El widget inmersivo de Cloudbeds se carga automáticamente
// No necesitamos código adicional ya que el script de Cloudbeds maneja todo

/*=============== NAVIGATION RESERVE BUTTON ===============*/
document.addEventListener('DOMContentLoaded', function() {
  const reserveBtn = document.querySelector('.nav__reserve-btn')
  
  if (reserveBtn) {
    reserveBtn.addEventListener('click', function() {
      // El widget de Cloudbeds se activará automáticamente
      // gracias al atributo data-be-url
      console.log('Botón de reserva clickeado')
    })
  }
  
  // Función de prueba para galerías
  window.testGallery = function() {
    console.log('Probando galería...')
    openGallery('monoambiente')
  }
  
  // Agregar botón de prueba temporal (remover después)
  const testBtn = document.createElement('button')
  testBtn.textContent = 'Test Galería'
  testBtn.onclick = testGallery
  testBtn.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 9999;
    padding: 10px;
    background: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `
  document.body.appendChild(testBtn)
})

/*=============== SMOOTH SCROLLING FOR ANCHOR LINKS ===============*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

/*=============== LAZY LOADING FOR IMAGES ===============*/
const images = document.querySelectorAll("img")
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.classList.add("fade-in-up")
      observer.unobserve(img)
    }
  })
})

images.forEach((img) => imageObserver.observe(img))

/*=============== FORM VALIDATION ===============*/
function validateForm() {
  const inputs = document.querySelectorAll(".form__input, .form__textarea")

  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.hasAttribute("required") && !this.value.trim()) {
        this.style.borderColor = "#e74c3c"
      } else {
        this.style.borderColor = "var(--border-color)"
      }
    })

    input.addEventListener("focus", function () {
      this.style.borderColor = "var(--first-color)"
    })
  })
}

document.addEventListener("DOMContentLoaded", validateForm)

/*=============== PRELOADER ===============*/
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader")
  if (preloader) {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 300)
  }
})

/*=============== CONTACT METHODS INTERACTION ===============*/
const reservationMethods = document.querySelectorAll(".reservation__method")

reservationMethods.forEach((method) => {
  method.addEventListener("click", function () {
    const icon = this.querySelector("i")

    if (icon.classList.contains("fa-phone")) {
      window.location.href = "tel:+543413164914"
    } else if (icon.classList.contains("fa-whatsapp")) {
      window.open(
        "https://wa.me/5493413164914?text=Hola, me gustaría hacer una consulta sobre disponibilidad en el hotel.",
        "_blank",
      )
    } else if (icon.classList.contains("fa-envelope")) {
      window.location.href = "mailto:elfarodecarpier@gmail.com?subject=Consulta de Reserva"
    }
  })
})

/*=============== SOCIAL LINKS FUNCTIONALITY ===============*/
const socialLinks = document.querySelectorAll(".social__link, .footer__social-link")

socialLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const icon = this.querySelector("i")

    if (icon.classList.contains("fa-facebook-f")) {
      window.open("https://facebook.com/elfarodecarpier", "_blank")
    } else if (icon.classList.contains("fa-instagram")) {
      window.open("https://instagram.com/elfarodecarpier", "_blank")
    } else if (icon.classList.contains("fa-whatsapp")) {
      window.open("https://wa.me/5493413164914", "_blank")
    }
  })
})

/*=============== DATE INPUT RESTRICTIONS ===============*/
const checkinInput = document.getElementById("checkin")
const checkoutInput = document.getElementById("checkout")

if (checkinInput && checkoutInput) {
  // Establecer fecha mínima como hoy
  const today = new Date().toISOString().split("T")[0]
  checkinInput.min = today

  checkinInput.addEventListener("change", function () {
    const checkinDate = new Date(this.value)
    const minCheckout = new Date(checkinDate)
    minCheckout.setDate(minCheckout.getDate() + 1)
    checkoutInput.min = minCheckout.toISOString().split("T")[0]

    if (checkoutInput.value && new Date(checkoutInput.value) <= checkinDate) {
      checkoutInput.value = ""
    }
  })
}

/*=============== LOADING ANIMATION FOR BUTTONS ===============*/
function addLoadingAnimation() {
  const buttons = document.querySelectorAll(".button")

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.type !== "submit" && this.getAttribute("href") && this.getAttribute("href").startsWith("#")) {
        return // No agregar loading a enlaces internos
      }

      const originalContent = this.innerHTML
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...'
      this.disabled = true

      setTimeout(() => {
        this.innerHTML = originalContent
        this.disabled = false
      }, 1500)
    })
  })
}

document.addEventListener("DOMContentLoaded", addLoadingAnimation)
