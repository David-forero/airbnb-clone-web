import Image from "next/image";

const MediumCard = ({ img, title }: any) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duraction-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="place" layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;