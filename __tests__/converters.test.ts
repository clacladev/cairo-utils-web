/* eslint-disable no-undef */
import { decimalToFelt, feltArrayToString, feltToShortString, shortStringToFelt, stringToFeltArray } from '../modules/common/models/converters'

describe('converters', () => {
  describe('decimalToFelt', () => {
    it('should work with numeric input', async () => {
      // Given
      const input = '1'
      // When
      const { output, isValid } = decimalToFelt(input)
      // Then
      expect(output.toString()).toBe('1')
      expect(isValid).toBeTruthy()
    })
  })

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
      expect(output.toString()).toBe('49')
      expect(isValid).toBeTruthy()
    })
  })

  describe('feltToShortString', () => {
    it('should work with text representing input', async () => {
      // Given
      const input = '1833821135928866464111'
      // When
      const { output, isValid } = feltToShortString(input)
      // Then
      expect(output.toString()).toBe('ciao ciao')
      expect(isValid).toBeTruthy()
    })

    it('should work with numeric representing input', async () => {
      // Given
      const input = '49'
      // When
      const { output, isValid } = feltToShortString(input)
      // Then
      expect(output.toString()).toBe('1')
      expect(isValid).toBeTruthy()
    })
  })

  describe('stringToFeltArray', () => {
    it('should work with felt representing text input', async () => {
      // Given
      const input = 'ciao ciao'
      // When
      const { output } = stringToFeltArray(input)
      // Then
      expect(output?.join(',')).toBe('99,105,97,111,32,99,105,97,111')
    })

    it('should work with felt representing numeric input', async () => {
      // Given
      const input = '123'
      // When
      const { output } = stringToFeltArray(input)
      // Then
      expect(output?.join(',')).toBe('49,50,51')
    })
  })

  describe('feltArrayToString', () => {
    it('should work with felt array representing text input', async () => {
      // Given
      const input = '99,105,97,111,32,99,105,97,111'
      // When
      const { output } = feltArrayToString(input)
      // Then
      expect(output).toBe('ciao ciao')
    })

    it('should work with felt array representing numeric input', async () => {
      // Given
      const input = '49,50,51'
      // When
      const { output } = feltArrayToString(input)
      // Then
      expect(output).toBe('123')
    })
  })
})
