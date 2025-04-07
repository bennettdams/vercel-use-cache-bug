import { getUsers } from "./queries";
import { UsersDisplay } from "./users-display";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    filter: "1" | "2" | undefined;
  }>;
}) {
  const { filter: filterFromParams } = await searchParams;
  const filter = filterFromParams ?? "1";
  const userForFilter = await getUsers(filter);

  return (
    <div className="p-32">
      <p>Filter: {filter}</p>

      <UsersDisplay userForFilter={userForFilter} filter={filter} />
    </div>
  );
}
