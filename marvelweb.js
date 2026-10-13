// Complete MCU Dataset with Phase-wise Folder Image Paths & Detailed Stories
const mcuData = [
    // Phase 1
    { id: 1, title: "Iron Man", date: "May 2, 2008", phase: "1", img: "Phase1/mi1.jpeg", story: "Tony Stark, billionaire industrialist and genius inventor, builds a high-tech armored suit and escapes captivity, becoming Iron Man." },
    { id: 2, title: "The Incredible Hulk", date: "June 13, 2008", phase: "1", img: "Phase1/mi2.jpeg", story: "Scientist Bruce Banner searches for a cure to the gamma radiation that turns him into the Hulk while evading the military." },
    { id: 3, title: "Iron Man 2", date: "May 7, 2010", phase: "1", img: "Phase1/mi3.jpeg", story: "Tony Stark faces government pressure, rival industrialists, and the vengeful Ivan Vanko while battling palladium poisoning." },
    { id: 4, title: "Thor", date: "May 6, 2011", phase: "1", img: "Phase1/mi4.jpeg", story: "The arrogant Norse warrior Thor is cast out of Asgard to Earth, where he learns humility and proves his worth." },
    { id: 5, title: "Captain America: The First Avenger", date: "July 22, 2011", phase: "1", img: "Phase1/mi5.jpeg", story: "Steve Rogers undergoes a super-soldier experiment to become Captain America, fighting the Nazi-backed Hydra organization." },
    { id: 6, title: "The Avengers", date: "May 4, 2012", phase: "1", img: "Phase1/mi6.jpeg", story: "Nick Fury assembles Earth's Mightiest Heroes to stop Loki and the Chitauri alien invasion in New York City." },

    // Phase 2
    { id: 7, title: "Iron Man 3", date: "May 3, 2013", phase: "2", img: "Phase2/mip1.jpeg", story: "Tony Stark faces terrorist mastermind the Mandarin while overcoming severe post-traumatic stress disorder." },
    { id: 8, title: "Thor: The Dark World", date: "November 8, 2013", phase: "2", img: "Phase2/mip2.jpeg", story: "Thor battles Malekith and the Dark Elves to prevent them from plunging the universe into darkness using the Aether." },
    { id: 9, title: "Captain America: The Winter Soldier", date: "April 4, 2014", phase: "2", img: "Phase2/mip3.jpeg", story: "Steve Rogers uncovers a massive Hydra conspiracy inside S.H.I.E.L.D. alongside a deadly assassin known as the Winter Soldier." },
    { id: 10, title: "Guardians of the Galaxy", date: "August 1, 2014", phase: "2", img: "Phase2/mip4.jpeg", story: "An unlikely band of cosmic outlaws team up to stop Ronan the Accuser from destroying the galaxy with an Infinity Stone." },
    { id: 11, title: "Avengers: Age of Ultron", date: "May 1, 2015", phase: "2", img: "Phase2/mip5.jpeg", story: "Tony Stark's rogue AI peacekeeping program, Ultron, attempts to eradicate humanity to achieve peace." },
    { id: 12, title: "Ant-Man", date: "July 17, 2015", phase: "2", img: "Phase2/mip6.jpeg", story: "Master thief Scott Lang dons a revolutionary suit that allows him to shrink in scale while increasing in strength." },

    // Phase 3
    { id: 13, title: "Captain America: Civil War", date: "May 6, 2016", phase: "3", img: "Phase3/p1.jpeg", story: "Government oversight divides the Avengers into opposing factions led by Captain America and Iron Man." },
    { id: 14, title: "Doctor Strange", date: "November 4, 2016", phase: "3", img: "Phase3/p2.jpeg", story: "A brilliant neurosurgeon discovers mystical arts and alternate dimensions after a career-ending car accident." },
    { id: 15, title: "Guardians of the Galaxy Vol. 2", date: "May 5, 2017", phase: "3", img: "Phase3/p3.jpeg", story: "Peter Quill discovers the truth about his celestial heritage involving his father, Ego." },
    { id: 16, title: "Spider-Man: Homecoming", date: "July 7, 2017", phase: "3", img: "Phase3/p4.jpeg", story: "Peter Parker balances high school in Queens with proving himself as a hero against the Vulture." },
    { id: 17, title: "Thor: Ragnarok", date: "November 3, 2017", phase: "3", img: "Phase3/p5.jpeg", story: "Thor fights to escape Sakaar and stop his sister Hela from destroying Asgard." },
    { id: 18, title: "Black Panther", date: "February 16, 2018", phase: "3", img: "Phase3/p6.jpeg", story: "T'Challa returns home to Wakanda to assume the throne and faces a powerful challenger from his past." },
    { id: 19, title: "Avengers: Infinity War", date: "April 27, 2018", phase: "3", img: "Phase3/p7.jpeg", story: "The Avengers and cosmic allies unite to stop Thanos from collecting all six Infinity Stones." },
    { id: 20, title: "Ant-Man and the Wasp", date: "July 6, 2018", phase: "3", img: "Phase3/p8.jpeg", story: "Scott Lang embarks on an urgent rescue mission into the Quantum Realm with Hope van Dyne." },
    { id: 21, title: "Captain Marvel", date: "March 8, 2019", phase: "3", img: "Phase3/p9.jpeg", story: "Carol Danvers unlocks memories of her past on Earth while caught in an intergalactic war." },
    { id: 22, title: "Avengers: Endgame", date: "April 26, 2019", phase: "3", img: "Phase3/p10.jpeg", story: "The surviving Avengers launch a desperate time-heist to reverse Thanos' snap and restore order." },
    { id: 23, title: "Spider-Man: Far From Home", date: "July 2, 2019", phase: "3", img: "Phase3/p11.jpeg", story: "Peter Parker faces elemental threats in Europe while on a school trip." },

    // Phase 4
    { id: 24, title: "WandaVision (Series)", date: "January 15, 2021", phase: "4", img: "Phase4/m1.jpeg", story: "Wanda and Vision live suburban sitcom lives until reality begins to fracture." },
    { id: 25, title: "The Falcon and the Winter Soldier (Series)", date: "March 19, 2021", phase: "4", img: "Phase4/m2.jpeg", story: "Sam and Bucky team up to handle global security threats and the mantle of Captain America." },
    { id: 26, title: "Loki (Season 1) (Series)", date: "June 9, 2021", phase: "4", img: "Phase4/m3.jpeg", story: "Loki finds himself working with the Time Variance Authority across alternate timelines." },
    { id: 27, title: "Black Widow", date: "July 9, 2021", phase: "4", img: "Phase4/m4.jpeg", story: "Natasha confronts dark chapters of her espionage past." },
    { id: 28, title: "What If...? (Season 1)", date: "August 11, 2021", phase: "4", img: "Phase4/m5.jpeg", story: "The Watcher explores pivotal MCU moments turned completely upside down." },
    { id: 29, title: "Shang-Chi and the Legend of the Ten Rings", date: "September 3, 2021", phase: "4", img: "Phase4/m6.jpeg", story: "Shang-Chi confronts his father and the powerful Ten Rings organization." },
    { id: 30, title: "Eternals", date: "November 5, 2021", phase: "4", img: "Phase4/m7.jpeg", story: "An immortal alien race emerges from hiding to protect Earth." },
    { id: 31, title: "Hawkeye (Series)", date: "November 24, 2021", phase: "4", img: "Phase4/m8.jpeg", story: "Clint Barton teams up with Kate Bishop in New York during Christmas." },
    { id: 32, title: "Spider-Man: No Way Home", date: "December 17, 2021", phase: "4", img: "Phase4/m9.jpeg", story: "Multiversal villains spill into reality when a spell cast by Doctor Strange goes wrong." },
    { id: 33, title: "Moon Knight (Series)", date: "March 30, 2022", phase: "4", img: "Phase4/m10.jpeg", story: "Steven Grant shares a body with mercenary Marc Spector and serves Egyptian deity Khonshu." },
    { id: 34, title: "Doctor Strange in the Multiverse of Madness", date: "May 6, 2022", phase: "4", img: "Phase4/m11.jpeg", story: "Doctor Strange traverses alternate realities to protect a young girl." },
    { id: 35, title: "Ms. Marvel (Series)", date: "June 8, 2022", phase: "4", img: "Phase4/m12.jpeg", story: "Kamala Khan discovers cosmic powers and embraces her superhero identity." },
    { id: 36, title: "Thor: Love and Thunder", date: "July 8, 2022", phase: "4", img: "Phase4/m13.jpeg", story: "Thor embarks on a quest for inner peace interrupted by Gorr the God Butcher." },
    { id: 37, title: "I Am Groot (Season 1)", date: "August 10, 2022", phase: "4", img: "Phase4/m14.jpeg", story: "Baby Groot gets into hilarious trouble across the galaxy." },
    { id: 38, title: "She-Hulk: Attorney at Law (Series)", date: "August 18, 2022", phase: "4", img: "Phase4/m15.jpeg", story: "Jennifer Walters balances life as a lawyer and a green superpowered hero." },
    { id: 39, title: "Werewolf by Night", date: "October 7, 2022", phase: "4", img: "Phase4/m16.jpeg", story: "Monster hunters gather at the bloodstone temple on a dark night." },
    { id: 40, title: "Black Panther: Wakanda Forever", date: "November 11, 2022", phase: "4", img: "Phase4/m17.jpeg", story: "Wakanda fights to protect its nation from underwater threats following T'Challa's passing." },
    { id: 41, title: "The Guardians of the Galaxy Holiday Special", date: "November 25, 2022", phase: "4", img: "Phase4/m18.jpeg", story: "The Guardians travel to Earth to give Quill an unforgettable Christmas." },

    // Phase 5
    { id: 42, title: "Ant-Man and the Wasp: Quantumania", date: "February 17, 2023", phase: "5", img: "Phase5/i1.jpeg", story: "Scott Lang and family explore the Quantum Realm and encounter Kang the Conqueror." },
    { id: 43, title: "Guardians of the Galaxy Vol. 3", date: "May 5, 2023", phase: "5", img: "Phase5/i2.jpeg", story: "The team rallies to protect Rocket's life from his tragic creator." },
    { id: 44, title: "Secret Invasion (Series)", date: "June 21, 2023", phase: "5", img: "Phase5/i3.jpeg", story: "Nick Fury uncovers a clandestine infiltration of Earth by shape-shifting Skrulls." },
    { id: 45, title: "I Am Groot (Season 2)", date: "September 6, 2023", phase: "5", img: "Phase5/i4.jpeg", story: "Further adventures of Baby Groot." },
    { id: 46, title: "Loki (Season 2) (Series)", date: "October 5, 2023", phase: "5", img: "Phase5/i5.jpeg", story: "Loki fights to save the collapsing multiverse alongside Mobius." },
    { id: 47, title: "The Marvels", date: "November 10, 2023", phase: "5", img: "Phase5/i6.jpeg", story: "Carol, Kamala, and Monica swap places whenever they use their powers." },
    { id: 48, title: "What If...? (Season 2)", date: "December 22, 2023", phase: "5", img: "Phase5/i7.jpeg", story: "The Watcher continues chronicling multiverse anomalies." },
    { id: 49, title: "Echo (Series)", date: "January 9, 2024", phase: "5", img: "Phase5/i8.jpeg", story: "Maya Lopez connects with her Indigenous roots while confronting Wilson Fisk." },
    { id: 50, title: "Deadpool & Wolverine", date: "July 26, 2024", phase: "5", img: "Phase5/i9.jpeg", story: "Deadpool teams up with a variant Wolverine on a multiversal mission." },
    { id: 51, title: "Agatha All Along (Series)", date: "September 18, 2024", phase: "5", img: "Phase5/i10.jpeg", story: "Agatha Harkness journeys down the perilous Witches' Road." },
    { id: 52, title: "What If...? (Season 3)", date: "December 22, 2024", phase: "5", img: "Phase5/i11.jpeg", story: "The final chapter of multiverse branching tales." },
    { id: 53, title: "Captain America: Brave New World", date: "February 14, 2025", phase: "5", img: "Phase5/i12.jpeg", story: "Sam Wilson faces an international crisis involving President Thaddeus Ross." },
    { id: 54, title: "Daredevil: Born Again (Season 1)", date: "March 4, 2025", phase: "5", img: "Phase5/i13.jpeg", story: "Matt Murdock continues fighting for justice in Hell's Kitchen." },
    { id: 55, title: "Thunderbolts*", date: "May 2, 2025", phase: "5", img: "Phase5/i14.jpeg", story: "An unconventional squad of antiheroes tackle covert government assignments." },
    { id: 56, title: "Ironheart (Series)", date: "June 24, 2025", phase: "5", img: "Phase5/i15.jpeg", story: "Riri Williams builds advanced iron armor technology." },

    // Phase 6
    { id: 57, title: "The Fantastic Four: First Steps", date: "July 25, 2025", phase: "6", img: "Phase6/d1.jpeg", story: "Marvel's First Family debuts in a retro-futuristic cosmic world." },
    { id: 58, title: "Eyes of Wakanda", date: "August 6, 2025", phase: "6", img: "Phase6/d2.jpeg", story: "Wakandan warriors retrieve stolen vibranium across history." },
    { id: 59, title: "Marvel Zombies", date: "October 2025", phase: "6", img: "Phase6/d3.jpeg", story: "Heroes fight an undead plague." },
    { id: 60, title: "Wonder Man (Series)", date: "January 27, 2026", phase: "6", img: "Phase6/d4.jpeg", story: "Simon Williams tackles Hollywood and ionic superpowers." },
    { id: 61, title: "Daredevil: Born Again (Season 2)", date: "March 25, 2026", phase: "6", img: "Phase6/d5.jpeg", story: "The battle for Hell's Kitchen reaches its pinnacle." },
    { id: 62, title: "Spider-Man: Brand New Day", date: "July 31, 2026", phase: "6", img: "Phase6/d6.jpeg", story: "Peter Parker embraces a new era of his heroic career." },
    { id: 63, title: "Avengers Endgame Encore", date: "Sept 25, 2026", phase: "6", img: "Phase6/d7.jpeg", story: "Special commemorative theatrical re-release celebrating the Infinity Saga." },
    { id: 64, title: "VisionQuest (Series)", date: "Late 2026", phase: "6", img: "Phase6/d10.jpeg", story: "The White Vision recovers his memories and humanity in a quest for self-discovery." },
    { id: 65, title: "Avengers: Doomsday", date: "December 18, 2026", phase: "6", img: "Phase6/d8.jpeg", story: "Earth's Mightiest Heroes confront the terrifying multiversal threat of Doctor Doom." },
    { id: 66, title: "Avengers: Secret Wars", date: "December 17, 2027", phase: "6", img: "Phase6/d9.jpeg", story: "The ultimate collision of realities in Battleworld, concluding the Multiverse Saga." }
];

