document.getElementById("spd-nav").style.backgroundColor = "goldenrod";
document.getElementById("spd-nav-a").style.color = "black";

// update pd_data (per day data) from day.txt
let pd_data = {
  "2025-2-20": [
    { name: "Caleb Mok", T: 5, A: 4, G: 2, W: 2, L: 3, D: 0 },
    { name: "Charles Torpey", T: 3, A: 0, G: 2, W: 1, L: 3, D: 0 },
    { name: "Christopher Pantaleon", T: 6, A: 0, G: 1, W: 1, L: 3, D: 0 },
    { name: "Dan Thompson", T: 3, A: 1, G: 5, W: 3, L: 2, D: 0 },
    { name: "Edwin Lu", T: 5, A: 1, G: 0, W: 1, L: 2, D: 0 },
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
    { name: "Edwin Lu", T: 3, A: 0, G: 2, W: 1, L: 2, D: 0 },
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
    { name: "Edwin Lu", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
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
  "2025-2-27": [
    { name: "Caleb Mok", T: 7, A: 5, G: 3, W: 3, L: 1, D: 1 },
    { name: "Charles Torpey", T: 2, A: 3, G: 5, W: 2, L: 2, D: 3 },
    { name: "Christopher Pantaleon", T: 2, A: 1, G: 4, W: 2, L: 2, D: 2 },
    { name: "Dan Thompson", T: 0, A: 0, G: 3, W: 1, L: 2, D: 0 },
    { name: "Edwin Lu", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Isaac Thongthap", T: 2, A: 0, G: 2, W: 1, L: 2, D: 0 },
    { name: "Jake Dapiran", T: 1, A: 1, G: 2, W: 1, L: 1, D: 0 },
    { name: "Joseph Faso", T: 3, A: 1, G: 1, W: 1, L: 4, D: 0 },
    { name: "Kevin Camelin", T: 1, A: 0, G: 0, W: 0, L: 2, D: 0 },
    { name: "Joshua Krone", T: 3, A: 3, G: 3, W: 1, L: 2, D: 0 },
    { name: "Jakob Lail", T: 1, A: 5, G: 2, W: 2, L: 2, D: 0 },
    { name: "Jacob Linares", T: 1, A: 2, G: 6, W: 2, L: 2, D: 0 },
    { name: "Mark Blackburn", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Novinsky", T: 3, A: 3, G: 3, W: 2, L: 2, D: 0 },
    { name: "Rafael Antipuesto", T: 1, A: 0, G: 0, W: 0, L: 2, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 4, A: 6, G: 2, W: 2, L: 2, D: 1 },
    { name: "Sakhin Selvamani", T: 8, A: 2, G: 3, W: 2, L: 2, D: 2 },
    { name: "Tanner Yue", T: 3, A: 1, G: 2, W: 1, L: 1, D: 1 },
    { name: "Tadeas Horn", T: 3, A: 7, G: 4, W: 6, L: 0, D: 0 },
    { name: "Vincent Cook", T: 9, A: 1, G: 0, W: 1, L: 1, D: 0 },
    { name: "Xavier Herrera", T: 9, A: 6, G: 2, W: 3, L: 1, D: 1 },
  ],
  "2025-2-28": [
    { name: "Caleb Mok", T: 1, A: 1, G: 4, W: 3, L: 2, D: 1 },
    { name: "Charles Torpey", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Christopher Pantaleon", T: 1, A: 1, G: 1, W: 2, L: 0, D: 1 },
    { name: "Dan Thompson", T: 3, A: 3, G: 4, W: 3, L: 1, D: 1 },
    { name: "Edwin Lu", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Isaac Thongthap", T: 6, A: 1, G: 1, W: 0, L: 2, D: 1 },
    { name: "Jake Dapiran", T: 2, A: 1, G: 2, W: 1, L: 1, D: 0 },
    { name: "Joseph Faso", T: 8, A: 2, G: 1, W: 2, L: 1, D: 0 },
    { name: "Kevin Camelin", T: 0, A: 1, G: 3, W: 1, L: 2, D: 0 },
    { name: "Joshua Krone", T: 7, A: 3, G: 3, W: 3, L: 0, D: 1 },
    { name: "Jakob Lail", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Jacob Linares", T: 1, A: 2, G: 3, W: 1, L: 3, D: 2 },
    { name: "Mark Blackburn", T: 4, A: 1, G: 0, W: 0, L: 3, D: 0 },
    { name: "Ryan Novinsky", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 4, A: 6, G: 2, W: 2, L: 3, D: 1 },
    { name: "Sakhin Selvamani", T: 5, A: 2, G: 1, W: 0, L: 3, D: 0 },
    { name: "Tanner Yue", T: 4, A: 1, G: 2, W: 1, L: 1, D: 0 },
    { name: "Tadeas Horn", T: 2, A: 5, G: 3, W: 3, L: 1, D: 1 },
    { name: "Vincent Cook", T: 6, A: 3, G: 3, W: 2, L: 1, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-3-10": [
    { name: "Caleb Mok", T: 4, A: 1, G: 8, W: 3, L: 2, D: 0 },
    { name: "Charles Torpey", T: 2, A: 0, G: 3, W: 1, L: 2, D: 3 },
    { name: "Christopher Pantaleon", T: 3, A: 2, G: 1, W: 1, L: 2, D: 0 },
    { name: "Dan Thompson", T: 0, A: 0, G: 3, W: 1, L: 4, D: 0 },
    { name: "Edwin Lu", T: 3, A: 1, G: 1, W: 0, L: 3, D: 0 },
    { name: "Isaac Thongthap", T: 2, A: 3, G: 2, W: 4, L: 0, D: 0 },
    { name: "Jake Dapiran", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Joseph Faso", T: 3, A: 3, G: 1, W: 3, L: 3, D: 0 },
    { name: "Kevin Camelin", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Joshua Krone", T: 1, A: 4, G: 3, W: 3, L: 2, D: 0 },
    { name: "Jakob Lail", T: 5, A: 3, G: 2, W: 2, L: 3, D: 0 },
    { name: "Jacob Linares", T: 1, A: 1, G: 7, W: 3, L: 1, D: 0 },
    { name: "Mark Blackburn", T: 0, A: 2, G: 4, W: 2, L: 1, D: 0 },
    { name: "Ryan Novinsky", T: 7, A: 5, G: 1, W: 3, L: 1, D: 0 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 4, A: 2, G: 4, W: 2, L: 1, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 2, A: 10, G: 3, W: 4, L: 1, D: 0 },
    { name: "Sakhin Selvamani", T: 2, A: 2, G: 1, W: 0, L: 5, D: 0 },
    { name: "Tanner Yue", T: 2, A: 1, G: 2, W: 1, L: 2, D: 2 },
    { name: "Tadeas Horn", T: 5, A: 8, G: 3, W: 3, L: 3, D: 1 },
    { name: "Vincent Cook", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-3-6": [
    { name: "Caleb Mok", T: 4, A: 1, G: 1, W: 1, L: 2, D: 1 },
    { name: "Charles Torpey", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Christopher Pantaleon", T: 6, A: 1, G: 2, W: 1, L: 3, D: 1 },
    { name: "Dan Thompson", T: 3, A: 2, G: 1, W: 1, L: 3, D: 0 },
    { name: "Edwin Lu", T: 1, A: 0, G: 1, W: 1, L: 1, D: 0 },
    { name: "Isaac Thongthap", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Jake Dapiran", T: 2, A: 0, G: 1, W: 1, L: 1, D: 1 },
    { name: "Joseph Faso", T: 3, A: 4, G: 2, W: 2, L: 0, D: 2 },
    { name: "Kevin Camelin", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Joshua Krone", T: 4, A: 0, G: 6, W: 2, L: 2, D: 2 },
    { name: "Jakob Lail", T: 3, A: 6, G: 3, W: 4, L: 0, D: 3 },
    { name: "Jacob Linares", T: 2, A: 2, G: 2, W: 1, L: 3, D: 0 },
    { name: "Mark Blackburn", T: 4, A: 0, G: 1, W: 0, L: 2, D: 0 },
    { name: "Ryan Novinsky", T: 1, A: 4, G: 4, W: 2, L: 2, D: 0 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 3, A: 3, G: 5, W: 3, L: 0, D: 2 },
    { name: "Ryan Phi-Nguyen", T: 3, A: 5, G: 1, W: 2, L: 2, D: 0 },
    { name: "Sakhin Selvamani", T: 2, A: 2, G: 2, W: 0, L: 4, D: 0 },
    { name: "Tanner Yue", T: 3, A: 2, G: 1, W: 2, L: 1, D: 0 },
    { name: "Tadeas Horn", T: 3, A: 4, G: 5, W: 4, L: 1, D: 1 },
    { name: "Vincent Cook", T: 7, A: 3, G: 2, W: 2, L: 1, D: 0 },
    { name: "Xavier Herrera", T: 6, A: 2, G: 2, W: 1, L: 2, D: 1 },
  ],
};

// update ad_data (aggregate day data) from aggregate.txt
let ad_data = {
  "2025-2-20": [
    { name: "Caleb Mok", T: 5, A: 4, G: 2, W: 2, L: 3, D: 0 },
    { name: "Charles Torpey", T: 3, A: 0, G: 2, W: 1, L: 3, D: 0 },
    { name: "Christopher Pantaleon", T: 6, A: 0, G: 1, W: 1, L: 3, D: 0 },
    { name: "Dan Thompson", T: 3, A: 1, G: 5, W: 3, L: 2, D: 0 },
    { name: "Edwin Lu", T: 5, A: 1, G: 0, W: 1, L: 2, D: 0 },
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
    { name: "Edwin Lu", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0 },
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
    { name: "Edwin Lu", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0 },
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
  "2025-2-27": [
    { name: "Caleb Mok", T: 23, A: 17, G: 12, W: 9, L: 11, D: 6 },
    { name: "Charles Torpey", T: 11, A: 6, G: 9, W: 4, L: 7, D: 5 },
    { name: "Christopher Pantaleon", T: 15, A: 7, G: 14, W: 8, L: 8, D: 3 },
    { name: "Dan Thompson", T: 7, A: 4, G: 14, W: 7, L: 9, D: 0 },
    { name: "Edwin Lu", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0 },
    { name: "Isaac Thongthap", T: 17, A: 5, G: 7, W: 6, L: 9, D: 2 },
    { name: "Jake Dapiran", T: 16, A: 2, G: 7, W: 6, L: 6, D: 3 },
    { name: "Joseph Faso", T: 15, A: 12, G: 11, W: 8, L: 13, D: 0 },
    { name: "Kevin Camelin", T: 3, A: 1, G: 9, W: 5, L: 2, D: 0 },
    { name: "Joshua Krone", T: 12, A: 10, G: 8, W: 5, L: 8, D: 0 },
    { name: "Jakob Lail", T: 13, A: 22, G: 11, W: 12, L: 6, D: 2 },
    { name: "Jacob Linares", T: 4, A: 8, G: 30, W: 15, L: 3, D: 2 },
    { name: "Mark Blackburn", T: 1, A: 1, G: 0, W: 2, L: 2, D: 0 },
    { name: "Ryan Novinsky", T: 21, A: 17, G: 12, W: 9, L: 10, D: 2 },
    { name: "Rafael Antipuesto", T: 1, A: 0, G: 0, W: 0, L: 2, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 13, A: 38, G: 9, W: 15, L: 4, D: 2 },
    { name: "Sakhin Selvamani", T: 14, A: 8, G: 12, W: 6, L: 12, D: 3 },
    { name: "Tanner Yue", T: 18, A: 3, G: 9, W: 4, L: 8, D: 4 },
    { name: "Tadeas Horn", T: 10, A: 12, G: 8, W: 9, L: 1, D: 1 },
    { name: "Vincent Cook", T: 33, A: 12, G: 7, W: 6, L: 12, D: 0 },
    { name: "Xavier Herrera", T: 18, A: 7, G: 2, W: 3, L: 4, D: 6 },
  ],
  "2025-2-28": [
    { name: "Caleb Mok", T: 24, A: 18, G: 16, W: 12, L: 13, D: 7 },
    { name: "Charles Torpey", T: 11, A: 6, G: 9, W: 4, L: 7, D: 5 },
    { name: "Christopher Pantaleon", T: 16, A: 8, G: 15, W: 10, L: 8, D: 4 },
    { name: "Dan Thompson", T: 10, A: 7, G: 18, W: 10, L: 10, D: 1 },
    { name: "Edwin Lu", T: 8, A: 1, G: 2, W: 2, L: 4, D: 0 },
    { name: "Isaac Thongthap", T: 23, A: 6, G: 8, W: 6, L: 11, D: 3 },
    { name: "Jake Dapiran", T: 18, A: 3, G: 9, W: 7, L: 7, D: 3 },
    { name: "Joseph Faso", T: 23, A: 14, G: 12, W: 10, L: 14, D: 0 },
    { name: "Kevin Camelin", T: 3, A: 2, G: 12, W: 6, L: 4, D: 0 },
    { name: "Joshua Krone", T: 19, A: 13, G: 11, W: 8, L: 8, D: 1 },
    { name: "Jakob Lail", T: 13, A: 22, G: 11, W: 12, L: 6, D: 2 },
    { name: "Jacob Linares", T: 5, A: 10, G: 33, W: 16, L: 6, D: 4 },
    { name: "Mark Blackburn", T: 5, A: 2, G: 0, W: 2, L: 5, D: 0 },
    { name: "Ryan Novinsky", T: 21, A: 17, G: 12, W: 9, L: 10, D: 2 },
    { name: "Rafael Antipuesto", T: 1, A: 0, G: 0, W: 0, L: 2, D: 0 },
    { name: "Roman Leigh", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 17, A: 44, G: 11, W: 17, L: 7, D: 3 },
    { name: "Sakhin Selvamani", T: 19, A: 10, G: 13, W: 6, L: 15, D: 3 },
    { name: "Tanner Yue", T: 22, A: 4, G: 11, W: 5, L: 9, D: 4 },
    { name: "Tadeas Horn", T: 12, A: 17, G: 11, W: 12, L: 2, D: 2 },
    { name: "Vincent Cook", T: 39, A: 15, G: 10, W: 8, L: 13, D: 0 },
    { name: "Xavier Herrera", T: 18, A: 7, G: 2, W: 3, L: 4, D: 6 },
  ],
  "2025-3-10": [
    { name: "Caleb Mok", T: 4, A: 1, G: 8, W: 3, L: 2, D: 0 },
    { name: "Charles Torpey", T: 2, A: 0, G: 3, W: 1, L: 2, D: 3 },
    { name: "Christopher Pantaleon", T: 3, A: 2, G: 1, W: 1, L: 2, D: 0 },
    { name: "Dan Thompson", T: 0, A: 0, G: 3, W: 1, L: 4, D: 0 },
    { name: "Edwin Lu", T: 3, A: 1, G: 1, W: 0, L: 3, D: 0 },
    { name: "Isaac Thongthap", T: 2, A: 3, G: 2, W: 4, L: 0, D: 0 },
    { name: "Jake Dapiran", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Joseph Faso", T: 3, A: 3, G: 1, W: 3, L: 3, D: 0 },
    { name: "Kevin Camelin", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Joshua Krone", T: 1, A: 4, G: 3, W: 3, L: 2, D: 0 },
    { name: "Jakob Lail", T: 5, A: 3, G: 2, W: 2, L: 3, D: 0 },
    { name: "Jacob Linares", T: 1, A: 1, G: 7, W: 3, L: 1, D: 0 },
    { name: "Mark Blackburn", T: 0, A: 2, G: 4, W: 2, L: 1, D: 0 },
    { name: "Ryan Novinsky", T: 7, A: 5, G: 1, W: 3, L: 1, D: 0 },
    { name: "Rafael Antipuesto", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Roman Leigh", T: 4, A: 2, G: 4, W: 2, L: 1, D: 0 },
    { name: "Ryan Phi-Nguyen", T: 2, A: 10, G: 3, W: 4, L: 1, D: 0 },
    { name: "Sakhin Selvamani", T: 2, A: 2, G: 1, W: 0, L: 5, D: 0 },
    { name: "Tanner Yue", T: 2, A: 1, G: 2, W: 1, L: 2, D: 2 },
    { name: "Tadeas Horn", T: 5, A: 8, G: 3, W: 3, L: 3, D: 1 },
    { name: "Vincent Cook", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
    { name: "Xavier Herrera", T: 0, A: 0, G: 0, W: 0, L: 0, D: 0 },
  ],
  "2025-3-6": [
    { name: "Caleb Mok", T: 28, A: 19, G: 17, W: 13, L: 15, D: 8 },
    { name: "Charles Torpey", T: 11, A: 6, G: 9, W: 4, L: 7, D: 5 },
    { name: "Christopher Pantaleon", T: 22, A: 9, G: 17, W: 11, L: 11, D: 5 },
    { name: "Dan Thompson", T: 13, A: 9, G: 19, W: 11, L: 13, D: 1 },
    { name: "Edwin Lu", T: 9, A: 1, G: 3, W: 3, L: 5, D: 0 },
    { name: "Isaac Thongthap", T: 23, A: 6, G: 8, W: 6, L: 11, D: 3 },
    { name: "Jake Dapiran", T: 20, A: 3, G: 10, W: 8, L: 8, D: 4 },
    { name: "Joseph Faso", T: 26, A: 18, G: 14, W: 12, L: 14, D: 2 },
    { name: "Kevin Camelin", T: 3, A: 2, G: 12, W: 6, L: 4, D: 0 },
    { name: "Joshua Krone", T: 23, A: 13, G: 17, W: 10, L: 10, D: 3 },
    { name: "Jakob Lail", T: 16, A: 28, G: 14, W: 16, L: 6, D: 5 },
    { name: "Jacob Linares", T: 7, A: 12, G: 35, W: 17, L: 9, D: 4 },
    { name: "Mark Blackburn", T: 9, A: 2, G: 1, W: 2, L: 7, D: 0 },
    { name: "Ryan Novinsky", T: 22, A: 21, G: 16, W: 11, L: 12, D: 2 },
    { name: "Rafael Antipuesto", T: 1, A: 0, G: 0, W: 0, L: 2, D: 0 },
    { name: "Roman Leigh", T: 3, A: 3, G: 5, W: 3, L: 0, D: 2 },
    { name: "Ryan Phi-Nguyen", T: 20, A: 49, G: 12, W: 19, L: 9, D: 3 },
    { name: "Sakhin Selvamani", T: 21, A: 12, G: 15, W: 6, L: 19, D: 3 },
    { name: "Tanner Yue", T: 25, A: 6, G: 12, W: 7, L: 10, D: 4 },
    { name: "Tadeas Horn", T: 15, A: 21, G: 16, W: 16, L: 3, D: 3 },
    { name: "Vincent Cook", T: 46, A: 18, G: 12, W: 10, L: 14, D: 0 },
    { name: "Xavier Herrera", T: 24, A: 9, G: 4, W: 4, L: 6, D: 7 },
  ],
};

let select_tag = document.getElementById("selected-date");
for (let date of Object.keys(pd_data).sort(sortDates).reverse()) {
  let opt = document.createElement("option");
  opt.value = date;
  opt.innerHTML = date;
  select_tag.appendChild(opt);
  select_tag.selectedIndex = 0;
}
createRows();

document.getElementById("selected-date").addEventListener("change", createRows);

function sortDates(date1, date2) {
  console.log(date1, date2);
  let d1 = date1.split("-").map((el) => Number(el));
  let d2 = date2.split("-").map((el) => Number(el));
  if (d1[0] < d2[0]) return -1;
  else if (d1[0] > d2[0]) return 1;
  else if (d1[1] < d2[1]) return -1;
  else if (d1[1] > d2[1]) return 1;
  else if (d1[2] < d2[2]) return -1;
  else if (d1[2] > d2[2]) return 1;
  else return 0;
}

function oldRating(pd, ad) {
  let pre = {};
  pre["W"] = ad.W - pd.W;
  pre["L"] = ad.L - pd.L;
  pre["T"] = ad.T - pd.T;
  pre["A"] = ad.A - pd.A;
  pre["G"] = ad.G - pd.G;
  pre["D"] = ad.D - pd.D;

  let prev = oldAlgo(pre);
  let curr = oldAlgo(ad);
  return curr - prev;

  function oldAlgo(obj) {
    let w = (x) => Math.floor(114 * Math.log2(0.5 * (x + 2)));
    let l = (x) => Math.floor(-93 * Math.log2(0.4 * (x + 2.5)));
    let d = (x) => x * 2;
    let a = (x) => x * 2;
    let g = (x) => x * 2;
    let t = (x) => x * -4;
    return w(obj.W) + l(obj.L) + d(obj.D) + a(obj.A) + g(obj.G) + t(obj.T);
  }
}

function newRating(obj) {
  let w = (x) => x * 20;
  let l = (x) => x * -20;
  let d = (x) => x * 4;
  let a = (x) => x * 4;
  let g = (x) => x * 4;
  let t = (x) => x * -6;
  return w(obj.W) + l(obj.L) + d(obj.D) + a(obj.A) + g(obj.G) + t(obj.T);
}

function createRows() {
  let date = document.getElementById("selected-date").value;
  let pd_arr = pd_data[date];
  let ad_arr = ad_data[date];
  document.getElementById("tbody-start").innerHTML = "";
  for (let i in pd_arr) {
    let row = document.createElement("tr");

    let rating = undefined;
    if (sortDates(date, "2025-3-6") > 0) rating = newRating(pd_arr[i]);
    else rating = oldRating(pd_arr[i], ad_arr[i]);

    let content = `
      <td style="padding-left: 10px">${pd_arr[i]["name"]}</td>
      <td style="text-align: center">${pd_arr[i]["W"]}</td>
      <td style="text-align: center">${pd_arr[i]["D"]}</td>
      <td style="text-align: center">${pd_arr[i]["G"]}</td>
      <td style="text-align: center">${pd_arr[i]["A"]}</td>
      <td style="text-align: center">${pd_arr[i]["T"]}</td>
      <td style="text-align: center">${pd_arr[i]["L"]}</td>
      <td style="text-align: center; border-right: solid 2px black; font-weight: bold; color: ${
        Number(rating) < 0 ? "#D2042D" : "green"
      }">${rating < 0 ? rating : "+" + rating}</td>
      <td style="text-align: center">${ad_arr[i]["W"]}</td>
      <td style="text-align: center">${ad_arr[i]["D"]}</td>
      <td style="text-align: center">${ad_arr[i]["G"]}</td>
      <td style="text-align: center">${ad_arr[i]["A"]}</td>
      <td style="text-align: center">${ad_arr[i]["T"]}</td>
      <td style="text-align: center">${ad_arr[i]["L"]}</td>
      `;
    row.innerHTML = content;
    document.getElementById("tbody-start").appendChild(row);
  }
}
