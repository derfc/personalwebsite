let contactIcons = document.querySelectorAll(".fab");
for (let fab of contactIcons) {
	fab.addEventListener("mouseenter", function () {
		this.style.transform = "scale(1.4, 1.4)";
		// fab.css("color", "red !pmoirtant");
		this.style.color = "#fdd7a8";
	});
	fab.addEventListener("mouseleave", function () {
		this.style.transform = "scale(1.0, 1.0)";
		// fab.css("color", "white");
		this.style.color = "#fff";
	});
	fab.addEventListener("click", function () {
		alert("HAHA i didnt link anyhting dont be nosey");
	});
}

// $("#submit").click(function () {
//   alert("I will get back to you asap, thank you!!");
// });

// $(".submit").mouseenter(function () {
//   console.log("hello");
// });

$(".circle2-css").mouseenter(function () {
	console.log("hello");
	// $(".circle2-css").css("background", "url(/asset/html-white.png)");
});
$(".circle2-css").mouseleave(function () {
	console.log("on9jai");
	// $(".circle2-css").css("background", "url(/asset/css-white.png)");
});
