import {
  DashboardIcon,
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import ProfilePicture from "../../public/images/portfolio_main.jpg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mainak Das | Web Developer",
  description: "Mainak Das is a web developer and blogger",
};

export default function Home() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="flex justify-center lg:col-span-1 lg:col-start-2">
        <Image
          src={ProfilePicture}
          alt="Mainak Das"
          className="max-h-80 max-w-xs rounded-xl object-cover object-bottom shadow-xl lg:max-h-96 lg:max-w-sm"
        />
      </div>
      <div className="mt-8 flex flex-col gap-6 lg:col-start-1 lg:row-start-1 lg:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-calSans text-brand text-5xl">Mainak Das</h1>
          <h2 className="text-3xl font-semibold text-neutral-200">
            Web Developer, Blogger
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Building Beautiful Web Experiences At <span>Codemancers</span>
          </p>
          <p>
            Solved and created tutorials to educate and help others use various
            technologies for the first time or in a more efficient manner.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:col-span-1 lg:row-start-2 lg:mb-8 lg:px-8">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/DawnMD"
          className="flex items-center justify-between gap-2 rounded-xl border border-neutral-600/40 p-4 transition-all hover:text-neutral-100"
        >
          <span className="flex items-center gap-2">
            <GitHubLogoIcon className="h-4 w-4 lg:h-6 lg:w-6" />
            <span>Github</span>
          </span>
          <ExternalLinkIcon className="h-4 w-4" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mainak1147/"
          className="flex items-center justify-between gap-2 rounded-xl border border-neutral-600/40 p-4 transition-all hover:text-neutral-100"
        >
          <span className="flex items-center gap-2">
            <LinkedInLogoIcon className="h-4 w-4 lg:h-6 lg:w-6" />
            <span>LinkedIn</span>
          </span>
          <ExternalLinkIcon className="h-4 w-4" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/mainak_ds"
          className="flex items-center justify-between gap-2 rounded-xl border border-neutral-600/40 p-4 transition-all hover:text-neutral-100"
        >
          <span className="flex items-center gap-2">
            <TwitterLogoIcon className="h-4 w-4 lg:h-6 lg:w-6" />
            <span>Twitter</span>
          </span>
          <ExternalLinkIcon className="h-4 w-4" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:mainakdas104@gmail.com"
          className="flex items-center justify-between gap-2 rounded-xl border border-neutral-600/40 p-4 transition-all hover:text-neutral-100"
        >
          <span className="flex items-center gap-2">
            <EnvelopeClosedIcon className="h-4 w-4 lg:h-6 lg:w-6" />
            <span>Mail</span>
          </span>
          <ExternalLinkIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 lg:self-start">
        <div className="flex flex-col gap-4 rounded-xl border border-neutral-600/40 p-4 text-sm lg:mx-16">
          <div className="flex items-center gap-2">
            <DashboardIcon className="text-brand h-8 w-8" />
            <h4 className="font-calSans text-lg text-neutral-50">Work</h4>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex flex-col gap-1">
              <span className="font-calSans max-w-[150px] text-neutral-50">
                Codemancers
              </span>
              <span className="text-xs">Frontend Developer</span>
            </p>
            <p className="text-sm text-neutral-500">2022 - Present</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex flex-col gap-1">
              <span className="font-calSans max-w-[150px] text-neutral-50">
                Codemancers
              </span>
              <span className="text-xs">Frontend Developer Intern</span>
            </p>
            <p className="text-sm text-neutral-500">2021 - 2021</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex flex-col gap-1">
              <span className="font-calSans max-w-[150px] text-neutral-50">
                CXDeployer
              </span>
              <span className="text-xs">Fullstack Developer Intern</span>
            </p>
            <p className="text-sm text-neutral-500">2021 - 2021</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex flex-col gap-1">
              <span className="font-calSans max-w-[150px] text-neutral-50">
                APlus Topper
              </span>
              <span className="text-xs">Frontend Developer Intern</span>
            </p>
            <p className="text-sm text-neutral-500">2021 - 2021</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="flex flex-col gap-1">
              <span className="font-calSans max-w-[150px] text-neutral-50">
                Next Generation Technocom Pvt. Ltd.
              </span>
              <span className="text-xs">Application Developer Intern</span>
            </p>
            <p className="text-sm text-neutral-500">2020 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
