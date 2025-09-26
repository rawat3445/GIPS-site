export default function AdmissionOffices() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-15">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admission Offices</h1>
        <p className="text-gray-700 mb-4">
          Students can reach out to the following offices for admission related queries:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Main Campus Office: [Insert address & contact details]</li>
          <li>City Admission Office: [Insert address & contact details]</li>
          <li>Email: admissions@gips.ac.in</li>
          <li>Helpline: +91-XXXXXXXXXX</li>
        </ul>
      </div>
    </div>
  );
}
