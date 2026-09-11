import React from 'react'

function Feature() {
  const features = [
    {
      title: 'ល្បឿនលឿន (Fast Speed)',
      description: 'ការទាញយកទិន្នន័យបានរហ័សទាន់ចិត្ត មិនចាំបាច់រង់ចាំយូរ។',
      icon: (
        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'សុវត្ថិភាពខ្ពស់ (High Security)',
      description: 'រក្សាសុវត្ថិភាពទិន្នន័យរបស់អ្នកបានយ៉ាងល្អប្រសើរ និងមានទំនុកចិត្ត។',
      icon: (
        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'ងាយស្រួលប្រើប្រាស់ (Easy to Use)',
      description: 'រចនាឡើងយ៉ាងសាមញ្ញ ងាយស្រួលយល់ និងរលូនក្នុងការប្រើប្រាស់។',
      icon: (
        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-white py-16 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">
            លក្ខណៈពិសេស
          </h2>
          <p className="mt-2 text-2xl font-display text-orange-900 ">
            ហេតុអ្វីត្រូវជ្រើសរើសសេវាកម្មរបស់យើង?
          </p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-orange-400 p-6 rounded-xl border  shadow-orange-700 border-slate-700 hover:border-indigo-500 transition duration-300 shadow-lg"
            >
              <div className="w-12 h-12 text-white shadow-md shadow-orange-700 rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature