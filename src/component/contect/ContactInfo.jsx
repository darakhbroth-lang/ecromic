import React from 'react';
import { FaClock } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
export const ContactInfo = () => {
  return (
    <div className="h-full flex  flex-col justify-between p-8 lg:p-10 bg-black border-white shadow-lg shadow-gray-900 text-white rounded-3xl relative overflow-hidden">
     

      <div className="relative z-10 space-y-6">
        <div>
          <span className=" px-3 py-1 text-xs font-display  rounded-full border bg-red-600">
            ព័ត៌មានទំនាក់ទំនង
          </span>
          <h2 className="text-2xl font-display tracking-tight text-white mt-3">
            ទាក់ទងមកកាន់យើងខ្ញុំ
          </h2>
          <p className="text-sm text-gray-400 mt-2 ">
            លោកអ្នកអាចផ្ញើសារ ឬមកកាន់ទីតាំងផ្ទាល់ដើម្បីទទួលបានព័ត៌មានបន្ថែមអំពីផលិតផល។
          </p>
        </div>

        {/* Info List */}
        <div className="space-y-5 pt-4">
          <div className="flex items-start gap-4 text-slate-200">
            <div className="p-3 rounded-xl   text-white">
              <CiMap />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-slate-400">អាសយដ្ឋាន (Address)</p>
              <p className="text-sm font-medium mt-0.5 leading-snug">
                ផ្ទះលេខ ១២, ផ្លូវ ២៧១, សង្កាត់ទឹកថ្លា, ខណ្ឌសែនសុខ, រាជធានីភ្នំពេញ
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-slate-200">
            <div className="p-3 rounded-xl   text-white">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-slate-400">ទូរស័ព្ទ (Phone)</p>
              <p className="text-sm font-medium mt-0.5">+855 12 345 678 / +855 98 765 432</p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-slate-200">
            <div className="p-3 rounded-xl   text-white">
              <IoMdMail />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-slate-400">អ៊ីមែល (Email)</p>
              <p className="text-sm font-medium mt-0.5">contact@ecromic.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-slate-200">
            <div className="p-3 rounded-xl   text-white">
              <FaClock />
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-slate-400">ម៉ោងធ្វើការ (Working Hours)</p>
              <p className="text-sm font-medium mt-0.5">ច័ន្ទ - អាទិត្យ: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 pt-6 border-t border-slate-800">
        <div className="p-3 rounded-xl border text-white ">
          <span>ហាងលក់សម្លៀកបំពាក់ Ecromic Cambodia</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;