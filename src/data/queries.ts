import { unstable_cacheTag } from "next/cache";
import { db } from "./db-service";

export async function getUsers(filter: "user" | "admin" | null) {
  "use cache";
  unstable_cacheTag("users");
  console.log("Called getUsers with: ", filter);

  const users = db.readUsers();
  if (!users) throw new Error("No users found");

  const usersFiltered =
    filter === null
      ? users
      : users.filter((user) => user.name.includes(filter));
  return usersFiltered.sort((a, b) => Number(b.id) - Number(a.id));
}
