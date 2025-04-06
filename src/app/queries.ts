import { unstable_cacheTag } from "next/cache";

export async function getUsers(users: string[], filter: string) {
  "use cache";
  unstable_cacheTag("users");
  console.log("Called getUsers with: ", users, filter);

  return users.filter((user) => user.includes(filter));
}
