import "server-only";

import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { cache } from "react";
import type { CampusEvent, Project, Resource, Student } from "@/lib/types";

async function readEntries<T>(collection: string): Promise<T[]> {
  const directory = join(process.cwd(), "data", collection);
  const files = (await readdir(directory)).sort();

  return Promise.all(
    files
      .filter((file) => file.endsWith(".json") && !file.startsWith("_"))
      .map(async (file) => {
        try {
          return JSON.parse(await readFile(join(directory, file), "utf8")) as T;
        } catch (cause) {
          throw new Error(`Could not read data/${collection}/${file}`, { cause });
        }
      }),
  );
}

export const getStudents = cache(() => readEntries<Student>("students"));
export const getProjects = cache(() => readEntries<Project>("projects"));
export const getResources = cache(() => readEntries<Resource>("resources"));

export const getEvents = cache(async () => {
  const events = await readEntries<CampusEvent>("events");
  return events.sort((first, second) => second.date.localeCompare(first.date));
});
