import { PageHeading } from "@/components/page-heading";
import { ProjectCard } from "@/components/project-card";
import { getProjects, getStudents } from "@/lib/data";

export default async function ProjectsPage() {
  const [projects, students] = await Promise.all([getProjects(), getStudents()]);
  const names = new Map(students.map(({ username, name }) => [username, name]));

  return (
    <>
      <PageHeading title="Projects" description="Explore student ideas, from day-to-day campus tools to projects built at hackathons." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}><ProjectCard project={project} author={names.get(project.author) ?? project.author} /></li>
        ))}
      </ul>
    </>
  );
}
