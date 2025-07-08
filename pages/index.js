import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-center bg-cover" style={{ backgroundImage: "url('/wood-panel-bg.jpg')" }}>
      <div className="flex flex-col items-center justify-center py-20">
        <Image
          src="/logo.jpg"    // Use your uploaded file in the public folder!
          alt="GW Appliance & HVAC Logo"
          width={220}
          height={220}
          className="rounded-full shadow-lg mb-6"
          priority
        />
        <h1 className="text-4xl font-bold text-yellow-300 drop-shadow-lg mb-2 text-center">GW Appliance & HVAC</h1>
        <p className="text-lg text-white drop-shadow-lg text-center">
          Fully Licensed for Appliances, Natural Gas, and Propane
        </p>
      </div>
    </main>
  );
}
