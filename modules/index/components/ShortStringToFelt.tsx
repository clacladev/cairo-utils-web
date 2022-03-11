import { useEffect, useState } from 'react'
import BN from 'bn.js'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { shortStringToFelt } from '../../common/models/converters'

const FIELD_ID_PREFIX = 'str-to-short-string-felt'

export default function ShortStringToFelt({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<BN | null>()
  const [isValid, setIsValid] = useState<boolean | null>()
  
  useEffect(() => {
    const res = shortStringToFelt(input)
    setOutput(res.output)
    setIsValid(res.isValid)
  }, [input])

  return (
    <Section 
      title="Short String -> Felt"
      description="Converts a string into a short string felt (short strings cannot have more than 31 characters)"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={input}
        onChange={setInput}
        placeholder="The string to convert"
        labelText="Input String"
        fieldId={`${FIELD_ID_PREFIX}-input`}
        notes={`Length: ${input.length}`}
      />

      <OutputField
        value={output ? output.toString(10) : ''}
        labelText="Output Felt"
        fieldId={`${FIELD_ID_PREFIX}-felt-output`}
        isWarningActive={isValid !== null && !isValid}
      />

      <OutputField
        value={output ? `0x${output.toString(16)}` : ''}
        labelText="Output Hex"
        fieldId={`${FIELD_ID_PREFIX}-hex-output`}
        isWarningActive={isValid !== null && !isValid}
      />

    </Section>
  )
}
