import FooterJoinButton from "../../Components/FooterJoinButton/FooterJoinButton";
import PagesHeading from "../../Components/PagesHeading/PagesHeading";

export default function Contact() {
  return (
    <>
      <div className="p-6 lg:p-10 mt-10 mb-32 lg:mb-40  max-w-screen-xl mx-auto">
        <PagesHeading
          heading={"Contact"}
          text={
            "Have questions? Feature requests? Suggestions? You're in the right place."
          }
        />
        <div className="mt-16 lg:mt-20 flex flex-col-reverse lg:flex-row shadow-2xl shadow-lightbg">
            <div className="rounded-b-lg lg:rounded-s-lg basis-1/2 bg-white p-8 lg:p-10">
                <p className="text-md lg:text-lg text-formgray">Hello! We're delighted that you're reaching out to us!</p>
                <ul className="mt-6 space-y-3 lg:space-y-1 list-disc marker:text-greenbg text-formgray text-md lg:text-lg ms-4 lg:ms-6">
                    <li>Questions, concerns, testimonials?</li>
                    <li>Feedback and feature requests? </li>
                    <li>Need to report misconduct? Navigate to the user’s profile and use the reporting button.</li>
                    <li>Reporting a bug?</li>
                    <li>Are you an investor? We’re honored you’re interested.</li>
                </ul>
            </div>
            <div className="flex flex-col py-20 px-10 text-center lg:p-4 space-y-3 items-center text-white  justify-center rounded-t-lg lg:rounded-e-lg basis-1/2 bg-greenbg ">
                <p className="text-md md:text-xl">For any queries Feel free to email us directly at:</p>
                <p className="text-xl md:text-3xl">contact@focusbuddy.com</p>
            </div>
        </div>
        <FooterJoinButton/>
      </div>
    </>
  );
}
