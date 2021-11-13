// let xoff = 0;
// let yoff = 0;

// let zoff = 0;
// let n;

// let randomSeed = 0;

// let xoffP2, yoffP2
// let xP1, yP1, xP3, yP3

// let img;

// let mycanvas;
// let cam
// let imgCam
// let pgCam
// function preload() {
//   img = loadImage('data/patt04.png');
// }

// function setup() {
//   mycanvas = createCanvas(1000, 764);
//   mycanvas.parent("sketch");
//   cam=createCapture(VIDEO)
//   cam.size(1000, 764)
//  // cam.hide();
 
//   cam.parent("sketch");
  
//   // mycanvas.position(windowWidth/2,windowHeight/2)
//   // mycanvas.style('margin','auto')
//   // mycanvas.center()
//   //margin: auto;
//   pixelDensity(1)
//   background(255);
//   img.loadPixels();
//   //cam.loadPixels();
//   xoffP2 = 0
//   yoffP2 = 1000
//   xP3 = width / 2
//   yP3 = height / 2
//   xP1 = width / 2
//   yP1 = height / 2
// }

// function draw() {
  
//   cam.loadPixels();
 
//   colorMode(RGB, 255);
//   //background(255);
//   noStroke();

//   // fill(255,1);
//   // rect(0, 0, 1000, 764);

//   //frameRate(10);
//   //randomSeed(randomSeed);

//   let posP2 = pWalk(xoffP2, yoffP2)
//   myPixel_Perlin(10, posP2.x, posP2.y, 50, 25);
//   xoffP2 += 0.001;
//   yoffP2 += 0.001;


//   let posP3 = rWalk(xP3, yP3, 10)
//   myPixel_Perlin(10,posP3.x, posP3.y, random(20,150), 50);
//   myPixel_02(50, posP3.x, posP3.y, 80, 50, 50, 2);
//   // console.log( posP3)
//   xP3 = posP3.x
//   yP3 = posP3.y

  



//   let posP1 = rWalk(xP1, yP1, 30 / 2)
//   myPixel_01(50, posP1.x, posP1.y, 50, 30, 40, random(2,5));
//   xP1 = posP1.x
//   yP1 = posP1.y




// }
// // function windowResized() {
// //   //resizeCanvas(windowWidth, windowHeight);
// // }
// function pWalk(xoff, yoff) {
//   let cordinate = {
//     x: 0,
//     y: 0
//   };
//   cordinate.x = map(noise(xoff), 0, 1, 0, width)
//   cordinate.y = map(noise(yoff), 0, 1, 0, height)
//   return cordinate
// }

// function rWalk(mX, mY, regionHalf) {
//   let choice = floor(random(4));
//   let cordinate = {
//     x: mX,
//     y: mY
//   };

//   //check bounds
//   if (mX >= width) mX = 0 + regionHalf
//   if (mX <= 0) mX = width - regionHalf
//   if (mY >= height) mY = 0 + regionHalf
//   if (mY <= 0) mY = height - regionHalf

//   if (choice === 0) {
//     cordinate.x = mX + regionHalf;
//   } else if (choice === 1) {
//     cordinate.x = mX - regionHalf;
//   } else if (choice === 2) {
//     cordinate.y = mY + regionHalf;
//   } else {
//     cordinate.y = mY - regionHalf;
//   }
//   return cordinate

// }

// function keyReleased() {


//   if (key == 's') {
//     saveFrame("doodle-######.png");
//   }
// }

// function myPixel_01(myPatternWidth, centerX, centerY, regionWidth, regionHeight, strokeAlpha, myStrokeWeightMult) {


//   let xStart = floor(centerX - regionWidth / 2);
//   let yStart = floor(centerY - regionHeight / 2);

//   let xEnd = floor(centerX + regionWidth / 2);
//   let yEnd = floor(centerY + regionHeight / 2);


//   for (let y = yStart; y <= yEnd; y = y + myPatternWidth) {

//     for (let x = xStart; x <= xEnd; x = x + myPatternWidth) {

