import { useTranslations } from "next-intl";

import {
  Footer,
  GlobalPartners,
  Services,
  Testimonials,
  WhyChoseUs,
  Companies,
  Hero,
} from "@/components";
import People from "@/components/People";
import BusinessModel from "@/components/BusinessModel";
import ContactForm from "@/components/Contact";
import DevelopmentCycle from "@/components/DevelopmentLifeCycle";
import EndToEndDevelopmentCycle from "@/components/EndToEndDevelopmentCycle";

export default function Home() {
  const t = useTranslations("index");

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <GlobalPartners />
      <EndToEndDevelopmentCycle />
      <Companies />
      <BusinessModel />
      <Services />
      <WhyChoseUs />
      <People />
      <DevelopmentCycle />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
