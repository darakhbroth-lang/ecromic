const team = [
  {
    name: "Boch Hokleng",
    role: "ស្ថាបនិក និង នាយកប្រតិបត្តិ",
    img:'https://i.pinimg.com/736x/2f/84/82/2f848295009951701e5c248ba2bc2785.jpg'
  },
  {
    name: "Lily Zacii",
    role: "ស្ថាបនិក និង នាយកប្រតិបត្តិ",
    img:'https://i.pinimg.com/736x/24/b4/28/24b4288f7100ca9fd86f4f19ab845e88.jpg'
  },
  {
    name: "Sa che",
    role: "ស្ថាបនិក និង នាយកប្រតិបត្តិ",
    img:'https://i.pinimg.com/736x/be/ea/3d/beea3dd189319f18537954d0373dcba4.jpg'
  },
];

export default function TeamMember() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">ជួបជាមួយក្រុមការងារ</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          មនុស្សដែលពោរពេញដោយចំណង់ចំណូលចិត្តនៅពីក្រោយផលិតផល និងបទពិសោធន៍របស់អតិថិជន។
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 mt-12">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-indigo-500"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-xs font-medium text-indigo-600">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}