import { useState } from 'react'
import { SHORT_STRING_LENGTH } from '../../common/models/constants'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { filterNonFeltChars } from '../../common/models/filters'
import { feltToShortString } from '../../common/models/converters'

const FIELD_ID_PREFIX = 'short-string-felt-to-string'

export default function FeltToShortString({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [input, setInput] = useState('')
  const { output, isValid } = feltToShortString(input)

  return (
    <Section 
      title="Felt -> Short String"
      description="Converts a short string numeral to a readable string (short strings cannot have more than 31 characters)"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={input}
        onChange={(val) => setInput(filterNonFeltChars(val))}
        placeholder="The felt to convert"
        labelText="Input Felt"
        fieldId={`${FIELD_ID_PREFIX}-input`}
        isWarningActive={isValid !== null && !isValid}
      />

      <OutputField
        value={output ? output : ''}
        labelText="Output String"
        fieldId={`${FIELD_ID_PREFIX}-output`}
        notes={`${output.length}/${SHORT_STRING_LENGTH}`}
        isWarningActive={output.length > SHORT_STRING_LENGTH}
      />
      
    </Section>
  )
}
