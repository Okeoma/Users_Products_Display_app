import axios from "axios";
import { useDataSource } from "./useDataSource";
import { RegularList } from "./RegularList";
import { SmallUsersListItem } from "./people/SmallUsersListItem";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const UsersInfo = () => {  
  const users = useDataSource(serverResource("/users"));

  return users ? (
    <>
      <RegularList
        items={users}
        resourceName="User"
        itemComponent={SmallUsersListItem}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};
