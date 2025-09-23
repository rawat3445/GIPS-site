import Link from "next/link";

export default function BptPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Bachelor of Physiotherapy (BPT)
        </h1>

        <p className="text-gray-700 mb-4">
          The BPT program at GIPS is designed to prepare students for a rewarding career in 
          physiotherapy and rehabilitation sciences. This four-year program provides both 
          theoretical knowledge and practical clinical exposure.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Program Highlights</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Duration: 4 years + 6 months internship</li>
            <li>Eligibility: 10+2 (PCB) with minimum required marks</li>
            <li>Focus on physiotherapy techniques and rehabilitation</li>
            <li>Hands-on training in hospitals and clinics</li>
          </ul>
        </div>

        <Link
          href="/programs"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        >
          ← Back to Programs
        </Link>
      </div>
    </div>
  );
}
