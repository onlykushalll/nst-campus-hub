import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, author }: { project: Project; author: string }) {
  return (
    <Card className="flex h-full flex-col shadow-none">
      <CardHeader>
        <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>
        <p className="text-sm text-muted-foreground">By {author}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        {project.url ? <a href={project.url} className="w-fit text-sm font-medium text-primary underline underline-offset-4">Visit {project.name}</a> : null}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
          {project.demo ? <Badge variant="outline">Demo</Badge> : null}
        </div>
      </CardContent>
    </Card>
  );
}
