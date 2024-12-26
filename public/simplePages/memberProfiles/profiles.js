// profiles.js

// Define the data array
const characters = [
    {
        image: "../../images/character/Takumi_Fujiwara.png",
        name: "藤原拓海（ふじわら たくみ）",
        car: "1983 Toyota Sprinter Trueno 3-Door GT-APEX (AE86)",
        description: "故事主角，Project D 的下山擔任。"
    },
    {
        image: "../../images/character/Keisuke_Takahashi.png",
        name: "高橋啟介（たかはし けいすけ）",
        car: "1991 Mazda Ẽfini RX-7 Type R（FD3S）",
        description: "Project D 的上山擔任。"
    },
    {
        image: "../../images/character/Ryosuke_Takahashi.png",
        name: "高橋涼介（たかはし りょうすけ）",
        car: "1990 Mazda Savanna RX-7 ∞ III（FC3S）",
        description: "Project D 的隊長。"
    },
    {
        image: "../../images/character/Kenta_Nakamura.png",
        name: "中村賢太（なかむら けんた）",
        car: "1993 Nissan Silvia Q's (S14)",
        description: "Project D 的視察人員。"
    },
    {
        image: "../../images/character/Itsuki_Takeuchi.png",
        name: "武內樹（たけうち イツキ）",
        car: "1984 Toyota Corolla Levin SR(AE85)",
        description: "秋名Speed Stars（高速之星）,拓海的麻吉。"
    },
    {
        image: "../../images/character/Kenji.png",
        name: "健二（けんじ）",
        car: "1991 Nissan 180SX Type II(RPS13)",
        description: "秋名Speed Stars（高速之星）,浩一郎的麻吉。"
    },
    {
        image: "../../images/character/Shingo_Shoji.png",
        name: "庄司慎吾（しょうじ しんご）",
        car: "1995 Honda Civic SiR-II(EG6)",
        description: "妙義Night Kids（夜之子）副隊，提出膠帶死亡賽的挑戰。"
    },
    {
        image: "../../images/character/Toru_Suetsugu.png",
        name: "末次徹（末次 トオル（すえつぐ トオル）",
        car: ":1989 Eunos Roadster S Special (NA6CE)",
        description: "日塩SEVEN STAR LEAF（七星瓣）的主車手。"
    },
    {
        image: "../../images/character/Atsuro_Kawai.png",
        name: "川井淳郎（かわい あつろう）",
        car: "1998 Nissan Skyline 25GT Turbo(ER34)",
        description: "日塩SEVEN STAR LEAF（七星瓣）隊員，擅長跑上坡。"
    },
    {
        image: "../../images/character/Impact_Blue.png",
        name: "佐藤真子和沙雪（さとう まこ & さゆき）",
        car: "1991 Mazda Ẽfini RX-7 Type R（FD3S）",
        description: "碓冰崖速度最快的賽車手，別名 Impact Blue。"
    },
    {
        image: "../../images/character/Two_Guys_From_Tokyo.png",
        name: "東京來的兩個人",
        car: "Nissan Silvia Spec-R(S15)",
        description: "劇情外的局外人。"
    },
    {
        image: "../../images/character/Kenta_Nakamura.png",
        name: "中村賢太（なかむら けんた）",
        car: "1993 Nissan Silvia Q's (S14)",
        description: "赤城Red Suns成員，趁下雨天挑戰拓海，結果輸了。"
    },
    {
        image: "../../images/character/Keisuke_Takahashi.png",
        name: "高橋啟介（たかはし けいすけ）",
        car: "1991 Mazda Ẽfini RX-7 Type R（FD3S）",
        description: "之前是赤城RedSuns的二號車手。"
    },
    {
        image: "../../images/character/Koichiro_Iketani.png",
        name: "池谷浩一郎（いけたに こういちろう）",
        car: "1988 Nissan Silvia K's (S13) (渦輪增壓版)",
        description: "秋名Speed Stars車隊隊長。"
    },
    {
        image: "../../images/character/Takeshi_Nakazato.png",
        name: "中里毅（なかざと たけし）",
        car: "1994 Nissan Skyline GT-R V-Spec II (BNR32)",
        description: "Night Kids車隊的隊長。"
    },
    {
        image: "../../images/character/Kyoichi_Sudo.png",
        name: "須藤京一（すどう きょういち）",
        car: "1995 Mitsubishi Lancer Evolution III GSR(CE9A)",
        description: "Emperor車隊隊長。"
    },
    {
        image: "../../images/character/Ryosuke_Takahashi.png",
        name: "高橋涼介（たかはし りょうすけ）",
        car: "1990 Mazda Savanna RX-7 ∞ III（FC3S）",
        description: "群馬縣Project D和赤城RedSuns的隊長，別名赤城的白色彗星。"
    },
    {
        image: "../../images/character/Takumi_Fujiwara.png",
        name: "藤原拓海（ふじわら たくみ）",
        car: "1983 Toyota Sprinter Trueno 3-Door GT-APEX (AE86)",
        description: "故事主角，秋名的86。"
    },
    {
        image: "../../images/character/Seiji_Iwaki.png",
        name: "岩城清次（いわき せいじ）",
        car: "1996 Mitsubishi Lancer Evolution IV RS(CN9A)",
        description: "Emperor車隊的成員。"
    },
    {
        image: "../../images/character/Kyoichi_Sudo.png",
        name: "須藤京一（すどう きょういち）",
        car: "1995 Mitsubishi Lancer Evolution III GSR(CE9A)",
        description: "Emperor車隊隊長。"
    },
    {
        image: "../../images/character/Kai_Kogashiwa.png",
        name: "小柏海（小柏 カイ（こがしわ カイ）",
        car: "1994 Toyota MR2 G-Limited (SW20)",
        description: "文太過去的對手小柏健的兒子。"
    },
    {
        image: "../../images/character/Daiki_Ninomiya.png",
        name: "二宮大輝（ニノ宮 大輝（にのみや だいき）",
        car: "1998 Honda Civic Type-R(EK9)",
        description: "東堂塾中最年輕和最優秀的現役賽車手之一。"
    },
    {
        image: "../../images/character/Smiley_Sakai.png",
        name: "笑面虎酒井（微笑酒井）（スマイリー 酒井（スマイリー さかい）",
        car: "1995 Honda Integra Type-R Turbo(DC2)",
        description: "東堂塾內最年輕和最優秀的現役賽車手之一。"
    },
    {
        image: "../../images/character/Tomoyuki_Tachi.png",
        name: "館智幸（たち ともゆき）",
        car: "1998 Honda Civic Type-R Spoon (EK9) ",
        description: "東堂塾的畢業生。"
    },
    {
        image: "../../images/character/Nobuhiko_Akiyama.png",
        name: "秋山延彥（あきやま わたる）",
        car: "2000 Toyota Altezza RS200 Z Edition（SXE10）",
        description: "秋山涉的堂哥。"
    },
    {
        image: "../../images/character/Sakamoto.png",
        name: "坂本（さかもと）",
        car: "1995 Suzuki Cappuccino（EA11R）",
        description: "一名拉力賽車手。"
    },
    {
        image: "../../images/character/Wataru_Akiyama.png",
        name: "秋山涉（あきやま わたる）",
        car: "1983 Toyota Corolla Levin GT-APEX(AE86)",
        description: "和拓海一樣開AE86。"
    },
    {
        image: "../../images/character/Kyoko_Iwase.png",
        name: "岩瀨恭子（いわせ きょうこ）",
        car: "1993 Mazda Efini RX-7 Type R（FD3S）",
        description: "來自埼玉縣的女賽車手，駕駛一輛單渦輪增壓改裝的黑色FD。"
    },
    {
        image: "../../images/character/Ryosuke_Takahashi.png",
        name: "高橋涼介（たかはし りょうすけ）",
        car: "1990 Mazda Savanna RX-7 ∞ III（FC3S）",
        description: "Project D 的隊長。"
    },
    {
        image: "../../images/character/Aikawa.png",
        name: "會川（会川（あいかわ）",
        car: "1998 Mitsubishi Lancer Evolution V GSR(CP9A)",
        description: "土坂Lancer Evolution車隊。"
    },
    {
        image: "../../images/character/Ichijo.png",
        name: "一條（一条（いちじょう）",
        car: "1999 Mitsubishi Lancer Evolution VI Tommi Mäkinen Edition(CP9A)",
        description: "土坂Lancer Evolution車隊。"
    },
];

