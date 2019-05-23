const baseChar = "https://rickandmortyapi.com/api/character"; 
const baseEp = "https://rickandmortyapi.com/api/episode"; 
const baseEp2 = "https://rickandmortyapi.com/api/episode?page=2";
// Studio Ghibli API doesn't require an Authentication key, so yay!
let characters = document.getElementById('characters');

// Initialize container for episodes
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');


// const getPosts =  () => {
//     fetch(baseURL)
//         .then(res => res.json())
//         .then(posts => console.log(posts))
// }
fetch(baseEp)
    .then(function(result) {
        return result.json(); // This returns a json version of result, putting it into the object format
    })
    .then(function(json) {// Function inputing the result
        displayResults(json);
        console.log(json);
    }) 


    fetch(baseEp2)
    .then(function(result) {
        return result.json(); // This returns a json version of result, putting it into the object format
    })
    .then(function(json) {// Function inputing the result
        displayResults2(json);
        console.log(json);
    }) 

function displayResults(json) {
    // console.log(json.results[10]);
    // let albert = json.results[10];

    // let chartainer = document.createElement('div'); 
    // chartainer.setAttribute('class', 'chartainers');
    // let name = document.createElement('h3');
    // name.innerText = albert.name;
    // characters.appendChild(chartainer);
    // chartainer.appendChild(name);
    let ePages = json.info.pages;
    console.log(ePages); 
    let results = json.results.length;   

    for (i = 0; i < results; i++) {
        let current = json.results[i];
        let ul1 = document.createElement('ul');
        ul1.setAttribute('class', 'list-group');
        
        let li1a = document.createElement('li');
        li1a.setAttribute('class', 'list-group-item');
        li1a.innerText = "Episode: " + current.name;

        let li1b = document.createElement('li');
        li1b.setAttribute('class', 'list-group-item');
        li1b.innerText = current.air_date;

        let li1c = document.createElement('li');
        li1c.setAttribute('class', 'list-group-item');
        li1c.innerText = current.episode;

        s1.appendChild(ul1);
        s1.appendChild(li1a);
        s1.appendChild(li1b);
        s1.appendChild(li1c);
            
        }

}

