import axios from "axios";
import { useDataSource } from "./useDataSource";
import { NumberedList } from "./NumberedList";
import { LargeUsersListItem } from "./people/LargeUsersListItem";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const LargeUsersInfo = () => {  
  const users = useDataSource(serverResource("/users"));

  return users ? (
    <>
      <NumberedList
        items={users}
        resourceName="User"
        itemComponent={LargeUsersListItem}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};
