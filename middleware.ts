import createMiddleware from "next-intl/middleware";
import { EN_LOCALE, LOCALES } from "app/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: EN_LOCALE,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
