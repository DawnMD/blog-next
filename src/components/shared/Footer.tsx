import { HeartIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-neutral-600 px-4 py-8">
      <p className="flex items-baseline justify-center gap-1 text-xs">
        <span>Made with</span>
        <HeartIcon className="h-4 w-4 transition-colors hover:text-red-600" />
        <span>by</span>
        <Link
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-calSans inline-flex font-semibold tracking-tight transition-colors hover:text-neutral-100"
        >
          Mainak Das
        </Link>
      </p>
    </footer>
  );
};
