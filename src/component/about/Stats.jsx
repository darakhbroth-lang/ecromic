export default function Stats() {
  const stats = [
    { label: "អតិថិជនរីករាយ", value: "10k+" },
    { label: "ផលិតផលបានលក់", value: "50k+" },
    { label: "ការវាយតម្លៃផ្កាយ ៥", value: "4.9 / 5" },
    { label: "ការដឹកជញ្ជូនសកល", value: "2+ ប្រទេស" },
  ];

  return (
    <section className="bg-indigo-50/60 py-12 border-y border-indigo-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-2xl  font-display text-blue-900">
              {stat.value}
            </p>
            <p className="text-sm font-medium text-gray-600 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}