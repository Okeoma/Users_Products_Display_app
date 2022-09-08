import axios from "axios";
import { useDataSource } from "./useDataSource";
import { NumberedList } from "./NumberedList";
import { LargeProductListItem } from "./products/LargeProductListItem";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const LargeProductsInfo = () => {  
  const product = useDataSource(serverResource("/products"));

  return product ? (
    <>
      <NumberedList
        items={product}
        resourceName="Product"
        itemComponent={LargeProductListItem}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};
