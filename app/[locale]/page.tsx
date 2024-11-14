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
import NewBusinessModel from "@/components/NewBusinessModel";
import CompaniesLogoSlider from "@/components/CompaniesSlider";
import MembershipSection from "@/components/Memberships";
import GetStarted from "@/components/GetStarted";
import TestimonialCard from "@/components/NewTestimonials";
import Technologies from "@/components/Technologies";

export default function Home() {
  const t = useTranslations("index");

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <GlobalPartners />
      <Services />
      <Technologies />
      {/* fourth section - Tools & Technologies We Use */}
      <NewBusinessModel />
      {/* <BusinessModel /> */}
      <EndToEndDevelopmentCycle />
      <CompaniesLogoSlider />
      <MembershipSection />
      {/* <Companies /> */}
      {/* <DevelopmentCycle /> */}
      {/* <WhyChoseUs /> */}
      {/* <TestimonialCard /> */}
      <Testimonials />
      <People />
      <GetStarted />
      {/* <ContactForm /> */}
      <Footer />
    </main>
  );
}
