$(document).ready(function () {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style
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
  ];
  Cars[3] = [
  ];
  Cars[4] = [
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

    CarsContainer.innerHTML = ''; // Clear existing content
    const indexNum = index % Cars.length;
    // Loop through the corresponding image array
    const images = Cars[indexNum];
    for (let i = 0; i < Cars[indexNum].length; i++) {
      // Create a new container div
      const newDiv = document.createElement('div');
      newDiv.classList.add('Cars');
      newDiv.id = `cars${i + 1}`;

      // Extract car name from the file name
      const carNameMatch = images[i].match(/cars\/(.*)\.png/);
      const carName = carNameMatch ? carNameMatch[1] : 'Unknown';

      // Create a label for the car name
      const newLabel = document.createElement('div');
      newLabel.classList.add('CarLabel');
      newLabel.textContent = carName;

      // Create the image element
      const newImg = document.createElement('img');
      newImg.src = images[i];

      newImg.addEventListener('click', () => {
        const carIndex = i; // Current car index
        window.location.href = `../Individual Cars/index.html?Index=${index}&carIndex=${carIndex}`;
      });

      // Append the label and image to the container
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
      window.location.href = '/';
    }

  })

  updateCars(mySwiper.activeIndex);
});

var loadingScreen = document.querySelector(".loadingScreen");

setTimeout(function () {
  loadingScreen.style.display = 'none';
}, 1000);