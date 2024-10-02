"use client";
import ContactForm from "@/app/components/common/ContactForm";
import Footer from "@/app/components/common/Footer";
import transition from "@/app/components/custom/Transition";

function page() {
  return (
    <>
      <ContactForm />
      <hr className="w-full border-t border-zinc-800" />
      <Footer />
    </>
  );
}

export default transition(page);
