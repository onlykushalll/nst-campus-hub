import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatEventDate } from "@/lib/event-date";
import type { CampusEvent } from "@/lib/types";

export function EventCard({ event, heading = "h2" }: { event: CampusEvent; heading?: "h2" | "h3" }) {
  const Heading = heading;

  return (
    <Card className="h-full shadow-none">
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{event.type}</Badge>
          {event.demo ? <Badge variant="outline">Demo</Badge> : null}
        </div>
        <Heading className="text-xl font-semibold tracking-tight">{event.title}</Heading>
      </CardHeader>
      <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p className="font-medium text-foreground"><time dateTime={event.date}>{formatEventDate(event.date)}</time> · {event.location}</p>
        <p>{event.description}</p>
      </CardContent>
    </Card>
  );
}
