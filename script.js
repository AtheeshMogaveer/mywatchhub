// --- NEW: Hamburger Menu Logic ---
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links li a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});

// The complete movie database, with category and rating data.
const movieData = [
  {
    title: "Jawan",
    posterUrl: "assets/jawan.jpg",
    rating: "7.0",
    category: "movie",
    synopsis:
      "A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago.",
    genre: "Action, Thriller",
    cast: "Shah Rukh Khan, Nayanthara",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81493411",
  },
  {
    title: "Brahmāstra: Part One – Shiva",
    posterUrl: "assets/brahmastra.jpg",
    rating: "5.6",
    category: "movie",
    synopsis:
      "A DJ discovers his strange connection with the element of fire and his journey to awaken the Brahmāstra.",
    genre: "Fantasy, Action",
    cast: "Ranbir Kapoor, Alia Bhatt",
    platform: "Disney+ Hotstar",
    watchLink:
      "https://www.hotstar.com/in/movies/brahmastra-part-one-shiva/1260110227",
  },
  {
    title: "K.G.F: Chapter 2",
    posterUrl: "assets/kgf2.jpg",
    rating: "8.3",
    category: "movie",
    synopsis:
      "Rocky takes control of the Kolar Gold Fields and must now face his enemies and the government.",
    genre: "Action, Crime",
    cast: "Yash, Sanjay Dutt",
    platform: "Amazon Prime",
    watchLink:
      "https://www.primevideo.com/detail/0T8222G53222019G5222G/ref=atv_dp_share_cu_r",
  },
  {
    title: "Fighter",
    posterUrl: "assets/fighter.jpg",
    rating: "6.3",
    category: "movie",
    synopsis:
      "Top IAF aviators come together to form Air Dragons in the face of imminent danger.",
    genre: "Action, Thriller",
    cast: "Hrithik Roshan, Deepika Padukone",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81723521",
  },
  {
    title: "Oppenheimer",
    posterUrl: "assets/oppenheimer.jfif",
    rating: "8.6",
    category: "movie",
    synopsis:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    genre: "Biography, Drama",
    cast: "Cillian Murphy, Emily Blunt",
    platform: "JioCinema",
    watchLink: "https://www.jiocinema.com/movies/oppenheimer/3773193",
  },
  {
    title: "Mirzapur - Season 3",
    posterUrl: "assets/mirzapur3.jfif",
    rating: "8.5",
    category: "series",
    synopsis:
      "The saga of power, revenge, and ambition continues in the lawless city of Mirzapur, with new alliances and betrayals.",
    genre: "Crime, Thriller",
    cast: "Pankaj Tripathi, Ali Fazal",
    platform: "Amazon Prime",
    watchLink:
      "https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCKEP70T/ref=atv_dp_season_select_s1",
  },
  {
    title: "12th Fail",
    posterUrl: "assets/12thfail.jfif",
    rating: "9.2",
    category: "movie",
    synopsis:
      "Based on a true story, an aspiring IPS officer from a poor village overcomes extreme odds to achieve his dream.",
    genre: "Drama, Biography",
    cast: "Vikrant Massey, Medha Shankar",
    platform: "Disney+ Hotstar",
    watchLink: "https://www.hotstar.com/in/movies/12th-fail/1260162234",
  },
  {
    title: "Panchayat - Season 3",
    posterUrl: "assets/panchayat3.jfif",
    rating: "8.9",
    category: "series",
    synopsis:
      "An engineering graduate navigates the quirky and challenging life of a panchayat secretary in a remote Indian village.",
    genre: "Comedy, Drama",
    cast: "Jitendra Kumar, Neena Gupta",
    platform: "Amazon Prime",
    watchLink:
      "https://www.primevideo.com/detail/0SC13G2F222019F5A412G/ref=atv_dp_share_cu_r",
  },
  {
    title: "Dune: Part Two",
    posterUrl: "assets/dune2.jfif",
    rating: "8.7",
    category: "movie",
    synopsis:
      "Paul Atreides unites with the Fremen people of Arrakis to wage war against House Harkonnen.",
    genre: "Sci-Fi, Adventure",
    cast: "Timothée Chalamet, Zendaya",
    platform: "Amazon Prime",
    watchLink:
      "https://www.primevideo.com/detail/0S3BHG5155515321G5153/ref=atv_dp_share_cu_r",
  },
  {
    title: "Salaar: Part 1 – Ceasefire",
    posterUrl: "assets/salaar.jfif",
    rating: "6.5",
    category: "movie",
    synopsis:
      "The fates of a gang leader and a reclusive mechanic become intertwined as they take on their enemies in the violent city of Khansaar.",
    genre: "Action, Crime",
    cast: "Prabhas, Prithviraj Sukumaran",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81722818",
  },
  {
    title: "Scam 2003: The Telgi Story",
    posterUrl: "assets/scam2003.jfif",
    rating: "7.7",
    category: "series",
    synopsis:
      "The true story of Abdul Karim Telgi, the mastermind behind one of India's most ingenious scams, spanning multiple states.",
    genre: "Crime, Drama",
    cast: "Gagan Dev Riar, Mukesh Tiwari",
    platform: "SonyLIV",
    watchLink:
      "https://www.sonyliv.com/shows/scam-2003-the-telgi-story-1700001021",
  },
  {
    title: "Laapataa Ladies",
    posterUrl: "assets/laapataladies.jpg",
    rating: "8.5",
    category: "movie",
    synopsis:
      "Two young brides get accidentally swapped during a train journey, and their journey of self-discovery begins.",
    genre: "Comedy, Drama",
    cast: "Nitanshi Goel, Pratibha Ranta",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81694621",
  },
  {
    title: "Avatar: The Way of Water",
    posterUrl: "assets/avatar.jpg",
    rating: "7.6",
    category: "movie",
    synopsis:
      "Jake Sully and Ney'tiri have formed a family and must leave their home to explore the regions of Pandora.",
    genre: "Sci-Fi, Action",
    cast: "Sam Worthington, Zoe Saldaña",
    platform: "Disney+ Hotstar",
    watchLink:
      "https://www.hotstar.com/in/movies/avatar-the-way-of-water/1260136202",
  },
  {
    title: "Jujutsu Kaisen",
    posterUrl: "assets/jjk.jpg",
    rating: "8.6",
    category: "anime",
    synopsis:
      "A high-school student joins a secret organization of Sorcerers to fight against cursed spirits.",
    genre: "Anime, Action",
    cast: "Junya Enoki, Yuma Uchida",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81278056",
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    posterUrl: "assets/demonslayer.jpg",
    rating: "8.7",
    category: "anime",
    synopsis:
      "A young man becomes a demon slayer to turn his sister back into a human after his family is slaughtered by a demon.",
    genre: "Anime, Fantasy",
    cast: "Natsuki Hanae, Akari Kitō",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81091393",
  },
  {
    title: "War 2",
    posterUrl: "assets/war2.jpg",
    rating: "6.5",
    category: "movie",
    synopsis:
      "A new high-stakes mission forces top agents to confront a formidable new adversary, blurring the lines between ally and enemy.",
    genre: "Action, Spy",
    cast: "Hrithik Roshan, Jr. NTR",
    platform: "Coming Soon",
    watchLink: "#",
  },
  {
    title: "Avengers: Infinity War",
    posterUrl: "assets/infinitywar.jpg",
    rating: "8.4",
    category: "movie",
    synopsis:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.",
    genre: "Action, Sci-Fi",
    cast: "Robert Downey Jr., Chris Hemsworth",
    platform: "Disney+ Hotstar",
    watchLink:
      "https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677",
  },
  {
    title: "Farzi",
    posterUrl: "assets/farzi.jfif",
    rating: "8.4",
    category: "series",
    synopsis:
      "An artist gets pulled into the murky high stakes of a con job and a fiery task force officer on the mission to rid the country of his menaces.",
    genre: "Crime, Thriller",
    cast: "Shahid Kapoor, Vijay Sethupathi",
    platform: "Amazon Prime",
    watchLink:
      "https://www.primevideo.com/detail/0S3BHG5155515321G5153/ref=atv_dp_share_cu_r",
  },
  {
    title: "Animal",
    posterUrl: "assets/animal.jpg",
    rating: "6.2",
    category: "movie",
    synopsis:
      "The son of a wealthy industrialist develops a toxic and obsessive relationship with his father, leading him down a path of violence and revenge.",
    genre: "Action, Drama",
    cast: "Ranbir Kapoor, Anil Kapoor",
    platform: "Netflix",
    watchLink: "https://www.netflix.com/title/81634599",
  },
  {
    title: "Kalki 2898-AD",
    posterUrl: "assets/kalki.jpg",
    rating: "TBD",
    category: "movie",
    synopsis:
      "A modern-day avatar of the Hindu god Vishnu, who is believed to have descended to Earth to protect the world from evil forces.",
    genre: "Sci-Fi, Action",
    cast: "Prabhas, Deepika Padukone",
    platform: "Amazon Prime",
    watchLink:
      "https://www.primevideo.com/detail/0U3BHG5155515321G5153/ref=atv_dp_share_cu_r",
  },
];

