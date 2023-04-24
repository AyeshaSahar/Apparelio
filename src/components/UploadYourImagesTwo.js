import { useState, useEffect } from 'react';
import { Uppy} from '@uppy/core';
import { Dashboard } from 'uppy';
import { Tus } from 'uppy';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

function UploadYourImagesTwo() {
  const projectId = process.env.NEXT_PUBLIC_SUPABASE_URL
  const token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const bucketName = 'happycustomers';

  const supabaseUploadURL = `${projectId}/storage/v1/upload/resumable`;

  const [showDragDrop, setShowDragDrop] = useState(false);

  useEffect (() => {
    if (showDragDrop){
      var uppy = new Uppy()
        .use(Dashboard, {
          inline: true,
          target: '#drag-drop-area',
          showProgressDetails: true,
        })
        .use(Tus, {
          endpoint: supabaseUploadURL,
          headers: {
            authorization: `Bearer ${token}`,
          },
          chunkSize: 6 * 1024 * 1024,
          allowedMetaFields: ['bucketName', 'objectName', 'contentType', 'cacheControl'],
        })

      uppy.on('file-added', (file) => {
        const supabaseMetadata = {
          bucketName: bucketName,
          objectName: file.name,
          contentType: file.type,
        }

        file.meta = {
          ...file.meta,
          ...supabaseMetadata,
        }

        console.log('file added', file)
      })

      uppy.on('complete', (result) => {
        console.log('Upload complete! We’ve uploaded these files:', result.successful)
      })

    }
  }, [showDragDrop]);

  const handleButtonClick = () => {
    setShowDragDrop(true);
  }

  return (
    <div className="mt-9">

      <p className="text-2xl font-bold text-center mb-8">
      Are you a happy customer too? Show us how you style our clothes ;)
      <br />
      (Example of Resumable Uploads)
      </p>

      <div className="flex justify-center items-center">
        <button className="btn btn-accent" onClick={handleButtonClick} >Upload Your Images!</button>
      </div>
      {showDragDrop &&
        <div id="drag-drop-area" className='flex justify-center items-center mt-8'>
          </div>
        }
      
    </div>
  );
}

export default UploadYourImagesTwo;