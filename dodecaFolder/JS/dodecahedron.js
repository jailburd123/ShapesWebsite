
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

  surfaceArea(){
    let area =  ((3*(Math.sqrt(25+10 * Math.sqrt(5)))) * this.edge ** 2);
    return area;
   }

   circumferenceRadius(){  
    return ((this.edge / 4 * Math.sqrt(3)*(1 + Math.sqrt(5))));
  }

   volumeDiagonal(){
    let vd = (2 * ((this.edge / 4 * Math.sqrt(3)*(1 + Math.sqrt(5)))))
    return vd;
  }



  midsphereRadius(){
    return (this.edge/4 * (3 + Math.sqrt(5)))
  }

  insphereRadius(){
    return (this.edge/2 * Math.sqrt((25 + 11 * Math.sqrt(5)) / 10))
  }

  surface2VolumeRatio(){
    return (12 * Math.sqrt(25 + 10 * Math.sqrt(5)) / ((15 + 7 * Math.sqrt(5)) * this.edge))
  }
}


  









