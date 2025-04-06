"use client";

import { useRouter } from "next/navigation";
import { addUser } from "./actions";

export function UsersDisplay({
  users,
  filter,
}: {
  users: string[];
  filter: "Alice" | "Bob";
}) {
  const router = useRouter();

  return (
    <div className="p-32">
      <p>Users:</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <button
        className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await addUser();

          router.push(`/?filter=${filter === "Alice" ? "Bob" : "Alice"}`);
        }}
      >
        Switch filter
      </button>
    </div>
  );
}
