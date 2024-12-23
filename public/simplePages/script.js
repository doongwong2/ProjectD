$(document).ready(function () {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  const backgrounds = [
    "url('../images/Map/Mount Myogi.jpg')",
    "url('../images/Map/Usui Touge.jpg')",
    "url('../images/Map/Mount Akagi.jpg')",
    "url('../images/Map/Mount Akina.jpg')",
    "url('../images/Map/Irohazaka.jpg')",
    "url('../images/Map/Happogahara.jpg')",
    "url('../images/Map/Shomaru Pass.jpg')",
    "url('../images/Map/Tsuchisaka.jpg')"
  ];
  const name = [
    "../images/Name/Mount Myogi.png",
    "../images/Name/Usui Touge.png",
    "../images/Name/Mount Akagi.png",
    "../images/Name/Mount Akina.png",
    "../images/Name/Irohazaka.png",
    "../images/Name/Happogahara.png",
    "../images/Name/Shomaru Pass.png",
    "../images/Name/Tsuchisaka.png"
  ];
  const route = [
    "../images/Route/Mount Myogi.png",
    "../images/Route/Usui Touge.png",
    "../images/Route/Mount Akagi.png",
    "../images/Route/Mount Akina.png",
    "../images/Route/Irohazaka.png",
    "../images/Route/Happogahara.png",
    "../images/Route/Shomaru Pass.png",
    "../images/Route/Tsuchisaka.png"
  ];

  // backgrounds.forEach((imagePath) => {
  //   const img = new Image();
  //   img.src = imagePath;
  // });
  backgrounds.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath.replace(/url\(['"](.+)['"]\)/, '$1');
  });

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 1,
    slidesPerView: 5,
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
        updateImage(this.activeIndex);
        updateCharacter(this.activeIndex);
      }
    }
  });

  function updateImage(index) {
    console.log(index);
    // 定義每個 slide 對應的背景圖

    // 設置圖片
    $("body").css("background-image", backgrounds[index % backgrounds.length]);
    $("#place-name img").attr("src", name[index % name.length]);
    $("#route img").attr("src", route[index % route.length]);
  }

  function updateCharacter(index) {
    const character = new Array();
    character[0] = [
      "/images/character/Itsuki_Takeuchi.png",
      "/images/character/Kenji.png",
      "/images/character/Shingo_Shoji.png"
    ];
    character[1] = [
      "/images/character/Toru_Suetsugu.png",
      "/images/character/Atsuro_Kawai.png",
      "/images/character/Impact_Blue.png"
    ];
    character[2] = [
      "/images/character/Two_Guys_From_Tokyo.png",
      "/images/character/Kenta_Nakamura.png",
      "/images/character/Keisuke_Takahashi.png"
    ];
    character[3] = [
      "/images/character/Koichiro_Iketani.png",
      "/images/character/Takeshi_Nakazato.png",
      "/images/character/Kyoichi_Sudo.png",
      "/images/character/Ryosuke_Takahashi.png",
      "/images/character/Takumi_Fujiwara.png"
    ];
    character[4] = [
      "/images/character/Seiji_Iwaki.png",
      "/images/character/Kyoichi_Sudo.png",
      "/images/character/Kai_Kogashiwa.png"
    ];
    character[5] = [
      "/images/character/Daiki_Ninomiya.png",
      "/images/character/Smiley_Sakai.png",
      "/images/character/Tomoyuki_Tachi.png"
    ];
    character[6] = [
      "/images/character/Nobuhiko_Akiyama.png",
      "/images/character/Sakamoto.png",
      "/images/character/Wataru_Akiyama.png"
    ];
    character[7] = [
      "/images/character/Kyoko_Iwase.png",
      "/images/character/Ryosuke_Takahashi.png",
      "/images/character/Aikawa.png",
      "/images/character/Ichijo.png"
    ];

    const characterContainer = document.querySelector('.character-container');// 目标容器

    characterContainer.innerHTML = '';    // 清空原有内容
    const indexNum = index % character.length;
    // 遍历对应的图片数组
    const images = character[(indexNum)];
    for (let i = 0; i < character[indexNum].length; i++) {
      // 创建新的图片元素
      const newDiv = document.createElement('div');
      newDiv.classList.add('character');
      newDiv.id = `character${i + 1}`;

      const newImg = document.createElement('img');
      newImg.src = images[i];

      const newLink = document.createElement('a');
      newLink.href = `/posts/${indexNum + 1}-${i + 1}`;

      newLink.appendChild(newImg);
      newDiv.appendChild(newLink);

      characterContainer.appendChild(newDiv);
    }
  }

  // 初始化
  updateImage(mySwiper.activeIndex);
  updateCharacter(mySwiper.activeIndex);

});

var loadingScreen = document.querySelector(".loadingScreen");

setTimeout(function () {
  loadingScreen.style.display = 'none';
}, 2000);