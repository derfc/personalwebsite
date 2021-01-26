let contactIcons = document.querySelectorAll(".fab");
for (let fab of contactIcons) {
	fab.addEventListener("mouseenter", function () {
		this.style.transform = "scale(1.4, 1.4)";
		// $(".fab").css("color", "red");

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
// $(".fab").click(function () {
// 	$(this).css("color", "red");
// });

// $("#submit").click(function () {
//   alert("I will get back to you asap, thank you!!");
// });

// $("#submit").mouseenter(function () {
// 	console.log("hello");
// });

$(".circle2-html").mouseenter(function () {
	$(this).append(`<p>HTML</p>`);
	$(this).css("display", "flex");
	$(this).css("align-items", "center");
	$(this).css("justify-content", "center");
	$(this).css("background", `url()`);
	$(this).css("font-size", `40px`);
	// $(".circle2-css").css("background-size", `cover`);
});
$(".circle2-html").mouseleave(function () {
	$(this).empty();
	$(this).css("background", `url(/asset/html-white.png)`);
	$(this).css("background-size", `cover`);
});

$(".circle2-css").mouseenter(function () {
	$(this).append(`<p>CSS</p>`);
	$(this).css("display", "flex");
	$(this).css("align-items", "center");
	$(this).css("justify-content", "center");
	$(this).css("background", `url()`);
	$(this).css("font-size", `40px`);
	// $(".circle2-css").css("background-size", `cover`);
});
$(".circle2-css").mouseleave(function () {
	$(this).empty();
	$(this).css("background", `url(/asset/css-white.png)`);
	$(this).css("background-size", `cover`);
});

$(".circle2-js").mouseenter(function () {
	$(this).append(`<p>Javascript</p>`);
	$(this).css("display", "flex");
	$(this).css("align-items", "center");
	$(this).css("justify-content", "center");
	$(this).css("background", `url()`);
	$(this).css("font-size", `40px`);
	// $(".circle2-css").css("background-size", `cover`);
});
$(".circle2-js").mouseleave(function () {
	$(this).empty();
	$(this).css("background", `url(/asset/js-white.png)`);
	$(this).css("background-size", `cover`);
});
