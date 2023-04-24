import { supabase } from '../components/supabase';

function UploadYourImages() {
  async function uploadImage(imageFile) {
    const { data, error } = await supabase.storage
      .from('happycustomers')
      .upload(imageFile.name, imageFile);
  
    if (error) {
      console.error('Error uploading image', error);
    } else {
      console.log('Image uploaded successfully', data.Key);
    }
  }

  return (
    <div className="mt-9">
      <p className="text-2xl font-bold text-center mb-8">
        Are you a happy customer too? Show us how you style our clothes ;)
        <br />
        (Example of Simple Uploads)
      </p>
      <div className="flex justify-center items-center">
        <button
          className="btn btn-accent"
          onClick={() => {
            const inputElement = document.getElementById("imageInput");
            inputElement.click();
          }}
        >
          Upload Your Images!
        </button>

        <input
          type="file"
          id="imageInput"
          onChange={(event) => {
            const imageFile = event.target.files[0];
            uploadImage(imageFile);
          }}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default UploadYourImages;