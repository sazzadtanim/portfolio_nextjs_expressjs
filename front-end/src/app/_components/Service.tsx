import Image, { StaticImageData } from "next/image";

export interface ServiceType {
  logo: StaticImageData | string;
  title: string;
  description: string;
}

export default function Service({ description, logo, title }: ServiceType) {
  return (
    <div
      title={title}
      className="group prose flex flex-col gap-2 rounded-md p-1 hover:ring-1 hover:ring-gray-300"
    >
      <Image
        alt={title}
        src={logo}
        width={60}
        height={60}
        className="my-1 rounded-full group-hover:ring-2 group-hover:ring-orange-600"
      />

      <h4 className="my-0 lowercase first-letter:uppercase group-hover:text-orange-600">
        {title}
      </h4>
      <p className="line-clamp-3 text-wrap text-sm hover:text-orange-600">
        {description}
      </p>
    </div>
  );
}
