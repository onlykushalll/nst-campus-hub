import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Resource } from "@/lib/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full shadow-none">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold tracking-tight">
          <a href={resource.url} className="text-primary hover:underline hover:underline-offset-4">
            {resource.title} <span aria-hidden="true">↗</span>
          </a>
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{resource.description}</p>
      </CardContent>
    </Card>
  );
}
