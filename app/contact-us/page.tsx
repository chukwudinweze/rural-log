import React from "react";
import FeedbackForm from "./feedback-form";

const ContactPage: React.FC = () => {
  return (
    <section className="max-w-full mx-auto p-6">
      <div className="flex flex-col items-center mb-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl mt-6 mb-2">Contact</h1>
          <p className="text-lg mb-1">
            <a
              href="tel:+2348165266966"
              className="text-blue-500 hover:underline"
            >
              +234 816 526 6966
            </a>
          </p>
          <p className="text-lg">
            <a
              href="mailto:rurallog1@gmail.com"
              className="text-blue-500 hover:underline"
            >
              rurallog1@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
        <FeedbackForm />
      </div>
    </section>
  );
};

export default ContactPage;
