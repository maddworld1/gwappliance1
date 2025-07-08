import Image from "next/image";

export default function TestimonialsMarquee() {
  return (
    <div className="relative w-full py-8 bg-center bg-cover" style={{ backgroundImage: "url('/wood-panel-bg.jpg')" }}>
      <div className="flex items-center mb-4 px-4">
        <Image src="/gw-logo.png" alt="GW Appliance & HVAC Logo" width={48} height={48} className="h-12 w-12 mr-4 rounded-full shadow-md" />
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">What Customers Are Saying</h2>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          {[1, 2].map((n) => (
            <span key={n}>
              <div className="inline-block mx-4 min-w-[340px] bg-white/90 rounded-2xl shadow-lg p-4 border border-gray-300 align-top">
                <blockquote className="italic text-gray-800 mb-2">
                  "Will identified the issue quickly and returned as scheduled with replacement part. He’s knowledgeable, friendly and reasonably priced. I’d recommend GW Mechanical to anyone wanting to support a local hardworking young man."
                </blockquote>
                <footer className="text-sm font-semibold text-yellow-800">Diana R. ⭐⭐⭐⭐⭐</footer>
              </div>
              <div className="inline-block mx-4 min-w-[340px] bg-white/90 rounded-2xl shadow-lg p-4 border border-gray-300 align-top">
                <blockquote className="italic text-gray-800 mb-2">
                  "By the way, Will, the technician who came yesterday was terrific: polite, friendly, efficient and informative. Treasure him—as I am sure you will."
                </blockquote>
                <footer className="text-sm font-semibold text-yellow-800">Martha</footer>
              </div>
              <div className="inline-block mx-4 min-w-[340px] bg-white/90 rounded-2xl shadow-lg p-4 border border-gray-300 align-top">
                <blockquote className="italic text-gray-800 mb-2">
                  "Will was my installer for my Miele dishwasher. Polite, knowledgeable and a pleasant visit. Remarkable attention to detail and did a superb job."
                </blockquote>
                <footer className="text-sm font-semibold text-yellow-800">Ken M.</footer>
              </div>
              <div className="inline-block mx-4 min-w-[340px] bg-white/90 rounded-2xl shadow-lg p-4 border border-gray-300 align-top">
                <blockquote className="italic text-gray-800 mb-2">
                  "Recently got all home appliances installed by Will @ GW. Quick and flexible based on our availability and quick turnaround. Happy with the job well done!"
                </blockquote>
                <footer className="text-sm font-semibold text-yellow-800">Hardik V.</footer>
              </div>
              <div className="inline-block mx-4 min-w-[340px] bg-white/90 rounded-2xl shadow-lg p-4 border border-gray-300 align-top">
                <blockquote className="italic text-gray-800 mb-2">
                  "A huge thank you and deep appreciation to GW for responding to my SOS call last Friday. My washing machine needed repairing and Will was able to diagnose the issue, order the part and repair this afternoon. A disabled appliance when caring for an incontinence loved one can be stressful when out of order for too long. Thanks Will for working your magic! We will highly recommend your business to others! Sincerely, Claire, Rob and Sara"
                </blockquote>
                <footer className="text-sm font-semibold text-yellow-800">Claire, Rob and Sara</footer>
              </div>
              <div className="inline-block mx-4 min-w-[340px] bg-white/90 rounded-2xl shadow-lg p-4 border border-gray-300 align-top">
                <blockquote className="italic text-gray-800 mb-2">
                  "Will Noel, thanks so much for the phone consult. I really appreciate you being forthright about the likely cost of repair not being worth it for a 10 yr old machine. When I have an appliance that IS worth repairing I will call you again! ⭐⭐⭐⭐⭐ for being responsive and truthful! 😁"
                </blockquote>
                <footer className="text-sm font-semibold text-yellow-800">Cathie Green</footer>
              </div>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
