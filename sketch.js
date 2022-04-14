const lyrics = "너는 쿨쿨 자나봐 문을 쿵쿵 두드리고 싶지만 어두컴컴한 밤이라 문자로 콕콕콕콕콕콕 찍어서 보낸다 웬종일 쿵쿵대는 내 맘을 시시콜콜 전송했지만 너는 쿨쿨 자다가 아주 짧게 ㅋ 한 글자만 찍어서 보냈다 크크크크 크크 크크 크크 크크 큰 걸 바라지는 않았어 맘맘맘마 맘마 맘마 맘마 맘맘 말 같은 말 해 주길 바랬어 ㅋㅋㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ 빵 터진 것보다야 나은가 ㅋㅋㅋ도 ㅋㅋ도 아닌 한 글자에 눈물 콱 쏟아져 버리고 말았네 웃음을 많이 섞으니까는 장난스럽게 보였겠지만 정성스럽게 적었던 거야 나는 마치 콩을 젓가락으로 옮길 때처럼 이모티콘 하나마저 조심스럽게 정했어 나는 큰 결심을 하고서 보낸 문잔데 너는 ㅋ 한 글자로 모든 걸 마무리해버렸어 이제는 퀭 하고 시뻘개진 내 눈에 비치는 건 완전히 쾅 닫힌 대화창뿐이네 크크크크 크크 크크 크크 크크 큰 걸 바라지는 않았어 맘맘맘마 맘마 맘마 맘마 맘맘 말 같은 말 해주길 바랬어 ㅋㅋㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ 빵 터진 것보다야 나은가 ㅋㅋㅋ도 ㅋㅋ도 아닌 한 글자에 눈물 콸콸콸콸콸콸콸"
const letters = lyrics.split("");

let header;
let minusHeight;
let contentsHeight;

let fontBlack;
let cnv;
let grid;



function preload() {
	fontBlack =loadFont('./font/BlackHanSans-Regular.ttf')

}

function setup() {
	header = select('header');
	minusHeight = float(header.style('height')) * 2;
	contentsHeight = windowHeight - minusHeight;
	cnv=createCanvas(windowWidth, windowHeight);
	cnv.parent("basicCanvas");
	if (isMobile()) {
		
	} else {
		centerCanvas();
	}
}

function draw() {
	//noLoop();
	mainStructure();

}

function make2DArray(_cols, _rows) {
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}


//mouseWheel Event - loop only when mouseWheel event fires
let firstScroll = false;
let amount = 1;
let wheelSum = 0;
const basicCanvas =  document.querySelector("#basicCanvas");

basicCanvas.addEventListener("touchstart", touchStart, false);
basicCanvas.addEventListener("touchend", touchEnd, false);
basicCanvas.addEventListener("touchmove", touchMove, false);

function preventDefault(e){
	e.preventDefault();
}
window.addEventListener('touchmove', preventDefault, { passive: false });

let startY;
let offsetY;

function touchStart(e) {
	//start.x = e.touches[0].pageX;
	startY = e.touches[0].pageY;
}
function touchMove(e) {
	offsetY = startY - e.touches[0].pageY;
	return offsetY;
}
function touchEnd(e) {
	
	//offset.x = start.x - e.touches[0].pageX;
	if (firstScroll == false) {
		firstExplain();
		firstScroll = true;
	}
	//let friction = 0.1;
	//offset.y *= friction;
	if (offsetY > 0) {
		amount += 1;
		wheelSum += 100;
	} else if (offsetY < 0) {
		amount -= 1;
		wheelSum -= 100;
	}


	if (wheelSum < 0) {
		amount = 0;
		//offset.y = 0;
		wheelSum = 0;
	} else {
		loop();
	}
	//console.log("offset.y:", offset.y);
	//console.log("wheelSum:", wheelSum);
	//console.log("amount:", amount);

}

function mouseWheel(e) {
	if (firstScroll == false) {
		firstExplain();
		firstScroll = true;
	}
		amount += e.delta * 0.01;
	wheelSum += e.delta;

	if (wheelSum < 0) {
		amount = 0;
		e.delta = 0;
		wheelSum = 0;
	} else {
		loop();
	}
	console.log("Moffset.y:", e.delta);
	console.log("MwheelSum:", wheelSum);
	console.log("Mamount:", amount);
}

//Main Structure for drawing
let spacing;
let cols;
let rows;
let shakeX = 0;
let shakeY = 0;

const kock = 0;

function mainStructure() {
	spacing = width / amount;
	cols = floor(width / spacing);
	rows = floor((height - minusHeight) / spacing);

	console.log(cols,rows)
	if (isMobile()) {
		if (cols > 1 && rows > 1) {
			smallKieuks();
		} else {
			background(backgroundColor);
			LargeKieuk();
		}
	} else {
		if (cols !== 1 && rows !== 0) {
			smallKieuks();
		} else {
			background(backgroundColor);
			LargeKieuk();
			}
	}

}

