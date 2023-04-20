
//write your page loading script here. Populate the dropdown with the GOT houses.
document.addEventListener("DOMContentLoaded", init);

function init() {
  let houses = [];

  // get external json data 
  //then convert it back into JS, 
  //then save it into the houses array.
  
  
  // loop through the houses array and populate the
  // dropdown with the house names and codes.
  houses.forEach((item) => {
    const option = document.createElement("OPTION");
    option.value = item.code;
    option.innerText = item.name;
    house.appendChild(option);
  });
    

  // DOM ref to the select dropdown
  let house = document.getElementById("house");

  // display a list of the house members
  // when the select list has changed.
  house.addEventListener("change", (e) => {
    //get the house code from the select
    const code = e.target.value;
    let members = [];

    // loop through houses array
    // check for a matching house code,
    // grab the members of that house
    houses.forEach((item) => {
      if (item.code === code) {
        members = item.members;
      }
    });

    // DOM ref for ul to display members
    const container = document.getElementById("characters");

    // clear out any previous member names
    container.innerHTML = "";

    // handle if no house selected
    if (members.length === 0) {
      let item = document.createElement("LI");
      item.innerText = "No House Selected";
      container.appendChild(item);
    } else {
      // create the li's and append to the ul
      members.forEach((person) => {
        let item = document.createElement("LI");
        item.innerText = person;
        container.appendChild(item);
      });
    } // end if/else
  }); //end addEventListener - change
} //end init
