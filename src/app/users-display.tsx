"use client";

import { useRouter } from "next/navigation";
import { addUser } from "./actions";

export function UsersDisplay({
  users,
  usersFiltered,
  filter,
}: {
  users: string[];
  usersFiltered: string[];
  filter: string | undefined;
}) {
  const router = useRouter();
  console.log("UsersDisplay: ", users);

  return (
    <div className="p-32 bg-gray-100">
      <p>Users filtered:</p>
      <ul>
        {usersFiltered.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <button
        className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await addUser();

          const params = new URLSearchParams();
          const usersNew = [...users, `User ${users.length + 1}`];
          params.append("users", usersNew.join(","));
          params.append("filter", filter === "1" ? "2" : "1");

          router.replace(`/?${params.toString()}`);
        }}
      >
        Switch filter
      </button>
    </div>
  );
}
