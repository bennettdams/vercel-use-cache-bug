"use client";

import { User } from "@/data/db-service";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { addUser, resetUsers } from "../data/actions";

export function UsersDisplay({
  usersForFilter,
  filter,
}: {
  usersForFilter: User[];
  filter: string | null;
}) {
  const router = useRouter();
  console.log("UsersDisplay user: ", usersForFilter);

  return (
    <div className="p-32 bg-gray-100">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await addUser();

          const params = new URLSearchParams();
          params.append("filter", filter === "user" ? "admin" : "user");

          router.replace(`/?${params.toString()}`);
        }}
      >
        Add user
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          await resetUsers();

          router.replace("/");
        }}
      >
        Reset users
      </button>

      <p>Users for filter:</p>

      <div className="grid grid-cols-[min-content_1fr] gap-x-2">
        {usersForFilter.map((user) => (
          <Fragment key={user.id}>
            <span>{user.id}</span>
            <span>{user.name}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
