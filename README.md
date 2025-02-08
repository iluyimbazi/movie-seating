# Movie Seat Booking UI

This project is a responsive movie seat booking user interface built using HTML, CSS, and JavaScript. It provides a visual representation of a theater seating arrangement, allowing users to select seats and view the total price before booking.

## Features

- **Responsive Design:** Adapts to different screen sizes for optimal viewing on desktops, tablets, and mobile devices.
- **Dynamic Seat Grid:** Generates the seating grid using JavaScript, allowing for easy customization of rows and seats per row.
- **Seat Selection:** Users can click on available seats to select them. Selected seats are visually highlighted.
- **Multiple Seat Types:** Supports different seat types (e.g., standard, premium) with distinct visual representations and pricing.
- **Aisles:** Visual representation of aisles within the seating arrangement.
- **Unavailable Seats:** Visual representation of seats that are already occupied or unavailable.
- **Price Calculation:** Calculates the total price based on the selected seats, considering different seat types.
- **Booking Confirmation:** Simulates a booking confirmation process (in a real application, this would integrate with a backend system).

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup

1.  Clone the repository: `git clone https://github.com/YOUR_USERNAME/MOVIE_SEAT_BOOKING.git` (Replace with your repository URL)
2.  Open the `index.html` file in your web browser.

## How to Use

1.  The seating grid will be displayed.
2.  Click on available seats to select them. Selected seats will turn green. Premium seats are gold.
3.  Click on selected seats again to deselect them.
4.  The "Selected Seats" and "Total Price" information will update dynamically.
5.  Click the "Book Now" button to simulate a booking. An alert will show the selected seats.

## Project Structure

MOVIE_SEAT_BOOKING/
├── index.html // Main HTML file
├── style.css // CSS stylesheet
└── script.js // JavaScript file

## Customization

- **Number of Rows and Seats:** Modify the `numRows` and `seatsPerRow` variables in `script.js` to change the grid dimensions.
- **Seat Types and Pricing:** Adjust the `pricePerSeat` variable and the logic in `generateSeats()` and `updateBookingInfo()` in `script.js` to customize seat types and pricing.
- **Aisles:** Modify the `if (col === ...)` conditions in `generateSeats()` and the corresponding CSS rules to change the aisle layout.
- **Styling:** Customize the CSS in `style.css` to change the appearance of the seating grid, screen, and other elements.

## Future Enhancements (hopefully)

- Backend integration for actual seat reservations and data persistence.
- Improved UI/UX design.
- More advanced seat selection features (e.g., selecting multiple seats at once).
- Accessibility improvements.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License
