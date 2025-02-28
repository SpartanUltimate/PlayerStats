let last_updated = "Feb 27, 2025 9:09pm"; // <----- UPDATE THIS DATE WHENEVER YOU UPDATE SCORES!!
document.getElementById("lu-date").innerHTML = last_updated;

// paste array of objects containing data
let data = [
  { name: "Caleb Mok", T: 23, A: 17, G: 12, W: 9, L: 11, D: 6, Rating: 531 },
  { name: "Charles Torpey", T: 11, A: 6, G: 9, W: 4, L: 7, D: 5, Rating: 496 },
  {
    name: "Christopher Pantaleon",
    T: 15,
    A: 7,
    G: 14,
    W: 8,
    L: 8,
    D: 2,
    Rating: 557,
  },
  { name: "Dan Thompson", T: 7, A: 4, G: 14, W: 7, L: 9, D: 0, Rating: 550 },
  { name: "Edwin Li", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0, Rating: 459 },
  { name: "Isaac Thongthap", T: 17, A: 5, G: 7, W: 6, L: 9, D: 2, Rating: 483 },
  { name: "Jake Dapiran", T: 16, A: 2, G: 7, W: 6, L: 6, D: 3, Rating: 523 },
  { name: "Joseph Faso", T: 15, A: 12, G: 11, W: 8, L: 13, D: 0, Rating: 505 },
  { name: "Kevin Camelin", T: 3, A: 1, G: 9, W: 5, L: 2, D: 0, Rating: 635 },
  { name: "Joshua Krone", T: 12, A: 10, G: 8, W: 5, L: 8, D: 0, Rating: 501 },
  { name: "Jakob Lail", T: 13, A: 22, G: 11, W: 12, L: 6, D: 2, Rating: 673 },
  { name: "Jacob Linares", T: 4, A: 8, G: 30, W: 15, L: 3, D: 2, Rating: 809 },
  { name: "Mark Blackburn", T: 1, A: 1, G: 0, W: 2, L: 2, D: 0, Rating: 533 },
  {
    name: "Ryan Novinsky",
    T: 21,
    A: 17,
    G: 12,
    W: 9,
    L: 10,
    D: 2,
    Rating: 542,
  },
  {
    name: "Rafael Antipuesto",
    T: 1,
    A: 0,
    G: 0,
    W: 0,
    L: 2,
    D: 0,
    Rating: 417,
  },
  { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0, Rating: 500 },
  {
    name: "Ryan Phi-Nguyen",
    T: 13,
    A: 38,
    G: 9,
    W: 15,
    L: 4,
    D: 2,
    Rating: 768,
  },
  {
    name: "Sakhin Selvamani",
    T: 14,
    A: 8,
    G: 12,
    W: 6,
    L: 12,
    D: 3,
    Rating: 482,
  },
  { name: "Tanner Yue", T: 18, A: 3, G: 9, W: 4, L: 8, D: 4, Rating: 447 },
  { name: "Tadeas Horn", T: 10, A: 12, G: 8, W: 9, L: 1, D: 1, Rating: 736 },
  { name: "Vincent Cook", T: 33, A: 12, G: 7, W: 6, L: 12, D: 0, Rating: 398 },
  { name: "Xavier Herrera", T: 18, A: 7, G: 2, W: 3, L: 4, D: 6, Rating: 479 },
];

document.getElementById("lb-nav").style.backgroundColor = "goldenrod";
document.getElementById("lb-nav-a").style.color = "black";

// get <tbody> where rows need to be generated and appended
let tbody = document.getElementById("tbody-start");

let activeAttrTag = "spr";

sortData("Rating");
createRows();
setActive(activeAttrTag);

createEventListener("spw", "W");
createEventListener("spd", "D");
createEventListener("spg", "G");
createEventListener("spa", "A");
createEventListener("spt", "T");
createEventListener("spl", "L");
createEventListener("spr", "Rating");

function createEventListener(htmlId, attr) {
  document.getElementById(htmlId).addEventListener("click", () => {
    sortData(attr);
    document.getElementById("tbody-start").innerHTML = "";
    createRows();
    if (activeAttrTag != htmlId) {
      setInactive(activeAttrTag);
      setActive(htmlId);
    }
  });
}

function setActive(attr) {
  // document.getElementById(attr).style.color = "white";
  document.getElementById(attr).className = "white";
  activeAttrTag = attr;
}
function setInactive(attr) {
  document.getElementById(attr).className = "";
}

// sort entry by attribute
function sortData(attr) {
  data.sort((first, second) => {
    let a = undefined;
    let b = undefined;
    if (attr === "T" || attr === "L") {
      a = second;
      b = first;
    } else {
      a = first;
      b = second;
    }

    if (a[attr] > b[attr]) return -1;
    if (a[attr] === b[attr]) return 0;
    if (a[attr] < b[attr]) return 1;
  });
}

function getRank(rating) {
  if (rating >= 1100) return "Master";
  if (rating >= 1050) return "Diamond I";
  if (rating >= 1000) return "Diamond II";
  if (rating >= 950) return "Diamond III";
  if (rating >= 900) return "Platinum I";
  if (rating >= 850) return "Platinum II";
  if (rating >= 800) return "Platinum III";
  if (rating >= 750) return "Gold I";
  if (rating >= 700) return "Gold II";
  if (rating >= 650) return "Gold III";
  if (rating >= 600) return "Silver I";
  if (rating >= 550) return "Silver II";
  if (rating >= 500) return "Silver III";
  if (rating >= 450) return "Bronze I";
  if (rating >= 400) return "Bronze II";
  if (rating >= 350) return "Bronze III";
  if (rating >= 300) return "Iron I";
  if (rating >= 250) return "Iron II";
  if (rating >= 200) return "Iron III";
  if (rating >= 150) return "Grass I";
  if (rating >= 100) return "Grass II";
  if (rating >= 50) return "Grass III";
  return "Dirt";
}

function createRows() {
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    let obj = data[i];

    let content = `
    <td>${i + 1}</td>
    <td>${obj.name}</td>
    <td>${obj.W}</td>
    <td>${obj.D}</td>
    <td>${obj.G}</td>
    <td>${obj.A}</td>
    <td>${obj.T}</td>
    <td>${obj.L}</td>
    <td>${obj.Rating}</td>
    <td>${getRank(obj.Rating).toUpperCase()}</td>
  `;

    if (i === 6 || i === 13 || i === data.length - 1)
      row.style.borderBottom = "4px solid black";

    row.className = getRank(obj.Rating);
    row.innerHTML = content;
    tbody.appendChild(row);
  }
}
