import { unstable_cacheTag } from "next/cache";

export const users = ["Alice", "Bob"];

export async function getUsers() {
  "use cache";
  unstable_cacheTag("users");
  console.log("Called getUsers");

  return users;
}
