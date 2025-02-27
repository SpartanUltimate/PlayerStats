document.getElementById("spd-nav").style.backgroundColor = "goldenrod";
document.getElementById("spd-nav-a").style.color = "black";

// update pd_data (per day data) from day.txt
let pd_data = {
  "2025-2-20": [
    { name: "Caleb Mok", T: 5, A: 4, G: 2, W: 2, L: 3, D: 0 },
    { name: "Charles Torpey", T: 3, A: 0, G: 2, W: 1, L: 3, D: 0 },
    { name: "Christopher Pantaleon", T: 6, A: 0, G: 1, W: 1, L: 3, D: 0 },
    { name: "Dan Thompson", T: 3, A: 1, G: 5, W: 3, L: 2, D: 0 },
    { name: "Edwin Li", T: 5, A: 1, G: 0, W: 1, L: 2, D: 0 },
    { name: "Isaac Thongthap", T: 7, A: 1, G: 1, W: 1, L: 4, D: 0 },
    { name: "Jake Dapiran", T: 4, A: 1, G: 1, W: 1, L: 2, D: 0 },
    { name: "Joseph Faso", T: 4, A: 5, G: 3, W: 2, L: 3, D: 0 },
    { name: "Kevin Camelin", T: 2, A: 1, G: 4, W: 3, L: 0, D: 0 },
    { name: "Joshua Krone", T: 0, A: 1, G: 1, W: 1, L: 2, D: 0 },
    { name: "Jakob Lail", T: 2, A: 4, G: 2, W: 3, L: 2, D: 0 },
    { name: "Jacob Linares", T: 0, A: 3, G: 11, W: 5, L: 0, D: 0 },
    { name: "Mark Blackburn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Novinsky", T: 3, A: 5, G: 2, W: 3, L: 1, D: 0 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 3, A: 11, G: 2, W: 5, L: 0, D: 0 },
    { name: "Sakhin Selvamani", T: 1, A: 1, G: 3, W: 2, L: 3, D: 0 },
    { name: "Tanner Yue", T: 3, A: 0, G: 3, W: 0, L: 3, D: 0 },
    { name: "Tadeas Horn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Vincent Cook", T: 8, A: 5, G: 2, W: 2, L: 3, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-2-21": [
    { name: "Caleb Mok", T: 7, A: 7, G: 4, W: 3, L: 4, D: 3 },
    { name: "Charles Torpey", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Christopher Pantaleon", T: 4, A: 5, G: 4, W: 3, L: 2, D: 0 },
    { name: "Dan Thompson", T: 1, A: 3, G: 3, W: 2, L: 3, D: 0 },
    { name: "Edwin Li", T: 3, A: 0, G: 2, W: 1, L: 2, D: 0 },
    { name: "Isaac Thongthap", T: 4, A: 1, G: 2, W: 1, L: 3, D: 1 },
    { name: "Jake Dapiran", T: 4, A: 0, G: 3, W: 2, L: 2, D: 1 },
    { name: "Joseph Faso", T: 4, A: 5, G: 3, W: 3, L: 4, D: 0 },
    { name: "Kevin Camelin", T: 0, A: 0, G: 5, W: 2, L: 0, D: 0 },
    { name: "Joshua Krone", T: 5, A: 1, G: 3, W: 1, L: 3, D: 0 },
    { name: "Jakob Lail", T: 6, A: 8, G: 4, W: 5, L: 0, D: 1 },
    { name: "Jacob Linares", T: 1, A: 2, G: 10, W: 6, L: 0, D: 2 },
    { name: "Mark Blackburn", T: 1, A: 1, G: 0, W: 2, L: 2, D: 0 },
    { name: "Ryan Novinsky", T: 6, A: 4, G: 5, W: 2, L: 4, D: 1 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 3, A: 11, G: 4, W: 4, L: 2, D: 1 },
    { name: "Sakhin Selvamani", T: 3, A: 3, G: 2, W: 1, L: 5, D: 1 },
    { name: "Tanner Yue", T: 8, A: 2, G: 0, W: 1, L: 3, D: 2 },
    { name: "Tadeas Horn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Vincent Cook", T: 6, A: 4, G: 3, W: 3, L: 3, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-2-24": [
    { name: "Caleb Mok", T: 4, A: 1, G: 3, W: 1, L: 3, D: 2 },
    { name: "Charles Torpey", T: 6, A: 3, G: 2, W: 1, L: 2, D: 2 },
    { name: "Christopher Pantaleon", T: 3, A: 1, G: 5, W: 2, L: 1, D: 1 },
    { name: "Dan Thompson", T: 3, A: 0, G: 3, W: 1, L: 2, D: 0 },
    { name: "Edwin Li", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Isaac Thongthap", T: 4, A: 3, G: 2, W: 3, L: 0, D: 1 },
    { name: "Jake Dapiran", T: 7, A: 0, G: 1, W: 2, L: 1, D: 2 },
    { name: "Joseph Faso", T: 4, A: 1, G: 4, W: 2, L: 2, D: 0 },
    { name: "Kevin Camelin", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Joshua Krone", T: 4, A: 5, G: 1, W: 2, L: 1, D: 0 },
    { name: "Jakob Lail", T: 4, A: 5, G: 3, W: 2, L: 2, D: 1 },
    { name: "Jacob Linares", T: 2, A: 1, G: 3, W: 2, L: 1, D: 0 },
    { name: "Mark Blackburn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Novinsky", T: 9, A: 5, G: 2, W: 2, L: 3, D: 1 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 3, A: 10, G: 1, W: 4, L: 0, D: 0 },
    { name: "Sakhin Selvamani", T: 2, A: 2, G: 4, W: 1, L: 2, D: 0 },
    { name: "Tanner Yue", T: 4, A: 0, G: 4, W: 2, L: 1, D: 1 },
    { name: "Tadeas Horn", T: 7, A: 5, G: 4, W: 3, L: 1, D: 1 },
    { name: "Vincent Cook", T: 10, A: 2, G: 2, W: 0, L: 5, D: 0 },
    { name: "Xavier Herrera", T: 9, A: 1, G: 0, W: 0, L: 3, D: 5 },
  ],
};

// update ad_data (aggregate day data) from aggregate.txt
let ad_data = {
  "2025-2-20": [
    { name: "Caleb Mok", T: 5, A: 4, G: 2, W: 2, L: 3, D: 0 },
    { name: "Charles Torpey", T: 3, A: 0, G: 2, W: 1, L: 3, D: 0 },
    { name: "Christopher Pantaleon", T: 6, A: 0, G: 1, W: 1, L: 3, D: 0 },
    { name: "Dan Thompson", T: 3, A: 1, G: 5, W: 3, L: 2, D: 0 },
    { name: "Edwin Li", T: 5, A: 1, G: 0, W: 1, L: 2, D: 0 },
    { name: "Isaac Thongthap", T: 7, A: 1, G: 1, W: 1, L: 4, D: 0 },
    { name: "Jake Dapiran", T: 4, A: 1, G: 1, W: 1, L: 2, D: 0 },
    { name: "Joseph Faso", T: 4, A: 5, G: 3, W: 2, L: 3, D: 0 },
    { name: "Kevin Camelin", T: 2, A: 1, G: 4, W: 3, L: 0, D: 0 },
    { name: "Joshua Krone", T: 0, A: 1, G: 1, W: 1, L: 2, D: 0 },
    { name: "Jakob Lail", T: 2, A: 4, G: 2, W: 3, L: 2, D: 0 },
    { name: "Jacob Linares", T: 0, A: 3, G: 11, W: 5, L: 0, D: 0 },
    { name: "Mark Blackburn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Novinsky", T: 3, A: 5, G: 2, W: 3, L: 1, D: 0 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 3, A: 11, G: 2, W: 5, L: 0, D: 0 },
    { name: "Sakhin Selvamani", T: 1, A: 1, G: 3, W: 2, L: 3, D: 0 },
    { name: "Tanner Yue", T: 3, A: 0, G: 3, W: 0, L: 3, D: 0 },
    { name: "Tadeas Horn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Vincent Cook", T: 8, A: 5, G: 2, W: 2, L: 3, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-2-21": [
    { name: "Caleb Mok", T: 12, A: 11, G: 6, W: 5, L: 7, D: 3 },
    { name: "Charles Torpey", T: 3, A: 0, G: 2, W: 1, L: 3, D: 0 },
    { name: "Christopher Pantaleon", T: 10, A: 5, G: 5, W: 4, L: 5, D: 0 },
    { name: "Dan Thompson", T: 4, A: 4, G: 8, W: 5, L: 5, D: 0 },
    { name: "Edwin Li", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0 },
    { name: "Isaac Thongthap", T: 11, A: 2, G: 3, W: 2, L: 7, D: 1 },
    { name: "Jake Dapiran", T: 8, A: 1, G: 4, W: 3, L: 4, D: 1 },
    { name: "Joseph Faso", T: 8, A: 10, G: 6, W: 5, L: 7, D: 0 },
    { name: "Kevin Camelin", T: 2, A: 1, G: 9, W: 5, L: 0, D: 0 },
    { name: "Joshua Krone", T: 5, A: 2, G: 4, W: 2, L: 5, D: 0 },
    { name: "Jakob Lail", T: 8, A: 12, G: 6, W: 8, L: 2, D: 1 },
    { name: "Jacob Linares", T: 1, A: 5, G: 21, W: 11, L: 0, D: 2 },
    { name: "Mark Blackburn", T: 1, A: 1, G: 0, W: 2, L: 2, D: 0 },
    { name: "Ryan Novinsky", T: 9, A: 9, G: 7, W: 5, L: 5, D: 1 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 6, A: 22, G: 6, W: 9, L: 2, D: 1 },
    { name: "Sakhin Selvamani", T: 4, A: 4, G: 5, W: 3, L: 8, D: 1 },
    { name: "Tanner Yue", T: 11, A: 2, G: 3, W: 1, L: 6, D: 2 },
    { name: "Tadeas Horn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Vincent Cook", T: 14, A: 9, G: 5, W: 5, L: 6, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-2-24": [
    { name: "Caleb Mok", T: 16, A: 12, G: 9, W: 6, L: 10, D: 5 },
    { name: "Charles Torpey", T: 9, A: 3, G: 4, W: 2, L: 5, D: 2 },
    { name: "Christopher Pantaleon", T: 13, A: 6, G: 10, W: 6, L: 6, D: 1 },
    { name: "Dan Thompson", T: 7, A: 4, G: 11, W: 6, L: 7, D: 0 },
    { name: "Edwin Li", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0 },
    { name: "Isaac Thongthap", T: 15, A: 5, G: 5, W: 5, L: 7, D: 2 },
    { name: "Jake Dapiran", T: 15, A: 1, G: 5, W: 5, L: 5, D: 3 },
    { name: "Joseph Faso", T: 12, A: 11, G: 10, W: 7, L: 9, D: 0 },
    { name: "Kevin Camelin", T: 2, A: 1, G: 9, W: 5, L: 0, D: 0 },
    { name: "Joshua Krone", T: 9, A: 7, G: 5, W: 4, L: 6, D: 0 },
    { name: "Jakob Lail", T: 12, A: 17, G: 9, W: 10, L: 4, D: 2 },
    { name: "Jacob Linares", T: 3, A: 6, G: 24, W: 13, L: 1, D: 2 },
    { name: "Mark Blackburn", T: 1, A: 1, G: 0, W: 2, L: 2, D: 0 },
    { name: "Ryan Novinsky", T: 18, A: 14, G: 9, W: 7, L: 8, D: 2 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 9, A: 32, G: 7, W: 13, L: 2, D: 1 },
    { name: "Sakhin Selvamani", T: 6, A: 6, G: 9, W: 4, L: 10, D: 1 },
    { name: "Tanner Yue", T: 15, A: 2, G: 7, W: 3, L: 7, D: 3 },
    { name: "Tadeas Horn", T: 7, A: 5, G: 4, W: 3, L: 1, D: 1 },
    { name: "Vincent Cook", T: 24, A: 11, G: 7, W: 5, L: 11, D: 0 },
    { name: "Xavier Herrera", T: 9, A: 1, G: 0, W: 0, L: 3, D: 5 },
  ],
};

let select_tag = document.getElementById("selected-date");
for (let date of Object.keys(pd_data).reverse()) {
  let opt = document.createElement("option");
  opt.value = date;
  opt.innerHTML = date;
  select_tag.appendChild(opt);
  select_tag.selectedIndex = 0;
}
createRows();

document.getElementById("selected-date").addEventListener("change", createRows);

function createRows() {
  let date = document.getElementById("selected-date").value;
  let pd_arr = pd_data[date];
  let ad_arr = ad_data[date];
  document.getElementById("tbody-start").innerHTML = "";
  for (let i in pd_arr) {
    let row = document.createElement("tr");
    let content = `
      <td style="padding-left: 10px">${pd_arr[i]["name"]}</td>
      <td style="text-align: center">${pd_arr[i]["W"]}</td>
      <td style="text-align: center">${pd_arr[i]["D"]}</td>
      <td style="text-align: center">${pd_arr[i]["A"]}</td>
      <td style="text-align: center">${pd_arr[i]["G"]}</td>
      <td style="text-align: center">${pd_arr[i]["T"]}</td>
      <td style="text-align: center; border-right: solid 2px black">${pd_arr[i]["L"]}</td>
      <td style="text-align: center">${ad_arr[i]["W"]}</td>
      <td style="text-align: center">${ad_arr[i]["D"]}</td>
      <td style="text-align: center">${ad_arr[i]["A"]}</td>
      <td style="text-align: center">${ad_arr[i]["G"]}</td>
      <td style="text-align: center">${ad_arr[i]["T"]}</td>
      <td style="text-align: center">${ad_arr[i]["L"]}</td>
      `;
    row.innerHTML = content;
    document.getElementById("tbody-start").appendChild(row);
  }
}
