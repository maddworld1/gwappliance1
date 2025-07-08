import Head from "next/head";
import Image from "next/image";
import TestimonialsMarquee from "../components/TestimonialsMarquee";

export default function Home() {
  return (
    <>
      <Head>
        <title>GW Appliance & HVAC</title>
        <meta name="description" content="Fully Licensed for Appliances, Natural Gas, and Propane" />
      </Head>
      <main>
        {/* ------- Header ------- */}
        <header className="bg-yellow-900 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">GW Appliance & HVAC</h1>
          <p>Professional · Licensed · Insured</p>
        </header>
        {/* ------- Hero Section ------- */}
        <section className="py-12 bg-cover bg-center" style={{ backgroundImage: "url('/wood-panel-bg.jpg')" }}>
          <div className="container mx-auto px-4 text-center">
            <Image src="/gw-logo.png" alt="GW Appliance & HVAC Logo" width={96} height={96} className="mx-auto mb-4 rounded-full shadow-md" />
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Serving Ottawa West, Lanark, Lanark Highlands, Renfrew, Mississippi Mills</h2>
            <p className="text-xl text-white mb-8 drop-shadow-lg">Appliance, Natural Gas, Propane Installations and Repairs</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-white">
              <div>
                <span className="font-bold">Phone:</span> (819) 639-9864
              </div>
              <div>
                <span className="font-bold">Email:</span> gwillnoel@gmail.com
              </div>
            </div>
          </div>
        </section>
        {/* ------- About Section ------- */}
        <section className="py-12 bg-white text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-2">About Us</h3>
            <p>20 years’ experience installing and repairing all appliances. Prompt, courteous, and fair service—fully licensed for appliances, natural gas, and propane.</p>
          </div>
        </section>
        {/* ------- Gallery Section ------- */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Image src="/gallery1.jpg" alt="Installation 1" width={400} height={300} className="rounded-lg mx-auto" />
              <Image src="/gallery2.jpg" alt="Installation 2" width={400} height={300} className="rounded-lg mx-auto" />
              <Image src="/gallery3.jpg" alt="Installation 3" width={400} height={300} className="rounded-lg mx-auto" />
            </div>
          </div>
        </section>
        {/* ------- Contact Section ------- */}
        <section className="py-12 bg-yellow-50 text-center">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-2">Contact</h3>
            <p>Call or email for a quote. Prompt service. Local expertise. Serving Ottawa West and the Valley.</p>
            <div className="mt-4">
              <span className="font-bold">Phone:</span> (819) 639-9864<br />
              <span className="font-bold">Email:</span> gwillnoel@gmail.com
            </div>
          </div>
        </section>
        {/* ------- Testimonials Marquee (NEW) ------- */}
        <TestimonialsMarquee />
        {/* ------- Footer ------- */}
        <footer className="bg-yellow-900 text-white py-6 text-center">
          <div>
            &copy; {new Date().getFullYear()} GW Appliance & HVAC. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
