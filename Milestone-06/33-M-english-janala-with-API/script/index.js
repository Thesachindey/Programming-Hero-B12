const createElements = (arr) => {
    const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
    return htmlElements.join(' ');
};



// function for load lessons
const loadLessons = () => {
    const url = `https://openapi.programming-hero.com/api/levels/all`;
    fetch(url)//promise of response
        .then(res => res.json()) //promise of json data
        .then(jsonData => displayLessons(jsonData.data)) //here we get the json data
}
loadLessons();

// Display Lessons level
const displayLessons = (lessons) => {
    // 1.get the container and clear the container
    const labelContainer = document.querySelector('.label-container');
    labelContainer.innerHTML = ``;

    // 2. loop through the lessons
    for (const lesson of lessons) {
        // 3. create a div for each lesson
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})"  class="
            lesson-btn btn btn-outline btn-primary m-2">
            <i class="fa-solid fa-book-open"></i>
            lesson -${lesson.level_no}
            </button>
        `
        // 4. append the div to the container
        labelContainer.appendChild(btnDiv);
    }

    // 4. append the div to the container


}


const manageSpinner = (status) => {
if (status === true) {
document.getElementById("spinner").classList.remove("hidden");
document.getElementById("word-container").classList.add("hidden");
} else {
document.getElementById("word-container").classList.remove("hidden");
document.getElementById("spinner").classList.add("hidden");
}
};




//function for load level words  
const loadLevelWord = (id) => {
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)

        .then(res => res.json())
        .then(data => {
            removeActiveClass();
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add("active");//add active class to the clicked button
            displayLessonsWord(data.data)

        })
}

const removeActiveClass = () => {
    // const lessonButtons = document.getElementsByClassName('lesson-btn');
    // for (const btn of lessonBtns) {
    //     btn.classList.remove('active');
    // }

    const lessonButtons = document.querySelectorAll('.lesson-btn');  // class name diye  button ke select korly forEach use koraty parbona karon class name diye select korly HTML collection pawa jay jate forEach use kora jay na
    lessonButtons.forEach(btn => btn.classList.remove('active'));
}

//data=[ {
// "id": 1,
// "level": 3,
// "word": "Abundant",
// "meaning": null,
// "pronunciation": "অবানডান্ট"
// },]

const loadWordInfo = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    displayWordInfo(data.data);
    // console.log(data)
}

// "data": {
// "word": "Brisk",
// "meaning": "চটপটে / দ্রুত",
// "pronunciation": "ব্রিস্ক",
// "level": 3,
// "sentence": "He took a brisk walk in the morning.",
// "points": 3,
// "partsOfSpeech": "adjective",
// "synonyms": [
// "quick",
// "energetic"
// ],
// "id": 27
// }





const displayWordInfo = (info) => {
    const modalBody = document.getElementById('details-container');
    modalBody.innerHTML = `
      <div class="">
            <h2 class=" text-2xl font-bold">${info.word} (<i class="fa-solid fa-microphone-lines"></i>:${info.pronunciation})</h2>
         </div>
         <div class="">
            <h2 class="font-bold">Meaning</h2>
            <p>${info.meaning}</p>
         </div>
         <div class="">
            <h2 class="font-bold">Example</h2>
            <p>${info.sentence}</p>
         </div>
         <div class=" space-y-2">
         <h2 class="font-bold">সমার্থক শব্দ গুলি</h2>
         
         <div class="">${createElements(info.synonyms)}</div>
         </div>
    `;
    document.getElementById('word_modal').showModal();
}

const displayLessonsWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    if (words.length === 0) {
        wordContainer.innerHTML = `
                        <div class="text-3xl flex flex-col items-center justify-center gap-4 text-center col-span-full">
                                 <img src="./assets/alert-error.png" alt="alert">
                                 <p class=" font-[bangla-font] text-gray-500 text-xs">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                                 <h2 class="text-4xl font-bold font-[bangla-font]">নেক্সট Lesson এ যান</h2>
                        </div>`;
        manageSpinner(false);
        return;
    }
    words.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.innerHTML = `
               <div class="card p-10 rounded-xl bg-base-100 shadow-xl ">
                <h2 class="text-xl font-bold">${word.word ? word.word : 'শব্দ পাওয়া যায়নি'}</h2>
                <p class="text-base  mt-4">Meaning /Pronounciation</p>
                <div class="text-xl font-bold mt-4">"${word.meaning ? word.meaning : "মিনিং পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "প্রনাউন্সিয়েশন পাওয়া যায়নি"}"</div> 
                <div class="icon-cont flex justify-between items-center mt-5">
                   <button onclick="loadWordInfo(${word.id})" class=" icon bg-[#e8f4ff] hover:bg-[#cae0f5] cursor-pointer p-2 px-3 rounded-lg"> <i class="fa-solid fa-circle-info"></i></button>
                   <button class="icon bg-[#e8f4ff] hover:bg-[#cae0f5] cursor-pointer p-2 px-3 rounded-lg"> <i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            
         `;
        wordContainer.append(wordDiv);
    });
    manageSpinner(false)
}