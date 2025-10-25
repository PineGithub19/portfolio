import { AppearGradually } from "../animation/appear-gradually";
import ContactForm from "./contact_form";

function Contact() {
  return (
    <div id="contact">
      <p className="text-6xl text-center text-white font-bold mt-36 sm:mt-48 mb-24">
        <span className="text-black dark:text-white">My</span>{" "}
        <span className="text-[#9857D3] dark:text-[#CBACF9]">contact</span>
      </p>
      <AppearGradually className="flex flex-col justify-center gap-24 sm:flex-row">
        <div className="text-white w-full sm:w-[50%]">
          <p className="text-xl text-[#3E4160] dark:text-[#BEC1DD] text-center sm:text-left">
            I&apos;m currently looking to join a cross-functional team where I
            can grow as a full-stack web developer and contribute to building
            meaningful, user-focused products. Got a project in mind or looking
            for a developer to collaborate with? Let&apos;s connect.
          </p>
          <p className="mt-12 text-xl text-center sm:text-left flex items-center">
            <span className="text-[#9857D3] font-bold">Email:</span>
            <a
              className="ml-4 text-[#3E4160] dark:text-[#BEC1DD]"
              target="_blank"
              href="mailto:thtung.dev@gmail.com"
            >
              thtung.dev@gmail.com
            </a>
          </p>
          <p className="mt-6 text-xl text-center sm:text-left flex items-center">
            <span className="text-[#9857D3] font-bold">LinkedIn:</span>
            <a
              className="ml-4 text-[#3E4160] dark:text-[#BEC1DD]"
              target="_blank"
              href="https://www.linkedin.com/in/tung-thai-dev"
            >
              www.linkedin.com/in/tung-thai-dev
            </a>
          </p>
          <p className="mt-6 text-xl text-center sm:text-left flex items-center">
            <span className="text-[#9857D3] font-bold">Github:</span>
            <a
              className="ml-4 text-[#3E4160] dark:text-[#BEC1DD]"
              target="_blank"
              href="https://github.com/PineGithub19"
            >
              https://github.com/PineGithub19
            </a>
          </p>
        </div>
        <ContactForm />
      </AppearGradually>
    </div>
  );
}

export default Contact;
