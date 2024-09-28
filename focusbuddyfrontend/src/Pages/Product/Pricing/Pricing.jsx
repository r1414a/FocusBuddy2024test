import FAQComponent from "../../../Components/FAQComponent/FAQComponent";
import PagesHeading from "../../../Components/PagesHeading/PagesHeading";
import BrownButtonOnWhite from "../../../Components/UI/BrownButtonOnWhite.jsx/BrownButtonOnWhite.jsx";
import { Link } from "react-router-dom";


const data = [
  {
    question:
      "What if I can't use my mic in a shared or quiet space on Focusmate?",
    answer:
      "In situations where you're in a quiet or shared environment like a library or office, you can activate Quiet Mode on Focusmate. This notifies your partner, and you can utilize the in-session text chat to stay connected and share your goals and progress.",
  },
  {
    question:
      "How do I make the most of Focusmate for tasks involving physical activity?",
    answer:
      "When engaging in tasks that involve movement, such as cooking or exercising, the Focusmate experience mirrors that of desk work. Simply ensure your camera is positioned to allow your partner to observe you as you concentrate on your activities.",
  },
  {
    question:
      "Can I choose specific people for tasks like exercise or morning routines on Focusmate?",
    answer:
      "Certainly. You have options for working with specific people. If you enjoyed collaborating with someone and want to work together again, you can Favorite them and schedule a sessions with them.",
  },
];

export default function Pricing() {
  return (
    <>
      <div className="p-6 lg:p-10 mt-10 mb-32 lg:mb-40  md:max-w-screen-md lg:max-w-screen-xl mx-auto">
        <PagesHeading
          heading={"Pricing"}
          text={
            "Streamlined pricing for a clear focus on your priorities."
          }
        />

          <div className="mt-20 lg:mt-36 flex flex-col lg:flex-row gap-4">
            <div className="group basis-1/3 text-center bg-white py-20 px-10 lg:p-16 xl:p-20 rounded-lg hover:bg-greenbg hover:shadow-2xl hover:shadow-formgray transition-all duration-500 ease-in-out">
              <h1 className="text-4xl text-greenbg group-hover:text-white">Free</h1>
              <p className="my-10 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, deleniti!</p>
              <Link to={'/signup'}>
              <button type="button" className="group-hover:bg-white group-hover:text-textcolor w-full bg-greenbg text-white text-md xl:text-lg py-3.5 font-medium rounded-md ">Start now</button>
              </Link>
            </div>
            <div className="group mt-10 lg:-mt-10 mb-10 shadow-2xl shadow-formgray basis-1/3 text-center bg-greenbg text-white py-20 px-10 lg:p-16 xl:p-20  rounded-lg transition-all duration-500 ease-in-out">
              <h1 className="text-4xl">Premium</h1>
              <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, deleniti!</p>
              <Link to={'/signup'}>
              <button type="button" className="group-hover:bg-white group-hover:text-textcolor w-full bg-greenbg text-white text-md xl:text-lg py-3.5 font-medium rounded-md ">Start now</button>
              </Link>
            </div>
            <div className="group basis-1/3 text-center bg-white py-20 px-10 lg:p-16 xl:p-20  rounded-lg hover:bg-greenbg hover:shadow-2xl hover:shadow-formgray transition-all duration-500 ease-in-out">
              <h1 className="text-4xl text-greenbg group-hover:text-white">Plus</h1>
              <p className="my-10 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, deleniti!</p>
              <Link to={'/signup'}>
              <button type="button" className="group-hover:bg-white group-hover:text-textcolor w-full bg-greenbg text-white text-md xl:text-lg py-3.5 font-medium rounded-md ">Start now</button>
              </Link>
            </div>
          </div>

          <div className="mt-28 lg:mt-36 text-center">
          <h1 className="text-greenbg text-center text-4xl font-normal">FAQ</h1>
          <FAQComponent data={data} />
          <Link to={"/faq"}>
            <BrownButtonOnWhite
              style={{
                padding: "18px 28px",
                fontSize: "18px",
              }}
              text={"Have More Questions? Visit Our FAQ"}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
