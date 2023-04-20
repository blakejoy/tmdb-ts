export function parseOptions(options?: Record<string, any>): string {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  return options ? new URLSearchParams(Object.entries(options)).toString() : '';
}
