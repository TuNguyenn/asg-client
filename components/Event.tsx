import { linkSocial } from "@/contains";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Event = () => {
  return (
    <section id="event_section">
      <div className="container">
        <h3 className="mb-[20px] text-center text-[24px] font-bold not-italic leading-[24px] text-[#000]">
          Sự kiện
        </h3>
        <ul className="info_sns_list mx-auto my-0 flex flex-row gap-[10px]">
          {linkSocial.map((ls, index) => (
            <li key={index}>
              <Link href={ls.link} target="_blank">
                <Image src={ls.logo} alt={ls.alt} width={57} height={56} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Event;
