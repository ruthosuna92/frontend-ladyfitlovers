export const saveImage = async (file) => {

  const CLOUDINARY_URL = import.meta.env.VITE_VERCEL_CLOUDINARY_URL;

    let urlImage = '';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ladyfitLovers');
  await fetch( CLOUDINARY_URL, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((file) => urlImage = file.secure_url)
    .catch((e) => console.log(e));
   return urlImage;

};