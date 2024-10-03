import Accordion from "@/app/components/ui/Accordian";
const brandingData = [
  {
    title: "Advertising",
    bg: "#F6C4D4",
  },
  {
    title: "Brand development",
    bg: "#D6CBFB",
  },
  {
    title: "Rebranding",
    bg: "#EC5A54",
  },
  {
    title: "Logo + ID systems",
    bg: "#4AA4AF",
  },
  {
    title: "Brand style guides",
    bg: "#00BF58",
  },
  {
    title: "Collateral, print & packaging",
    bg: "#00BF58",
  },
  {
    title: "Art direction",
    bg: "#F8CE4C",
  },
  {
    title: "Iconography",
    bg: "#6B34CD",
  },
  {
    title: "Web design (UI)",
    bg: "#F5E9C9",
  },
  {
    title: "Web development",
    bg: "#AEFBBE",
  },
  {
    title: "User experience",
    bg: "#4AA4AF",
  },
];
const socialMediaManagement = [
  {
    title: "Social Media Strategy",
    bg: "#F6C4D4",
  },
  {
    title: "Content Creation",
    bg: "#D6CBFB",
  },
  {
    title: "Social Media Audits",
    bg: "#EC5A54",
  },
  {
    title: "Community Management",
    bg: "#4AA4AF",
  },
  {
    title: "Influencer Marketing",
    bg: "#00BF58",
  },
  {
    title: "Social Media Advertising",
    bg: "#A0FCE6",
  },
  {
    title: "Content Planning",
    bg: "#F8CE4C",
  },
  {
    title: "Paid Social Campaigns",
    bg: "#6B34CD",
  },
  {
    title: "Analytics and Reporting",
    bg: "#F5E9C9",
  },
  {
    title: "Platform Management (FB, IG, Twitter, LinkedIn)",
    bg: "#AEFBBE",
  },
];
const contentProduction = [
  {
    title: "Coming soon",
    bg: "#F6C4D4",
  },
];
function OurServices() {
  return (
    <>
      <div className=" text-white text-center md:flex justify-center items-center md:flex-col ">
        <p className=" text-4xl mb-4 font-extrabold max-md:text-3xl">
          Our services
        </p>
        <p className=" text-xl  max-md:w-full max-md:hidden max-md:px-7 font-sofiaSans font-light leading-ms px-6 my-2 text-zinc-100">
          Our comprehensive range of services spans from strategically defining
          your <br /> brand&apos;s future direction to empowering its growth and
          success in every dimension.
        </p>
        <p className=" text-xl max-md:flex hidden  max-md:w-full max-md:text-sm max-md:px-7 font-sofiaSans font-light leading-ms px-0 my-2 text-zinc-100">
          Our comprehensive range of services spans from strategically defining
          your brand&apos;s future direction to empowering its growth and
          success in every dimension.
        </p>
      </div>
      <div className=" mt-12 max-md:px-4 flex flex-col items-center text-white w-full">
        <div className=" flex flex-col w-full items-center justify-start">
          <Accordion
            title="Branding and Design"
            index={1}
            Data={brandingData}
          />
          <Accordion
            title="Social media Management"
            index={2}
            Data={socialMediaManagement}
          />
          <Accordion
            title="Website design and Development"
            index={3}
            Data={contentProduction}
          />
        </div>
      </div>
    </>
  );
}

export default OurServices;
