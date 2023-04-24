import UploadYourImages from "./UploadYourImages"
import UploadYourImagesTwo from "./UploadYourImagesTwo"
import {useEffect, useState} from 'react';
import {supabase} from '../components/supabase'

const ProjectId = process.env.NEXT_PUBLIC_SUPABASE_URL

const CDNURL = `${ProjectId}/storage/v1/object/public/happycustomers/`

function HappyCustomers() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const { data } = await supabase.storage
        .from("happycustomers")
        .list("")
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
      if (data) {
        setImages(data);
      }
    }
    fetchImages();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Happy Customers</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {images.map((image) => (
            <img
                key={image.name}
                src={CDNURL + "/" + image.name}
                alt={image.name}
                className="object-cover h-48 w-full rounded-lg"
            />
            ))}
        </div>
        <UploadYourImages />
        <UploadYourImagesTwo />
    </div>

  );
}

export default HappyCustomers;