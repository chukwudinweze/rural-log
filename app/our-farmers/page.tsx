import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl mt-6 mb-2"> Our Farmers</h2>
      <p>
        Welcome to Rurallog, the innovative agricultural platform designed to
        revolutionize the way agricultural inputs are bought and sold. Our
        platform brings together a diverse network of players, each playing a
        crucial role in creating a seamless and efficient marketplace for
        farmers.
      </p>
      <h2 className="font-bold text-2xl mt-6 mb-2"> Players:</h2>
      <h2 className="font-bold text-2xl mt-6 mb-2"> Agro Agents:</h2>
      <p>
        Agro Agents are the lifeblood of our platform. These dedicated
        individuals work closely with farmers, collecting their orders and
        ensuring their specific needs are met. Agro Agents serve as the bridge
        between farmers and agro-input dealers, providing personalized support
        and local expertise. By understanding the unique requirements of each
        farmer, Agro Agents help streamline the purchasing process, making it
        easier for farmers to access the inputs they need to succeed. Kindly
        click the link below to be an agent dealer.
      </p>
      <h2 className="font-bold text-2xl mt-6 mb-2"> Agro Input Dealers:</h2>
      <p>
        Agro Input Dealers are the trusted suppliers on our platform. They offer
        a wide range of high-quality agricultural inputs, including seeds,
        fertilizers, pesticides, and machinery. By partnering with Rurallog,
        Agro Input Dealers gain access to a vast customer base of farmers who
        rely on their products to enhance their farming operations. Our platform
        ensures that all dealers meet rigorous quality standards, providing
        farmers with reliable and effective solutions. Kindly click the link
        below to be an agro-input dealer.
        <Link href="/agro-input-dealer/signup">Sign up</Link>
      </p>
      <h2 className="font-bold text-2xl mt-6 mb-2">Farmers:</h2>
      <p>
        Farmers are at the heart of what we do. Rurallog is designed to empower
        farmers by providing them with easy access to the best agricultural
        inputs available. By leveraging the expertise of Agro Agents and the
        reliability of Agro Input Dealers, farmers can make informed decisions
        and purchase the products they need to boost their productivity and
        profitability.
      </p>
      <br />
      <p>
        Join Us: We are always looking for passionate individuals to join the
        Rurallog community, either as an Agro Input Dealer or as an Agro Agent.
        If you are an Agro Input Dealer with high-quality products to offer or
        an enthusiastic individual who wants to support farmers by becoming an
        Agro Agent, we invite you to be part of our platform. Together, we can
        drive sustainable agricultural growth and make a meaningful impact on
        the farming community.
      </p>
      <br />
      <p>
        Become a part of Rurallog today and help us cultivate success in
        agriculture!
      </p>
    </section>
  );
};

export default page;
