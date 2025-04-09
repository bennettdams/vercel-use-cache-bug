import { Fragment } from "react";
import { getUsers } from "../data/queries";
import { UsersDisplay } from "./users-display";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    filter: "user" | "admin" | undefined;
  }>;
}) {
  const { filter: filterFromParams } = await searchParams;
  const usersAll = await getUsers(null);

  const filter = filterFromParams ?? null;
  const usersForFilter = await getUsers(filter);

  return (
    <div className="p-32">
      <p>Filter: {filter}</p>

      <p>Users all:</p>
      <div className="grid grid-cols-[min-content_1fr] gap-x-2">
        {usersAll.map((user) => (
          <Fragment key={user.id}>
            <span>{user.id}</span>
            <span>{user.name}</span>
          </Fragment>
        ))}
      </div>

      <UsersDisplay usersForFilter={usersForFilter} filter={filter} />
    </div>
  );
}
