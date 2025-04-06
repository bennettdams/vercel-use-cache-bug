"use client";

import { addUser } from "./actions";

export function UsersDisplay({ users }: { users: string[] }) {
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
          console.log("Clicked revalidate");
          await addUser();
          console.log("Finished revalidate");
        }}
      >
        Add Bob
      </button>
    </div>
  );
}
