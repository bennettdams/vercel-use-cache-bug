"use client";

import { useRouter } from "next/navigation";
import { addUser } from "./actions";

export function UsersDisplay({ users }: { users: string[] }) {
  const router = useRouter();
  console.log("UsersDisplay: ", users);

  return (
    <div className="p-32">
      <p>Users:</p>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <button
        className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await addUser();

          const params = new URLSearchParams();
          params.append("users", users.join(","));

          router.replace(`/?${params.toString()}`);
        }}
      >
        Switch filter
      </button>
    </div>
  );
}
