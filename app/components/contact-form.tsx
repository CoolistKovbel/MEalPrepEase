"use client";

import { ContactEmail } from "@/app/lib/action";
import { useFormState } from "react-dom";

const ContactForm = () => {
  const [state, dispatch] = useFormState(ContactEmail, undefined);

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      dispatch(formData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      e.currentTarget.reset();
    }
  };

  return (
    <form className="mb-8" onSubmit={send}>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-400 text-sm mb-2 ">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-400 text-sm mb-2">
          Your Message:
        </label>
        <textarea
          id="content"
          name="content"
          className="w-full text-black px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>

      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
        Send Message
      </button>

      {state && (
        <>
          <p className="text-sm text-yellow-500  text-center space-y-4">
            {state.message}
          </p>
        </>
      )}
    </form>
  );
};

export default ContactForm;
