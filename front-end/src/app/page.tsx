import Link from "next/link";
import Service, { ServiceType } from "./_components/Service";

export default async function Home() {
  try {
    const services: ServiceType[] = await getServices();

    console.log(services);

    return (
      <main className="prose h-[90vh] w-full overflow-auto rounded-sm bg-white p-8 ring-1 ">
        <section>
          <h2 className="my-2 underline hover:text-orange-600">About me</h2>
          <div>
            <h4 className="prose text-lg text-slate-700 hover:text-orange-600">
              Hello! I’m Sazzad hossain.
            </h4>
            <p className="hover:text-orange-600">
              Back-end & Front-end developer from Dhaka, Bangladesh. I have rich
              experience in JavaScript, also I am good at TypeScript. I love to
              talk with you.
            </p>
          </div>
        </section>

        <section>
          <Link href={"https://github.com/sazzadtanim"}>
            <h2 className="text-orange-500">https://github.com/sazzadtanim</h2>
          </Link>
        </section>

        <section>
          <h2 className="underline hover:text-orange-600">My Services</h2>
          <div className="grid grid-cols-2 justify-between gap-10 hover:text-orange-600">
            {services.map((service, index) => (
              <Service {...service} key={index} />
            ))}
          </div>
        </section>
      </main>
    );
  } catch (error) {
    return (
      <main className="prose h-[90vh] w-full overflow-auto rounded-sm bg-white p-8 ring-1">
        <section>
          <h2 className="my-2 underline">About me</h2>
          <div>
            <h4 className="prose text-lg text-slate-700">
              Hello! I’m Sazzad hossain.
            </h4>
            <p>
              Back-end & Front-end developer from Dhaka, Bangladesh. I have rich
              experience in JavaScript, also I am good at TypeScript. I love to
              talk with you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="underline">My Services</h2>
          <div className="grid grid-cols-2 justify-between gap-10">
            <p>No data</p>
          </div>
        </section>
      </main>
    );
  }
}

async function getServices() {
  const res = await fetch("http://localhost:3001/services");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
