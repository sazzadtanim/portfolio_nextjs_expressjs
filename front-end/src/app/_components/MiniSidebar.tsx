import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default async function MiniSidebar() {
  try {
    const sidebaroptions: OptionType[] = await getOptions();
    return (
      <div className="rounded-sm bg-white ring-1" title="mini side bar ">
        <Link
          href=""
          title="theme and menu"
          className="mb-20 mt-10
          flex flex-col items-center justify-center gap-5"
        >
          <Image
            alt={"navigation"}
            src={"https://www.svgrepo.com/show/530401/table-of-contents.svg"}
            width={40}
            height={40}
            className=" h-10 w-10 stroke-slate-400"
          />
          <Image
            alt={"navigation"}
            src={"https://www.svgrepo.com/show/530399/inspiration.svg"}
            width={40}
            height={40}
            className=" h-10 w-10 stroke-slate-400"
          />
        </Link>

        <div className="flex flex-col gap-4">
          {sidebaroptions?.map((option, index) => (
            <Option {...option} key={index} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(JSON.stringify(error));
    return (
      <div className="rounded-sm bg-white ring-1" title="mini side bar">
        <Link
          href=""
          title="theme and menu"
          className="mb-20 mt-10
      flex flex-col items-center justify-center gap-5 px-2"
        >
          <Image
            alt={"navigation"}
            src={"https://www.svgrepo.com/show/530401/table-of-contents.svg"}
            width={40}
            height={40}
            className=" h-10 w-10 stroke-slate-400"
          />
          <Image
            alt={"navigation"}
            src={"https://www.svgrepo.com/show/530399/inspiration.svg"}
            width={40}
            height={40}
            className=" h-10 w-10 stroke-slate-400"
          />
        </Link>

        <div className="flex flex-col gap-4">{/* <p>No data</p> */}</div>
      </div>
    );
  }
}

export type OptionType = {
  title: string;
  icon_uri: StaticImageData | string;
  href_uri: string;
  text_under_icon?: string;
  icon_svg?: ReactNode;
};

const Option = ({
  icon_uri,
  title,
  href_uri,
  text_under_icon,
  icon_svg,
}: OptionType) => (
  <Link
    title={title}
    href={href_uri}
    className="prose-a group prose m-2 flex flex-col items-center justify-center uppercase tracking-tighter duration-100 ease-in-out hover:text-orange-500"
  >
    <Image
      alt={title}
      src={icon_uri}
      width={32}
      height={32}
      className=" h-8 w-8 stroke-slate-400"
    />

    {text_under_icon}
  </Link>
);

async function getOptions() {
  const res = await fetch("http://localhost:3001");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
