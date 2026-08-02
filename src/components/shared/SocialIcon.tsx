import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { Social } from "@/config/site";

const icons = {
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  twitter: TwitterLogoIcon,
  mail: EnvelopeClosedIcon,
} satisfies Record<Social["icon"], React.ElementType>;

export function SocialIcon({
  name,
  className,
}: {
  name: Social["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