// Road to Doomsday List (16 items mapping X-Men to t1.jpeg and t2.jpeg directly)
const doomsdayRoad = [
    { title: "X-Men (2000)", img: "t1.jpeg", type: "Movie" },
    { title: "X2: X-Men United (2003)", img: "t2.jpeg", type: "Movie" },
    { title: "Captain America: The First Avenger (2011)", img: "Phase1/mi5.jpeg", type: "Movie" },
    { title: "Marvel's The Avengers (2012)", img: "Phase1/mi6.jpeg", type: "Movie" },
    { title: "Avengers: Infinity War (2018)", img: "Phase3/p7.jpeg", type: "Movie" },
    { title: "Avengers: Endgame (2019)", img: "Phase3/p10.jpeg", type: "Movie" },
    { title: "Loki (Seasons 1 & 2)", img: "Phase4/m3.jpeg", type: "TV Show" },
    { title: "Shang-Chi and the Ten Rings (2021)", img: "Phase4/m6.jpeg", type: "Movie" },
    { title: "Spider-Man: No Way Home (2021)", img: "Phase4/m9.jpeg", type: "Movie" },
    { title: "Doctor Strange in the Multiverse of Madness (2022)", img: "Phase4/m11.jpeg", type: "Movie" },
    { title: "Black Panther: Wakanda Forever (2022)", img: "Phase4/m17.jpeg", type: "Movie" },
    { title: "Deadpool & Wolverine (2024)", img: "Phase5/i9.jpeg", type: "Movie" },
    { title: "Captain America: Brave New World (2025)", img: "Phase5/i12.jpeg", type: "Movie" },
    { title: "Thunderbolts* (2025)", img: "Phase5/i14.jpeg", type: "Movie" },
    { title: "The Fantastic Four: First Steps (2025)", img: "Phase6/d1.jpeg", type: "Movie" },
    { title: "AVENGERS: DOOMSDAY (2026)", img: "Phase6/d8.jpeg", type: "Climax", highlight: true }
];

