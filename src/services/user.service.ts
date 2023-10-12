import type { User } from "@/domain/User";

class UserService {
  private _userName: string;

  constructor() {
    this._userName = process.env.GITHUB_USER_NAME || "";
  }

  public async getUserData(): Promise<User> {
    const response = await fetch(
      `https://api.github.com/users/${this._userName}`,
      {
        cache: "force-cache",
      }
    );
    const data = await response.json();
    return data;
  }
}

export const userService = new UserService();
