import { PageHeading } from "@/components/page-heading";
import { ResourceCard } from "@/components/resource-card";
import { getResources } from "@/lib/data";
import { resourceTopics } from "@/lib/types";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <PageHeading title="Resources" description="Find tutorials, reference docs, and practice material for your next contribution." />
      <div className="space-y-10">
        {resourceTopics.map((topic) => (
          <section key={topic}>
            <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">{topic}</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resources.filter((resource) => resource.topic === topic).map((resource) => (
                <li key={resource.slug}><ResourceCard resource={resource} /></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
