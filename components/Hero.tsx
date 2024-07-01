"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero_section" className="relative flex flex-col pt-0">
        <div className="hero-image w-screen ">
          <Image
            src="/img_infotop.png"
            alt="hero"
            className="inline-block max-w-full align-middle"
            width={5000}
            height={853}
          />
        </div>
      <div className="container -mt-20 items-center">
        <h2 className="mb-[20px] text-center text-[40px] font-bold leading-[40px] text-[#000]">
          <Image src={"/logo.svg"} alt="logo" width={278} height={60} />
        </h2>
        <p className="text-center text-[20px] font-[LG_text] not-italic leading-[28px] text-[#000]">
          Just like Vietnam, ever changing and ever new, <br />
          We welcome you to this very special space.
          <br />
          <br />
          Dare to dream of these life-changing moments.
          <br />
          Our Creativity, reserved for new changes.
          <br />
          And all the Careful Innovation we’ll create together.
          <br />
          <br />
          Take one step forward from the ordinary
          <br />
          to enjoy the Good Life with LG
          <br />
          <br />
          Say hello to <br />
          Another Saigon
        </p>
      </div>
    </section>
  );
};

export default Hero;