//       let index = (x + (y * width)) * 4;
//       let pr = cam.pixels[index];
//       let pg = cam.pixels[index + 1];
//       let pb = cam.pixels[index + 2];
//       let pa = cam.pixels[index + 3];
//       if (pa === 0) {
//         pr = 255;
//         pg = 255;
//         pb = 255;
//         pa= 255;
//       }
//       let c = color(pr, pg, pb, pa)

//       let b = map(brightness(c), 0, 255, 2, 0.1);

//       let xc = x;
//       let yc = y;
//       let xp = -myPatternWidth / 2 + x;
//       let yp = -myPatternWidth / 4 + y;
//       push(); //for style
//       colorMode(RGB, 255);
//      // noFill();
//      fill(255,2)
//       stroke(pr, pg, pb, strokeAlpha);
//       strokeWeight(b * myStrokeWeightMult);
//       beginShape();

//       vertex(-myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
//       for (let i = 0; i < 3; i++) {
//         xc = random(xp, x + myPatternWidth / 4);
//         yc = random(y - myPatternWidth / 2, y + myPatternWidth / 2);

//         vertex(xp, yp);
//         vertex(xc, yc);
//         xp = xc;
//         yp = yc;
//       }

//       vertex(myPatternWidth / 2 + x, myPatternWidth / 4 + y);
//       endShape();

//       pop(); //for style
//     }
//   }
// }

// function myPixel_02(myPatternWidth, centerX, centerY, regionWidth, regionHeight, strokeAlpha, fillAlpha) {

//   let xStart = floor(centerX - regionWidth / 2);
//   let yStart = floor(centerY - regionHeight / 2);

//   let xEnd = floor(centerX + regionWidth / 2);
//   let yEnd = floor(centerY + regionHeight / 2);
//   push();
//   colorMode(RGB, 255);
//   for (let y = yStart; y <= yEnd; y = y + myPatternWidth) {

//     for (let x = xStart; x <= xEnd; x = x + myPatternWidth) {

//       let index = (x + (y * width)) * 4;
//       let pr = cam.pixels[index];
//       let pg = cam.pixels[index + 1];
//       let pb = cam.pixels[index + 2];
//       let pa = cam.pixels[index + 3];
//       if (pa === 0) {
//         pr = 255;
//         pg = 255;
//         pb = 255;
//         pa= 255;
//       }
//       let c = color(pr, pg, pb, pa)
//       let b = map(brightness(c), 0, 255, 2, 0.1);



//       strokeWeight(b);
//       stroke(color(pr, pg, pb, strokeAlpha));
//       fill(color(255, 255, 255, fillAlpha));
//       beginShape();
//       vertex(x, y);
//       vertex(myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
//       vertex(myPatternWidth / 2 + x, myPatternWidth / 4 + y);
//       vertex(x, myPatternWidth / 2 + y);
//       endShape(CLOSE);

//       beginShape();
//       vertex(x, myPatternWidth / 2 + y);
//       vertex(x, myPatternWidth / 4 + y);
//       vertex(-myPatternWidth / 2 + x, y);
//       vertex(-myPatternWidth / 2 + x, myPatternWidth / 4 + y);
//       endShape(CLOSE);

//       beginShape();
//       vertex(x, myPatternWidth / 4 + y);
//       vertex(x, y);
//       vertex(-myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
//       vertex(-myPatternWidth / 2 + x, y);
//       endShape(CLOSE);


//       beginShape();
//       vertex(x, y);
//       vertex(-myPatternWidth / 4 + x, -myPatternWidth / 8 + y);
//       vertex(myPatternWidth / 4 + x, -3 * myPatternWidth / 8 + y);
//       vertex(myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
//       endShape(CLOSE);


//       beginShape();

//       vertex(-myPatternWidth / 4 + x, -myPatternWidth / 8 + y);
//       vertex(-myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
//       vertex(x, -myPatternWidth / 2 + y);
//       vertex(myPatternWidth / 4 + x, -3 * myPatternWidth / 8 + y);

//       endShape(CLOSE);
//     }
//   }
//   pop();

// }

