const card = document.querySelector(".recipes__cards");

const cardList = [
    {
        img: "images/card-food.png",
        title: "Flame-boiled dish",
        rating: 8.5,
        price: 19.99,
    },
    {
        img: "images/card-food2.png",
        title: "Peach Melba dish",
        rating: 9.5,
        price: 20.99,
    },
    {
        img: "images/card-food3.png",
        title: "Delmonico Steak dish",
        rating: 8.0,
        price: 18.99,
    },
];

function cardRecipes() {
    cardList.forEach((item) => {
        const html = `
		<div class="card">
                <img
                    src="${item.img}"
                    alt="food"
                    class="card__img"
                >
                <div class="card__data">
                    <div class="card__left">
                        <div class="card__title">${item.title}</div>
                        <button class="card__btn">ADD TO CART</button>
                    </div>
                    <div class="card__right">
                        <div class="card__rating"><img src="../images/star.svg" > ${item.rating}</div>
                        <div class="card__price">$ ${item.price}</div>
                    </div>
                </div>
            </div>
		`;
        card.insertAdjacentHTML("beforeend", html);
    });
}

export default cardRecipes;
