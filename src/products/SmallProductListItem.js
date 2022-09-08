export const SmallProductListItem = ({ Product }) => {
	const { name, price } = Product;

	return (
		<h4>{name} - {price}</h4>
	);
}