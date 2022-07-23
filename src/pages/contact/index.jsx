import contact from "../../assets/img/contact.webp";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { validate } from "email-validator";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = () => {
    toast.promise(
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          "#form",
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(() => {
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
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-20">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
            <span className="block mb-4 text-base text-primary font-semibold">
              {t("contact.subtitle")}
            </span>
            <h2 className="text-dark mb-6 uppercase font-bold text-4xl">{t("contact.title")}</h2>
            <img src={contact} alt="" className="w-72 sm:w-96 mx-auto lg:mx-0" />
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <div className="bg-white relative rounded-lg py-8 px-4 sm:p-12 shadow-lg">
              <form id="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-6 relative">
                  <input
                    type="text"
                    {...register("name", {
                      required: t("contact.form.name.required"),
                      maxLength: { value: 30, message: t("contact.form.name.maxLength") },
                    })}
                    placeholder={t("contact.form.name.placeholder")}
                    maxLength={30}
                    className="input"
                  />
                  <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                    {errors.name && errors.name.message}
                  </span>
                </div>
                <div className="mb-6 relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: t("contact.form.email.required"),
                      validate: (value) => validate(value) || t("contact.form.email.validate"),
                    })}
                    placeholder={t("contact.form.email.placeholder")}
                    className="input"
                  />
                  <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                    {errors.email && errors.email.message}
                  </span>
                </div>

                <div className="mb-6 relative">
                  <textarea
                    {...register("message", {
                      required: t("contact.form.message.required"),
                      maxLength: { value: 1000, message: t("contact.form.message.maxLength") },
                    })}
                    rows="6"
                    placeholder={t("contact.form.message.placeholder")}
                    className="input resize-none"
                    maxLength={1000}
                  ></textarea>
                  <span className="absolute -bottom-5 left-0 w-full text-sm text-red-600">
                    {errors.message && errors.message.message}
                  </span>
                </div>
                <div>
                  <button disabled={isSubmitting} type="submit" className="btn w-full p-3">
                    {t("contact.form.button")}
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
