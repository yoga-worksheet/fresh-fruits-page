const products = [
	{
		id: 1,
		title: "KIWI",
		desc: "This kiwi is delicious nutrient-packed FRUIT and gives you all of the energy, daily nutrients, and health you need.",
		image: "assets/kiwi.png",
		bgColor:
			"linear-gradient(130deg, rgba(133, 195, 61, 1) 0%, rgba(78, 142, 37, 1) 32%, rgba(34, 108, 26, 1) 68%, rgba(16, 60, 12, 1) 100%)",
		buttonTextColor: "rgba(78, 142, 37, 1)",
	},
	{
		id: 2,
		title: "CHERRY",
		desc: "This cherry is delicious nutrient-packed FRUIT and gives you all of the energy, daily nutrients, and health you need.",
		image: "assets/cherry.png",
		bgColor:
			"linear-gradient(130deg, rgba(246,98,64,1) 0%, rgba(179,29,29,1) 32%, rgba(147,26,26,1) 68%, rgba(60,12,12,1) 100%)",
		buttonTextColor: "rgba(179,29,29,1)",
	},
	{
		id: 3,
		title: "BANANA",
		desc: "This banana is delicious nutrient-packed FRUIT and gives you all of the energy, daily nutrients, and health you need.",
		image: "assets/banana.png",
		bgColor:
			"linear-gradient(130deg, rgba(240,216,55,1) 0%, rgba(224,180,18,1) 32%, rgba(209,168,18,1) 68%, rgba(168,116,0,1) 100%)",
		buttonTextColor: "rgba(224,180,18,1)",
	},
	{
		id: 4,
		title: "APPLE",
		desc: "This apple is delicious nutrient-packed FRUIT and gives you all of the energy, daily nutrients, and health you need.",
		image: "assets/apple.png",
		bgColor:
			"linear-gradient(130deg, rgba(246,98,64,1) 0%, rgba(179,29,29,1) 32%, rgba(147,26,26,1) 68%, rgba(60,12,12,1) 100%)",
		buttonTextColor: "rgba(179,29,29,1)",
	},
	{
		id: 5,
		title: "LIME",
		desc: "This lime is delicious nutrient-packed FRUIT and gives you all of the energy, daily nutrients, and health you need.",
		image: "assets/lime.png",
		bgColor:
			"linear-gradient(130deg, rgba(133, 195, 61, 1) 0%, rgba(78, 142, 37, 1) 32%, rgba(34, 108, 26, 1) 68%, rgba(16, 60, 12, 1) 100%)",
		buttonTextColor: "rgba(78, 142, 37, 1)",
	},
];

const pageList = document.querySelectorAll(".pageItem");
let currentPage = pageList[0];
let currentProduct = products[0];

let posNumber = document.querySelector(".posTitle");
let underline = document.querySelector(".underline");
let currentTitle = document.querySelector(".bigTitle").children[0];
let currentDesc = document.querySelector(".heroDesc");
let currentImg = document.querySelector(".heroImg");
let ctaButton = document.querySelector(".ctaButton");

ctaButton.addEventListener("mouseenter", (event) => {
	event.target.style.color = currentProduct.buttonTextColor;
});

ctaButton.addEventListener("mouseleave", (event) => {
	event.target.style.color = "whitesmoke";
});

pageList.forEach((page, index) => {
	page.addEventListener("click", () => {
		if (!page.classList.contains("active")) {
			// changing active page
			currentPage.classList.remove("active");
			page.classList.add("active");
			currentPage = page;
			currentProduct = products[index];

			// Changing page information
			document.body.style.background = products[index].bgColor;
			posNumber.innerText = `0${products[index].id}`;
			underline.style.width = `${250 - index * 50}px`;
			currentTitle.innerText = products[index].title;
			currentDesc.innerText = products[index].desc;
			currentImg.src = products[index].image;
		}
	});
});
