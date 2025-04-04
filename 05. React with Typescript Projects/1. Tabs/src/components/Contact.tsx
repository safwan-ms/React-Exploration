import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactElement;
}
const links: SocialLink[] = [
  {
    href: "https://x.com/SafwanAnas40625",
    label: "Twitter",
    icon: <FaTwitter size={24} color="#1DA1F2" />,
  },

  {
    href: "https://github.com/safwan-ms",
    label: "GitHub",
    icon: <FaGithub size={24} color="#181717" />,
  },
  {
    href: "https://www.instagram.com/im_safwax/",
    label: "Instagram",
    icon: <FaInstagram size={24} color="#E4405F" />,
  },
];

const Contact = () => {
  return (
    <section className="px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-extrabold text-gray-900">Contact Me</h2>
      <div className="flex items-center ">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Contact;
