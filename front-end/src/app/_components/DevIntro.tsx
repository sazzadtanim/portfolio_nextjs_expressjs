import Image from "next/image";
import Link from "next/link";
import {
  FaCloudDownloadAlt,
  FaFacebook,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function DevIntro() {
  const status = [
    "JavaScript Developer",
    "TypeScript Developer",
    "Full Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
  ];

  return (
    <div
      title="Developer's Information"
      about="Developer's Information"
      className="prose mx-auto grid w-full rounded-sm ring-1"
      style={{
        backgroundImage: `url(
          "https://images.unsplash.com/photo-1501963917309-56546c33e19d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )`,
      }}
    >
      {/* Dev Image */}

      <div title="developer's info" className="mb-20 mt-72">
        <Image
          title="Developer's Image"
          alt="Mohammad Sazzad Hossain"
          src={`https://avatars.githubusercontent.com/u/8173325?v=4`}
          width={200}
          height={200}
          className="mx-auto rounded-full"
        />
        {/*  */}
        <h1 className="text-pretty text-center duration-100 hover:text-orange-600">
          Sazzad Hossain Tanim
        </h1>
        {/* animation of text */}
        <p className=" myText prose  prose-lg animate-pulse text-center text-white/70"></p>
        <div className="mx-auto flex scale-150 justify-center gap-5 ">
          <Link href={"#"}>
            <FaGithub />
          </Link>
          <Link href={"#"}>
            <FaFacebook />
          </Link>
          <Link href={"#"}>
            <FaXTwitter />
          </Link>
          <Link href={"#"}>
            <FaSquareWhatsapp />
          </Link>
        </div>
      </div>

      <div
        title="action buttons"
        className="prose prose-slate flex w-full justify-between divide-x bg-white px-10 py-4"
      >
        <button className="flex items-center gap-4 px-2 py-1 uppercase tracking-tighter hover:text-orange-600">
          download cv
          <FaCloudDownloadAlt />
        </button>
        <button className="flex items-center gap-4 px-2 py-1 uppercase tracking-tighter hover:text-orange-600">
          contact me
          <FaTelegramPlane />
        </button>
      </div>
    </div>
  );
}
