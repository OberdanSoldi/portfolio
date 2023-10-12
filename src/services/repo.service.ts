import type { Repo } from "@/domain/Repo";

class RepoService {
  public async getReposData(perPage: number = 5): Promise<Repo[]> {
    const response = await fetch(
      `https://api.github.com/users/OberdanSoldi/repos?sort=created&type=owner&per_page=${perPage}`
    );
    const repos = await response.json();
    return repos;
  }
}

export const repoService = new RepoService();
