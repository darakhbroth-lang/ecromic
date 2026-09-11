import React, { useState } from 'react';

function Footer() {
  

  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-8 border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* ជួរឈរទី ១៖ ព័ត៌មានអំពីហាង */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">ហាងលក់សម្លៀកបំពាក់</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              យើងផ្តល់ជូននូវផលិតផលដែលមានគុណភាពខ្ពស់ និងសេវាកម្មរហ័សទាន់ចិត្តជូនអតិថិជនគ្រប់រូប។
            </p>
          </div>

          {/* ជួរឈរទី ២៖ តំណភ្ជាប់រហ័ស */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-4">តំណភ្ជាប់រហ័ស</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  ទំព័រដើម (Home)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  ផលិតផល (Products)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  អំពីយើង (About)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  ទំនាក់ទំនង (Contact)
                </a>
              </li>
            </ul>
          </div>

          {/* ជួរឈរទី ៣៖ ព័ត៌មានទំនាក់ទំនង */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-4">ទំនាក់ទំនង</h3>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="font-medium text-gray-700">អាសយដ្ឋាន:</span>
                <span>រាជធានីភ្នំពេញ, កម្ពុជា</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium text-gray-700">ទូរស័ព្ទ:</span>
                <a href="tel:+85512345678" className="hover:text-indigo-600 transition-colors">
                  +855 12 345 678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium text-gray-700">អ៊ីមែល:</span>
                <a href="mailto:info@example.com" className="hover:text-indigo-600 transition-colors">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* ជួរឈរទី ៤ (បានបន្ថែមថ្មី)៖ ទទួលព័ត៌មានថ្មីៗ និងបណ្តាញសង្គម */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-4">ទទួលព័ត៌មានថ្មីៗ</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              ចុះឈ្មោះអ៊ីមែលដើម្បីទទួលបានប្រូម៉ូសិនពិសេសៗ និងការបញ្ចុះតម្លៃមុនគេ។
            </p>
           
            <form className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក..."
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-sm placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] rounded-lg transition-all shadow-sm shrink-0"
                >
                  ចុះឈ្មោះ
                </button>
              </div>
            </form>
            <div className="mt-5">
              <p className="text-xs font-semibold text-gray-700 mb-2">តាមដានពួកយើងតាមរយៈ</p>
              <div className="flex items-center gap-3 text-gray-600">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white rounded-full border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white rounded-full border border-gray-200 hover:border-sky-500 hover:text-sky-500 transition shadow-sm"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.943z" />
                  </svg>
                </a>
             
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white rounded-full border border-gray-200 hover:border-black hover:text-black transition shadow-sm"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.1c0 2.27-.89 4.34-2.48 5.76-1.68 1.49-3.96 2.14-6.19 1.78-2.67-.43-4.89-2.27-5.74-4.81-.88-2.61-.25-5.59 1.57-7.6 1.71-1.89 4.28-2.82 6.84-2.41v4.05c-1.32-.26-2.73.1-3.66.99-.9.86-1.28 2.19-.97 3.42.3 1.2 1.31 2.15 2.53 2.37 1.35.24 2.77-.45 3.39-1.68.22-.44.33-.93.33-1.43V.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      
        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
        ហាងលក់សម្លៀកបំពាក់ Ecromic. រក្សាសិទ្ធិគ្រប់យ៉ាង (All rights reserved).
        </div>
      </div>
    </footer>
  );
}

export default Footer;