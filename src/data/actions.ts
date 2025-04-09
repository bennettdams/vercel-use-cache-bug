"use server";
import { revalidateTag } from "next/cache";
import { db } from "./db-service";

export async function addUser() {
  console.log("Called addUser");

  db.writeUser();

  revalidateTag("users");
  console.log("Finished addUser");
}

export async function resetUsers() {
  console.log("Called resetUsers");

  db.resetUsers();

  revalidateTag("users");
  console.log("Finished resetUsers");
}
