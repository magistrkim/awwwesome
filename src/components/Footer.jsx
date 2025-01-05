import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLink = [
  { href: "https://github.com/magistrkim", icon: <FaGithub /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  {
    href: "https://www.linkedin.com/in/nataliya-kachor/",
    icon: <FaLinkedin />,
  },
  { href: "https://instagram.com", icon: <FaInstagram /> },
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
