$(document).ready(function () {

  var $swiper = $(".swiper-container");
  var $bottomSlide = null; 
  var $bottomSlideContent = null; 
  const Cars = new Array();
  Cars[0] = [
    "cars/TURENO [AE86].png",
    "cars/LEVIN [AE86].png",
    "cars/LEVIN [AE85].png",
    "cars/MR2 [SW20].png",
    "cars/MR-S [ZZW30].png",
    "cars/ALTEZZA [SXE10].png",
    "cars/CELICA [ST205].png"
  ];
  Cars[1] = [
    "cars/SKYLINE GT-R [BNR32].png",
    "cars/SKYLINE GT-R [BNR34].png",
    "cars/SKYLINE 25GT-T [ER34].png",
    "cars/SILVIA K's [S13].png",
    "cars/SILVIA Q's [S14].png",
    "cars/SILVIA K's [S14].png",
    "cars/SILVIA spec-R [S15].png",
    "cars/180SX [RPS13].png"
  ];
  Cars[2] = [
    "cars/CIVIC SIR II [EG6].png",
    "cars/CIVIC TYPE R [EK9].png",
    "cars/INTEGRA TYPE R [DC2].png",
    "cars/S2000 [AP1].png"
  ];
  Cars[3] = [
    "cars/LANCER EVO.III [CE9A].png",
    "cars/LANCER EVO.IV [CN9A].png",
    "cars/LANCER EVO.V [CP9A].png",
    "cars/LANCER EVO.VI [CP9A].png",
    "cars/LANCER EVO.VII [CT9A].png"
  ];
  Cars[4] = [
    "cars/RX-7 Type R [FD3S].png",
    "cars/RX-7 SPIRIT R [FD3S].png",
    "cars/RX-7 ∞ III [FC3S].png",
    "cars/RX-8 [SE3P].png",
    "cars/ROASTER [NA6CE].png",
    "cars/ROASTER [NB8C].png"
  ];
  Cars.forEach((carArray) => {
    if (carArray.length > 0) {
      carArray.forEach((imagePath) => {
        const img = new Image();
        img.src = imagePath;
      });
    }
  });
  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      slideChange: function () {
        updateCars(this.activeIndex);
      }
    }
  });

  function updateCars(index) {
    console.log(index);

    const CarsContainer = document.querySelector('.cars-container');// 目标容器

    CarsContainer.innerHTML = '';
    const indexNum = index % Cars.length;

    const images = Cars[indexNum];
    for (let i = 0; i < Cars[indexNum].length; i++) {

      const newDiv = document.createElement('div');
      newDiv.classList.add('Cars');
      newDiv.id = `cars${i + 1}`;

      const carNameMatch = images[i].match(/cars\/(.*)\.png/);
      const carName = carNameMatch ? carNameMatch[1] : 'Unknown';

      const newLabel = document.createElement('div');
      newLabel.classList.add('CarLabel');
      newLabel.textContent = carName;

      const newImg = document.createElement('img');
      newImg.src = images[i];

      newImg.addEventListener('click', () => {
        const carIndex = i; // Current car index
        window.location.href = `../Individual Cars/index.html?Index=${index}&carIndex=${carIndex}`;
      });

      newDiv.appendChild(newLabel);
      newDiv.appendChild(newImg);

      CarsContainer.appendChild(newDiv);
    }
  }
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
  })

  updateCars(mySwiper.activeIndex);
});

var loadingScreen = document.querySelector(".loadingScreen");

setTimeout(function () {
  loadingScreen.style.display = 'none';
}, 1000);