import { useState } from "react"
import { shortStringFeltToStr, strToShortStringFelt } from "../../sekai-studio/models/cairoStringUtils"

function convert(input: string) {
  if (typeof input !== 'string' || input === '') {
    return ''
  }
  if (isNaN(Number(input))) {
    return ''
  }
  const number = BigInt(input)
  return shortStringFeltToStr(number)
}

export default function ShortStringFeltToString({ isSeparatorVisible = false }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <>
      <div className="my-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">

          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Felt -&gt; Short String</h3>
              <p className="mt-1 text-sm text-gray-600">Converts a short string numeral to a readable string (short strings cannot have more than 31 characters)</p>
            </div>
          </div>
          
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="short-string-felt-to-string-input" className="block text-sm font-medium text-gray-900">
                        Input Felt
                      </label>
                      <input
                        type="text"
                        name="short-string-felt-to-string-input"
                        id="short-string-felt-to-string-input"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="The short string hex value"
                        value={inputString}
                        onChange={(e) => setInputString(e.target.value)}
                      />
                      <span className="block mt-1 text-xs font-normal text-gray-700">
                        5/31
                      </span>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="short-string-felt-to-string-output" className="block text-sm font-medium text-gray-700">
                        Output String
                      </label>
                      <input
                        type="text"
                        name="short-string-felt-to-string-output"
                        id="short-string-felt-to-string-output"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 bg-gray-50 text-gray-700 rounded-md"
                        placeholder="The readable string"
                        value={outputString ? outputString : ''}
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
