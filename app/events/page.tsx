import { EventCard } from "@/components/event-card";
import { PageHeading } from "@/components/page-heading";
import { getEvents } from "@/lib/data";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <PageHeading title="Events" description="Find demo hackathons, club sessions, workshops, and deadlines from the campus calendar." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => <li key={event.slug}><EventCard event={event} /></li>)}
      </ul>
    </>
  );
}
