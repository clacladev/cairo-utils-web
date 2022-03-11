import { useEffect, useState } from 'react'
import BN from 'bn.js'
import InputField from '../../forms/components/InputField'
import OutputField from '../../forms/components/OutputField'
import Section from '../../forms/components/Section'
import { decimalToFelt } from '../../common/models/converters'

const FIELD_ID_PREFIX = 'decimal-to-felt'

export default function DecimalToFelt({ isSeparatorVisible = true }: { isSeparatorVisible?: boolean }) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<BN | null>()
  const [isValid, setIsValid] = useState<boolean | null>()
  
  useEffect(() => {
    const res = decimalToFelt(input)
    setOutput(res.output)
    setIsValid(res.isValid)
  }, [input])

  return (
    <Section 
      title="Decimal Number -> Felt"
      description="Converts a decimal number to a felt"
      isSeparatorVisible={isSeparatorVisible}>

      <InputField
        value={input}
        type="number"
        onChange={setInput}
        placeholder="The number to convert"
        labelText="Input Number"
        fieldId={`${FIELD_ID_PREFIX}-input`}
        notes={`${input.length} digits`}
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