// Quiz Database
const quizQuestions = {
    easy: [
        { q: "What is the name of Iron Man's artificial intelligence assistant in early films?", options: ["JARVIS", "FRIDAY", "EDITH", "Karen"], correct: 0 },
        { q: "What metal is Captain America's shield made of?", options: ["Adamantium", "Vibranium", "Titanium", "Carbonadium"], correct: 1 },
        { q: "Which Infinity Stone was housed inside Loki's scepter?", options: ["Space Stone", "Mind Stone", "Time Stone", "Power Stone"], correct: 1 },
        { q: "What is Thor's mystical hammer called?", options: ["Stormbreaker", "Mjölnir", "Gungnir", "Hofund"], correct: 1 },
        { q: "Who is the ruler of Wakanda in Black Panther?", options: ["Killmonger", "M'Baku", "T'Challa", "N'Jobu"], correct: 2 }
    ],
    medium: [
        { q: "What is the real name of the Scarlet Witch?", options: ["Natasha Romanoff", "Wanda Maximoff", "Carol Danvers", "Peggy Carter"], correct: 1 },
        { q: "In what year is Captain Marvel primarily set?", options: ["1989", "1995", "2001", "2008"], correct: 1 },
        { q: "What is the name of the planetary prison where Guardians of the Galaxy meet?", options: ["Knowhere", "Xandar", "The Kyln", "Sakaar"], correct: 2 },
        { q: "Who sacrifices themselves to retrieve the Soul Stone on Vormir?", options: ["Iron Man", "Captain America", "Black Widow", "Hawkeye"], correct: 2 },
        { q: "What is Doctor Strange's official title before his accident?", options: ["Chief of Surgery", "Neurosurgeon", "Cardiothoracic Surgeon", "General Practitioner"], correct: 1 }
    ],
    extreme: [
        { q: "What is the exact designation number of the universe MCU primary timeline takes place in?", options: ["Earth-616", "Earth-199999", "Earth-838", "Earth-10005"], correct: 1 },
        { q: "What is the name of the AI that controls the helicarriers in Captain America: The Winter Soldier?", options: ["Project Insight", "Project Pegasus", "Project Insight AI", "Project T.A.H.I.T.I."], correct: 0 },
        { q: "In Iron Man 2, what toxic element was poisoning Tony Stark's bloodstream?", options: ["Palladium", "Plutonium", "Uranium", "Cesium"], correct: 0 },
        { q: "What is the name of the alien race that attacks New York in The Avengers?", options: ["Kree", "Skrulls", "Chitauri", "Outriders"], correct: 2 },
        { q: "Who played the creator of the TVA in Loki Season 1?", options: ["Jonathan Majors", "Tom Hiddleston", "Owen Wilson", "Richard E. Grant"], correct: 0 }
    ]
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
    renderMovies(mcuData);
    renderRoad();
    setupFilters();
    setupSearch();
    setupQuiz();
    setupModal();
});

