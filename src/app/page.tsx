import { Footer } from "@/components/Footer";
import { Presentation } from "@/components/Presentation";
import { Projects } from "@/components/Projects";
import { repoService } from "@/services/repo.service";

export const revalidate = 3600;

export default async function Home() {
  const repos = await repoService.getReposData();

  return (
    <main className="flex flex-col">
      <Presentation />
      <Projects repos={repos} />
      <Footer />
    </main>
  );
}
