const brightnessBt = document.querySelector(".brightness-bt");
const htmlText = [document.querySelector(".wrapper"), document.querySelector(".my-info a"), document.querySelector(".album-info a")];
const scrollArrow = document.querySelector(".scroll-arrow");
const scrollText = document.querySelector(".scroll-text");


let state = "bright";
let backgroundColor = 255;
let textColor = 0;
let greenColor = "#06FF00";
let redColor = "#FF1700"

brightnessBt.addEventListener("click", () => {
	if (state == "bright") {
		brightnessBt.children[0].innerHTML = "light_mode";

		backgroundColor = "#121212";
		textColor = 255;
		htmlText.forEach(t => {
			t.style.color = "rgb(255,255,255)";
			console.log(t);
		});
		scrollArrow.style.filter = "invert(1)";
		scrollText.style.backgroundColor = "#121212";
		scrollText.style.color = "#ffffff";

		greenColor = "#21E6C1";
		redColor="#FF1E56"
		state = "dark";
		console.log(state);
	} else {
		brightnessBt.children[0].innerHTML = "nightlight";

		backgroundColor = 255;
		textColor = 0;
		htmlText.forEach(t => {
			t.style.color = "rgb(0,0,0)";
		});
		scrollArrow.style.filter = "none";
		scrollText.style.backgroundColor = "#ffffff";
		scrollText.style.color = "#000000";

		greenColor = "#0ff800";
		redColor = "#ff0000"
		state = "bright";
		console.log(state);
	}
})

const albumInfo = document.querySelector(".album-info");