// function myPixel_Perlin(myPatternWidth, centerX, centerY, regionWidth, regionHeight) {


//   let xStart = floor(centerX - regionWidth / 2);
//   let yStart = floor(centerY - regionHeight / 2);

//   let xEnd = floor(centerX + regionWidth / 2);
//   let yEnd = floor(centerY + regionHeight / 2);


//   let xStartR = floor(random(xStart, xStart + regionWidth / 2));
//   let yStartR = floor(random(yStart, yStart + regionHeight / 2));

//   let xEndR = floor(random(xEnd - regionWidth / 2, xEnd));
//   let yEndR = floor(random(yEnd - regionHeight / 2, yEnd));


//   xoff = 0;
//   yoff = 0;
//   //2d greyscale noise visualized in 2D
//   for (let y = yStartR; y < yEndR; y++) {
//     xoff = 0;
//     for (let x = xStartR; x < xEndR; x++) {
//       n = noise(xoff, yoff, zoff);

//       //fill(map(r, 0, 1, 0, 255));
//       let index = (x + (y * width)) * 4;
//       let pr = cam.pixels[index];
//       let pg = cam.pixels[index + 1];
//       let pb = cam.pixels[index + 2];
//       let pa = cam.pixels[index + 3];
//       if (pa === 0) {
//         pr = 255;
//         pg = 255;
//         pb = 255;
//         pa= 255;
        
//       }
      
      
//       let c = color(pr, pg, pb, pa)

//       let h = hue(c);
//       let s = saturation(c);
//       let v = brightness(c);
//       let b = map(brightness(c) * n, 0, 255, 1, 2);
//       push();
//       colorMode(HSB, 255);
//       noStroke();
//       fill(h * n, s * n, v, 20);
//       rect(x, y, myPatternWidth * b, myPatternWidth * b);
//       pop();
//       // code to visualize as values the neighboring qualities of perlin noise
//       // String  s= str(n);
//       // // fill(255,0,0);    
//       //  text(s, x*scl, y*scl, scl, scl);
//       ////////////////////////////////////////////////////

//       xoff += 0.1;
//     }
//     yoff += 0.1;
//   }
//   zoff += 0.1;
// }


///////////////////////////////////////////////////////////////////////////////////////////





let xoff = 0;
let yoff = 0;

let zoff = 0;
let n;

let randomSeed = 0;

let xoffP2, yoffP2
let xP1, yP1, xP3, yP3,xP4, yP4

let img;

let mycanvas;
let cam
let imgCam
let pgraphics
function preload() {
  img = loadImage('data/polke_richer.jpg');
}

function setup() {
  mycanvas = createCanvas(620, 620,WEBGL);
  mycanvas.parent("sketch");
  
  //uncomment this for cam version
  // cam=createCapture(VIDEO)
  // cam.size(1000, 764)640, 960
  // cam.hide();
  // cam.parent("sketch");
 
  pgraphics= createGraphics(640, 960)
  
  noStroke();
  
  // mycanvas.position(windowWidth/2,windowHeight/2)
  // mycanvas.style('margin','auto')
  // mycanvas.center()
  //margin: auto;
  pixelDensity(1)
  background(255);
  
  img.loadPixels();
  //cam.loadPixels();
  xoffP2 = 0
  yoffP2 = 1000
  xP3 = width / 2
  yP3 = height / 2
  xP1 = width / 2
  yP1 = height / 2
  xP4 = random(width / 2)
  yP4 = height / 2
}

