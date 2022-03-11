import { useState } from 'react'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { stringToFeltArray } from '../../common/models/converters'

const FIELD_ID_PREFIX = 'string-to-felt-array'

export default function StringToFeltArray({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [input, setInput] = useState('')
  const { output } = stringToFeltArray(input)

  return (
    <Section 
      title="String -> Felt Array"
      description="Converts a string into an array of numerical characters in utf-8 encoding"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={input}
        onChange={setInput}
        placeholder="The string to convert"
        labelText="Input String"
        fieldId={`${FIELD_ID_PREFIX}-input`}
        notes={input ? `Length: ${input.length}` : undefined}
      />

      <OutputField
        value={output}
        labelText="Output Felt Array"
        fieldId={`${FIELD_ID_PREFIX}-output`}
        notes={output ? `Length: ${output.length}` : undefined}
      />

    </Section>
  )
}
