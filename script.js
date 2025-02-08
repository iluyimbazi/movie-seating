const seatGrid = document.querySelector(".seat-grid");
const selectedSeatsSpan = document.getElementById("selected-seats");
const totalPriceSpan = document.getElementById("total-price");
const bookButton = document.getElementById("book-button");

const numRows = 10;
const seatsPerRow = 12;
const pricePerSeat = 10;

function generateSeats() {
  for (let row = 0; row < numRows; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    seatGrid.appendChild(rowDiv);

    for (let col = 0; col < seatsPerRow; col++) {
      const seat = document.createElement("div");
      seat.classList.add("seat");

      if (col === 5 || col === 6) {
        seat.classList.add("aisle");
      } else if (row < 2) {
        seat.classList.add("premium");
      } else if (row === 3 && col === 3) {
        seat.classList.add("unavailable");
      }

      seat.addEventListener("click", toggleSeat);
      rowDiv.appendChild(seat);
    }
  }
}

let selectedSeats = [];

function toggleSeat(event) {
  const seat = event.target;

  if (
    !seat.classList.contains("occupied") &&
    !seat.classList.contains("unavailable") &&
    !seat.classList.contains("aisle")
  ) {
    seat.classList.toggle("selected");

    const row = seat.parentElement;
    const rowIndex = Array.from(seatGrid.children).indexOf(row);
    const colIndex = Array.from(row.children).indexOf(seat);
    const seatIndex = rowIndex * seatsPerRow + colIndex;

    if (seat.classList.contains("selected")) {
      selectedSeats.push(seatIndex);
    } else {
      selectedSeats = selectedSeats.filter((index) => index !== seatIndex);
    }

    updateBookingInfo();
  }
}

function updateBookingInfo() {
  selectedSeatsSpan.textContent = selectedSeats.length;

  let totalPrice = 0;
  selectedSeats.forEach((seatIndex) => {
    const row = seatGrid.children[Math.floor(seatIndex / seatsPerRow)];
    const seat = row.children[seatIndex % seatsPerRow];
    totalPrice += seat.classList.contains("premium")
      ? pricePerSeat * 2
      : pricePerSeat;
  });
  totalPriceSpan.textContent = totalPrice;
}

bookButton.addEventListener("click", () => {
  if (selectedSeats.length > 0) {
    alert("Booking confirmed for seats: " + selectedSeats.join(", "));

    selectedSeats.forEach((seatIndex) => {
      const row = seatGrid.children[Math.floor(seatIndex / seatsPerRow)];
      const seat = row.children[seatIndex % seatsPerRow];
      seat.classList.add("occupied");
      seat.classList.remove("selected");
      seat.classList.remove("premium"); // Remove premium class
      seat.classList.remove("unavailable"); // Remove unavailable class
    });

    selectedSeats = []; // Clear selected seats
    updateBookingInfo();
  } else {
    alert("Please select at least one seat.");
  }
});

generateSeats();
