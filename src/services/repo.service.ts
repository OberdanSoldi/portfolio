import type { Repo } from "@/domain/Repo";

class RepoService {
  private _userName: string;

  constructor() {
    this._userName = process.env.GITHUB_USER_NAME || "";
  }

  public async getReposData(perPage: number = 5): Promise<Repo[]> {
    const response = await fetch(
      `https://api.github.com/users/${this._userName}/repos?sort=created&type=owner&per_page=${perPage}`
    );
    const repos = await response.json();
    return repos;
  }
}

export const repoService = new RepoService();
