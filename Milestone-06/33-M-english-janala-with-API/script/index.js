// function for load lessons
const loadLessons = () => {
    const url = `https://openapi.programming-hero.com/api/levels/all`;
    fetch(url)//promise of response
        .then(res => res.json()) //promise of json data
        .then(jsonData => displayLessons(jsonData.data)) //here we get the json data
}

const displayLessons = (lessons) => {
    // 1.get the container and clear the container
    const labelContainer = document.querySelector('.label-container');
    labelContainer.innerHTML = '';

    // 2. loop through the lessons
    for (const lesson of lessons) {
        // 3. create a div for each lesson
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
         <button href="" class="btn btn-outline btn-primary m-2">
         <i class="fa-solid fa-book-open"></i>
         lesson -${lesson.level_no}
         </button>
        `
        // 4. append the div to the container
        labelContainer.appendChild(btnDiv);
    }

    // 4. append the div to the container


}

loadLessons();