import { unstable_cacheTag } from "next/cache";

export async function getUsers(previousUsers: string[]) {
  "use cache";
  unstable_cacheTag("users");
  console.log("Called getUsers with: ", previousUsers);

  return [...previousUsers, `User ${previousUsers.length + 1}`];
}
