import { useState } from 'react'
import { feltArrToStr } from '../../sekai-studio/models/cairoStringUtils'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { filterNonFeltArrayChars } from '../../common/models/filters'

const FIELD_ID_PREFIX = 'felt-array-to-string'

function convert(input: string) {
  if (typeof input !== 'string' || input === '') {
    return ''
  }
  const array = input
    .replaceAll(' ', '')
    .split(',')
    .map((val) => BigInt(val))
  return feltArrToStr(array)
}

export default function FeltArrayToString({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <Section 
      title="Felt Array -> String"
      description="Converts an array of utf-8 numerical characters into a readable string"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={inputString}
        onChange={(val) => setInputString(filterNonFeltArrayChars(val))}
        placeholder="Comma separated felts"
        labelText="Felt Array"
        fieldId={`${FIELD_ID_PREFIX}-input`}
      />

      <OutputField
        value={outputString}
        labelText="Output String"
        fieldId={`${FIELD_ID_PREFIX}-output`}
        notes={outputString ? `Length: ${outputString.length}` : undefined}
      />

    </Section>
  )
}
