"use server";
import { revalidateTag } from "next/cache";

export async function revalidateDate() {
  "use server";

  console.log("Called revalidateDate");
  revalidateTag("date");
  console.log("Finished revalidateDate");
}
