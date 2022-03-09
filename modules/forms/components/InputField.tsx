const WARNING_BORDER_STYLES = 'border-rose-300 focus:ring-rose-300 focus:border-rose-500'

export default function InputField({
  value, 
  onChange, 
  placeholder,
  labelText,
  fieldId,
  notes,
  isWarningActive = false,
}: { 
  value: any, 
  onChange: (value: any) => void, 
  placeholder: string,
  labelText: string,
  fieldId: string,
  notes?: string,
  isWarningActive?: boolean,
}) {
  return (
    <div className="col-span-6 sm:col-span-4">
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-900">
        {labelText}
      </label>
      <input
        type="text"
        name={fieldId}
        id={fieldId}
        className={`mt-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md ${ isWarningActive && WARNING_BORDER_STYLES }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="block mt-1 text-xs font-normal text-gray-700">
        {notes}
      </span>
    </div>
  )
}