// --- MODAL (POPUP) LOGIC ---
const modal = document.getElementById("modal");
const modalPoster = document.getElementById("modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalRating = document.getElementById("modal-rating");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalGenre = document.getElementById("modal-genre");
const modalCast = document.getElementById("modal-cast");
const watchButton = document.getElementById("watch-button");
const closeModalButton = document.getElementById("close-button");

function openModal(movie) {
  modalPoster.src = movie.posterUrl;
  modalTitle.textContent = movie.title;
  modalRating.textContent = `⭐ ${movie.rating}`;
  modalSynopsis.textContent = movie.synopsis;
  modalGenre.textContent = `Genre: ${movie.genre}`;
  modalCast.textContent = `Cast: ${movie.cast}`;
  watchButton.href = movie.watchLink;
  watchButton.textContent = `Watch on ${movie.platform}`;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// --- FILTERING AND DISPLAYING LOGIC ---
function renderMovies(moviesToDisplay) {
  const movieGrid = document.getElementById("movie-grid");
  if (!movieGrid) return;
  movieGrid.innerHTML = "";

  moviesToDisplay.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.addEventListener("click", () => openModal(movie));

    const imageContainer = document.createElement("div");
    imageContainer.className = "movie-card-image-container";

    const movieImage = document.createElement("img");
    movieImage.src = movie.posterUrl;
    movieImage.alt = movie.title;
    movieImage.loading = "lazy";

    const movieTitle = document.createElement("h3");
    movieTitle.className = "movie-card-title";
    movieTitle.textContent = movie.title;

    imageContainer.appendChild(movieImage);
    movieCard.appendChild(imageContainer);
    movieCard.appendChild(movieTitle);

    movieGrid.appendChild(movieCard);
  });
}

function initializePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  const pageTitle = document.getElementById("page-title");
  let sortedMovies = [...movieData];

  if (category && category !== "home") {
    sortedMovies.sort((a, b) => {
      if (a.category === category && b.category !== category) return -1;
      if (a.category !== category && b.category === category) return 1;
      return 0;
    });

    pageTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);
  } else {
    pageTitle.textContent = "Trending Now";
  }

  renderMovies(sortedMovies);
}

// Run the main function when the page loads
window.onload = initializePage;
// --- FOOTER LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the link from adding '#' to the URL
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This creates the smooth scrolling effect
    });
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
