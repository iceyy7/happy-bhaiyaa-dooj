// ================================
// SCREEN NAVIGATION
// ================================
function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(screenId);

    targetScreen.classList.remove("hidden");
    targetScreen.classList.add("active");

    window.scrollTo(0, 0);

}

// ================================
// FLOATING DECORATIONS
// ================================

const decorationBox = document.getElementById("decorations");

const decorationSymbols = ["✦", "✧", "✿", "❀", "♡", "·"];

for (let i = 0; i < 28; i++) {

    const decoration = document.createElement("span");

    decoration.className = "floating";

    decoration.textContent =
        decorationSymbols[
            Math.floor(Math.random() * decorationSymbols.length)
        ];

    decoration.style.left = Math.random() * 100 + "%";

    decoration.style.fontSize =
        (10 + Math.random() * 17) + "px";

    decoration.style.animationDuration =
        (12 + Math.random() * 18) + "s";

    decoration.style.animationDelay =
        (-Math.random() * 25) + "s";

    decorationBox.appendChild(decoration);

}


// ================================
// ENVELOPE
// ================================

const openEnvelopeButton = document.getElementById("openEnvelope");
const envelope = document.getElementById("envelope");

function openWelcomeLetter() {
    showScreen("welcomeScreen");
}

if (openEnvelopeButton) {
    openEnvelopeButton.addEventListener("click", openWelcomeLetter);
}

if (envelope) {
    envelope.addEventListener("click", openWelcomeLetter);
}

// ================================
// PUJA
// ================================

document.getElementById("lightDiya").addEventListener("click", () => {

    document.getElementById("diya").classList.add("lit");

    document.getElementById("pujaMessage").textContent =
        "The diya is lit. Sending you all the good wishes.";

    document.getElementById("lightDiya").classList.add("hidden");

    document.getElementById("pujaNext").classList.remove("hidden");

});

// ================================
// TILAK CEREMONY
// ================================

const beginTilak = document.getElementById("beginTilak");

const tilakIntro = document.getElementById("tilakIntro");

const tilakVideoContainer =
    document.getElementById("tilakVideoContainer");

const tilakReveal =
    document.getElementById("tilakReveal");

const tilakVideo =
    document.getElementById("tilakVideo");

const skipVideo =
    document.getElementById("skipVideo");


// BEGIN CEREMONY

beginTilak.addEventListener("click", async () => {

    tilakIntro.classList.add("hidden");

    tilakVideoContainer.classList.remove("hidden");

    try {

        await tilakVideo.play();

    } catch (error) {

        console.log("Video could not autoplay.");

    }

});


// VIDEO ENDS

tilakVideo.addEventListener("ended", () => {

    showTilakReveal();

});


// SKIP VIDEO

skipVideo.addEventListener("click", () => {

    showTilakReveal();

});


// SHOW PHOTO

function showTilakReveal() {

    tilakVideo.pause();

    tilakVideoContainer.classList.add("hidden");

    tilakReveal.classList.remove("hidden");

}


// CONTINUE TO QUIZ

document.getElementById("tilakNext").addEventListener("click", () => {

    tilakVideo.pause();

    startQuiz();

});




// ================================
// SIBLING QUIZ
// ================================

const questions = [

    {
        question: "Who is the best",
        options: ["Aditi", "Viraj","Diksha"],
        answer: 1,
        right: "YESSSIR YOU DA BEST",
        wrong: "Chup na suar itna maarenge na tu hai best"
    },

    {
        question: "Who misses and loves dusre ko the most",
        options: ["Viraj", "Aditi", "idc"],
        answer: 1,
        right: "Yessir you toh hate me",
        wrong: "chal na you hate me"
    },

    {
        question: "Who deserves the best of evrything",
        options: ["Viraj", "Aditi", "Neither of us"],
        answer: 0,
        right: "Obviously Finally someone understands.",
        wrong: "Wrong answer."
    },

    {
        question: "Who values dusre ko zyada?",
        options: ["Didi", "Bhaiya", "Dono yaar"],
        answer: 2,
        right: "yes yaar cannot deny ye toh",
        wrong: "no betu isko question ni krna"
    }

];

let currentQuestion = 0;


function startQuiz() {

    currentQuestion = 0;

    showScreen("quizScreen");

    displayQuestion();

}


function displayQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("quizProgress").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    document.getElementById("quizFeedback").textContent = "";

    document.getElementById("nextQuestion").classList.add("hidden");

    const optionsBox = document.getElementById("answerOptions");

    optionsBox.innerHTML = "";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = option;

        button.addEventListener("click", () => {

            checkAnswer(index, button);

        });

        optionsBox.appendChild(button);

    });

}


function checkAnswer(selectedIndex, selectedButton) {

    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });


    if (selectedIndex === question.answer) {

        selectedButton.classList.add("correct");

        document.getElementById("quizFeedback").textContent =
            question.right;

    } else {

        selectedButton.classList.add("wrong");

        buttons[question.answer].classList.add("correct");

        document.getElementById("quizFeedback").textContent =
            question.wrong;

    }

    document.getElementById("nextQuestion").classList.remove("hidden");

}


document.getElementById("nextQuestion").addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        displayQuestion();

    } else {

        showScreen("scrapbookScreen");

    }

});


// ================================
// SCRAPBOOK CONTENT
// EDIT THESE LATER
// ================================

