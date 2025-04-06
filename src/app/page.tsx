import { getUsers } from "./queries";
import { UsersDisplay } from "./users-display";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ users: string | undefined }>;
}) {
  const { users } = await searchParams;
  console.log("users from params: ", users);
  const usersData = await getUsers(!users ? [] : users.split(","));

  return (
    <div className="p-32">
      <UsersDisplay users={usersData} />
    </div>
  );
}
