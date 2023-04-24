import { SocialIcon } from "react-social-icons";
const SocialM = () => {
  return (
    <div className="flex justify-center  md:justify-start my-10 gap-7 iconsSo">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/imane-chaourad-466819182/"
          style={{ height: 25, width: 25 }}
        />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          url="https://web.facebook.com/imane.chaourad"
          style={{ height: 25, width: 25 }}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <SocialIcon
          url="https://www.instagram.com/chaourad_imane/?next=%2F"
          style={{ height: 25, width: 25 }}
        />
      </a>
    </div>
  );
};

export default SocialM;
