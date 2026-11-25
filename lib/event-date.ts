const eventDateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "America/Los_Angeles",
});

export function formatEventDate(date: string) {
  return eventDateFormatter.format(new Date(date));
}
