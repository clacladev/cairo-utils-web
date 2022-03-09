import { useState } from 'react'
import { strToShortStringFelt } from '../../sekai-studio/models/cairoStringUtils'
import Section from './Section'

function convert(input: string) {
  if (typeof input !== 'string' || input === '') {
    return ''
  }
  return strToShortStringFelt(input)
}

export default function StringToShortStringFelt({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <Section 
      title={'Short String -> Felt'}
      description={'Converts a string into a short string felt (short strings cannot have more than 31 characters)'}
      isSeparatorVisible={isSeparatorVisible}>
      <div className="col-span-6 sm:col-span-4">
        <label htmlFor="str-to-short-string-felt-input" className="block text-sm font-medium text-gray-900">
          Input String
        </label>
        <input
          type="text"
          name="str-to-short-string-felt-input"
          id="str-to-short-string-felt-input"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="The string to convert"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <span className="block mt-1 text-xs font-normal text-gray-700">
          5/31
        </span>
      </div>

      <div className="col-span-6 sm:col-span-4">
        <label htmlFor="str-to-short-string-felt-output" className="block text-sm font-medium text-gray-700">
          Output Felt
        </label>
        <input
          type="text"
          name="str-to-short-string-felt-output"
          id="str-to-short-string-felt-output"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-50 text-gray-700 rounded-md"
          value={outputString ? outputString.toString(10) : ''}
          disabled={true}
        />
      </div>

      <div className="col-span-6 sm:col-span-4">
        <label htmlFor="str-to-short-string-felt-hex-output" className="block text-sm font-medium text-gray-700">
          Output Hex
        </label>
        <input
          type="text"
          name="str-to-short-string-felt-hex-output"
          id="str-to-short-string-felt-hex-output"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-50 text-gray-700 rounded-md"
          value={outputString ? `0x${outputString.toString(16)}` : ''}
          disabled={true}
        />
      </div>
    </Section>
  )
}
