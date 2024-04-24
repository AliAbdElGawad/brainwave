import { Section } from "../components";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses>
      <div className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()}. All Rights reserved.
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <img src={item.iconUrl} height={16} width={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
