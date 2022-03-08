import { useState } from "react"
import { strToShortStringFelt } from "../../sekai-studio/models/cairoStringUtils"

function convert(input: string) {
  if (typeof input !== 'string' || input === '') {
    return ''
  }
  const number = parseInt(input)
  if (number !== NaN) {
    return strToShortStringFelt(number.toString())
  }
  return strToShortStringFelt(input)
}

export default function ShortStringConverter({ isSeparatorVisible = false }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Converts a string into a short string felt</h3>
              <p className="mt-1 text-sm text-gray-600">(short strings cannot have more than 31 characters)</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="str-to-short-string-felt-input" className="block text-sm font-medium text-gray-700">
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
                        Felt
                      </label>
                      <input
                        type="text"
                        name="str-to-short-string-felt-output"
                        id="str-to-short-string-felt-output"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-50 text-gray-500 rounded-md"
                        placeholder="Felt value"
                        value={outputString ? outputString.toString(10) : ''}
                        disabled={true}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="str-to-short-string-felt-hex-output" className="block text-sm font-medium text-gray-700">
                        Hex
                      </label>
                      <input
                        type="text"
                        name="str-to-short-string-felt-hex-output"
                        id="str-to-short-string-felt-hex-output"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-50 text-gray-500 rounded-md"
                        placeholder="Hex value"
                        value={outputString ? `0x${outputString.toString(16)}` : ''}
                        disabled={true}
                      />
                    </div>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isSeparatorVisible && (
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      )}

    </>
  )
}
