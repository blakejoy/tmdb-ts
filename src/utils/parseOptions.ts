export function parseOptions(options?: { [s: string]: any }): string {
  return options ? new URLSearchParams(Object.entries(options)).toString() : '';
}
