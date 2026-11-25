import { PageHeading } from "@/components/page-heading";
import { StudentCard } from "@/components/student-card";
import { getStudents } from "@/lib/data";

export default async function PeoplePage() {
  const students = await getStudents();

  return (
    <>
      <PageHeading title="People" description="Meet the students who build, learn, and share what they know at NST." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => <li key={student.username}><StudentCard student={student} /></li>)}
      </ul>
    </>
  );
}
