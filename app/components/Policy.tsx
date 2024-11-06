import React from "react";
import { useTranslations } from "next-intl";
const Policy = () => {
  const t = useTranslations("Disclaimer");

  return (
    <section className=" font-poppins bg-gray-100 dark:bg-black dark:text-gray-200">
      <div className="bg-white w-full dark:bg-[#271739] space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t("heading")}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("updated")}
          </p>

          {/* <p className="text-sm text-gray-800 dark:text-gray-400 mt-8">
            {t('companyTag')} <br />
            {t('Director')} <br />
            {t('Address')}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400 mt-4">
            {t('RegisteredOffice')} <br />
            {t('HRB')}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400 mt-4">
            {t('VATID')}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400 mt-4">
            {t('Telephone')}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-400  mt-4">
            {t('Email')}
          </p>
          */}
        </header>

        <article>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t("contentHeading")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("Content of the online offer")}
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t("referencesLinksHeading")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("References and links")}
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t("copyrightHeading")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("Copyright and trademark law")}
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t("legalValidityHeading")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("Legal validity of this exclusion of liability")}
          </p>
        </article>
      </div>
    </section>
  );
};

export default Policy;
