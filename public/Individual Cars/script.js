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
Cars[2] = [
  "../Show Room/cars/CIVIC SIR II [EG6].png",
  "../Show Room/cars/CIVIC TYPE R [EK9].png",
  "../Show Room/cars/INTEGRA TYPE R [DC2].png",
  "../Show Room/cars/S2000 [AP1].png"
];
Cars[3] = [
  "../Show Room/cars/LANCER EVO.III [CE9A].png",
  "../Show Room/cars/LANCER EVO.IV [CN9A].png",
  "../Show Room/cars/LANCER EVO.V [CP9A].png",
  "../Show Room/cars/LANCER EVO.VI [CP9A].png",
  "../Show Room/cars/LANCER EVO.VII [CT9A].png"

];
Cars[4] = [
  "../Show Room/cars/RX-7 Type R [FD3S].png",
  "../Show Room/cars/RX-7 SPIRIT R [FD3S].png",
  "../Show Room/cars/RX-7 ∞ III [FC3S].png",
  "../Show Room/cars/RX-8 [SE3P].png",
  "../Show Room/cars/ROASTER [NA6CE].png",
  "../Show Room/cars/ROASTER [NB8C].png"
];
const passedIndex = parseInt(getQueryParam('Index'), 10) || 0;
const passedCarIndex = parseInt(getQueryParam('carIndex'), 10) || 0;

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

$(document).ready(function () {
  const indexNum = passedIndex % Cars.length;
  const currentArrayLength = Cars[indexNum].length;
  const slidesPerView = Math.min(4, currentArrayLength);

  // Preload images
  Cars.forEach((carArray) => {
    if (carArray.length > 0) {
      carArray.forEach((imagePath) => {
        const img = new Image();
        img.src = imagePath;
      });
    }
  });

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    slidesPerView: slidesPerView,
    centeredSlides: false,
    roundLengths: true,
    loop: true,
    loopedSlides: slidesPerView * 2, // Ensure enough slides for looping
    slideToClickedSlide: true,
    initialSlide: passedCarIndex,
    watchSlidesProgress: true, // Enable progress watching
    observer: true, // React to DOM changes
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChange: function () {
        const totalSlides = Cars[passedIndex % Cars.length].length;
        const normalizedIndex = this.realIndex % totalSlides;
        updateCars(passedIndex, normalizedIndex);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      mySwiper.slidePrev();
    }
    else if (e.key === 'ArrowRight') {
      mySwiper.slideNext();
    }
    else if (e.key === "x" || e.key === "X") {
      history.back();
    }
  });
});

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
  'CIVIC SIR II [EG6]': { name: 'CIVIC SIR II (EG6)', transmission: 'FF', gears: '5速' },
  'CIVIC TYPE R [EK9]': { name: 'CIVIC TYPE R (EK9)', transmission: 'FF', gears: '5速' },
  'INTEGRA TYPE R [DC2]': { name: 'INTEGRA TYPE R (DC2)', transmission: 'FF', gears: '5速' },
  'S2000 [AP1]': { name: 'S2000 (AP1)', transmission: 'FR', gears: '6速' },
  'LANCER EVO.III [CE9A]': { name: 'LANCER GSR EVOLUTION.III (CE9A)', transmission: '4WD', gears: '5速' },
  'LANCER EVO.IV [CN9A]': { name: 'LANCER RS EVOLUTION.IV (CN9A)', transmission: '4WD', gears: '5速' },
  'LANCER EVO.V [CP9A]': { name: 'LANCER RS EVOLUTION.V (CP9A)', transmission: '4WD', gears: '5速' },
  'LANCER EVO.VI [CP9A]': { name: 'LANCER GSR EVOLUTION.VI (CP9A)', transmission: '4WD', gears: '5速' },
  'LANCER EVO.VII [CT9A]': { name: 'LANCER EVOLUTION.VII GSR (CT9A)', transmission: '4WD', gears: '5速' },
  'RX-7 Type R [FD3S]': { name: 'RX-7 Type R (FD3S)', transmission: 'FR', gears: '5速' },
  'RX-7 SPIRIT R [FD3S]': { name: 'RX-7 SPIRIT R TypeA (FD3S)', transmission: 'FR', gears: '5速' },
  'RX-7 ∞ III [FC3S]': { name: 'RX-7  ∞ III (FC3S)', transmission: 'FR', gears: '5速' },
  'RX-8 [SE3P]': { name: 'RX-8 Type S (SERP)', transmission: 'FR', gears: '6速' },
  'ROASTER [NA6CE]': { name: 'ROASTER S Special (NA6CE)', transmission: 'FR', gears: '5速' },
  'ROASTER [NB8C]': { name: 'ROASTER RS (NB8C)', transmission: 'FR', gears: '6速' }
  // Add specs for other cars as needed
};

function iniSwiper(index) {
  const Container = document.querySelector('.swiper-wrapper');
  Container.innerHTML = '';
  const indexNum = index % Cars.length;
  const images = Cars[indexNum];

  // Create duplicate slides for smooth looping
  const totalSlides = images.length;
  const slidesToAdd = [...images, ...images, ...images]; // Triple the slides

  slidesToAdd.forEach((imagePath, i) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('swiper-slide');
    newDiv.id = `cars${i % totalSlides + 1}`; // Keep original ID pattern

    const newImg = document.createElement('img');
    newImg.src = imagePath;
    newDiv.appendChild(newImg);
    Container.appendChild(newDiv);
  });
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






