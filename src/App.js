import { useState } from "react";
import { ControlledModal } from "./ControlledModal";
import { SplitScreen } from "./SplitScreen";
import { UsersInfo } from "./UsersInfo";
import { UserInfoForm } from "./UserInfoForm";
import { ProductsInfo } from "./ProductsInfo";
import { LargeUsersInfo } from "./LargeUsersInfo";
import { LargeProductsInfo } from "./LargeProductsInfo";

const UserInput = ({ name }) => {
  return (
    <>
      <h3>
        <u>{name} Form</u>
      </h3>
      <UserInfoForm />
    </>
  );
};

const DisplayUser = ({ name, resource }) => {
  return (
    <>
      <h2>
        <u>{name} List</u>
      </h2>
      <UsersInfo />
      <h2>
        <u>{resource} List</u>
      </h2>
      <ProductsInfo />
    </>
  );
};
const LeftHandComponent = ({ name }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <h1>
        <u>{name} List</u>
      </h1>
      <UsersInfo />
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <LargeUsersInfo/>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Details" : "Show Details..."}
      </button>
    </>
  );
};

const RightHandComponent = ({ name }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <h1>
        <u>{name} List</u>
      </h1>
      <ProductsInfo />
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <LargeProductsInfo/>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Details" : "Show Details..."}
      </button>
    </>
  );
};
function App() {
  return (
    <>
      <SplitScreen
        topLeftWeight={3}
        topRighttWeight={1}
        leftWeight={1}
        rightWeight={1}
      >
        <LeftHandComponent name="Users" />
        <RightHandComponent name="Product" />
        <UserInput name="User Input" />
        <DisplayUser name="Users" resource="Product" />
      </SplitScreen>
    </>
  );
}
export default App;
