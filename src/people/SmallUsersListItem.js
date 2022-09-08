export const SmallUsersListItem = ({ User }) => {
  const { name, age } = User;

  return (
    <h4>
      Name: {name}, Age: {age} years
    </h4>
  );
};