function draw() {
  
  //uncomment this for cam version
  //cam.loadPixels();
 
 

  // fill(255,1);
  // rect(0, 0, 1000, 764);

  
  let posP4 = rWalk(xP4, yP4, 30 / 2)
  minaPixel(15, posP4.x, posP4.y, 20, 50, 40, random(2,4))
  xP4 = posP4.x
  yP4 = posP4.y

  let posP3 = rWalk(xP3, yP3, 10)
  myPixel_Perlin(10,posP3.x, posP3.y, random(50,150), 50);
  myPixel_02(30, posP3.x, posP3.y, 80, 90,90, 2);
  // console.log( posP3)
  xP3 = posP3.x
  yP3 = posP3.y

  
  let posP2 = pWalk(xoffP2, yoffP2)
  myPixel_Perlin(20, posP2.x, posP2.y, 70, 70);
  xoffP2 += 0.001;
  yoffP2 += 0.001;


  let posP1 = rWalk(xP1, yP1, 30 / 2)
  myPixel_01(50, posP1.x, posP1.y, 100, 50, 40, random(2,4));
  xP1 = posP1.x
  yP1 = posP1.y

  
  ambientLight(255);
  //ambientMaterial(255,255,255)
  // Add a point light to the scene
  //pointLight(255, 255, 255, 0, -200, 200);
  
  // rotateZ(frameCount * 0.02);
  // rotateX(frameCount * 0.02);
  // fill(255)
  // Apply the graphics created
  // as a texture
  texture(pgraphics);
  
  // show the texture
  
  // either like this
 
  translate(-width/2,-height/2)
  rect(0,0,width, height);

  // or like this

  //plane(640, 960)


}
// function windowResized() {
//   //resizeCanvas(windowWidth, windowHeight);
// }
function pWalk(xoff, yoff) {
  let cordinate = {
    x: 0,
    y: 0
  };
  cordinate.x = map(noise(xoff), 0, 1, 0, width)
  cordinate.y = map(noise(yoff), 0, 1, 0, height)
  return cordinate
}

function rWalk(mX, mY, regionHalf) {
  let choice = floor(random(4));
  let cordinate = {
    x: mX,
    y: mY
  };

  //check bounds
  if (mX >= width) mX = 0 + regionHalf
  if (mX <= 0) mX = width - regionHalf
  if (mY >= height) mY = 0 + regionHalf
  if (mY <= 0) mY = height - regionHalf

  if (choice === 0) {
    cordinate.x = mX + regionHalf;
  } else if (choice === 1) {
    cordinate.x = mX - regionHalf;
  } else if (choice === 2) {
    cordinate.y = mY + regionHalf;
  } else {
    cordinate.y = mY - regionHalf;
  }
  return cordinate

}

function keyReleased() {


  if (key == 's') {
    saveFrame("doodle-######.png");
  }
}

