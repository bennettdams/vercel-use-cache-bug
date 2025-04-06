"use server";
import { revalidateTag } from "next/cache";

export async function addUser() {
  console.log("Called addUser");

  revalidateTag("users");
  console.log("Finished addUser");
}
