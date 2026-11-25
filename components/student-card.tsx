import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Student } from "@/lib/types";

export function StudentCard({ student }: { student: Student }) {
  const initials = student.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("");

  return (
    <Card className="flex h-full flex-col shadow-none">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary font-semibold text-secondary-foreground" aria-hidden="true">{initials}</span>
        {student.skills.length > 0 ? (
          <div className="min-w-0">
            <h2 className="text-lg font-semibold wrap-break-word">{student.name}</h2>
            <p className="text-sm wrap-break-word text-muted-foreground">@{student.username}</p>
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="text-sm font-medium">{student.program} · Year {student.year}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{student.bio}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {student.skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
          {student.demo ? <Badge variant="outline">Demo</Badge> : null}
        </div>
      </CardContent>
    </Card>
  );
}
