import axios from "axios";
import { useDataSource } from "./useDataSource";
import { RegularList } from "./RegularList";
import { SmallProductListItem } from "./products/SmallProductListItem";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const ProductsInfo = () => {  
  const products = useDataSource(serverResource("/products"));

  return products ? (
    <>
      <RegularList
        items={products}
        resourceName="Product"
        itemComponent={SmallProductListItem}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};
