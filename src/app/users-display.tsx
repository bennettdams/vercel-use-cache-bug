"use client";

import { useRouter } from "next/navigation";
import { addUser } from "./actions";

export function UsersDisplay({
  userForFilter,
  filter,
}: {
  userForFilter: { id: number; name: string };
  filter: string;
}) {
  const router = useRouter();
  console.log("UsersDisplay user: ", userForFilter);

  return (
    <div className="p-32 bg-gray-100">
      <p>User for filter:</p>
      <p>{userForFilter.id}</p>
      <p>{userForFilter.name}</p>

      <button
        className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await addUser();

          // const params = new URLSearchParams();
          // params.append("filter", filter === "1" ? "2" : "1");

          // router.replace(`/?${params.toString()}`);
        }}
      >
        Switch filter
      </button>
    </div>
  );
}
