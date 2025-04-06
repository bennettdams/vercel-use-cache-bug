"use server";
import { revalidateTag } from "next/cache";
import { users } from "./queries";

export async function addUser() {
  "use server";

  console.log("Called addUser");
  users.push("Some name " + Math.random());
  revalidateTag("users");
  console.log("Finished addUser");
}
