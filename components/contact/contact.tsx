import { AppearGradually } from "../animation/appear-gradually";

function Contact() {
  return (
    <div id="contact">
      <p className="text-6xl text-center text-white font-bold mt-48 mb-24">
        <span className="text-black dark:text-white">My</span>{" "}
        <span className="text-[#9857D3] dark:text-[#CBACF9]">contact</span>
      </p>
      <AppearGradually className="flex justify-center gap-24">
        <div className="text-white w-[50%]">
          <p className="text-xl text-[#3E4160] dark:text-[#BEC1DD]">
            I&apos;m currently looking to join a cross-functional team where I
            can grow as a full-stack web developer and contribute to building
            meaningful, user-focused products. Got a project in mind or looking
            for a developer to collaborate with? Let&apos;s connect.
          </p>
          <p className="mt-12 text-xl">
            <span className="text-[#9857D3] font-bold">Email:</span>
            <span className="ml-4 text-[#3E4160] dark:text-[#BEC1DD]">
              thtung.dev@gmail.com
            </span>
          </p>
        </div>
        <form className="max-w-md mx-auto space-y-6 w-[50%]">
          <div className="relative z-0 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
             dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
             focus:outline-none focus:ring-0 focus:border-[#9857D3] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-lg text-gray-500 dark:text-gray-400 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#9857D3] dark:peer-focus:text-blue-500"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
             dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
             focus:outline-none focus:ring-0 focus:border-[#9857D3] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="full_name"
              className="absolute text-lg text-gray-500 dark:text-gray-400 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#9857D3] dark:peer-focus:text-blue-500"
            >
              Full Name
            </label>
          </div>
          <div className="relative z-0 w-full group">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none 
             dark:text-white dark:border-gray-600 dark:focus:border-blue-500 
             focus:outline-none focus:ring-0 focus:border-[#9857D3] peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute text-lg text-gray-500 dark:text-gray-400 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#9857D3] dark:peer-focus:text-blue-500"
            >
              Message
            </label>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 
           focus:ring-4 focus:outline-none focus:ring-blue-300 
           font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center 
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </AppearGradually>
    </div>
  );
}

export default Contact;
