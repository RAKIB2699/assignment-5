document.addEventListener('DOMContentLoaded', (event) => {
    const weekdayElement = document.getElementById('weekday');
    const dateElement = document.getElementById('date');

    const today = new Date();

    const optionsWeekday = { weekday: 'short' };
    const optionsDate = { month: 'short', day: 'numeric', year: 'numeric' };

    const weekday = today.toLocaleDateString('en-US', optionsWeekday);
    const date = today.toLocaleDateString('en-US', optionsDate).replace(',', '');

    weekdayElement.textContent = `${weekday},`;
    dateElement.textContent = date;
});

document.getElementById("themebtn").addEventListener('click', function () {
    const randomColor = `#${Math.floor(Math.random() * 16112345).toString(16)}`;

    document.getElementById("body").style.backgroundColor = randomColor;

})

document.getElementById("blogbtn").addEventListener('click', function () { 
    window.location.href = "main.html"
})
