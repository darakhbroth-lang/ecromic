export default function OurStory() {
  const timeline = [
    {
      year: "2024",
      title: "ការចាប់ផ្តើមដំបូង",
      description:
        "យើងបានចាប់ផ្តើមចេញពីហាងតូចមួយ ដែលមានបំណងនាំយកសម្លៀកបំពាក់រចនាបែបសាមញ្ញ ប៉ុន្តែមានគុណភាពខ្ពស់ និងផាសុកភាពជូនដល់អតិថិជន។",
    },
    
    {
      year: "2025",
      title: "ការរួមបញ្ចូលរចនាបថទាន់សម័យ",
      description:
        "យើងបានសហការជាមួយអ្នករចនាម៉ូដក្នុងស្រុក ដើម្បីបង្កើតម៉ូដសម្លៀកបំពាក់ដែលរួមបញ្ចូលគ្នារវាងទម្រង់បុរាណ និងសម័យទំនើប។",
    },
    {
      year: "បច្ចុប្បន្ន",
      title: "ការរីកចម្រើនឥតឈប់ឈរ",
      description:
        "សព្វថ្ងៃនេះ យើងមានសម្លៀកបំពាក់រាប់រយម៉ូដសម្រាប់គ្រប់វ័យ ដោយផ្ោតសំខាន់លើភាពធន់ ភាពស្រស់ស្អាត និងតម្លៃសមរម្យ។",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          
          <h2 className="text-3xl font-bold text-orange-700 mt-2">
            ប្រវត្តិនៃការបង្កើតសម្លៀកបំពាក់របស់យើង
          </h2>
          <p className="text-gray-600 mt-3">
            ពីអាវយឺតមួយជួរដំបូង រហូតដល់ក្លាយជាម៉ាកសម្លៀកបំពាក់ដែលទទួលបានការទុកចិត្តពីអតិថិជនរាប់ម៉ឺននាក់។
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <h3 className="text-2xl font-bold text-gray-800">
              សម្លៀកបំពាក់ដែលប្រកបដោយគុណតម្លៃ
            </h3>
            <p>
              ដើមកំណើតនៃសម្លៀកបំពាក់របស់យើង កើតចេញពីក្តីស្រឡាញ់ចំពោះការកាត់ដេរ និងការយកចិត្តទុកដាក់លើរាល់លម្អិត។ យើងជឿជាក់ថា សម្លៀកបំពាក់មិនមែនគ្រាន់តែជាអ្វីដែលអ្នកពាក់ជារៀងរាល់ថ្ងៃនោះទេ ប៉ុន្តែវាជាការបង្ហាញពីអត្តសញ្ញាណ និងភាពជឿជាក់របស់អ្នក។
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md h-80">
            <img
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
              alt="Clothes crafting process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            ជោគជ័យតាមដំណាក់កាល
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative hover:-translate-y-1 transition-transform"
              >
                <span className="text-2xl font-extrabold text-indigo-600 block mb-2">
                  {item.year}
                </span>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}