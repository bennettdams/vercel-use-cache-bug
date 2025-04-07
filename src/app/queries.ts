import { unstable_cacheTag } from "next/cache";

export async function getUsers(filter: "1" | "2") {
  "use cache";
  unstable_cacheTag("users");
  console.log("Called getUsers with: ", filter);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${filter}`,
  );
  return (await res.json()) as { id: number; name: string };
}
