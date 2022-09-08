export const LargeProductListItem = ({ Product }) => {
	const { name, price, description, rating } = Product;

	return (
		<>
		<h3>{name}</h3>
		<p>{price}</p>
		<h3>Description:</h3>
		<p>{description}</p>
		<p>Average Rating: {rating}</p>
		</>
	);
}