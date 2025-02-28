import Footer from "@/components/Footer";
import Mainbanner from "@/components/Mainbanner";
import Navbar from "@/components/Navbar";
import React from "react";

function Page() {
  return (
    <div>
      <Navbar />
      <Mainbanner />
      <div>
        <h1>Contact Buhr Construction</h1>
        <h3>Let's talk about your next project</h3>
        <p>
          Request a quote, schedule a consultation, or get more information
          about our products and services by filling out the form below.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
