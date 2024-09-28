import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="mt-32 bg-greenbg rounded-t-[100px]">
        <div className=" mx-auto  w-full px-10 md:ps-20 lg:max-w-screen-xl py-16 ">
          <div className="mt-4 md:mt-0 md:flex gap-8 lg:gap-0 md:justify-between">
            <div className="">
              <Link
                to={"/"}
                className="self-center text-4xl lg:text-5xl font-semibold whitespace-nowrap text-white"
              >
                FocusBuddy
              </Link>
              <p className="text-white text-md lg:text-lg my-6 ms-1 max-w-80">
              Virtual coworking:
              Where productivity meets accomplishment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:gap-10 lg:gap-16 xl:gap-36 grid-rows-1 sm:grid-cols-2">
              {/* <div></div> */}
              <div>
                <h2 className="mt-6 md:mt-0 mb-4 text-md font-bold text-white uppercase">
                  Product
                </h2>
                <ul className="text-white ">
                  <li>
                    <Link to={"/how-it-works"} className="hover:text-white">
                      How It Works
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/features"} className="hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to={"/faq"} className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/use-cases"} className="hover:text-white">
                      What Can I do on FocusBuddy?
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/science"} className="hover:text-white">
                      The Science Behind FocusBuddy
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/pricing"} className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mt-6 md:mt-0 mb-4 text-md font-bold text-white uppercase">
                  Company
                </h2>
                <ul className="text-white">
                  <li>
                    <Link to={"/about"} className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/contact"} className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/community"} className="hover:text-white">
                      Community Guidelines
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/terms"} className="hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li className="my-2">
                    <Link to={"/privacy"} className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="text-darkbrown bg-white rounded-t-[100px]">
          <div className="flex text-md md:text-lg justify-between mx-auto w-full max-w-screen-md lg:max-w-screen-xl px-10 lg:px-20 py-10 md:py-8">
            <div className="flex gap-4 ">
              <p>2024 @FocusBuddy</p>
            </div>

            <div className="flex gap-4 md:gap-6 ms-1 ">
              <Link to={"#"} className="text-lg md:text-xl text-darkbrown ">
                <FaFacebook />
              </Link>
              <Link to={"#"} className="text-lg md:text-xl text-darkbrown ">
                <FaInstagram />
              </Link>

              <Link to={"#"} className="text-lg md:text-xl text-darkbrown  ">
                <FaTwitter />
              </Link>
              <Link to={"#"} className="text-lg md:text-xl text-darkbrown ">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
