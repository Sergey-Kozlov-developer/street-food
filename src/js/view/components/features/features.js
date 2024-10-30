const delivery = document.querySelector(".delivery");

const devileryListPage = [
    {
        img: "images/feature/food.png",
        name: "Quality Food",
        text: "Keep healthy food readily available. When you get hungry, you’re more likely to",
    },
    {
        img: "images/feature/emojione.png",
        name: "Super Taste",
        text: "Keep healthy food readily available. When you get hungry, you’re more likely to",
    },
    {
        img: "images/feature/truck.png",
        name: "Fast Delivery",
        text: "Keep healthy food readily available. When you get hungry, you’re more likely to",
    },
];

function devileryList() {
    devileryListPage.forEach((item) => {
        const html = `
			<div class="delivery__service">
                    <img
                        src="${item.img}"
                        alt="food"
                    />
                    <h1 class="service__name">${item.name}</h1>
                    <p class="service__text">${item.text}</p>
                </div>
		`;
        delivery.insertAdjacentHTML("beforeend", html);
    });
}

export default devileryList;
