"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  fullName: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      className="mx-auto space-y-6 w-[80%] sm:w-[50%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative z-0 w-full group">
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
             dark:text-white dark:border-gray-600 
             focus:outline-none focus:ring-0 focus:border-[#9857D3] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute text-lg text-gray-500 dark:text-gray-400 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#9857D3] "
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full group">
        <input
          {...register("fullName", { required: true })}
          type="text"
          name="fullName"
          id="fullName"
          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
             dark:text-white dark:border-gray-600 
             focus:outline-none focus:ring-0 focus:border-[#9857D3] peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="fullName"
          className="absolute text-lg text-gray-500 dark:text-gray-400 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#9857D3] "
        >
          Full Name
        </label>
      </div>
      <div className="relative z-0 w-full group">
        <textarea
          {...register("message", { required: true })}
          name="message"
          id="message"
          rows={4}
          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none 
             dark:text-white dark:border-gray-600 
             focus:outline-none focus:ring-0 focus:border-[#9857D3] peer"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-lg text-gray-500 dark:text-gray-400 
             duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
             peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
             peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#9857D3] "
        >
          Message
        </label>
      </div>
      <motion.button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 
           focus:ring-4 focus:outline-none focus:ring-blue-300 
           font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center 
           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send
      </motion.button>
    </form>
  );
}

export default ContactForm;
