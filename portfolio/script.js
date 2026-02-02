//------Project Page---------//
 document.addEventListener("DOMContentLoaded", () => {
    // Get all sliders
    const sliders = document.querySelectorAll(".project-slider");

    sliders.forEach(slider => {
        const slides = slider.querySelectorAll(".slide");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        let currentIndex = 0;

        // Show slide based on index
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
        }

        // Next slide
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        // Previous slide
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    });
});

//Modal Project Page//
function openModal() {
  document.getElementById("comingSoonModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("comingSoonModal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function(event) {
  const modal = document.getElementById("comingSoonModal");
  if (event.target == modal) {
    closeModal();
  }
}


//-------------------------------------------------------------------//
//-------Index Page-----//
//Header Index Page//
fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

// Navigation Links //
const links = document.querySelectorAll('.links-container ul a');
const logo =document.querySelector('.logo-container');
const sections =document.querySelectorAll('section[id]');

links.forEach(link =>{
  link.addEventListener('click', function() {
    // Remove "active" class from all links
    links.forEach(l => l.classList.remove('active'));
    // Add "active" class to the clicked link
    this.classList.add('active');
  });
});

logo.addEventListener('click', function() {
  links.forEach(l => l.classList.remove('active'));
  document.querySelector('.links-container ul a[href="#home"]').classList.add('active');
});

window.addEventListener('scroll', () => {
  // Get the current scroll position
  let scrollY = window.scrollY;

  // Loop through each section
  sections.forEach(section => {
    // Get section height and position
    let sectionHeight = section.offsetHeight;
    let sectionTop = section.offsetTop - 100; // Adjust this offset as needed
    let sectionId = section.getAttribute('id');

    // If the section is in view
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // Remove "active" from all links
      links.forEach(l => l.classList.remove('active'));

      // Add "active" to the matching nav link
      document
        .querySelector(`.links-container ul a[href="#${sectionId}"]`)
        .classList.add('active');
    }
  });
});

// sidebar //
const btn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close-btn')

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  closebtn.addEventListener('click',() => {
    sidebar.classList.remove('active');
  })

const contactLink = document.querySelector('.contactbttn a');
const contactSection = document.querySelector('#contact');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contactLink.classList.add('active');     // highlight when visible
        } else {
            contactLink.classList.remove('active');  // remove highlight when not visible
        }
    });
}, {
    threshold: 0.4   // 40% of the section needs to be visible
});

observer.observe(contactSection);



// filterable gallery //
const filterContainer = document.querySelector(".showcase");
const galleryContainer = document.querySelectorAll(".gallery-container");

filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-button")){

     // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

     // activate new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");

    galleryContainer.forEach((item) =>{

       if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
       }

       else{
        item.classList.remove("show");
        item.classList.add("hide");
       }

     });
   }
 });


 