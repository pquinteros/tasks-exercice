import { UserProvider, useUser } from "./components/UserContext";
import UserCard from "./components/UserCard";
import EditButton from "./components/EditButton";
import DeleteButton from "./components/DeleteButton";

const UserActions = () => {
  const user = useUser();

  if (user.role !== "admin") return null;

  return (
    <div className="flex gap-4">
      <EditButton />
      <DeleteButton />
    </div>
  );
};

const App = () => {
  const user = {
    fullName: "Pablo Quinteros",
    email: "pquinteros@gmail.com"
  };

  return (
    <UserProvider>
      <UserCard user={user}>
        <UserActions />
      </UserCard>
    </UserProvider>
  );
};

export default App;