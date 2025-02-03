// paste array of objects containing data
let data = [
  { name: "Caedon Buhr", T: 14, A: 7, G: 10, W: 6, L: 12, Rating: 509 },
  { name: "Caleb Mok", T: 54, A: 13, G: 8, W: 19, L: 37, Rating: 417 },
  { name: "Charles Torpey", T: 7, A: 21, G: 8, W: 19, L: 13, Rating: 595 },
  {
    name: "Christopher Pantaleon",
    T: 26,
    A: 20,
    G: 5,
    W: 19,
    L: 13,
    Rating: 530,
  },
  { name: "Dan Thompson", T: 80, A: 101, G: 84, W: 48, L: 7, Rating: 736 },
  { name: "Isaac Thongthap", T: 39, A: 6, G: 13, W: 16, L: 9, Rating: 478 },
  { name: "Jake Dapiran", T: 4, A: 2, G: 10, W: 36, L: 10, Rating: 600 },
  { name: "Joseph Faso", T: 8, A: 16, G: 17, W: 8, L: 4, Rating: 587 },
  { name: "Kevin Camelin", T: 10, A: 28, G: 4, W: 23, L: 4, Rating: 619 },
  { name: "Joshua Krone", T: 39, A: 70, G: 81, W: 41, L: 19, Rating: 766 },
  { name: "Jakob Lail", T: 11, A: 27, G: 11, W: 15, L: 37, Rating: 570 },
  { name: "Jacob Linares", T: 27, A: 18, G: 40, W: 4, L: 20, Rating: 529 },
  { name: "Mark Blackburn", T: 5, A: 6, G: 23, W: 31, L: 9, Rating: 626 },
  { name: "Michael Nawa", T: 31, A: 11, G: 24, W: 6, L: 3, Rating: 517 },
  { name: "Ryan Novinsky", T: 6, A: 28, G: 15, W: 27, L: 16, Rating: 636 },
  { name: "Rafael Antipuesto", T: 19, A: 3, G: 1, W: 6, L: 3, Rating: 491 },
  { name: "Roman Leigh", T: 25, A: 13, G: 31, W: 7, L: 28, Rating: 519 },
  { name: "Ryan Phi-Nguyen", T: 30, A: 19, G: 20, W: 11, L: 5, Rating: 541 },
  { name: "Sakhin Selvamani", T: 9, A: 21, G: 2, W: 10, L: 13, Rating: 552 },
  { name: "Tanner Yue", T: 46, A: 16, G: 13, W: 23, L: 5, Rating: 501 },
  { name: "Tadeas Horn", T: 50, A: 62, G: 19, W: 36, L: 16, Rating: 591 },
  { name: "Vincent Cook", T: 24, A: 4, G: 15, W: 43, L: 12, Rating: 558 },
  { name: "Xavier Herrera", T: 8, A: 15, G: 20, W: 26, L: 30, Rating: 599 },
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
  if (rating > 750) return "Diamond";
  if (rating > 650) return "Platinum";
  if (rating > 550) return "Gold";
  if (rating > 450) return "Silver";
  if (rating > 350) return "Bronze";
  if (rating > 250) return "Iron";
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
