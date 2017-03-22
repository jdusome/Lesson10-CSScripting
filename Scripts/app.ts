/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE
/// <reference path="../objects/Vehicle.ts"/>
/// <reference path="../objects/Car.ts"/>
/// <reference path="../objects/Point.ts"/>
/// <reference path="../collections/games.ts"/>

// App entry point
function Start() {
  LoadNavBar();
  LoadPageContent();
}

// Loads the Main Navigation using AJAX
function LoadNavBar() {
  let mainNav = document.getElementById("mainNav");
    let navbarHTML;

    // STEP 1 - need an XHR object
    let navXHR = new XMLHttpRequest();

    // STEP 2 - open a file
    navXHR.open("GET", "../navbar.html", true);

    // STEP 3 - send the XMLHttpRequest
    navXHR.send();

    // STEP 4 - listen for readystate of 4 and server status of 200 onReadyStateChange
    navXHR.onreadystatechange = function() {
      if((this.readyState === 4) && (this.status === 200)) {
        // read the data
        navbarHTML = this.responseText;
      }
    };

    // STEP 5 - wait until the Navbar file has finished loading
   navXHR.addEventListener("load", function() {
      mainNav.innerHTML = navbarHTML;
      switch(document.title) {
        case "Home":
          let homeLink = document.getElementById("homeLink");
          homeLink.setAttribute("class", "active");
        break;

        case "Projects":
          let projectsLink = document.getElementById("projectsLink");
          projectsLink.setAttribute("class", "active");
        break;

        case "Contact":
          let contactLink = document.getElementById("contactLink");
          contactLink.setAttribute("class", "active");
        break;
      }
    });
}


// Loads the Content for each page using the Document Title
function LoadPageContent() {
  switch (document.title) {
    case "Home":
      LoadHomePage();
      break;

    case "Projects":
      LoadProjectsPage();
      break;

    case "Contact":
      LoadContactPage();
      break;
  }
}

// Loads the content of the Home Page
function LoadHomePage() {

  // Date Class Examples
  let today = new Date();

  let months = ["January", "February", "March", "April", "May",
                "June", "July", "August", "September", "October", "November", "December"];

  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let currentMonth = months[today.getMonth()];
  let currentDay = day[today.getDay()];

  console.log(currentDay + " " + currentMonth + " " + today.getDate() + ", " + today.getFullYear());

  // Number Examples
  let myNumber = 10003.14157826;

  console.log(myNumber.toFixed(4));
  console.log(myNumber.toString());
  console.log(myNumber.toLocaleString());

  // Math Examples
  let die1 = Math.floor(Math.random() * 6) + 1;
  console.log(die1);
  let die2 = Math.floor(Math.random() * 6) + 1;
  console.log(die2);
  let dice = die1 + die2; // 2 six-sided dice
  console.log(dice);

let myCar:objects.Car = new objects.Car(4, 2, "Honda", "Civic");
myCar.drives();
myCar.honks();

console.log("myCar has " + myCar.doors + " doors");

  // first point
  let Point1:objects.Point = new objects.Point(10, 10);

  // second point
  let Point2:objects.Point = new objects.Point(20, 20);

  // calculate distance between two points
  let distance = objects.Point.Distance(Point1, Point2);
  console.log(distance);



  let game: collections.Game[];

  let data = {
    games: game
  }

      // STEP 1 - instantiate an XHR object
      let XHR = new XMLHttpRequest();

      // STEP 2 - open the JSON file
      XHR.open("GET", "../games.json", true);

      // STEP 3 - send out a call to the XHR object
      XHR.send();

      // STEP 4 - listen for readystate to be 4
      XHR.onreadystatechange = function () {
        if ((this.readyState === 4) && (this.status === 200)) {
          // convert data from string to JSON format
          data = JSON.parse(this.responseText);
        }
      };

      // STEP 5 - wait until data is finished loading before injecting it
      XHR.addEventListener("load", function () {

        // let gameListBody = document.getElementById("gameListBody");

        var gameListBody = $("#gameListBody");
        

        // for each game in data.games repeat
        data.games.forEach(function (game) {
          // inject a "template row" inside the dataRows div tag
          let newRow = document.createElement("tr");
          newRow.innerHTML = `
          <td>${game.name}</td>
          <td class="text-center">${game.cost}</td>
          <td class="text-center">${game.rating}</td>
        `;
          gameListBody[0].appendChild(newRow);
        }, this);

      });
}

// Loads the content for the projects page
function LoadProjectsPage() {
  // Step 1 - Setup references to the elements you need to hook into
      let HideButton = document.getElementById("HideButton");
      let HalfSizeButton = document.getElementById("HalfSizeButton");
      let ThreeQuarterSizeButton = document.getElementById("ThreeQuarterSizeButton");
      let ShowButton = document.getElementById("ShowButton");
      let FirstProjectImage = document.getElementById("FirstProjectImage");

      let ButtonArray = [HideButton, HalfSizeButton, ThreeQuarterSizeButton, ShowButton];

      // loop through the array of butttons
      ButtonArray.forEach(function (button) {
        // set an event listener for each button
        button.addEventListener("click", ButtonClick);
      }, this);

      // Use one named function, ButtonClick to respond to each of the buttons
      function ButtonClick(event) {
        // store which button has been clicked in currentButton
        //let currentButton = event.currentTarget; <- one way of getting a ref to the button
        let currentButton = event.currentTarget;
        switch (currentButton.getAttribute("id")) {
          case "HideButton":
            FirstProjectImage.style.display = "none";
            break;
          case "HalfSizeButton":
            FirstProjectImage.style.maxWidth = "50%";
            FirstProjectImage.style.display = "block";
            break;
          case "ThreeQuarterSizeButton":
            FirstProjectImage.style.maxWidth = "75%";
            FirstProjectImage.style.display = "block";
            break;
          case "ShowButton":
            FirstProjectImage.style.display = "block";
            FirstProjectImage.style.maxWidth = "100%";
            break;
        }
      }
}

// Loads the Content for the Contact Page
function LoadContactPage() {
  let FullName = document.getElementById("FullName");
      let ContactNumber = document.getElementById("ContactNumber");
      let Email = document.getElementById("Email");
      let Message = document.getElementById("Message");
      // let SendButton = document.getElementById("SendButton"); --Vanilla JS
      //this returns an array, so you can actually pinpoint the element you want by saying [0]
       let SendButton = $("#SendButton")[0]; //--JQuery
      //let SendButton = document.querySelectorAll("#SendButton")[0];

      console.log(SendButton.textContent);

      SendButton.addEventListener("click", function (event) {
        event.preventDefault();

        console.log(FullName);
        console.log(ContactNumber);
        console.log(Email);
        console.log(Message);

      });
}


  // call the Start function when the window loads
  window.onload = Start; // Start is the callback function / event handler

})(); // end of the IIFE

