// GOT houses and members
const houses = [
    {
        "code": "ST",
        "name": "Stark",
        "members": ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"]
    },
    {
        "code": "LA",
        "name": "Lannister",
        "members": ["Tywin", "Cersei", "Jaime", "Tyrion"]
    }, 
    {
        "code": "BA",
        "name": "Baratheon",
        "members": ["Robert", "Stannis", "Renly"]
    },
    {
        "code": "TA",
        "name": "Targaryen",
        "members": ["Aerys", "Daenerys", "Viserys"]
    } 
];


document.addEventListener('DOMContentLoaded', init);

//write your page loading script here. Populate the dropdown with the GOT houses.
function init() {
  // DOM ref to the select dropdown
  let house = document.getElementById('house');
  
  // loop through the houses array and populate the
  // dropdown with the house names and codes.
  houses.forEach(iteam => {
    let house = document.getElementById('house');
    const option =document.createElement('OPTION');
    option.value = iteam.code;
    option.innerText = iteam.name;
    house.append(option);
    
  });
  
 
  // display a list of the house members 
  // when the select list has changed.
  house.addEventListener('change', (e) => {
    
    //get the house code from the select
    const code = e.target.value;
    let members = [];
    
    // loop through houses array
    // check for a matching house code,
    // grab the members of that house
    houses.forEach(item => {
      if(item.code === code){
        members = item.members;
        console.log(members);
      }
    });
    
    
    
    // DOM ref for ul to display members
    const container = document.getElementById('characters');
    
    // clear out any previous member names
    container.innerHTML = "";
    
    // handle if no house selected
    if (members.length === 0) {
      let item = document.createElement('LI');
      item.innerText = "No house selected";
      container.append(item);
      
    } else {
      // create the li's and append to the ul
      members.forEach(person => {
        let item = document.createElement('LI');
        item.innerText = person;
        container.append(item);
      });
      
    } // end if/else
    
  }); //end addEventListener - change
 
} //end init