// Function to generate the table
function generateTable(start, end, id) {

    const table = document.createElement('table');
    table.setAttribute('border', '1'); // Adding a border to the table

    characterSlice = characters.slice(start, end + 1);

    characterSlice.forEach((character) => {
        // Create rows for each character
        const row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        const row3 = document.createElement('tr');

        // Add the image cell (rowspan = 3)
        const imgCell = document.createElement('td');
        imgCell.setAttribute('width', '5vw');
        imgCell.setAttribute('rowspan', '3');
        const img = document.createElement('img');
        img.setAttribute('src', character.image);
        imgCell.appendChild(img);
        row1.appendChild(imgCell);

        const titleStyle = 'width: 3vw; padding: 3px; font-weight: bold;';
        const valueStyle = 'padding: 8px;';

        // Add the "名字" cell and value
        const nameCell = document.createElement('td');
        nameCell.style.cssText = titleStyle;
        nameCell.textContent = "名字";
        row1.appendChild(nameCell);
        const nameValueCell = document.createElement('td');
        nameValueCell.textContent = character.name;
        row1.appendChild(nameValueCell);

        // Add the "車種" cell and value
        const carCell = document.createElement('td');
        carCell.style.cssText = titleStyle;
        carCell.textContent = "車種";
        row2.appendChild(carCell);
        const carValueCell = document.createElement('td');
        carValueCell.textContent = character.car;
        row2.appendChild(carValueCell);

        // Add the "説明" cell and value
        const descriptionCell = document.createElement('td');
        descriptionCell.style.cssText = titleStyle;
        descriptionCell.textContent = "説明";
        row3.appendChild(descriptionCell);
        const descriptionValueCell = document.createElement('td');
        descriptionValueCell.textContent = character.description;
        row3.appendChild(descriptionValueCell);

        // Append rows to the table
        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
    });

    // Append the table to the container div
    document.getElementById(id).appendChild(table);
}

// Call the function to generate the table when the page loads
generateTable(0, 3, "projectD");
generateTable(4, 6, "Myogi");
generateTable(7, 9, "Usui");
generateTable(10, 12, "Akagi");
generateTable(13, 17, "Akina");
generateTable(18, 20, "Irohazaka");
generateTable(21, 23, "Happogahara");
generateTable(24, 26, "Shomaru");
generateTable(27, 30, "Tsuchisaka");

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