import Image from "next/image";
import Link from "next/link";

const Location = () => {
  return (
    <section id="location_section">
      <div className="container mx-[auto] my-[0] flex w-full max-w-[1472px] flex-col items-center px-[16px] py-[0]">
        <h3 className="mb-[20px] text-center text-[24px] font-bold not-italic leading-[24px] text-[#000]">
          Vị trí
        </h3>
        <div className="map rounded-[20px] border-solid">
          <Link href="">
            <Image
              src={"/img_map_vet.png"}
              alt="map"
              width={801}
              height={480}
            />
          </Link>
          <div className="map_txt flex flex-row items-center justify-between rounded-bl-[20px] rounded-br-[20px] rounded-tl-none rounded-tr-none bg-[#fff] px-[24px] py-[12px]">
            <p className="w-full text-left text-[16px] font-normal leading-[24px] text-[#000] before:relative before:top-[2px]	before:mr-[4px] before:inline-block before:h-[16px] before:w-[16px] before:bg-[url('https://www.anothersaigon.com/lg_static/image/icn_pin.svg')] before:content-['']">
              96 Mạc Thị Bưởi, phường Bến Nghé, Quận 1, Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
