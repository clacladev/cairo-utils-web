/* eslint-disable no-undef */
import { shortStringToFelt } from '../modules/common/models/converters'

describe('converters', () => {
  describe('shortStringToFelt', () => {
    it('should work with text input', async () => {
      // Given
      const input = 'ciao ciao'
      // When
      const { output, isValid } = shortStringToFelt(input)
      // Then
      expect(output.toString()).toBe('1833821135928866464111')
      expect(isValid).toBeTruthy()
    })

    it('should work with numeric input', async () => {
      // Given
      const input = '1'
      // When
      const { output, isValid } = shortStringToFelt(input)
      // Then
      expect(output.toString()).toBe('1')
      expect(isValid).toBeTruthy()
    })
  })

  // describe('shortStringFeltToStr', () => {
  //   it('should work with felt representing text input', async () => {
  //     // Given
  //     const input = 1833821135928866464111n // ciao ciao
  //     // When
  //     const output = shortStringFeltToStr(input)
  //     // Then
  //     expect(output.toString()).toBe('ciao ciao')
  //   })

  //   // it('should work with felt representing numeric input', async () => {
  //   //   // Given
  //   //   const input = 1n
  //   //   // When
  //   //   const output = shortStringFeltToStr(input)
  //   //   // Then
  //   //   expect(output.toString()).toBe('1')
  //   // })
  // })

  // describe('strToFeltArr', () => {
  //   it('should work with text input', async () => {
  //     // Given
  //     const input = 'ciao ciao'
  //     // When
  //     const output = strToFeltArr(input)
  //     // Then
  //     expect(output.toString()).toBe('99,105,97,111,32,99,105,97,111')
  //   })
  // })

  // describe('feltArrToStr', () => {
  //   it('should work with felt array input', async () => {
  //     // Given
  //     const input = '99,105,97,111,32,99,105,97,111'.split(',').map((val) => BigInt(val)) // ciao ciao
  //     // When
  //     const output = feltArrToStr(input)
  //     // Then
  //     expect(output.toString()).toBe('ciao ciao')
  //   })
  // })
})
