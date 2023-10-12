import Image from "next/image";
import { HeaderProps } from "./types";

export const Header = ({ avatar_url }: HeaderProps) => {
  return (
    <header className="bg-background pt-6">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between mb-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <Image
            className="rounded-full"
            alt="profile picture"
            src={avatar_url}
            width={50}
            height={50}
          />
          <p className="flex flex-col justify-center m-3 text-xl text-white">
            Oberdan Soldi
          </p>
        </div>
      </nav>
    </header>
  );
};