// Render Movies Grid
function renderMovies(data) {
    const grid = document.getElementById("moviesGrid");
    grid.innerHTML = "";
    
    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #8c92a4; padding: 40px;">No cinematic entries found.</p>`;
        return;
    }

    data.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="movie-poster-wrap">
                <span class="phase-badge">Phase ${movie.phase}</span>
                <img src="${movie.img}" alt="${movie.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=500'">
            </div>
            <div class="movie-info">
                <div>
                    <h3>${movie.title}</h3>
                    <div class="movie-date"><i class="fa-regular fa-calendar"></i> ${movie.date}</div>
                </div>
                <div class="card-cta"><i class="fa-solid fa-book-open"></i> Read Story</div>
            </div>
        `;
        card.addEventListener("click", () => openModal(movie));
        grid.appendChild(card);
    });
}

// Render Road to Doomsday
function renderRoad() {
    const roadContainer = document.getElementById("roadContainer");
    roadContainer.innerHTML = "";

    doomsdayRoad.forEach((item, index) => {
        const roadItem = document.createElement("div");
        roadItem.className = `road-item ${item.highlight ? 'highlight-node' : ''}`;
        roadItem.innerHTML = `
            <div class="step-num">${index + 1}</div>
            <img src="${item.img}" alt="${item.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=500'">
            <h4>${item.title}</h4>
            <span>${item.type}</span>
        `;
        roadContainer.appendChild(roadItem);
    });
}

// Phase Filter Logic
function setupFilters() {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const phase = btn.getAttribute("data-phase");
            if (phase === "all") {
                renderMovies(mcuData);
            } else {
                const filtered = mcuData.filter(m => m.phase === phase);
                renderMovies(filtered);
            }
        });
    });
}

// Search Filter Logic
function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = mcuData.filter(m => m.title.toLowerCase().includes(query) || m.story.toLowerCase().includes(query));
        renderMovies(filtered);
    });
}

// Story Modal Logic
function openModal(movie) {
    const modal = document.getElementById("storyModal");
    const content = document.getElementById("modalBodyContent");
    
    content.innerHTML = `
        <h2>${movie.title}</h2>
        <div class="modal-sub">Phase ${movie.phase} &bull; Released: ${movie.date}</div>
        <img src="${movie.img}" alt="${movie.title}" onerror="this.src='https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800'">
        <p><strong>Story Synopsis:</strong> ${movie.story}</p>
    `;
    modal.classList.add("active");
}

function setupModal() {
    const modal = document.getElementById("storyModal");
    const closeBtn = document.getElementById("closeModal");
    
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
}

// Quiz State & Logic
let currentDiff = 'easy';
let currentQuestionIndex = 0;
let quizScore = 0;

function setupQuiz() {
    const diffBtns = document.querySelectorAll(".diff-btn");
    diffBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            diffBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentDiff = btn.getAttribute("data-diff");
            resetQuiz();
        });
    });
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    loadQuestion();
}

function loadQuestion() {
    const questions = quizQuestions[currentDiff];
    const q = questions[currentQuestionIndex];
    
    document.getElementById("questionProgress").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById("quizScore").innerText = `Score: ${quizScore}`;
    
    const quizBody = document.getElementById("quizBody");
    quizBody.innerHTML = `
        <div class="question-text">${q.q}</div>
        <div class="options-grid" id="optionsGrid"></div>
        <div class="quiz-footer">
            <button class="next-btn" id="nextBtn">Next Question</button>
        </div>
    `;

    const optionsGrid = document.getElementById("optionsGrid");
    q.options.forEach((opt, idx) => {
        const optBtn = document.createElement("button");
        optBtn.className = "option-btn";
        optBtn.innerText = opt;
        optBtn.addEventListener("click", () => selectOption(idx, q.correct, optBtn));
        optionsGrid.appendChild(optBtn);
    });
}

function selectOption(selectedIdx, correctIdx, btn) {
    const optionsGrid = document.getElementById("optionsGrid");
    const buttons = optionsGrid.querySelectorAll(".option-btn");
    
    buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === correctIdx) b.classList.add("correct");
        if (idx === selectedIdx && idx !== correctIdx) b.classList.add("incorrect");
    });

    if (selectedIdx === correctIdx) {
        quizScore += 10;
        document.getElementById("quizScore").innerText = `Score: ${quizScore}`;
    }

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "block";
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions[currentDiff].length) {
            loadQuestion();
        } else {
            showQuizComplete();
        }
    };
}

function showQuizComplete() {
    const quizBody = document.getElementById("quizBody");
    quizBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fa-solid fa-trophy" style="font-size: 48px; color: var(--marvel-gold); margin-bottom: 15px;"></i>
            <h3 style="font-family: 'Montserrat', sans-serif; color: var(--text-light); margin-bottom: 10px;">Quiz Completed!</h3>
            <p style="font-size: 16px; margin-bottom: 20px;">Your final score in <strong style="text-transform: capitalize;">${currentDiff}</strong> mode is <strong>${quizScore}</strong> points.</p>
            <button class="btn-primary" onclick="resetQuiz()">Play Again</button>
        </div>
    `;
    document.getElementById("questionProgress").innerText = "Complete";
}