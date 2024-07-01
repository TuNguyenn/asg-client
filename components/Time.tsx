import React from "react";

const Time = () => {
  return (
    <section id="time_section">
      <div className="container items-center">
        <h3 className='mb-[20px] text-center font-["LG_head",_"Noto_Sans_KR"] text-[24px] font-bold not-italic leading-[24px] text-[#000]'>
          Thời gian hoạt động
        </h3>
        <ul>
          <li className='text-center font-["LG_head",_"Noto_Sans_KR"] text-[20px] not-italic leading-[28px] text-[#000]'>
            Ngày thường : 14:00~22:00
          </li>
          <li className='text-center font-["LG_head",_"Noto_Sans_KR"] text-[20px] not-italic leading-[28px] text-[#000]'>
            Cuối tuần (Ngày lễ) : 10:00~22:00
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Time;
