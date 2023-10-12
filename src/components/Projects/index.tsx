import { format } from "date-fns";
import type { ProjectsProps } from "./types";

export const Projects = ({ repos }: ProjectsProps) => {
  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto space-y-8 mt-16">
      <h2 className="text-lg font-bold text-gray-100">Projects</h2>
      <ul className="flex flex-col gap-y-8">
        {repos.map((repo) => (
          <li key={repo.id}>
            <h3 className="text-sm text-gray-500">
              {format(new Date(repo.created_at), "dd MMMM yyyy")}
            </h3>
            <a
              className="flex flex-col sm:flex-row sm:items-center"
              href={repo.html_url}
              target="_blank"
            >
              <h4 className="text-lg font-bold text-gray-100 hover:underline">
                {repo.name}
              </h4>
            </a>
            <p className="text-gray-300">{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
