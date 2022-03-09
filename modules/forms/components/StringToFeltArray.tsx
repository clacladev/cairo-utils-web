import { useState } from 'react'
import { strToFeltArr } from '../../sekai-studio/models/cairoStringUtils'
import InputField from './InputField'
import OutputField from './OutputField'
import Section from './Section'

const FIELD_ID_PREFIX = 'string-to-felt-array'

function convert(input: string) {
  if (typeof input !== 'string' || input === '') {
    return ''
  }
  return strToFeltArr(input)
}

export default function StringToFeltArray({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <Section 
      title="String -> Felt Array"
      description="Converts a string into an array of numerical characters in utf-8 encoding"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={inputString}
        onChange={setInputString}
        type="text"
        placeholder="The string to convert"
        labelText="Input String"
        fieldId={`${FIELD_ID_PREFIX}-input`}
        notes={inputString ? `Length: ${inputString.length}` : undefined}
      />

      <OutputField
        value={outputString}
        labelText="Output Felt Array"
        fieldId={`${FIELD_ID_PREFIX}-output`}
        notes={outputString ? `Length: ${outputString.length}` : undefined}
      />

    </Section>
  )
}
