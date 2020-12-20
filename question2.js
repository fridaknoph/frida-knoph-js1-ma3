
//Question 2
//Make a call to the following API endpoint:
//https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

const proxy = "https://noroffcors.herokuapp.com/";

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const fix = proxy + url;


const nameContainer = document.querySelector(".name");
const ratingsContainer = document.querySelector(".ratings");
const tagsContainer = document.querySelector(".tags");
const loadingContainer = document.querySelector(".spinner");

async function getApi() {  
try {
    
  loadingContainer.innerHTML = `<div class="spinner"></div>´`;

  const response = await fetch(fix);

  const results = await response.json();

  const games = results.results;

  loadingContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].name);

    nameContainer.innerHTML += `<div class="name">${games[i].name}</div>`;

    if (i === 7) {
      break;
    }
  }

  for (let i = 0; i < games.length; i++) {
    console.log(games[i].rating);

    ratingsContainer.innerHTML += `<div class="ratings">${games[i].rating}</div>`;

    if (i === 7) {
      break;
    }

      }

      //let tags = 0;

      //for (let i = 0; i < games.length; i++) {
        //if (games[i].status === "0") counter ++;
      //}
        
        //console.log(tags);
    
        //tagsContainer.innerHTML += `<div class="tags">${games[i].tags}</div>`;
    

        } catch (error) {
          console.log("There was an error");
          }
   
          }
 

getApi();





//for (let i = 0; i < data.length; i++) {
 // console.log(data[i].name);

//catch (error) {
 // console.log(error);
//}

//finally {
  //console.log("this will run")