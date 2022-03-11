import { useState } from 'react'
import { strToFeltArr } from '../../thirdParty/models/cairoStringUtils.sekaiStudio'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'

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
