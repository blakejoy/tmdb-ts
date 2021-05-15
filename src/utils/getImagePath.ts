/**
 * Utility method to construct full url for image
 * based on configuration
 *
 * https://developers.themoviedb.org/3/getting-started/images
 * @param {string} baseUrl base image url
 * @param {string} fileSize file size
 * @param {string} imagePath raw image path
 */
export const getFullImagePath = (baseUrl: string, fileSize: string, imagePath: string): string  => {
  return `${baseUrl}${fileSize}${imagePath}`;
};