//LargeKieuk recipe
function LargeKieuk() {
	noStroke();
	fill(textColor);
	textFont(fontBlack);
	if (isMobile()) {
	// 모바일이면 실행될 코드 들어가는 곳
	textSize(windowWidth * 1.1);
	} else {
	// 모바일이 아니면 실행될 코드 들어가는 곳
	textSize(contentsHeight * 1.2);
	}

	textAlign(CENTER, CENTER);
	text("ㅋ", width / 2, height / 2);
}
function smallKieuks() {
	if (Number.isInteger(cols) && Number.isInteger(rows)) {
		background(backgroundColor);
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				let x = i * spacing;
				let y = j * spacing + minusHeight / 2;
				////let yCenterControl = (height - rows * spacing) / 2;
				//stroke(255, 0, 0, 100);
				//fill(backgroundColor)
				////rect(x, y + yCenterControl, spacing, spacing);
				//rect(x, y, spacing, spacing);

				noStroke();
				fill(textColor);
				textFont(fontBlack);
				textSize(spacing * 1.15);
				textAlign(CENTER, CENTER);
				let index = i + j * cols;
				let posX = x + spacing / 2;
				let posY = y + spacing / 2;

				if (letters[index] == "ㅋ") {
					posX += shakeX;
					posY += shakeY;
					shakeX = shakeY = random(-2, 2);
					fill(greenColor);
					text(letters[index], posX, posY);
				} else if (letters[index] == "쿨") {
					text(letters[index], posX, posY);

					let angles = [];
					for (let k = 0; k < spacing; k++) {
						angles[k] = map(k, 0, spacing, 0, 2 * TWO_PI);
					}

					beginShape();
					for (let l = 0; l < angles.length; l++) {
						const amplitude = spacing / 15;
						let y = map(
							sin(angles[l]), -1, 1, posY - amplitude + spacing * 0.4, posY + amplitude + spacing * 0.4);
						let x = map(l, 0, angles.length, posX - spacing / 2, posX + spacing / 2);
						noFill();
						stroke(redColor);
						strokeWeight(spacing / 10);
						vertex(x, y);
					}
					endShape();
				} else if (letters[index] == "쿵") {
					posY += sin(radians(frameCount * 28)) * 6;
					text(letters[index], posX, posY);
				} else if (letters[index] == "컴") {
					if (frameCount % 100 <= 50) {
						
					} else {
						text(letters[index], posX, posY);
					}
				} else if (letters[index] == "콜") {
					push();
					noFill();
					stroke(textColor);
					strokeWeight(spacing / 50);
					text(letters[index], posX, posY);
					pop();
				} else if (letters[index] == "콕") {
					let dotX = posX;
					let dotY = posY - spacing * 0.47;
					if ((frameCount * 0.1) % 7 < index - 39) {

					} else {
						text(letters[index], posX, posY);
						push();
						stroke(redColor);
						strokeWeight(spacing / 5);
						point(dotX, dotY);
						pop();
					}
				} else if (letters[index] == "크") {
					push();
					fill(redColor);
					ellipse(posX, posY, spacing, spacing);
					pop();
					text(letters[index], posX, posY);
				} else if (letters[index] == "큰") {
					push();
					fill(redColor);
					text("!!!", posX, posY);
					pop();
					text(letters[index], posX, posY);
				} else if (letters[index] == "콱") {
					push();
					fill(redColor);
					text("(", posX - spacing * 0.6, posY);
					text(")", posX + spacing * 0.6, posY);
					pop();
					text(letters[index], posX, posY);
				} else if (letters[index] == "콩") {
					push();
					noFill();
					stroke(redColor);
					strokeWeight(spacing / 8);
					ellipse(posX, posY, spacing, spacing);
					pop();
					push();
					translate(posX, posY);
					rotate(radians(frameCount * 0.8));
					text(letters[index], 0, 0);
					pop();
				} else if (letters[index] == "콘") {
					push();
					fill(redColor);
					beginShape();
					let heartSize = spacing * 0.7;
					let heartPosX = posX + spacing;
					let heartPosY = posY - spacing * 0.3;

					vertex(heartPosX, heartPosY);
					bezierVertex(
						heartPosX - heartSize / 2,
						heartPosY - heartSize / 2,
						heartPosX - heartSize,
						heartPosY + heartSize / 3,
						heartPosX,
						heartPosY + heartSize
					);
					bezierVertex(
						heartPosX + heartSize,
						heartPosY + heartSize / 3,
						heartPosX + heartSize / 2,
						heartPosY - heartSize / 2,
						heartPosX,
						heartPosY
					);
					endShape(CLOSE);
					pop();
					text(letters[index], posX, posY);
				} else if (letters[index] == "퀭") {
					push();
					noFill();
					stroke(redColor);
					strokeWeight(spacing / 8);
					ellipse(posX - spacing, posY, spacing * 0.9, spacing / 2);
					ellipse(posX + spacing, posY, spacing * 0.9, spacing / 2);
					noStroke();
					fill(redColor);
					ellipse(posX - spacing, posY, spacing / 2, spacing / 2);
					ellipse(posX + spacing, posY, spacing / 2, spacing / 2);
					pop();
					text(letters[index], posX, posY);
				} else if (letters[index] == "쾅") {
					push();
					textSize((frameCount % 10) * spacing * 0.08 + spacing * 1.15);
					text(letters[index], posX, posY);
					pop();
				} else if (letters[index] == "콸") {
					push();
					stroke(redColor);
					strokeWeight(spacing / 30);
					fill(redColor);
					let amplitude = amount * 1.5;
					let minHeight = spacing + amount - 20;
					rect(x, y, spacing, sin(frameCount * (1 / amount) + letters.length - index) * amplitude + minHeight + amplitude * 2, 0, 0, 50, 50);
					pop();
					text(letters[index], posX, posY);
				} else {
					text(letters[index], posX, posY);
				}
				//posY+=sin(radians(frameCount*2*(index))) * 5;
			}
		}
	}

}

//Canvas, Window Control
function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	cnv.position(x, y);
}
function windowResized() {
	header = select("header");
	minusHeight = float(header.style("height")) * 2;
	contentsHeight = windowHeight - minusHeight;
	if (isMobile()) {
		
	} else {
		centerCanvas();
	}
	resizeCanvas(windowWidth, windowHeight);
}

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	navigator.userAgent
	);
}

console.log(isMobile());