const scrapbookPages = [

    {
        title: "The First pic na?",
        text: "Whenever i needed you, you were there.",
        photo: "assets/photo1.jpeg",
        date: "ThNK YOU SM BUDDHU"
    },

    {
        title: "Pretty boy",
        text: "I AM SORRY jldi aana thaaa, hope this will make up uske liye",
        photo: "assets/photo2.jpeg",
        date: "dekh we lookin pretty"
    },

    {
        title: "Little things",
        text: "MISSSINGGG YOU BANDAR BHAI MERA YAAR",
        photo: "assets/photo3.jpeg",
        date: "aise kr rha jaise torture kra maine, u hate me"
    },

    {
        title: "Kirti ko darana finalll",
        text: "yaar everything is so empty without you",
        photo: "assets/photo4.jpeg",
        date: "BHAI ISME BHI KAISE TU THIK DIKH RHA JOKER"
    },

    {
        title: "hehe",
        text: "yaawr thodu sa mai awkward thi na TU BHI THA DEKH SHKL SE DIKHRA",
        photo: "assets/photo5.jpeg",
        date: "mera sir pichka diya, wallpaper to lgaya ni huh"
    },

    {
        title: "The silliest lekin sabse trustworthy bhaiya",
        text: "aditya aur diksha ko bhi include har baar kr hi lete we good log",
        photo: "assets/photo6.jpeg",
        date: "Do not grow up naaa"
    },

    {
        title: "Dekh MY LIL ONE",
        text: "AWWWWWWWW bhai kitna cute tha na tu do not grow up na plspls",
        photo: "assets/photo7.jpeg",
        date: "dhyan rkho is bacche ka"
    },

    {
        title: "AWW bhai cutie",
        text: "Happy Bhai Dooj chotu aur ye suar viraj both ko",
        photo: "assets/photo8.jpeg",
        date: "TU KITNA ACHA HAIIII "
    }

];
// ================================
// SCRAPBOOK SETTINGS
// ================================

const albumSpread = document.getElementById("albumSpread");

let currentSpread = 0;

const pagesPerSpread = 2;

const totalSpreads = Math.ceil(
    scrapbookPages.length / pagesPerSpread
);

const song = document.getElementById("scrapbookSong");

// ================================
// OPEN SCRAPBOOK
// ================================

document.getElementById("openScrapbook").addEventListener("click", () => {

    document.getElementById("scrapCover").classList.add("hidden");

    albumSpread.classList.remove("hidden");

    currentSpread = 0;

    displaySpread();


    // MUSIC STARTS ONLY WHEN THE SCRAPBOOK OPENS

    song.play().catch(() => {

        console.log("Scrapbook opened without music.");

    });

});


// ================================
/// DISPLAY ALBUM PAGES
// ================================

function displaySpread() {

    const leftIndex = currentSpread * pagesPerSpread;

    const rightIndex = leftIndex + 1;

    displayAlbumPage(
        leftIndex,
        "left"
    );
    displayAlbumPage(
    rightIndex,
    "right"
);

    document.getElementById("spreadCounter").textContent =

        `${String(currentSpread + 1).padStart(2, "0")} / ${String(totalSpreads).padStart(2, "0")}`;


    document.getElementById("previousSpread").style.visibility =

        currentSpread === 0 ? "hidden" : "visible";


    document.getElementById("nextSpread").textContent =

        currentSpread === totalSpreads - 1

            ? "The final surprise →"

            : "Turn the page →";

}


// ================================
// DISPLAY INDIVIDUAL PAGE
// ================================

function displayAlbumPage(index, side) {

    const photoBox = document.getElementById(
        side === "left" ? "leftPhoto" : "rightPhoto"
    );

    const titleBox = document.getElementById(
        side === "left" ? "leftTitle" : "rightTitle"
    );

    const textBox = document.getElementById(
        side === "left" ? "leftText" : "rightText"
    );

    const numberBox = document.getElementById(
        side === "left" ? "leftPageNumber" : "rightPageNumber"
    );


    // EMPTY PAGE

    if (index >= scrapbookPages.length) {

        photoBox.innerHTML = "<span>♡</span>";

        titleBox.textContent = "";

        textBox.textContent = "";

        numberBox.textContent = "";

        return;

    }


    const page = scrapbookPages[index];


    numberBox.textContent =
        String(index + 1).padStart(2, "0");

    titleBox.textContent = page.title;

    textBox.textContent = page.text;


    // PHOTO

    photoBox.innerHTML = "";

    const img = document.createElement("img");

    img.alt = page.title;

    img.src = page.photo;

    img.onerror = () => {

        photoBox.innerHTML =
            "<span>YOUR PHOTO GOES HERE ♡</span>";

    };

    photoBox.appendChild(img);

}


// ================================
// PAGE TURN ANIMATION
// ================================

function animatePageTurn() {

    albumSpread.classList.remove("turning");

    void albumSpread.offsetWidth;

    albumSpread.classList.add("turning");

}


// NEXT SPREAD

document.getElementById("nextSpread").addEventListener("click", () => {

    if (currentSpread < totalSpreads - 1) {

        currentSpread++;

        displaySpread();

        animatePageTurn();

    } else {

        showScreen("memoryWallScreen");

        startMemoryWall();

    }

});



// PREVIOUS SPREAD

document.getElementById("previousSpread").addEventListener("click", () => {

    if (currentSpread > 0) {

        currentSpread--;

        displaySpread();

        animatePageTurn();

    }

});
// ================================
// MEMORY WALL ANIMATION
// ================================

function startMemoryWall() {

    const photos = document.querySelectorAll(".memory-photo");

    photos.forEach(photo => {
        photo.classList.remove("show");
    });

    photos.forEach((photo, index) => {

        setTimeout(() => {
            photo.classList.add("show");
        }, 900 * (index + 1));

    });

}


// MEMORY WALL → FINAL CALL SCREEN

document.getElementById("memoryWallNext").addEventListener("click", () => {

    showScreen("callScreen");

});