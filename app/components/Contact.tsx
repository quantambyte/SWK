"use client";

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslations } from "next-intl";

const ContactForm: React.FC = () => {
  const t = useTranslations("ContactForm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [state, handleSubmit] = useForm("xjkvbjar");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    handleSubmit({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
  };

  useEffect(() => {
    debugger;
    if (state.succeeded) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else if (state?.errors) {
      setStatus("Failed to send message.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <section id="contact" className="font-poppins  py-20  dark:text-gray-200">
      <form
        onSubmit={onSubmit}
        className="space-y-6 mx-auto w-[80%] md:w-[60%]"
      >
        <div>
          <header className="text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("contactUs")}
            </h2>
          </header>

          <label
            htmlFor="name"
            className="mt-7 block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {t("Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-brandDark border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-brand focus:border-brand"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {t("Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-brandDark border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-brand focus:border-brand"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {t("Message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 resize-none bg-white dark:bg-brandDark border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-brand focus:border-brand"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
        >
          {state.submitting ? "Sending..." : t("Send")}
        </button>

        {status && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
