import { unstable_cacheTag } from "next/cache";

export async function getUsers() {
  "use cache";
  unstable_cacheTag("users");
  // console.log("Called getUsers with: ", filter);

  const rng = Math.random() > 0.5 ? "1" : "2";

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${rng}`);
  return (await res.json()) as { id: number; name: string };
}
