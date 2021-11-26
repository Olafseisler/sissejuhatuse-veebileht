// https://www.w3schools.com/howto/howto_js_slideshow.asp


let slideIndex = 1;
showSlides(slideIndex);

let laulud = [
    { name: "sõitu minek", artist: "benakanister", album: "Kytus" },
    { name: "toba", artist: "NKN", album: "Koosolek 4" },
    { name: "Calabassas", artist: "SKP", album: "Supiköögi Sulased" },
    { name: "Maja (Mitte Lõks)", artist: "Väike PD", album: "Kytus" },
    { name: "GYMN", artist: "Lil Ants", album: "" }
];

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

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
get_files();


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

async function get_files(){
    let titles = []
    let data = await fetch('out.txt');
    data = await data.text();
    titles = data.split("\r\n");
    console.log(titles);
    return titles;
}

async function generateTable(){
    table = document.getElementById("table");

    let failinimed = (await get_files()).map(n => n.split(".")[0]);

    for (let element of failinimed) {
        let [artist, laul] = element.split(" - ");
        let row = document.createElement("tr");
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = laul;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = artist;

        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        console.log(row);
        table.appendChild(row);
    }
}   