import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export async function getDate() {
  "use cache";
  cacheTag("date");
  console.log("Called getDate");

  return new Date().toISOString();
}
