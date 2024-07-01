import Image from "next/image";

const Guide = () => {
  return (
    <section id="guide_section">
      <div className="container items-center">
        <div className="mobile_guide before: relative flex w-full flex-row rounded-[20px] before:absolute  before:top-[50px] before:-z-[999] before:block before:h-[calc(100%-100px)] before:w-full before:rounded-[20px] before:bg-[#E6E1D6] before:content-['']">
          <div className="right left-auto right-0 ml-auto py-[16px] pl-[16px] pr-[50px]">
            <Image
              src={"/img_guide_vet.png"}
              alt="mobile_guide"
              width={413}
              height={425}
              className="inline-block max-w-[413px] align-middle"
            />
          </div>
          <div className="left left-[0] right-auto mr-auto flex flex-col justify-center gap-[16px] p-[16px]">
            <h5 className="text-[24px] font-bold leading-[32px] text-[#000]">
              Mobile Guide
            </h5>
            <h4 className="text-[32px] font-bold leading-[40px] text-[#000]">
              Cách thú vị hơn <br />
              để trải nghiệm Another Saigon!
            </h4>
            <p className="text-[20px] font-normal leading-[28px] text-[#000]">
              Truy cập hướng dẫn trên Mobile để tham gia nhiều nhiệm vụ đa dạng.
              <br />
              Sau khi hoàn thành tất cả nhiệm vụ, hãy nhận phần thưởng tại tầng
              GF!
            </p>
            <span className="text-[16px] font-normal leading-[24px] text-[#716F6A]">
              Có thể truy cập hướng dẫn trên Mobile bằng cách đến với Another
              Saigon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
