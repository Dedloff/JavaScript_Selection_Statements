console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


let min = 1;
let max = 100;
let numToGuess = 50;
let input = prompt(`Guess a number between ${min} and ${max}:`); //return a string using interpolation

input = parseFloat(input);

if (isNaN(input) || input > max || input < min) {
  alert(`Your guess was not a whole number between ${min} and ${max}. Try again.`);
}else {


if (numToGuess > input) {
  alert("too low");   //too low
} else if (numToGuess < input) {
  alert("too high");  //too  high
}else {
  alert("correct");   //corect
}
}

let birthMonth = prompt("What is your birth month?\n (ex: January = 1)"); 

birthMonth = parseInt(birthMonth);

  switch (birthMonth) {
      case 12:
      case 1:
      case 2:
        alert("Winter");
        break;

      case 3:
      case 4:
      case 5:
          alert("Spring");
          break;
      case 6:
      case 7:
      case 8:
          alert("Summer");
          break;
      case 9:
      case 10:
      case 11:
          alert("Autumn");
          break;
      
  }


  let typeId = "01";
  let colorId = "PU";
  let sizeId = "L";
  
  let type = "";
  let color = "";
  let size = "";
  
  // if (typeId == "01") {
  //   type = "Tank top";
  // } else if (typeId == "02") {
  //   type = "T-Shirt";
  // } else if (typeId == "03") {
  //   type = "Long Sleeve";
  // } else if (typeId == "04") {
  //   type == "Sweat Shirt";
  // } else {
  //   type = "Other";
  // }

  switch (typeId) {
    case "01":
      type = "tank top";
      break;
    case "02":
      type = "T-Shirt";
      break;
    case "03":
      type = "Long Sleeve";
      break;
    case "04":
      type = "Sweat Shirt";
      break;
    default:
      type = "Other";
  }
  
  // if (colorId == "BL") {
  //   color = "Black";
  // } else if (colorId == "BL") {
  //   color = "Blue";
  // } else if (colorId == "RD") {
  //   color = "Red";
  // } else if (colorId == "PU") {
  //   color = "Purple";
  // } else {
  //   color = "White";
  // }

  switch (true) {
    case colorId == "BL":
      color = "Black";
      break;
    case colorId == "BL":
      color = "Blue";
      break;
    case colorId == "RD":
      color = "Red";
      break;
    case colorId == "PU":
      color = "Purple";
      break;
    default:
      color = "White";
  }


  
  // if (sizeId == "S") {
  //   size = "Small";
  // } else if (sizeId == "M") {
  //   size = "Medium";
  // } else if (sizeId == "L") {
  //   size = "Large";
  // } else if (sizeId == "XL") {
  //   size = "Extra Large";
  // } else {
  //   size = "One Size Fits All";
  // }



  switch (sizeId) {
    case "S":
      size = "Small";
      break;
    case "M":
      size = "Medium";
      break;
    case "L":
      size = "Large";
      break;
    case "XL":
      size = "Extra Large";
      break;
    default:
      size = "One Size Fits All";
  }
  
  console.log(`Product: ${size} ${color} ${type}`);