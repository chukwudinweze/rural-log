import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import LinkItem from "./socialLinkItem";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const SocialMedia = () => {
  return (
    <ul className="hidden md:flex gap-5 ">
      {socialLinks.map((link) => (
        <LinkItem key={link.label} icon={link.icon} href={link.href} />
      ))}
    </ul>
  );
};

export default SocialMedia;
