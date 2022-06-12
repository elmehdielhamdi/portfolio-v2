import contact from "../../assets/img/contact.webp";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { validate } from "email-validator";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [sending, setSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const onSubmit = () => {
    setSending(true);
    toast.promise(
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          "#form",
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(() => {
          setSending(false);
          reset();
        }),
      {
        loading: "Sending...",
        success: <b>Message sent!</b>,
        error: <b>Message not send.</b>,
      }
    );
  };
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-20">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
            <span className="block mb-4 text-base text-primary font-semibold">
              Contact Me
            </span>
            <h2 className="text-dark mb-6 uppercase font-bold text-4xl">
              I'm open to work !
            </h2>
            <img
              src={contact}
              alt=""
              className="w-72 sm:w-96 mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <div className="bg-white relative rounded-lg py-8 px-4 sm:p-12 shadow-lg">
              <form id="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-6 relative">
                  <input
                    type="text"
                    {...register("name", { required: true, maxLength: 30 })}
                    placeholder="Your Name"
                    maxLength={30}
                    className="input"
                  />
                  {errors.name?.type === "required" && (
                    <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                      30 characters max
                    </span>
                  )}
                </div>
                <div className="mb-6 relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      validate: (value) => validate(value),
                    })}
                    placeholder="Your Email"
                    className="input"
                  />
                  {errors.email?.type === "required" && (
                    <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                  {errors.email?.type === "validate" && (
                    <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                      Incorrect email
                    </span>
                  )}
                </div>

                <div className="mb-6 relative">
                  <textarea
                    {...register("message", {
                      required: true,
                      maxLength: 1000,
                    })}
                    rows="6"
                    placeholder="Your Message"
                    className="input resize-none"
                    maxLength={1000}
                  ></textarea>
                  {errors.message?.type === "required" && (
                    <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                  {errors.message?.type === "maxLength" && (
                    <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                      1000 characters max
                    </span>
                  )}
                </div>
                <div>
                  <button
                    disabled={sending}
                    type="submit"
                    className="btn w-full p-3"
                  >
                    Send Message
                  </button>
                </div>
                <Toaster position="top-center" reverseOrder={false} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
