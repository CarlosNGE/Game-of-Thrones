// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };
  
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    let dropdown = document.getElementById('house');
    
    // loop through array and create an option tag
    //with the data from the objects
    houses.forEach(house  => {
      let myoption = document.createElement('OPTION');
      myoption.value = house.code;
      let name = house.name;
      myoption.innerHTML = name;
      
      dropdown.append(myoption);
    });
    
    dropdown.addEventListener('change', (e) => {
      const code = (e.target.value);
      const members = getCharacters(code);
      let container = document.getElementById('characters');
      
      container.innerHTML = "";
      
      
      members.forEach(person => {
        let iteam = document.createElement('LI');
        iteam.innerText = person;
        container.append(iteam);
      });
    });
    
    
  }