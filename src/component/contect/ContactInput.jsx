import React from 'react';


export const ContactInput = ({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  disabled = false,
  required = false,
  isTextArea = false,
  rows = 3,
}) => {
  return (
    <div className="w-full space-y-1.5 text-left">
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <div className="relative rounded-xl shadow-sm">
        {Icon && !isTextArea && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Icon className="h-5 w-5" />
          </div>
        )}

        {isTextArea ? (
          <textarea
            id={id}
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full rounded-xl border bg-white p-3.5 text-sm text-slate-900 transition-all duration-200 outline-none resize-y
              ${
                error
                  ? 'border-rose-500 ring-2 ring-rose-500/10 focus:border-rose-600'
                  : 'border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10'
              }
              ${disabled ? 'bg-slate-50 cursor-not-allowed opacity-75' : ''}
            `}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full rounded-xl border bg-white py-3 text-sm text-slate-900 transition-all duration-200 outline-none
              ${Icon ? 'pl-11 pr-4' : 'px-4'}
              ${
                error
                  ? 'border-rose-500 ring-2 ring-rose-500/10 focus:border-rose-600'
                  : 'border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10'
              }
              ${disabled ? 'bg-slate-50 cursor-not-allowed opacity-75' : ''}
            `}
          />
        )}
      </div>

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default ContactInput;