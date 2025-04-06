import { getUsers } from "./queries";
import { UsersDisplay } from "./users-display";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="p-32">
      <UsersDisplay users={users} />
    </div>
  );
}
