"use client";

import { revalidateDate } from "./actions";

export function DateDisplay({ date }: { date: string }) {
  return (
    <div className="p-32">
      <p>Date: {date}</p>

      <button
        className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          console.log("Clicked revalidate");
          await revalidateDate();
          console.log("Finished revalidate");
        }}
      >
        Revalidate
      </button>
    </div>
  );
}
