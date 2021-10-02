
import { useState } from "react";




const FileUpload = () => {

    const [file , setFile ] = useState('')
    const [filename , setFilename ] = useState()

    const onChanges = (e) => {
        console.log("changed call")
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }


    const upload = async (e) => {
        e.preventDefault();
        console.log(file)
        console.log(filename)
        const formData = new FormData();
        formData.append('files',file)
        
        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
          };
          
          fetch("http://localhost:8011/file/upload", requestOptions)
            .then( (response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
            })

    } 
    return (
        <div className="container mt-4">
            <form onSubmit={upload}>
                <input 
                    onChange={onChanges}  
                    className="form-control" 
                    type="file" 
                    id="formFile"
                />
                    <div className="d-grid"><br />
                    <input 
                        type="submit" 
                        className="btn btn-primary "
                        value="Upload"/>
                    </div>
            </form>         
        </div>
    );
}

export default FileUpload;