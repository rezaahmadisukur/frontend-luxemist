import Hero from "./hero";
import Promotion from "./promotion";
import BenefitSection from "./benefit-section";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20" id="home">
        <Hero />
      </section>

      {/* Promotion Section */}
      <section className="">
        <Promotion />
      </section>

      <section className="bg-accent">
        <BenefitSection />
      </section>
    </div>
  );
};

export default Homepage;
