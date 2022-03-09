import { useState } from 'react'
import { strToShortStringFelt } from '../../sekai-studio/models/cairoStringUtils'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { SHORT_STRING_LENGTH } from '../../common/models/constants'

const FIELD_ID_PREFIX = 'str-to-short-string-felt'

function convert(input: string) {
  if (typeof input !== 'string' || input === '') {
    return ''
  }
  return strToShortStringFelt(input)
}

export default function ShortStringToFelt({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [inputString, setInputString] = useState('')
  const outputString = convert(inputString)

  return (
    <Section 
      title="Short String -> Felt"
      description="Converts a string into a short string felt (short strings cannot have more than 31 characters)"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={inputString}
        onChange={setInputString}
        placeholder="The string to convert"
        labelText="Input String"
        fieldId={`${FIELD_ID_PREFIX}-input`}
        notes={`${inputString.length}/${SHORT_STRING_LENGTH}`}
        isWarningActive={inputString.length > SHORT_STRING_LENGTH}
      />

      <OutputField
        value={outputString ? outputString.toString(10) : ''}
        labelText="Output Felt"
        fieldId={`${FIELD_ID_PREFIX}-felt-output`}
      />

      <OutputField
        value={outputString ? `0x${outputString.toString(16)}` : ''}
        labelText="Output Hex"
        fieldId={`${FIELD_ID_PREFIX}-hex-output`}
      />

    </Section>
  )
}
