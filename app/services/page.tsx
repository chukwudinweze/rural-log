import React from "react";

const page = () => {
  return (
    <section className="-mt-14">
      <h2 className="font-bold text-2xl mt-6 mb-2"> Our Services</h2>
      <p>
        Our digital agriculture marketplace platform is designed to
        revolutionise the way players within the agriculture sector connect,
        transact, and thrive. We provide a comprehensive suite of services
        tailored to meet the diverse needs of all stakeholders, including
        farmers, suppliers, distributors, and buyers. Our platform offers:
      </p>
      <ol className="list-decimal pt-6">
        <li>
          <p className="font-bold">Agro Input Procurement:</p>
          <ul className="pl-10 list-disc">
            <li>
              <span className="font-bold">Wide Range of Products:</span>Access a
              vast selection of high-quality agro-inputs and produce such as
              seeds, fertilisers, pesticides, and machinery from reputable
              suppliers.
            </li>
            <li>
              <span className="font-bold">Competitive Pricing:</span>Benefit
              from competitive prices through direct connections with
              manufacturers and bulk purchase options.
            </li>
            <li>
              <span className="font-bold">Verified Suppliers:</span>Engage with
              trusted and verified suppliers, ensuring the quality and
              authenticity of inputs.
            </li>
            <li>
              <span className="font-bold">Convenient Ordering:</span>Enjoy a
              seamless and user-friendly ordering process with various payment
              options and delivery services.
            </li>
          </ul>
        </li>
        <li>
          <p className="font-bold">Produce Marketplace:</p>
          <ul className="pl-10 list-disc">
            <li>
              <span className="font-bold">Diverse Produce Listings:</span>
              Discover a wide array of fresh and processed agricultural produce
              available for purchase.
            </li>
            <li>
              <span className="font-bold">Quality Assurance:</span>Utilize our
              platform&apos;s quality assurance mechanisms, including ratings
              and reviews, to ensure the best produce.
            </li>
            <li>
              <span className="font-bold">Secure Transactions:</span>Conduct
              transactions confidently with our secure payment systems and
              reliable logistics partners.
            </li>
          </ul>
        </li>
      </ol>
      <p className="pt-6">
        Our platform is dedicated to empowering all players in the agriculture
        sector by providing a robust, interoperable, and data-driven digital
        ecosystem. Join us in transforming agriculture and driving sustainable
        growth for a brighter future.
      </p>
    </section>
  );
};

export default page;
