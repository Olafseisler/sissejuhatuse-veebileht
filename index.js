// https://www.w3schools.com/howto/howto_js_slideshow.asp

// Seab indeksi ja esimese nähaoleva slaidi
let slideIndex = 1;
showSlides(slideIndex);

// nihutab slaidi indeksit n võrra
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// toob vastava indeksiga slaidi esile
function showSlides(n)  {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// tekstislaididele sama asi

let textSlideIndex = 1;
showTextSlides(textSlideIndex);
generateTable();


function plusTextSlides(n) {
    showTextSlides(textSlideIndex += n)
}

function currentTetxSlide(n) {
    showTextSlides(textSlideIndex = n)
}

function showTextSlides(n)  {
    let i;
    let textSlides = document.getElementsByClassName("right");
    if (n > textSlides.length) {textSlideIndex = 1}
    if (n < 1) {textSlideIndex = textSlides.length}
    for (i = 0; i < textSlides.length; i++) {
        textSlides[i].style.display = "none";
    }
    textSlides[textSlideIndex-1].style.display = "block";
}

// loeb kaustast failinimed 
async function get_file_names(){
    let titles = [];
    let data = await fetch('out.txt');
    data = await data.text();
    titles = data.split("\r\n");
    console.log(titles);
    return titles;
}

// loeb failinimede põhjal failidest teksti
async function get_file_data(){
    let lyrics = new Map();

    let filenames = await get_file_names();
    console.log(filenames)
    for (let name of filenames){
        let data = await fetch("laulusõnad/"+ name + ".txt");
        data = await data.text();
        lyrics.set(name, data);
    }

    console.log(lyrics);
    return lyrics;
}

// genereerib laulude andmete põhjal tabeli, kus on laulud, nende esitajad ja nupp,
// millega näha laulusõnu
async function generateTable(){
    table = document.getElementById("table");
    let all_lyrics = await get_file_data();

    for (let [element, lyric] of all_lyrics) {
        let [artist, laul] = element.split(" - ");
        let row = document.createElement("tr");

        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = laul;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = artist;
        let row_data_3 = document.createElement("td");
        row_data_3.innerHTML = "<button> Sõnad </button>";
        row_data_3.onclick = function () {
            document.getElementById("laulupealkiri").innerHTML = artist + " - " + laul;
            let lyrics = document.getElementById("s6nad");
            lyrics.innerHTML = lyric;
          };

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        console.log(row);
        table.appendChild(row);
    }
}   