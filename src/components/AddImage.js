import {useState} from 'react'


function AddImage() {

        const [postImage, setPostImage] = useState({
          file: "",
        });
      
      const url = "http://localhost:4000/upload";

      const createImage = (newImage) => {
            const file = newImage
          fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  file 
              })
          })
          .then(resp => resp.json())
          .then(data => console.log(data))
      };

        // const createPost = (post) => {
        //   try {
        //      createImage(post);
        //   } catch (error) {
        //     console.log(error.message);
        //   }
        // };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          createImage(postImage.file);
        };
      
        const convertToBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
              reject(error);
            };
          });
        };

        const handleFileUpload = async (e) => {
          const file = e.target.files[0];
          const base64 = await convertToBase64(file);
          setPostImage({ file: base64 });
        };
      
        return (
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="file"
                label="Image"
                name="myFile"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
      
              <button>Submit</button>
            </form>
            <button onClick={() => console.log(postImage.file)}>postImage</button>
          </div>
        );
      }

export default AddImage