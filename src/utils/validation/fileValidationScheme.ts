import * as yup from 'yup';

export const fileValidationSchema: yup.Schema<FileList> = yup
  .mixed<FileList>()
  .required('File is required')
  .test('fileType', 'Unsupported file format', (value) => {
    if (!value || value.length === 0) return false;
    const file = value[0];
    return file && (file.type === 'image/jpeg' || file.type === 'image/jpg');
  })
  .test('fileSize', 'File size must be less than 5MB', (value) => {
    if (!value || value.length === 0) return false;
    const file = value[0];
    return file && file.size <= 5 * 1024 * 1024;
  })
  .test('fileResolution', 'Image resolution must be at least 70x70px', async (value) => {
    if (!value || value.length === 0) return false;
    const file = value[0];

    const objectURL = URL.createObjectURL(file);
    const image = new Image();
    image.src = objectURL;

    return new Promise<boolean>((resolve) => {
      image.onload = () => {
        URL.revokeObjectURL(objectURL);
        resolve(image.width >= 70 && image.height >= 70);
      };
      image.onerror = () => {
        URL.revokeObjectURL(objectURL);
        resolve(false);
      };
    });
  });
