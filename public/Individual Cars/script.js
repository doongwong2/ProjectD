$(document).ready(function () {
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
        updateCars(passedIndex, this.realIndex);
      }
    }
  });
  mySwiper.slideTo(passedCarIndex + 4, 0);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      mySwiper.slidePrev();
    }
    else if (e.key === 'ArrowRight') {
      mySwiper.slideNext();
    }
  })

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

const CarSpecs = {
  'TURENO [AE86]': { name: 'TRUENO GT-APEX (AE86)', transmission: 'FR', gears: '5速' },
  'LEVIN [AE86]': { name: 'LEVIN GT-APEX (AE86)', transmission: 'FR', gears: '5速' },
  'LEVIN [AE85]': { name: 'LEVIN SR (AE85)', transmission: 'FR', gears: '5速' },
  'MR2 [SW20]': { name: 'MR2 G-LIMITED (SW20)', transmission: 'MR', gears: '5速' },
  'MR-S [ZZW30]': { name: 'MR-S S EDITION (ZZW30)', transmission: 'MR', gears: '5速' },
  'ALTEZZA [SXE10]': { name: 'ALTEZZA RS-200 (SXE10)', transmission: 'FR', gears: '6速' },
  'CELICA [ST205]': { name: 'CELCEA GT-FOUR (ST205)', transmission: '4WD', gears: '5速' },
  'SKYLINE GT-R [BNR32]': { name: 'SKYLINE GT-R V-spec II (BNR32)', transmission: '4WD', gears: '5速' },
  'SKYLINE GT-R [BNR34]': { name: 'SKYLINE GT-R V-spec II (BNR34)', transmission: '4WD', gears: '6速' },
  'SKYLINE 25GT-T [ER34]': { name: 'SKYLINE 25GT-T TURBO (ER34)', transmission: 'FR', gears: '5速' },
  'SILVIA K\'s [S13]': { name: 'SILVIA K\'s (S13)', transmission: 'FR', gears: '5速' },
  'SILVIA Q\'s [S14]': { name: 'SILVIA Q\'s (S14)', transmission: 'FR', gears: '5速' },
  'SILVIA K\'s [S14]': { name: 'SILVIA K\'s AERO (S14)', transmission: 'FR', gears: '5速' },
  'SILVIA spec-R [S15]': { name: 'SILVIA spec-R (S15)', transmission: 'FR', gears: '6速' },
  '180SX [RPS13]': { name: '180SX TYPE X (RPS13)', transmission: 'FR', gears: '5速' },
  // Add specs for other cars as needed
};

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
  const CarsContainer = document.querySelector('.cars-container');
  CarsContainer.innerHTML = '';

  const indexNum = index % Cars.length;
  const actualCarIndex = carIndex % Cars[indexNum].length;
  const imagePath = Cars[indexNum][actualCarIndex];

  // Create container div
  const newDiv = document.createElement('div');
  newDiv.classList.add('Cars');

  // Create and set up the image element
  const newImg = document.createElement('img');
  newImg.src = imagePath;

  // Update car info bar
  updateCarInfo(imagePath);

  // Append elements
  newDiv.appendChild(newImg);
  CarsContainer.appendChild(newDiv);
}

function updateCarInfo(imagePath) {
  // Extract car name from image path
  const carNameRaw = imagePath.split('/').pop().replace('.png', '');

  // Format car name to match the spec format
  // const carName = carNameRaw === 'TURENO [AE86]' ? 'TRUENO GT-APEX (AE86)' : carNameRaw;

  // Get car specs
  const specs = CarSpecs[carNameRaw] || { transmission: 'N/A', gears: 'N/A' };

  // Update DOM elements
  document.querySelector('.car-name').textContent = specs.name;
  document.querySelector('.transmission').textContent = specs.transmission;
  document.querySelector('.gear-count').textContent = specs.gears;
}
iniSwiper(passedIndex);






