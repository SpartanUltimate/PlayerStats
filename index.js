// paste array of objects containing data
let data = [
  { name: "Caleb Mok", T: 12, A: 11, G: 6, W: 5, L: 7, Rating: 512 },
  { name: "Charles Torpey", T: 3, A: 0, G: 2, W: 1, L: 3, Rating: 452 },
  { name: "Christopher Pantaleon", T: 10, A: 5, G: 5, W: 4, L: 5, Rating: 512 },
  { name: "Dan Thompson", T: 4, A: 4, G: 8, W: 5, L: 5, Rating: 566 },
  { name: "Edwin Li", T: 8, A: 1, G: 2, W: 2, L: 4, Rating: 459 },
  { name: "Isaac Thongthap", T: 11, A: 2, G: 3, W: 2, L: 7, Rating: 400 },
  { name: "Jake Dapiran", T: 8, A: 1, G: 4, W: 3, L: 4, Rating: 499 },
  { name: "Joseph Faso", T: 8, A: 10, G: 6, W: 5, L: 7, Rating: 526 },
  { name: "Kevin Camelin", T: 2, A: 1, G: 9, W: 5, L: 0, Rating: 718 },
  { name: "Joshua Krone", T: 5, A: 2, G: 4, W: 2, L: 5, Rating: 458 },
  { name: "Jakob Lail", T: 8, A: 12, G: 6, W: 8, L: 2, Rating: 689 },
  { name: "Jacob Linares", T: 1, A: 5, G: 21, W: 11, L: 0, Rating: 855 },
  { name: "Mark Blackburn", T: 1, A: 1, G: 0, W: 2, L: 2, Rating: 533 },
  { name: "Ryan Novinsky", T: 9, A: 9, G: 7, W: 5, L: 5, Rating: 554 },
  { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, Rating: 500 },
  { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, Rating: 500 },
  { name: "Ryan Phi-Nguyen", T: 6, A: 22, G: 6, W: 9, L: 2, Rating: 733 },
  { name: "Sakhin Selvamani", T: 4, A: 4, G: 5, W: 3, L: 8, Rating: 459 },
  { name: "Tanner Yue", T: 11, A: 2, G: 3, W: 1, L: 6, Rating: 367 },
  { name: "Tadeas Horn", T: 0, A: 0, G: 0, W: 0, L: 0, Rating: 500 },
  { name: "Vincent Cook", T: 14, A: 9, G: 5, W: 5, L: 6, Rating: 513 },
  { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, Rating: 500 },
];
// get <tbody> where rows need to be generated and appended
let tbody = document.getElementById("tbody-start");

let activeAttrTag = "spr";

sortData("Rating");
createRows();
setActive(activeAttrTag);

createEventListener("spw", "W");
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
