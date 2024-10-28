"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const localeActive = useLocale();

  const t = useTranslations("CookieConsent");

  const COOKIE_CONSENT_KEY = "cookieConsent";

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAllCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setIsVisible(false);
  };

  const handleNecessaryCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "necessary");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 drop-shadow-xl p-4 flex justify-left">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 md:px-10 rounded-md w-full max-w-md md:max-w-lg">
        <div className="flex items-start space-x-4">
          <div className="text-xl md:text-2xl">🍪</div>
          <p className="text-xs md:text-sm">
            {t("content")}
            <Link
              href={`/${localeActive}/info/policy`}
              className="text-blue-500 hover:underline"
            >
              {t("CookiePolicy")}
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2">
          <button
            onClick={handleNecessaryCookies}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {t("buttonFirst")}
          </button>
          <button
            onClick={handleAcceptAllCookies}
            className=" text-white px-4 py-2 rounded-md hover:bg-middleBlue dark:hover:bg-brand"
          >
            {t("buttonSecond")}
          </button>
        </div>
      </div>
    </div>
  );
}
