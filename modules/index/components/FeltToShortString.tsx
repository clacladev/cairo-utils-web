import { useState } from 'react'
import { SHORT_STRING_LENGTH } from '../../common/models/constants'
import { shortStringFeltToStr } from '../../sekai-studio/models/cairoStringUtils'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'

const FIELD_ID_PREFIX = 'short-string-felt-to-string'

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

export default function FeltToShortString({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <Section 
      title="Felt -> Short String"
      description="Converts a short string numeral to a readable string (short strings cannot have more than 31 characters)"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={inputString}
        onChange={setInputString}
        type="number"
        placeholder="The felt to convert"
        labelText="Input Felt"
        fieldId={`${FIELD_ID_PREFIX}-input`}
      />

      <OutputField
        value={outputString ? outputString : ''}
        labelText="Output String"
        fieldId={`${FIELD_ID_PREFIX}-output`}
        notes={`${outputString.length}/${SHORT_STRING_LENGTH}`}
        isWarningActive={outputString.length > SHORT_STRING_LENGTH}
      />
      
    </Section>
  )
}
