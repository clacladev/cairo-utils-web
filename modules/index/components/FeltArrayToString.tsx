import { useState } from 'react'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { filterNonFeltArrayChars } from '../../common/models/filters'
import { feltArrayToString } from '../../common/models/converters'

const FIELD_ID_PREFIX = 'felt-array-to-string'

export default function FeltArrayToString({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [input, setInput] = useState('')
  const { output } = feltArrayToString(input)

  return (
    <Section 
      title="Felt Array -> String"
      description="Converts an array of utf-8 numerical characters into a readable string"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={input}
        onChange={(val) => setInput(filterNonFeltArrayChars(val))}
        placeholder="Comma separated felts"
        labelText="Felt Array"
        fieldId={`${FIELD_ID_PREFIX}-input`}
      />

      <OutputField
        value={output}
        labelText="Output String"
        fieldId={`${FIELD_ID_PREFIX}-output`}
        notes={output ? `Length: ${output.length}` : undefined}
      />

    </Section>
  )
}
