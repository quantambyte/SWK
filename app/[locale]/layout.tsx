import type { Metadata } from "next";
import "./globals.css";

import { Provider } from "app/provider";
import { theme } from "app/config";
import { poppins, nura, nuraBold } from "app/config/fonts";
import { RootLayoutProps } from "app/interfaces";
import { Header } from "app/components";
import { NextIntlClientProvider, useMessages } from "next-intl";
import CookieConsent from "@/components/CookieConsent";
export const metadata: Metadata = {
  title: "SWK | SWK Technologies",
  description:
    "SWK | SWK Technologies Company is your premier partner for innovative technology solutions. From cutting-edge products and services to expert advice and support, we are dedicated to helping you navigate the complexities of the modern tech landscape. Explore our website to learn more about our offerings and how we can assist in achieving your technology goals.",
  keywords:
    "Innovative Technology, Technology Solutions, Expert Advice, Technology Support, Cutting-edge Products",
  authors: { name: "SWK Technologies Company" },
  robots: "index, follow",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${nura.variable} ${nuraBold.variable}`}
      suppressHydrationWarning
    >
      <body className={`bg-white  dark:bg-backgroundColor overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>
            <Header />
            <main>{children}</main>
            <CookieConsent />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
