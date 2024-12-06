document.getElementById("submit").addEventListener("click", () => {
    checkGender();
});

function checkGender() {
    const gender = document.getElementById("gender").value.toLowerCase();
    const seats = document.querySelectorAll(".seats");

    if (gender === "female") {
        seats.forEach((seat, index) => {
            seat.addEventListener("click", () => {
                if (!seat.classList.contains("disabled")) {
                    seat.classList.add("selected");
                    seat.style.backgroundColor = "lightgrey";
                    seat.style.border = "1px solid red";
                    seat.style.color = "green";
                    seat.title = "Booked by female; adjacent seats disabled for men";
                    disableAdjacentSeats(index);  
                }
            });
        });
    } else {
        seats.forEach((seat) => {
            seat.addEventListener("click", () => {
                if (!seat.classList.contains("disabled")) {
                    seat.classList.add("selected");
                    seat.style.backgroundColor = "lightgrey";
                    seat.style.border = "1px solid black";
                    seat.style.color = "black";
                    seat.title = "Booked by male passenger";
                }
            });
        });
    }
}

function disableAdjacentSeats(selectedIndex) {
    const seats = document.querySelectorAll(".seats");
    const totalSeats = seats.length;

    if (selectedIndex > 0) {
        const leftSeat = seats[selectedIndex - 1];
        leftSeat.classList.add("disabled");
        leftSeat.style.backgroundColor = "lightcoral";
        leftSeat.title = "Disabled due to adjacent female booking";
    }

    if (selectedIndex < totalSeats - 1) {
        const rightSeat = seats[selectedIndex + 1];
        rightSeat.classList.add("disabled");
        rightSeat.style.backgroundColor = "lightcoral";
        rightSeat.title = "Disabled due to adjacent female booking";
    }
}

const seats = document.querySelectorAll('.seats, .seats-back, .outdiv1');
let selectedSeatsCount = 0;
const seatDataStored = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.style.border = "1px solid lightblue";
            seat.style.backgroundColor = "lightgreen";
            seat.style.color = "green";
            selectedSeatsCount--;
        } else {
            seat.classList.add('selected');
            selectedSeatsCount++;
            seatDataStored.push(seat);  
        }
      
        document.getElementById('seatCount').textContent = `SelectedSeats: ${selectedSeatsCount}`;
        
        if (selectedSeatsCount > 0) {
            showConfirmButton();
        }
    });
});

function showConfirmButton() {
    const confirmBooking = document.getElementById("confirm-Booking");
    confirmBooking.style.display = "block";
   
    confirmBooking.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "./passengerdetails.html";
    });
}






