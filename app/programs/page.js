import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Programs</h1>

        <p className="text-gray-700 mb-6">
          At GIPS, we offer a range of undergraduate programs in paramedical and allied health sciences. 
          Each program is designed to provide strong academic knowledge, practical skills, and clinical training.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* BPT */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Bachelor of Physiotherapy (BPT)</h2>
            <p className="text-gray-600 mb-3">
              A four-year program focused on physiotherapy, rehabilitation, and patient care.
            </p>
            <Link href="/programs/bpt" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>

          {/* BMRIT */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">B.Sc. in Medical Radiology & Imaging Technology (BMRIT)</h2>
            <p className="text-gray-600 mb-3">
              Learn advanced imaging techniques such as X-ray, CT, MRI, and ultrasound.
            </p>
            <Link href="/programs/bmrit" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>

          {/* BOTT */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">Bachelor of Occupational Therapy Technology (BOTT)</h2>
            <p className="text-gray-600 mb-3">
              Focused on occupational therapy practices to enhance quality of life and recovery.
            </p>
            <Link href="/programs/bott" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>

          {/* B.Sc Optometry */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-2">B.Sc. in Optometry</h2>
            <p className="text-gray-600 mb-3">
              Specialized in vision care, eye health, and clinical optometry practices.
            </p>
            <Link href="/programs/bsc-optometry" className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
