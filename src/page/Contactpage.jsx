import React from 'react';
import ContactForm from '../component/contect/ContactForm';
import ContactInfo from '../component/contect/ContactInfo';
export const Contactpage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          <div className="lg:col-span-5 p-2 sm:p-4">
            <ContactInfo />
          </div>
          
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                បំពេញព័ត៌មានអាសយដ្ឋាន
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                សូមបញ្ចូលឈ្មោះ និងអាសយដ្ឋានពេញលេញសម្រាប់ទំនាក់ទំនង ឬការដឹកជញ្ជូន។
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactpage;