import { Linkedin } from "@/components/commons/icons/Linkedin";
import { Github } from "@/components/commons/icons/Github";
import { GithubProfileUrl, LinkedinProfileUrl } from "./constants";

export const Presentation = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-bold text-gray-100">Hello World!</h1>
      <p className="mt-4 text-base text-gray-300">
        Hello, I&apos;m Oberdan Soldi, a frontend developer. I specialize in
        React, Next.js, SCSS, and TypeScript. If you want to see my work, click
        on the GitHub icon below, which will take you to my repositories.
      </p>
      <div className="text-gray-300 flex flex-wrap items-end gap-x-4 mt-4">
        <p>Find me on</p>
        <ul className="flex flex-1 items-center gap-x-2 sm:flex-initial">
          <li className="flex">
            <a
              href={GithubProfileUrl}
              target="_blank"
              className="inline-block p-1 sm:hover:text-link"
            >
              <Github className="fill-gray-300" />
            </a>
          </li>
          <li className="flex">
            <a
              href={LinkedinProfileUrl}
              target="_blank"
              className="inline-block p-1 sm:hover:text-link"
            >
              <Linkedin className="fill-gray-300" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
