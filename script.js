document.addEventListener("DOMContentLoaded", () => {
  initContactCards();
  initProjectCards();
});

function initContactCards() {
  const cards = document.querySelectorAll(".c-card");

  cards.forEach(card => {
    const text = card.innerText.trim().toLowerCase();

    const link = document.createElement("a");
    Object.assign(link.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      cursor: "pointer",
      textDecoration: "none"
    });

    if (text.includes("linkedin")) {
      link.href = "https://linkedin.com/in/weverson-rodrigues-b518a6282";
    } else if (text.includes("instagram")) {
      link.href = "https://instagram.com/_.wews._";
    } else if (text.includes("github")) {
      link.href = "https://github.com/zervsu";
    } else if (text.includes("whatsapp")) {
      link.href = "https://wa.me/5513996111346";
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    card.style.position = "relative";
    card.appendChild(link);
  });
}

function initProjectCards() {
  const projectCards = document.querySelectorAll(".p-card");

  projectCards.forEach(card => {
    const title = card.querySelector("h2").innerText.trim().toLowerCase();

    const link = document.createElement("a");
    Object.assign(link.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      cursor: "pointer",
      textDecoration: "none"
    });

    if (title.includes("memory")) {
      link.href = "https://memory-self-iota.vercel.app/";
    } else if (title.includes("infocars")) {
      link.href = "https://zervsu.github.io/infocars/";
    } else if (title.includes("word search")) {
      link.href = "https://zervsu.github.io/word-search/";
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const image = card.querySelector(".p-image");
    card.style.position = "relative";
    image.style.position = "relative";
    image.appendChild(link);
  });
}
