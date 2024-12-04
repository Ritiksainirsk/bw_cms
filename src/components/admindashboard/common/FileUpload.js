import React, { useState, useRef} from 'react';
import { FiUpload } from 'react-icons/fi';
import { SlClose } from 'react-icons/sl';
import UploadSample from '../../../assets/images/fileimg-demo.png';
import { singleFileUpload, singleImageApi } from '../../../api/admin/FileAPI.js';
import { Const } from '../../../util/Constants.js';

const authtoken = localStorage.getItem(Const.Token);
const FileUpload = ({name, inputField, width, height, handleInputChange, }) => {
    const [selectedImage, setSelectedImage] = useState();
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };
    const imageChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedImage(file);
        }
        handleClick();
    }
    const saveChange = async () => {
        let formData = new FormData();
        formData.append('file', selectedImage);
        formData.append("authtoken", authtoken);
        await singleFileUpload(formData,onImgSuccess);
    }
    const onImgSuccess = async (res) => {
        const response = await res;
        handleInputChange({
            target: {
                name: name,
                value: response.filepath
            }
        });
    };

    const removeSelectedImage = async (e) => {
        setSelectedImage();
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedImage(file);
        }
        handleClick();
    };
  return (
    <div className="upload-file">
        <div className="row g-0">
            <div className="col-6">
            {
            selectedImage && selectedImage ?
                <img src={URL.createObjectURL(selectedImage)} width={width ?? 30} height={height ?? 30} className="preview-img" id="changedImg" alt={selectedImage?.name}/>
            : 
                <img 
                    src={selectedImage ? URL.createObjectURL(selectedImage) : (inputField?.[name.split('.')[1]] || UploadSample)} 
                    width={width ?? 30} 
                    height={height ?? 30} 
                    className="preview-img" 
                    alt={selectedImage ? selectedImage.name : "demo-file-logo"} 
                />
            }
            </div>
            {

                selectedImage && selectedImage ?
                <div className="col-6 d-flex flex-column align-items-center m-auto text-center gap-1" role="button">
                    <input 
                        type="file" 
                        className="d-none"
                        accept="image/*"
                        ref={inputRef}
                        onChange={imageChange} />
                    <span>{selectedImage?.name} <SlClose className="offclose" onClick={removeSelectedImage}/></span>
                    <div className='row'>
                        <button 
                            className="btn btn-primary btn-changelogo col-md-5 m-1"
                            onClick={imageChange}
                            >Change 
                        </button>
                        <button 
                            className="btn btn-success btn-changelogo col-md-5 m-1"
                            onClick={saveChange}
                            >Save
                        </button>
                    </div>
                </div>
                :
                <div className="col-6 d-flex flex-column align-items-center m-auto text-center gap-1" onClick={handleClick}  role="button">
                    <input 
                        type="file" 
                        className="d-none"
                        accept="image/*"
                        ref={inputRef}
                        onChange={imageChange} />
                        <>
                        <FiUpload className="upload-icon"/>
                        <span>Click or Drag & Drop</span>
                        <p>Only JPEG,PNG and Webp with max size of 1 MB</p>
                        </>
                </div>
                }  
        </div>
    </div>
  )
}

export default FileUpload