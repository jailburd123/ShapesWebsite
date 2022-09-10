


let checkForm = () => {
    let value = document.getElementById('searchTerm').value;
    // console.log(value);
    let shape = new Dodecahedron(value);
    let checkedValue = Array.from(document.getElementsByName("checked")).find(r => r.checked).value;
    let genericText = `The value of ${checkedValue} is: `;
    // console.log("checked value: ", checkedValue);

    switch (checkedValue) {
      case "Area":
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + shape.surfaceArea();
        // console.log(valueName);
       // console.log("area: ", shape.surfaceArea());
        break;
      case "Volume":
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + shape.volume();
        //console.log("Volume: ", shape.volume());
        break;
      case "Diagonal Volume":
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + shape.volumeDiagonal();
        //console.log("diagonal Volume: ", shape.volumeDiagonal());
        break;
      case "Circumference Radius":
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + shape.circumferenceRadius();
        //console.log('circumference Radius: ', shape.circumferenceRadius());
        break;
      case "Midsphere Radius":
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + shape.midsphereRadius();
        //console.log('midsphere Radius: ', shape.midsphereRadius());
        break;
      case "Insphere Radius":
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + shape.insphereRadius();
        //console.log('insphere Radius: ', shape.insphereRadius());
        break;
      case "Surface 2 Volume Ratio":    
      valueName.innerHTML = checkedValue;
      valueBody.innerHTML = genericText + shape.surface2VolumeRatio();
      //console.log("Surface to Volume Ratio: ", shape.surface2VolumeRatio());
      break;
      default:
        valueName.innerHTML = checkedValue;
        valueBody.innerHTML = genericText + 'An error occurred. Please try again!';
        //console.log("Shape: ", shape);
        break;
    }
   //makes sure that the form cancels it's request process
   // basically remove traditional form functionality so that it just  
    return false;
  }