import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="mr-[30%] ml-[30%] mt-[3%]">
        <h1 className="text-center text-3xl font-bold">
          About Buhr Construction
        </h1>
        <h3 className="mt-[3%] text-2xl text-blue-600">
          Founded on Hard Work and Lasting Relationships
        </h3>
        <p className="mt-[3%]">
          Buhr Construction was founded on the belief that with hard work and
          determination, anything can be done. It’s that family value that
          inspired Tim Buhr to open his own business over 20 years ago and is
          still demonstrated in every project—big or small—Buhr Construction
          tackles today.
        </p>
        <p className="mt-[3%]">
          Growing up the son of skilled woodworker and handyman, Tim learned the
          basics from his father at an early age. He proceeded to gain
          well-rounded construction experience—with a strong focus on
          roofing—while employed with a local builder. Then, a minor setback
          unexpectedly presented a major opportunity for Tim … after being laid
          off from his job, he decided to open his own business in 1993.
        </p>

        <p className="mt-[3%]">
          The growth of his crew and services were slow and steady, but his
          reputation for hard work, quality craftsmanship and friendly customer
          service quickly grew beyond his small Door County workshop. Over 20
          years later, Buhr Construction has evolved from a one-man roofing
          business to full-service construction company including new
          construction, remodeling, tree removal, windows and siding, and an
          onsite sawmill and lumberyard, complete with a retail store to
          showcase their latest custom outdoor cedar furnishings.
        </p>
        <p className="mt-[3%] mb-[3%]">
          Still active in the business today, Tim leads his crews of highly
          professional workers known for their quality craftsmanship and
          small-town, friendly approach to customer service. With roots and
          specialized talents for roofing and exteriors, Buhr Construction is
          also often hired as a valuable subcontractor, guaranteed to work
          respectfully and collaboratively as a partner to other area
          businesses.
        </p>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
