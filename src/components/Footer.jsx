import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white pt-8 pb-2 text-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:items-center">
          <div className="flex-grow">
            <h2 className="text-lg font-semibold mb-2">CONTACT</h2>
            <p>
              Address: Link Road Number 3, Near Kali Mata Mandir,
              <br /> Bhopal, Madhya Pradesh, India 462003
            </p>
            <p>Telephone: +91 755 4051000, 4052000</p>
            <p>FAX: +91-755 2670562</p>
          </div>
          <div className="flex-grow">
            <p>
              Email: pro[at]manit[dot]ac[dot]in,
              <br />
              officeofdirector[at]manit[dot]ac[dot]in
            </p>
            <p>
              Web:{" "}
              <a
                className="text-blue-300"
                href="https://www.manit.ac.in"
                target="_blank"
              >
                {" "}
                www.manit.ac.in
              </a>
            </p>
          </div>
          <div>
            <div className="flex justify-start md:justify-center items-center text-center max-sm:w-full flex-shrink space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/people/MANIT-Bhopal/100057525636119/"
                target="_blank"
                className="text-blue-500 text-lg  hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXzZC99puUZuJDiQ09p72cw"
                target="_blank"
                className="text-red-500  text-lg hover:text-red-600"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://twitter.com/manitbpl"
                target="_blank"
                className="text-blue-500 text-lg  hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/manitbhopl/"
                target="_blank"
                className="text-red-500  text-lg hover:text-red-600"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div className="text-left md:text-center">
              Contributions:-
              <br />
              Satyam Gupta | Palkesh Soni
            </div>
          </div>
        </div>

        <div className="pt-2 mt-2 border-t border-gray-50 text-center text-sm">
          <p>© 2025 All Rights Reserved | Terms of Use and Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
