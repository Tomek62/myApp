/**
 * Capitalize all characters in the string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export function capitalizeAll(str: string): string {
    return str.toUpperCase();
  }
  
/**
 * Capitalize only the first letter of the string.
 * @param str - The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}