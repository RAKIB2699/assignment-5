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



const btns = document.querySelectorAll(".completebtn");
    let value1 = parseInt(document.getElementById("navValue").innerText);
    let value2 = parseInt(document.getElementById("taskValue").innerText);
for(const btn of btns){
    btn.addEventListener('click',function(e){
       btn.setAttribute("disabled","true");
       value1+=1;
       value2-=1;
       document.getElementById("navValue").innerText = value1;
       document.getElementById("taskValue").innerText = value2;
       alert("Board updated successfully");
       let now = new Date().toLocaleTimeString();
       const container = document.getElementById("container");
       const text = btn.parentNode.parentNode;
       const findText = text.children[1].innerText;
       const newTitle = document.createElement('p');
       newTitle.innerText =`you have complete the task ${findText} at ${now}`
       container.append(newTitle);
       newTitle.style.backgroundColor = "#F4F7FF";
       newTitle.style.padding ="10px";
       newTitle.style.margin = "10px";
       newTitle.style.borderRadius ="5px";

       var disabledButtons = document.querySelectorAll('button:disabled').length;
       
            if (disabledButtons === 6) {
                alert('Congrates!!! You have complete all the task');
            }
    })
}


document.getElementById("clearbtn").addEventListener('click',function(){
   const refresh = document.getElementById("container");
   refresh.innerHTML = '';
})