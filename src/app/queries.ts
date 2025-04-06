import { unstable_cacheTag } from "next/cache";

export async function getUsers(filter: "Alice" | "Bob") {
  "use cache";
  unstable_cacheTag("users");
  console.log("Called getUsers: ", filter);

  if (filter === "Alice") {
    return ["Alice"];
  } else {
    return ["Bob"];
  }
}
