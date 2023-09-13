// @ts-ignore
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

interface SplideItemProps {
  imageUrl: string;
  text: string;
}

const SplideItem: React.FC<SplideItemProps> = ({ imageUrl, text }) => {
  return (
    <SplideSlide key={imageUrl}>
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={text}
          width={100}
          height={100}
          objectFit="cover"
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-slideoverlay text-slate-300 flex flex-col items-center justify-end text-center p-5">
          <h2 className="mb-2 font-extrabold text-4xl">{text}</h2>
        </div>
      </div>
    </SplideSlide>
  );
};

export default SplideItem;