function myPixel_01(myPatternWidth, centerX, centerY, regionWidth, regionHeight, strokeAlpha, myStrokeWeightMult) {


  let xStart = floor(centerX - regionWidth / 2);
  let yStart = floor(centerY - regionHeight / 2);

  let xEnd = floor(centerX + regionWidth / 2);
  let yEnd = floor(centerY + regionHeight / 2);


  for (let y = yStart; y <= yEnd; y = y + myPatternWidth) {

    for (let x = xStart; x <= xEnd; x = x + myPatternWidth) {

      let index = (x + (y * width)) * 4;
      let pr = img.pixels[index];
      let pg = img.pixels[index + 1];
      let pb = img.pixels[index + 2];
      let pa = img.pixels[index + 3];
      if (pa === 0) {
        pr = 255;
        pg = 255;
        pb = 255;
        pa= 255;
      }
      let c = color(pr, pg, pb, pa)

      let b = map(brightness(c), 0, 255, 2, 0.1);

      let xc = x;
      let yc = y;
      let xp = -myPatternWidth / 2 + x;
      let yp = -myPatternWidth / 4 + y;
      //pgraphics.push(); //for style
     // pgraphics.colorMode(RGB, 255);
     // noFill();
     pgraphics.push()
     pgraphics.colorMode(RGB, 255);
     pgraphics.fill(255,2)
     pgraphics.stroke(pr, pg, pb, strokeAlpha);
     pgraphics.strokeWeight(b * myStrokeWeightMult);
     pgraphics.beginShape();

     pgraphics.vertex(-myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
      for (let i = 0; i < 3; i++) {
        xc = random(xp, x + myPatternWidth / 4);
        yc = random(y - myPatternWidth / 2, y + myPatternWidth / 2);

        pgraphics.vertex(xp, yp);
        pgraphics.vertex(xc, yc);
        xp = xc;
        yp = yc;
      }

      pgraphics.vertex(myPatternWidth / 2 + x, myPatternWidth / 4 + y);
      pgraphics.endShape();

      pgraphics.pop(); //for style
    }
  }
}

function myPixel_02(myPatternWidth, centerX, centerY, regionWidth, regionHeight, strokeAlpha, fillAlpha) {

  let xStart = floor(centerX - regionWidth / 2);
  let yStart = floor(centerY - regionHeight / 2);

  let xEnd = floor(centerX + regionWidth / 2);
  let yEnd = floor(centerY + regionHeight / 2);
  pgraphics.push();
  pgraphics.colorMode(RGB, 255);
  for (let y = yStart; y <= yEnd; y = y + myPatternWidth) {

    for (let x = xStart; x <= xEnd; x = x + myPatternWidth) {

      let index = (x + (y * width)) * 4;
      let pr = img.pixels[index];
      let pg = img.pixels[index + 1];
      let pb = img.pixels[index + 2];
      let pa = img.pixels[index + 3];
      if (pa === 0) {
        pr = 255;
        pg = 255;
        pb = 255;
        pa= 255;
      }
      let c = color(pr, pg, pb, pa)
      let b = map(brightness(c), 0, 255, 2, 0.1);



      pgraphics.strokeWeight(b);
      pgraphics.stroke(color(pr, pg, pb, strokeAlpha));
      pgraphics.fill(color(255, 255, 255, fillAlpha));
      pgraphics.beginShape();
      pgraphics.vertex(x, y);
      pgraphics.vertex(myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
      pgraphics.vertex(myPatternWidth / 2 + x, myPatternWidth / 4 + y);
      pgraphics.vertex(x, myPatternWidth / 2 + y);
      pgraphics. endShape(CLOSE);

      pgraphics.beginShape();
      pgraphics.vertex(x, myPatternWidth / 2 + y);
      pgraphics.vertex(x, myPatternWidth / 4 + y);
      pgraphics.vertex(-myPatternWidth / 2 + x, y);
      pgraphics.vertex(-myPatternWidth / 2 + x, myPatternWidth / 4 + y);
      pgraphics.endShape(CLOSE);

      pgraphics.beginShape();
      pgraphics.vertex(x, myPatternWidth / 4 + y);
      pgraphics.vertex(x, y);
      pgraphics.vertex(-myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
      pgraphics.vertex(-myPatternWidth / 2 + x, y);
      pgraphics.endShape(CLOSE);


      pgraphics.beginShape();
      pgraphics.vertex(x, y);
      pgraphics.vertex(-myPatternWidth / 4 + x, -myPatternWidth / 8 + y);
      pgraphics.vertex(myPatternWidth / 4 + x, -3 * myPatternWidth / 8 + y);
      pgraphics.vertex(myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
      pgraphics.endShape(CLOSE);


      pgraphics.beginShape();

      pgraphics.vertex(-myPatternWidth / 4 + x, -myPatternWidth / 8 + y);
      pgraphics.vertex(-myPatternWidth / 2 + x, -myPatternWidth / 4 + y);
      pgraphics.vertex(x, -myPatternWidth / 2 + y);
      pgraphics.vertex(myPatternWidth / 4 + x, -3 * myPatternWidth / 8 + y);

      pgraphics.endShape(CLOSE);
    }
  }
  pgraphics.pop();

}

function myPixel_Perlin(myPatternWidth, centerX, centerY, regionWidth, regionHeight) {


  let xStart = floor(centerX - regionWidth / 2);
  let yStart = floor(centerY - regionHeight / 2);

  let xEnd = floor(centerX + regionWidth / 2);
  let yEnd = floor(centerY + regionHeight / 2);


  let xStartR = floor(random(xStart, xStart + regionWidth / 2));
  let yStartR = floor(random(yStart, yStart + regionHeight / 2));

  let xEndR = floor(random(xEnd - regionWidth / 2, xEnd));
  let yEndR = floor(random(yEnd - regionHeight / 2, yEnd));


  xoff = 0;
  yoff = 0;
  //2d greyscale noise visualized in 2D
  for (let y = yStartR; y < yEndR; y++) {
    xoff = 0;
    for (let x = xStartR; x < xEndR; x++) {
      n = noise(xoff, yoff, zoff);

      //fill(map(r, 0, 1, 0, 255));
      let index = (x + (y * width)) * 4;
      let pr = img.pixels[index];
      let pg = img.pixels[index + 1];
      let pb = img.pixels[index + 2];
      let pa = img.pixels[index + 3];
      // if (pa === 0) {
      //   pr = 255;
      //   pg = 255;
      //   pb = 255;
      //   pa= 255;
        
      // }
      
      
      let c = color(pr, pg, pb, pa)

      let h = hue(c);
      let s = saturation(c);
      let v = brightness(c);
      let b = map(brightness(c), 0, 255, 1, 2);
      pgraphics.push();
      pgraphics.colorMode(HSB, 255);
      pgraphics.noStroke();
      pgraphics.fill(h * n, s * n, v*2, 20);
      pgraphics.rect(x, y, myPatternWidth * b, myPatternWidth * b);
      pgraphics.pop();
      // code to visualize as values the neighboring qualities of perlin noise
      // String  s= str(n);
      // // fill(255,0,0);    
      //  text(s, x*scl, y*scl, scl, scl);
      ////////////////////////////////////////////////////

      xoff += 0.1;
    }
    yoff += 0.1;
  }
  zoff += 0.1;
}

function minaPixel(myPatternWidth, centerX, centerY, regionWidth, regionHeight, strokeAlpha, myStrokeWeightMult) {


  let xStart = floor(centerX - regionWidth / 2);
  let yStart = floor(centerY - regionHeight / 2);

  let xEnd = floor(centerX + regionWidth / 2);
  let yEnd = floor(centerY + regionHeight / 2);


  for (let y = yStart; y <= yEnd; y = y + myPatternWidth) {

    for (let x = xStart; x <= xEnd; x = x + myPatternWidth) {

      let index = (x + (y * width)) * 4;
      let pr = img.pixels[index];
      let pg = img.pixels[index + 1];
      let pb = img.pixels[index + 2];
      let pa = img.pixels[index + 3];
      // if (pa === 0) {
      //   pr = 255;
      //   pg = 255;
      //   pb = 255;
      //   pa= 255;
      // }
      let c = color(pr, pg, pb, pa)

      let b = map(brightness(c), 0, 255, 0.1, myStrokeWeightMult);

      
      //pgraphics.push(); //for style
     // pgraphics.colorMode(RGB, 255);
     // noFill();
     pgraphics.push()
     pgraphics.colorMode(RGB, 255);
    // pgraphics.fill(255,2)
     //pgraphics.stroke(pr, pg, pb, strokeAlpha);
     //pgraphics.strokeWeight(b * myStrokeWeightMult);
     
     
     pgraphics.strokeWeight(b);
     pgraphics.stroke(c, strokeAlpha);
     pgraphics.fill(c, 1);

     pgraphics.beginShape();
     pgraphics.vertex( myPatternWidth+x, y);
     pgraphics.vertex(myPatternWidth+x, myPatternWidth+y);
     pgraphics.vertex( myPatternWidth*3/2+x, myPatternWidth+y);
     pgraphics.vertex( myPatternWidth*2+x, myPatternWidth*3/2+y);
     pgraphics.vertex(myPatternWidth/2+x, myPatternWidth*3/2+y);
     pgraphics.vertex(x, myPatternWidth*2+y);
     pgraphics.vertex(x, myPatternWidth+y);
     pgraphics.endShape(CLOSE);

     pgraphics.line(x, myPatternWidth+y, myPatternWidth+x, myPatternWidth*3/2+y);
     pgraphics.line(myPatternWidth+x, myPatternWidth*3/2+y, myPatternWidth*2+x, myPatternWidth*3/2+y);
     
     
     
     
     
     

      pgraphics.pop(); //for style
    }
  }
}



