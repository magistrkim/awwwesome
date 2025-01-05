import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLink = [
  { href: "https://github.com/magistrkim", icon: <FaGithub />, name: "Github" },
  { href: "https://twitter.com", icon: <FaTwitter />, name: "Twitter" },
  {
    href: "https://www.linkedin.com/in/nataliya-kachor/",
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },
  { href: "https://instagram.com", icon: <FaInstagram />, name: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-800 py-4 text-white">
      <div className="container mx-auto flex flex-col justify-between items-center gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy;MagistrKim 2024. All rights reserved
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {footerLink.map((link, index) => (
            <a
              aria-label={`Go to ${link.name}`}
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-orange-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          aria-label="Go to privacy policy"
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
