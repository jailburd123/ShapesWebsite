
/**
Formulas
Dodecahedron
12 faces, 30 edges, 20 vertices
Faces: regular pentagons

Surface area (A):	
A = 3 * a² * √ 25 + 10 * √5
Volume (V):	
V = a³ / 4 * ( 15 + 7 * √5 )
Volume diagonal (d):	
d = 2 * rc
Circumsphere radius (rc):	
rc = a / 4 * √3 * ( 1 + √5 )
Midsphere radius (rm):	
rm = a / 4 * ( 3 + √5 )
Insphere radius (ri):	
ri = a / 2 * √ ( 25 + 11 * √5 ) / 10
Surface-to-volume ratio (A/V):	
A/V = 12 * √ 25 + 10 * √5 / ( ( 15 + 7 * √5 ) * a )

 */

class Dodecahedron{
  
  constructor(edge){
    this.edge = edge;
  }

  //
  volume(){
   let vol = (((15+7 * Math.sqrt(5))/(4))* Math.pow(this.edge, 3));
   return vol;
  }

  surfaceArea = () => {
    let area =  ((3*(Math.sqrt(25+10 * Math.sqrt(5)))) * this.edge ** 2);
    return area;
   }

   volumeDiagonal(){}
   circumsphereRadius(){}
   midsphereRadius(){}
   insphereRadius(){}
   surface2VolumeRatio(){}
}


let checkForm = () => {
    let value = document.getElementById('searchTerm').value;
    console.log(value);
    let shape = new Dodecahedron(value);
    console.log("Shape: ", shape);
    console.log("Volume: ", shape.volume());
    console.log("area: ", shape.surfaceArea());
    return false;
  }
  




//only allow number 
let isNumber = (evt) => {
  evt = (evt) ? evt : window.event;
  let charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

