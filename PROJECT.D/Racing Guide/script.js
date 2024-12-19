$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

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
    const backgrounds = [
      "url('Map/Mount Myogi.jpg')",
      "url('Map/Usui Touge.jpg')",
      "url('Map/Mount Akagi.jpg')",
      "url('Map/Mount Akina.jpg')",
      "url('Map/Irohazaka.jpg')",
      "url('Map/Happogahara.jpg')",
      "url('Map/Shomaru Pass.jpg')",
      "url('Map/Tsuchisaka.jpg')"
    ];
    const name = [
      "Name/Mount Myogi.png",
      "Name/Usui Touge.png",
      "Name/Mount Akagi.png",
      "Name/Mount Akina.png",
      "Name/Irohazaka.png",
      "Name/Happogahara.png",
      "Name/Shomaru Pass.png",
      "Name/Tsuchisaka.png"
    ];
    const route = [
      "Route/Mount Myogi.png",
      "Route/Usui Touge.png",
      "Route/Mount Akagi.png",
      "Route/Mount Akina.png",
      "Route/Irohazaka.png",
      "Route/Happogahara.png",
      "Route/Shomaru Pass.png",
      "Route/Tsuchisaka.png"
    ];

    
    // 設置圖片
    $("body").css("background-image", backgrounds[index % backgrounds.length]);
    $("#place-name img").attr("src", name[index % name.length]);
    $("#route img").attr("src", route[index % route.length]);
  }

  function updateCharacter(index) {
    const character = new Array();
    character[0]=[
      "character/Itsuki_Takeuchi.png",
      "character/Kenji.png",
      "character/Shingo_Shoji.png"
    ];
    character[1]=[
      "character/Toru_Suetsugu.png",
      "character/Atsuro_Kawai.png",
      "character/Impact_Blue.png"
    ];
    character[2]=[
      "character/Two_Guys_From_Tokyo.png",
      "character/Kenta_Nakamura.png",
      "character/Keisuke_Takahashi.png"
    ];
    character[3]=[
      "character/Koichiro_Iketani.png",
      "character/Takeshi_Nakazato.png",
      "character/Kyoichi_Sudo.png",
      "character/Ryosuke_Takahashi.png",
      "character/Takumi_Fujiwara.png"
    ];
    character[4]=[
      "character/Seiji_Iwaki.png",
      "character/Kyoichi_Sudo.png",
      "character/Kai_Kogashiwa.png"
    ];
    character[5]=[
      "character/Daiki_Ninomiya.png",
      "character/Smiley_Sakai.png",
      "character/Tomoyuki_Tachi.png"
    ];
    character[6]=[
      "character/Nobuhiko_Akiyama.png",
      "character/Sakamoto.png",
      "character/Wataru_Akiyama.png"
    ];
    character[7]=[
      "character/Kyoko_Iwase.png",
      "character/Ryosuke_Takahashi.png",
      "character/Aikawa.png",
      "character/Ichijo.png"
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
  
      newDiv.appendChild(newImg);

      characterContainer.appendChild(newDiv);
    }
  }

  // 初始化
  updateImage(mySwiper.activeIndex);
  updateCharacter(mySwiper.activeIndex);

});