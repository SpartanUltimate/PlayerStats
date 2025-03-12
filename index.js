let last_updated = "Mar 11, 2025 8:55pm"; // <----- UPDATE THIS DATE WHENEVER YOU UPDATE SCORES!!
document.getElementById("lu-date").innerHTML = last_updated;

// paste array of objects containing data
let data = [
  { name: "Caleb Mok", T: 9, A: 4, G: 12, W: 6, L: 3, D: 0, Rating: 570 },
  { name: "Charles Torpey", T: 2, A: 0, G: 3, W: 1, L: 2, D: 3, Rating: 492 },
  {
    name: "Christopher Pantaleon",
    T: 5,
    A: 6,
    G: 5,
    W: 4,
    L: 2,
    D: 1,
    Rating: 558,
  },
  { name: "Dan Thompson", T: 3, A: 0, G: 5, W: 3, L: 5, D: 0, Rating: 462 },
  { name: "Edwin Lu", T: 7, A: 2, G: 1, W: 1, L: 4, D: 0, Rating: 410 },
  { name: "Isaac Thongthap", T: 4, A: 6, G: 5, W: 7, L: 0, D: 0, Rating: 660 },
  { name: "Jake Dapiran", T: 5, A: 0, G: 2, W: 0, L: 3, D: 1, Rating: 422 },
  { name: "Joseph Faso", T: 6, A: 5, G: 2, W: 4, L: 7, D: 0, Rating: 432 },
  { name: "Kevin Camelin", T: 5, A: 1, G: 2, W: 1, L: 2, D: 0, Rating: 462 },
  { name: "Joshua Krone", T: 4, A: 6, G: 9, W: 5, L: 4, D: 0, Rating: 556 },
  { name: "Jakob Lail", T: 13, A: 7, G: 4, W: 3, L: 6, D: 1, Rating: 410 },
  { name: "Jacob Linares", T: 5, A: 6, G: 11, W: 5, L: 4, D: 1, Rating: 562 },
  { name: "Mark Blackburn", T: 0, A: 2, G: 4, W: 2, L: 1, D: 0, Rating: 544 },
  { name: "Ryan Novinsky", T: 15, A: 9, G: 5, W: 5, L: 4, D: 1, Rating: 490 },
  {
    name: "Rafael Antipuesto",
    T: 0,
    A: 0,
    G: 0,
    W: 0,
    L: 0,
    D: 0,
    Rating: 500,
  },
  { name: "Roman Leigh", T: 6, A: 2, G: 6, W: 3, L: 2, D: 0, Rating: 516 },
  { name: "Ryan Phi-Nguyen", T: 6, A: 17, G: 5, W: 7, L: 1, D: 0, Rating: 672 },
  { name: "Sakhin Selvamani", T: 4, A: 2, G: 3, W: 2, L: 8, D: 0, Rating: 376 },
  { name: "Tanner Yue", T: 9, A: 1, G: 3, W: 2, L: 4, D: 2, Rating: 430 },
  { name: "Tadeas Horn", T: 8, A: 16, G: 7, W: 8, L: 3, D: 3, Rating: 656 },
  { name: "Vincent Cook", T: 2, A: 3, G: 2, W: 0, L: 4, D: 0, Rating: 428 },
  { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0, Rating: 500 },
];

let split1_last_updated = "Mar 6, 2025 9:24pm";
let split1_data = [
  { name: "Caleb Mok", T: 28, A: 19, G: 17, W: 13, L: 15, D: 8, Rating: 545 },
  { name: "Charles Torpey", T: 11, A: 6, G: 9, W: 4, L: 7, D: 5, Rating: 496 },
  {
    name: "Christopher Pantaleon",
    T: 22,
    A: 9,
    G: 17,
    W: 11,
    L: 11,
    D: 5,
    Rating: 554,
  },
  { name: "Dan Thompson", T: 13, A: 9, G: 19, W: 11, L: 13, D: 1, Rating: 568 },
  { name: "Edwin Lu", T: 9, A: 1, G: 3, W: 3, L: 5, D: 0, Rating: 474 },
  {
    name: "Isaac Thongthap",
    T: 23,
    A: 6,
    G: 8,
    W: 6,
    L: 11,
    D: 3,
    Rating: 443,
  },
  { name: "Jake Dapiran", T: 20, A: 3, G: 10, W: 8, L: 8, D: 4, Rating: 525 },
  { name: "Joseph Faso", T: 26, A: 18, G: 14, W: 12, L: 14, D: 2, Rating: 530 },
  { name: "Kevin Camelin", T: 3, A: 2, G: 12, W: 6, L: 4, D: 0, Rating: 615 },
  {
    name: "Joshua Krone",
    T: 23,
    A: 13,
    G: 17,
    W: 10,
    L: 10,
    D: 3,
    Rating: 552,
  },
  { name: "Jakob Lail", T: 16, A: 28, G: 14, W: 16, L: 6, D: 5, Rating: 726 },
  { name: "Jacob Linares", T: 7, A: 12, G: 35, W: 17, L: 9, D: 4, Rating: 739 },
  { name: "Mark Blackburn", T: 9, A: 2, G: 1, W: 2, L: 7, D: 0, Rating: 404 },
  {
    name: "Ryan Novinsky",
    T: 22,
    A: 21,
    G: 16,
    W: 11,
    L: 12,
    D: 2,
    Rating: 561,
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
  { name: "Roman Leigh", T: 3, A: 3, G: 5, W: 3, L: 0, D: 2, Rating: 658 },
  {
    name: "Ryan Phi-Nguyen",
    T: 20,
    A: 49,
    G: 12,
    W: 19,
    L: 9,
    D: 3,
    Rating: 729,
  },
  {
    name: "Sakhin Selvamani",
    T: 21,
    A: 12,
    G: 15,
    W: 6,
    L: 19,
    D: 3,
    Rating: 415,
  },
  { name: "Tanner Yue", T: 25, A: 6, G: 12, W: 7, L: 10, D: 4, Rating: 475 },
  { name: "Tadeas Horn", T: 15, A: 21, G: 16, W: 16, L: 3, D: 3, Rating: 775 },
  {
    name: "Vincent Cook",
    T: 46,
    A: 18,
    G: 12,
    W: 10,
    L: 14,
    D: 0,
    Rating: 416,
  },
  { name: "Xavier Herrera", T: 24, A: 9, G: 4, W: 4, L: 6, D: 7, Rating: 459 },
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

document.getElementById("current-split").addEventListener("change", createRows);

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
  doWork(split1_data);
  doWork(data);
  function doWork(data) {
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
  let split = document.getElementById("current-split").value;
  tbody.innerHTML = ""; // clear table body
  if (split === "split1") {
    doWork(split1_data);
    document.getElementById("lu-date").innerHTML = split1_last_updated;
  } else if (split === "split2") {
    doWork(data);
    document.getElementById("lu-date").innerHTML = last_updated;
  }
  function doWork(data) {
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
}
