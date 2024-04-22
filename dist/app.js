const button = document.querySelector("button");

const calculatePrice = (orginalPrice, hasDiscount) => {
	return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
};

button.addEventListener("click", () => {
	const orginalPrice = 50;
	const hasDiscount = new URLSearchParams(window.location.search).get(
		"discount"
	);
	console.log(calculatePrice(orginalPrice, hasDiscount));
});
