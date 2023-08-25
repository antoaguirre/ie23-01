let angle = 0;
let speed = 0.01;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  let centerX = width / 2;
  let topY = height * 0.25;
  let bottomY = height * 0.75;

  // Calcular las posiciones de los vértices de los triángulos
  let triangleAX = centerX + cos(angle) * (width * 0.4);
  let triangleAY = topY;
  let triangleBX = centerX - cos(angle) * (width * 0.4);
  let triangleBY = bottomY;

  // Dibujar los triángulos
  fill(128, 200, 255); // Celeste pastel
  triangle(triangleAX, triangleAY, triangleBX, triangleAY, centerX, bottomY);
  
  fill(150, 255, 128); // Verde limón
  triangle(triangleAX, triangleBY, triangleBX, triangleBY, centerX, topY);
  
  // Actualizar el ángulo para la animación
  angle += speed;

  // Mezclar colores en el centro
  let mixedColorR = (128 + 150) / 2;
  let mixedColorG = (200 + 255) / 2;
  let mixedColorB = (255 + 128) / 2;
  fill(mixedColorR, mixedColorG, mixedColorB);
  ellipse(centerX, (topY + bottomY) / 2, 100);
}

