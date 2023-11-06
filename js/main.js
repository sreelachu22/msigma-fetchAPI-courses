async function fetchData(){
    try {
        const response = await fetch('https://api.msigma.in/btech/v2/branches/')
        if(!response.ok) {
            throw new Error(`API request failed with status : ${response.status}`);
        }
        const data = await response.json();
        const subjects = [];
        data.branches.forEach(element => {
            subjects.push(element);
            console.log(subjects)
        });
         const container1 = document.querySelector('.left');
         const container2 = document.querySelector('.right');
        for(let index=0;index<=subjects.length;index++){
            const colors = ["blue", "green", "pink", "violet", "orange", "red"];
            const diffColor = colors[Math.floor(Math.random() * colors.length)];
            const box = document.createElement('div');
            box.classList.add('course');
            const shortForm = document.createElement('h3');
            const fullName = document.createElement('p');
            const apply_button = document.createElement('button');
            const fee = document.createElement('p');
            shortForm.textContent = `${subjects[index].short}`;
            shortForm.style.color = diffColor;
            fullName.textContent = `${subjects[index].name}`;
            apply_button.textContent = "Apply Now"
            apply_button.classList.add('apply-button')
            apply_button.style.color = diffColor;
            fee.textContent = "Fee starting at ₹799 per subject"
            fee.style.color = "grey"
            fee.style.fontWeight = "lighter"
            box.appendChild(shortForm);
            box.appendChild(fullName);
            box.appendChild(apply_button);
            box.appendChild(fee);
            if (index % 2 != 0) {
                container1.appendChild(box);
              } else {
                container2.appendChild(box);
              }
        }
    }
    catch(error){
        console.error('Error:', error)
    }
}
 
fetchData();