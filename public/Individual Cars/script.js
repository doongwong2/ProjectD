$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    slidesPerView: 4,
    centeredSlides: false,
    roundLengths: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChange: function () {                 
        console.log(this.realIndex);
        updateCars(passedIndex,this.realIndex);
      }
    }
  });
  mySwiper.slideTo(passedCarIndex+4,0);
});
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
const passedIndex = parseInt(getQueryParam('Index'), 10) || 0;
const passedCarIndex = parseInt(getQueryParam('carIndex'), 10) || 0;
  

const Cars = new Array();
Cars[0] = [
  "../Show Room/cars/TURENO [AE86].png",
  "../Show Room/cars/LEVIN [AE86].png",
  "../Show Room/cars/LEVIN [AE85].png",
  "../Show Room/cars/MR2 [SW20].png",
  "../Show Room/cars/MR-S [ZZW30].png",
  "../Show Room/cars/ALTEZZA [SXE10].png",
  "../Show Room/cars/CELICA [ST205].png"
];
Cars[1] = [
  "../Show Room/cars/SKYLINE GT-R [BNR32].png",
  "../Show Room/cars/SKYLINE GT-R [BNR34].png",
  "../Show Room/cars/SKYLINE 25GT-T [ER34].png",
  "../Show Room/cars/SILVIA K's [S13].png",
  "../Show Room/cars/SILVIA Q's [S14].png",
  "../Show Room/cars/SILVIA K's [S14].png",
  "../Show Room/cars/SILVIA spec-R [S15].png",
  "../Show Room/cars/180SX [RPS13].png"
];
Cars[2] = [];
Cars[3] = [];
Cars[4] = [];

function iniSwiper(index) { 
  const Container = document.querySelector('.swiper-wrapper'); // 目标容器

  Container.innerHTML = ''; // Clear existing content
  const indexNum = index % Cars.length;
  const images = Cars[indexNum];
  
  // Create and append slides
  for (let i = 0; i < images.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('swiper-slide');
    newDiv.id = `cars${i + 1}`;

    const newImg = document.createElement('img');
    newImg.src = images[i];

    newDiv.appendChild(newImg);
    Container.appendChild(newDiv);
  }
}
function updateCars(index, carIndex) {
  const CarsContainer = document.querySelector('.cars-container'); // 目标容器
  CarsContainer.innerHTML = ''; // Clear existing content
  
  // Calculate the correct index within the Cars array
  const indexNum = index % Cars.length;
  
  // Get the correct image path
  // For Swiper with loop enabled, we need to handle the duplicate slides
  const actualCarIndex = carIndex % Cars[indexNum].length;
  const imagePath = Cars[indexNum][actualCarIndex];
  
  // Create container div
  const newDiv = document.createElement('div');
  newDiv.classList.add('Cars');
  
  // Create and set up the image element
  const newImg = document.createElement('img');
  newImg.src = imagePath;
  
  // Append elements
  newDiv.appendChild(newImg);
  CarsContainer.appendChild(newDiv);
}

iniSwiper(passedIndex);


