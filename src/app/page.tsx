import { DateDisplay } from "./date-display";
import { getDate } from "./queries";

export default async function Home() {
  const date = await getDate();

  return (
    <div className="p-32">
      <DateDisplay date={date} />
    </div>
  );
}
