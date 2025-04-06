import { getUsers } from "./queries";
import { UsersDisplay } from "./users-display";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    users: string | undefined;
    filter: "user" | "admin" | undefined;
  }>;
}) {
  const { users: usersParam, filter } = await searchParams;
  const users = usersParam?.split(",") ?? [];
  console.log("users from params: ", users);
  const usersFiltered = await getUsers(users, filter ?? "user");

  return (
    <div className="p-32">
      <p>Users all:</p>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <p>Filter: {filter}</p>

      <UsersDisplay
        users={users}
        usersFiltered={usersFiltered}
        filter={filter}
      />
    </div>
  );
}
