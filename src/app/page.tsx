import { getUsers } from "./queries";
import { UsersDisplay } from "./users-display";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ filter: "Alice" | "Bob" }>;
}) {
  const { filter } = await searchParams;
  const users = await getUsers(filter);

  return (
    <div className="p-32">
      <p>Filter: {filter}</p>
      <UsersDisplay users={users} filter={filter} />
    </div>
  );
}
