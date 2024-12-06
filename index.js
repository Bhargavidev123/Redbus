function displayResult(event) {
    event.preventDefault(); 

    const from = document.getElementById('input-label-from').value;
    const to = document.getElementById('input-label-to').value;
    const date = document.getElementById('input-label-onward-date').value;
    

    let  searchData = { from, to, date };
    
    localStorage.setItem('searchData', JSON.stringify(searchData));
    window.location.href="./results.html";

}
