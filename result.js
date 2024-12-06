async function displayResults() {
    try {
        const response = await fetch("https://fake-wylq.onrender.com/Routes"); 
        const selectedRoutes = await response.json(); // Parse JSON response
        console.log("Fetched Routes:", selectedRoutes);

        let retrive = JSON.parse(localStorage.getItem("searchData")); 
        console.log("Retrieved Search Data:", retrive);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ""; 

        let seatsavailbe = () => {
            return Math.floor(Math.random() * 29) + 1; 
        }

        if (selectedRoutes.length > 0) {
            selectedRoutes.forEach((route) => {
                if (route.from.toLowerCase() === retrive.from.toLowerCase() && 
                    route.end.toLowerCase() === retrive.to.toLowerCase()) {

                    console.log("Matched Route:", route);

                    let Routefrom = document.getElementById("Route-from");
                    Routefrom.innerHTML = `
                        <span class="Date">${retrive.date}</span> 
                        <span style="font-weight:bold">${route.from}</span> 
                        <span style="color:red">TO</span> 
                        <span style="font-weight:bold">${route.end}</span>
                    `;

                    const routeDisplay = document.createElement("div");
                    routeDisplay.classList.add("route-card");

                    routeDisplay.innerHTML = `
                        <div class="route-info">
                            <img src="https://png.pngtree.com/png-clipart/20230119/original/pngtree-creative-special-offer-banner-shape-tag-png-image_8922232.png" class="img-style" height="50px" width="50px"/>
                            <div class="route-time">${route.from} — ${route.end}</div>
                            <p class="route-seats">${route.journey} · ${seatsavailbe()} available Seats</p>
                            <h3>${route.Bus}</h3>
                            <p>${route.type} (2+1)</p>
                            <div class="route-ontime">80% On Time</div>
                        </div>
                        <div>
                            <button class="bookticket btn btn-danger" id="Bookticket-${route.Bus}">Book tickets</button>
                            <div class="route-price"><del>₹999</del> ₹${route.price}</div>
                            <div class="route-rating">★ ${route.rating}
                                <span style="margin-left: 5px; color: gold;" class="fa fa-star checked"></span>
                                <span style="margin-left: 5px;" class="fa fa-star checked"></span>
                            </div>
                        </div>
                    `;

                    resultsDiv.appendChild(routeDisplay);
                }
            });

            // Add event listeners for booking buttons
            document.querySelectorAll('.bookticket').forEach(button => {
                button.addEventListener('click', function () {
                    window.location.href = "./seats.html";
                });
            });
        } else {
            resultsDiv.innerHTML = '<p>No matching routes found or no route data available.</p>';
        }
    } catch (error) {
        console.error("Error fetching routes:", error);
        document.getElementById('results').innerHTML = '<p>Failed to load route data.</p>';
    }
}

displayResults();