function displayResults2(json) {
    let ePages = json.info.pages;
    console.log(ePages); 
    let results = json.results.length;   

    for (i = 0; i < results; i++) {
        let current = json.results[i];
        let ul2 = document.createElement('ul');
        ul2.setAttribute('class', 'list-group');
        
        let li1a = document.createElement('li');
        li1a.setAttribute('class', 'list-group-item');
        li1a.innerText = "Episode: " + current.name;

        let li1b = document.createElement('li');
        li1b.setAttribute('class', 'list-group-item');
        li1b.innerText = current.air_date;

        let li1c = document.createElement('li');
        li1c.setAttribute('class', 'list-group-item');
        li1c.innerText = current.episode;

        s2.appendChild(ul2);
        s2.appendChild(li1a);
        s2.appendChild(li1b);
        s2.appendChild(li1c);
            
        }
    }


        let twoBrothers = 'https://rickandmortyapi.com/api/character/410'; // A
        let detective = 'https://rickandmortyapi.com/api/character/165'; // B
        let fart = 'https://rickandmortyapi.com/api/character/122'; // C
        let seal = 'https://rickandmortyapi.com/api/character/463'; // D

        fetch(twoBrothers)
        .then(function(result) {
            return result.json(); // This returns a json version of result, putting it into the object format
        })
        .then(function(json) {// Function inputing the result
            displayResultsA(json);
            console.log(json);
        }) 

        function displayResultsA(json) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('style', 'width: 18rem;');

            let img = document.createElement('img');
            img.setAttribute('class', 'card-img-top');
            img.setAttribute('src', json.image);

            let cardbody = document.createElement('div');
            cardbody.setAttribute('class', 'card-body');

            let cardtitle = document.createElement('h5');
            cardtitle.setAttribute('class', 'card-title');
            cardtitle.innerText = json.name;

            let listgroup = document.createElement('ul');
            listgroup.setAttribute('class', 'list-group');
            listgroup.setAttribute('class', 'list-group-flush');

            let li1 = document.createElement('li');
            li1.setAttribute('class', 'list-group-item');
            li1.innerText = 'Status: ' + json.status;

            let li2 = document.createElement('li');
            li2.setAttribute('class', 'list-group-item');
            li2.innerText = 'Species: ' + json.species;

            let li3 = document.createElement('li');
            li3.setAttribute('class', 'list-group-item');
            li3.innerText = 'Gender: ' + json.gender;

            let li4 = document.createElement('li');
            li4.setAttribute('class', 'list-group-item');
            li4.innerText = 'Origin: ' + json.origin.name;


            c1.appendChild(card);
            c1.appendChild(img);
            c1.appendChild(cardbody);
            c1.appendChild(cardtitle);
            c1.appendChild(listgroup);
            c1.appendChild(li1);
            c1.appendChild(li2);
            c1.appendChild(li3);
            c1.appendChild(li4);
        }




        fetch(detective)
        .then(function(result) {
            return result.json(); // This returns a json version of result, putting it into the object format
        })
        .then(function(json) {// Function inputing the result
            displayResultsB(json);
            console.log(json);
        }) 

        function displayResultsB(json) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('style', 'width: 18rem;');

            let img = document.createElement('img');
            img.setAttribute('class', 'card-img-top');
            img.setAttribute('src', json.image);

            let cardbody = document.createElement('div');
            cardbody.setAttribute('class', 'card-body');

            let cardtitle = document.createElement('h5');
            cardtitle.setAttribute('class', 'card-title');
            cardtitle.innerText = json.name;

            let listgroup = document.createElement('ul');
            listgroup.setAttribute('class', 'list-group');
            listgroup.setAttribute('class', 'list-group-flush');

            let li1 = document.createElement('li');
            li1.setAttribute('class', 'list-group-item');
            li1.innerText = 'Status: ' + json.status;

            let li2 = document.createElement('li');
            li2.setAttribute('class', 'list-group-item');
            li2.innerText = 'Species: ' + json.species;

            let li3 = document.createElement('li');
            li3.setAttribute('class', 'list-group-item');
            li3.innerText = 'Gender: ' + json.gender;

            let li4 = document.createElement('li');
            li4.setAttribute('class', 'list-group-item');
            li4.innerText = 'Origin: ' + json.origin.name;


            c2.appendChild(card);
            c2.appendChild(img);
            c2.appendChild(cardbody);
            c2.appendChild(cardtitle);
            c2.appendChild(listgroup);
            c2.appendChild(li1);
            c2.appendChild(li2);
            c2.appendChild(li3);
            c2.appendChild(li4);
        }



        fetch(fart)
        .then(function(result) {
            return result.json(); // This returns a json version of result, putting it into the object format
        })
        .then(function(json) {// Function inputing the result
            displayResultsC(json);
            console.log(json);
        }) 

        function displayResultsC(json) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('style', 'width: 18rem;');

            let img = document.createElement('img');
            img.setAttribute('class', 'card-img-top');
            img.setAttribute('src', json.image);

            let cardbody = document.createElement('div');
            cardbody.setAttribute('class', 'card-body');

            let cardtitle = document.createElement('h5');
            cardtitle.setAttribute('class', 'card-title');
            cardtitle.innerText = json.name;

            let listgroup = document.createElement('ul');
            listgroup.setAttribute('class', 'list-group');
            listgroup.setAttribute('class', 'list-group-flush');

            let li1 = document.createElement('li');
            li1.setAttribute('class', 'list-group-item');
            li1.innerText = 'Status: ' + json.status;

            let li2 = document.createElement('li');
            li2.setAttribute('class', 'list-group-item');
            li2.innerText = 'Species: ' + json.species;

            let li3 = document.createElement('li');
            li3.setAttribute('class', 'list-group-item');
            li3.innerText = 'Gender: ' + json.gender;

            let li4 = document.createElement('li');
            li4.setAttribute('class', 'list-group-item');
            li4.innerText = 'Origin: ' + json.origin.name;


            c3.appendChild(card);
            c3.appendChild(img);
            c3.appendChild(cardbody);
            c3.appendChild(cardtitle);
            c3.appendChild(listgroup);
            c3.appendChild(li1);
            c3.appendChild(li2);
            c3.appendChild(li3);
            c3.appendChild(li4);
        }



        fetch(seal)
        .then(function(result) {
            return result.json(); // This returns a json version of result, putting it into the object format
        })
        .then(function(json) {// Function inputing the result
            displayResultsD(json);
            console.log(json);
        }) 

        function displayResultsD(json) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('style', 'width: 18rem;');

            let img = document.createElement('img');
            img.setAttribute('class', 'card-img-top');
            img.setAttribute('src', json.image);

            let cardbody = document.createElement('div');
            cardbody.setAttribute('class', 'card-body');

            let cardtitle = document.createElement('h5');
            cardtitle.setAttribute('class', 'card-title');
            cardtitle.innerText = json.name;

            let listgroup = document.createElement('ul');
            listgroup.setAttribute('class', 'list-group');
            listgroup.setAttribute('class', 'list-group-flush');

            let li1 = document.createElement('li');
            li1.setAttribute('class', 'list-group-item');
            li1.innerText = 'Status: ' + json.status;

            let li2 = document.createElement('li');
            li2.setAttribute('class', 'list-group-item');
            li2.innerText = 'Species: ' + json.species;

            let li3 = document.createElement('li');
            li3.setAttribute('class', 'list-group-item');
            li3.innerText = 'Gender: ' + json.gender;

            let li4 = document.createElement('li');
            li4.setAttribute('class', 'list-group-item');
            li4.innerText = 'Origin: ' + json.origin.name;


            c4.appendChild(card);
            c4.appendChild(img);
            c4.appendChild(cardbody);
            c4.appendChild(cardtitle);
            c4.appendChild(listgroup);
            c4.appendChild(li1);
            c4.appendChild(li2);
            c4.appendChild(li3);
            c4.appendChild(li4);
        }



// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>