const footerInformation = document.querySelector(".footer__information");

const footerList = [
    {
        name: "Our menu",
        subtitleOne: "Breakfast",
        subtitleTwo: "Lunce",
        subtitleThree: "Dinner",
    },
    {
        name: "Information",
        subtitleOne: "About us",
        subtitleTwo: "Testimonial",
        subtitleThree: "Event",
    },
    {
        name: "Useful links",
        subtitleOne: "Services",
        subtitleTwo: "Support",
        subtitleThree: "Conditions",
    },
    {
        name: "Social Handles",
        subtitleOne: "Facebook",
        subtitleTwo: "Twitter",
        subtitleThree: "Youtube",
    },
];

function footerRender() {
    footerList.forEach((item) => {
        const html = `
			<div class="footer__menu">
                    <h1 class="footer__title">${item.name}</h1>
                    <p class="footer__subtitle">${item.subtitleOne}</p>
                    <p class="footer__subtitle">${item.subtitleTwo}</p>
                    <p class="footer__subtitle">${item.subtitleThree}</p>
                </div>
		`;

        footerInformation.insertAdjacentHTML("beforeend", html);
    });
}
export default footerRender;
/**
 *                 
                
                
                
            </div>
        </div>
 */
