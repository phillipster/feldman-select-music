let pageTitleElem;
let outputGridElem;
let projectDisplayElem;

let albums = [
    {
        "title" : "Construção",
        "id" : "construcao",
        "genre": "mpb",
        "year": "1971",
        "artist": "Chico Buarque de Holanda",
        "description" : "Construção is the eighth studio album by Brazilian" +
            " singer-songwriter Chico Buarque, released in December 1971. It" +
            " was composed in periods between Buarque's exile in Italy and" +
            " his return to Brazil. Lyrically, the album is loaded with" +
            " criticisms of the Brazilian military dictatorship, especially" +
            " with regard to the censorship imposed by the government at the" +
            " time. It is widely regarded by music critics as one of the" +
            " greatest Brazilian albums of all time, and its title track was" +
            " named the greatest Brazilian song of all time by Rolling Stone" +
            " in 2009.",
        "cover" : "https://m.media-amazon.com/images/I/61EvrQRfsTL._SL1200_.jpg"
    },
    {
        "title" : "The Blues and the Abstract Truth",
        "id" : "blues",
        "genre": "jazz",
        "year": "1961",
        "artist": "Oliver Nelson",
        "description" : "The Blues and the Abstract Truth is an album by " +
            "American composer and jazz saxophonist Oliver Nelson recorde\ " +
            "in February 1961 for the Impulse! label. It remains" +
            " Nelson's most acclaimed album and features a lineup of notable" +
            " musicians: Freddie Hubbard, Eric Dolphy (his second-to-last" +
            " appearance on a Nelson album following a series of" +
            " collaborations recorded for Prestige), Bill Evans (his only" +
            " appearance with Nelson), Paul Chambers and Roy Haynes.",
        "cover" : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/32beb38a-54b4-4552-91d6-11260675833f.jpg"
    },
    {
        "title" : "Comfort Eagle",
        "id" : "eagle",
        "genre": "rock",
        "year": "2001",
        "artist": "Cake",
        "description" : "Comfort Eagle is the fourth studio album by" +
            " American alternative rock band Cake. The album's lead single" +
            " was \"Short Skirt/Long Jacket.\" The band asked fans to vote" +
            " for the album's second single via their website, with the" +
            "  album's title track \"Comfort Eagle\" being the eventual" +
            " winner, however this single release was cancelled after the" +
            " September 11 attacks.",
        "cover" : "https://m.media-amazon.com/images/I/71IYAdJRsmL._SL1500_.jpg"
    },
    {
        "title" : "Inédito",
        "id" : "inedito",
        "genre": "bossa nova",
        "year": "1987",
        "artist": "Antônio Carlos Jobim",
        "description" : "Inédito (AKA The Unknown and originally titled Tom" +
            " Jobim for its original 1987 Release) was a privately" +
            " commissioned studio album by Antônio Carlos Jobim, released" +
            " in 1987 in a limited edition to commemorate his 60th" +
            " birthday, and re-released in 1995 for the general public. The" +
            " album was a career retrospective that featured many of" +
            " Jobim's most famous songs, along with lesser-known material" +
            " that he had never previously recorded. He later claimed that" +
            " Inédito was the album he most enjoyed recording and" +
            " believed it was one of the best works of his career.",
        "cover" : "https://www.jobim.org/jobim/bitstream/handle/2010/8372/tomineditocd.capa.jpg"
    },
    {
        "title" : "Jaco Pastorius",
        "id" : "jaco",
        "genre": "jazz",
        "year": "1976",
        "artist": "Jaco Pastorius",
        "description" : "Jaco Pastorius is the debut solo album by Jaco" +
            " Pastorius, released in 1976 by Epic Records. The album was" +
            " produced by Bobby Colomby, drummer and founder of Blood," +
            " Sweat & Tears.",
        "cover" : "https://m.media-amazon.com/images/I/610FxMVxvcL._SL1000_.jpg"
    },
    {
        "title" : "Sgt. Pepper's Lonely Hearts Club Band",
        "id" : "sgtpepper",
        "genre": "rock",
        "year": "1967",
        "artist": "The Beatles",
        "description" : "Released on 26 May 1967, Sgt. Pepper is" +
            " regarded by musicologists as an early concept album that" +
            " advanced the roles of sound composition, extended form," +
            " psychedelic imagery, record sleeves, and the producer in" +
            " popular music. The album had an immediate cross-generational" +
            " impact and was associated with numerous touchstones of the" +
            " era's youth culture, such as fashion, drugs, mysticism, and a" +
            " sense of optimism and empowerment.",
        "cover" : "https://m.media-amazon.com/images/I/71ngws--3bL._SL1000_.jpg"
    },
]


document.addEventListener("DOMContentLoaded", function(){

    pageTitleElem = document.getElementById("pageTitle");
    outputGridElem = document.getElementById("outputGrid");
    projectDisplayElem = document.getElementById("projectDisplay");

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let urlSection = urlParams.get('section');
    let urlID = urlParams.get('id');

    if (urlSection !== "item") { /* Display project previews in grid */

        if (urlSection === "code") {
            pageTitleElem.innerText = "Code Projects:";
        }
        else if (urlSection === "art") {
            pageTitleElem.innerText = "Art Projects:";
        }

        for (let i = 0; i < albums.length; i++) {
            createProjectPreview(albums[i]);
        }

    }

    for (let i = 0; i < albums.length; i++) {
        if (albums[i]["id"] === urlID) {
            createProjectPage(albums[i]);
        }
    }


});



function createProjectPreview(incomingJSON){

    let newPreviewLink = document.createElement("A");
    newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

    let newPreviewElement = document.createElement("DIV");
    newPreviewLink.appendChild(newPreviewElement);

    let newPreviewTitle = document.createElement("P");
    newPreviewTitle.classList.add("previewTitle");
    newPreviewTitle.innerText = incomingJSON["title"];
    newPreviewElement.appendChild(newPreviewTitle);

    let newPreviewThumbnail = document.createElement("IMG");
    newPreviewThumbnail.classList.add("thumbnail");
    newPreviewThumbnail.src = incomingJSON["cover"];
    newPreviewElement.appendChild(newPreviewThumbnail);

    outputGridElem.appendChild(newPreviewLink);

}

function createProjectPage(incomingJSON) {

    pageTitleElem.innerText = incomingJSON["title"];

    let newProjectElement = document.createElement("DIV");

    let newProjectImage = document.createElement("IMG");
    newProjectImage.classList.add("projectHeroImage");
    newProjectImage.src = incomingJSON["cover"];
    newProjectElement.appendChild(newProjectImage);

    let newProjectYear = document.createElement("P");
    newProjectYear.classList.add("info");
    newProjectYear.innerText =
        "Year released: " + incomingJSON["year"] + "\n" +
        "Genre: " + incomingJSON["genre"];
    newProjectElement.appendChild(newProjectYear);

    let newProjectDescription = document.createElement("P");
    newProjectDescription.classList.add("description");
    newProjectDescription.innerText = incomingJSON["description"];
    newProjectElement.appendChild(newProjectDescription);

    projectDisplayElem.appendChild(newProjectElement);

}