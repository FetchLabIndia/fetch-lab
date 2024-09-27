"use client";
import ContactForm from "@/app/components/common/ContactForm";
import Footer from "@/app/components/common/Footer";
import transition from "@/app/components/custom/Transition";

function page() {
  return (
    <>
      <ContactForm />
      <Footer />
    </>
  );
}

export default transition(page);
