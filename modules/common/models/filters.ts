export function filterNonFeltChars(input: string): string {
  return input.replace(/[^0-9]/gi, '')
}

export function filterNonFeltArrayChars(input: string): string {
  return input.replace(/[^0-9, ]/gi, '')
}
