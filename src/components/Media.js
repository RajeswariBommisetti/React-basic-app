import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isOpen: false
        };

        this.onImageChange = this.onImageChange.bind(this);
        this.handleShowDialog = this.handleShowDialog.bind(this);
    }
    
    // set isOpen flag based on the current window state
    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("cliked");
    };
    
    // set uploaded images to images array to display on upload
    onImageChange = (event) => {
        let that = this
        if (event.target.files && event.target.files[0]) {
          let filesAmount = event.target.files.length;
          for (var i = 0; i < filesAmount; i++) {
            let reader = new FileReader();
            reader.onload = function(event) {
                var newArray = that.state.images.slice();    
                newArray.push(event.target.result);  
                that.setState({images:newArray})
            }
            reader.readAsDataURL(event.target.files[i]);
          }
        }
    }

    render() {
        return (
            <div>
                {/* Navigate to charts */}
                <Link className='link-page' to={`/Charts`}>
                    <span className="value">Charts</span>
                </Link>
                <input type="file" onChange={this.onImageChange} className="filetype" id="group_image" multiple/>
                <span className="small_font to_middle">+ Add image</span>
                {this.state.images.map((image, i) => {    
           return (<div>
           {/* Show thumbline image when image uploaded */}
           <img id="imagePreview" src={image} onClick={this.handleShowDialog}/>
           {/* When image is clicked and state is open show full image */}
           {(this.state.isOpen) && (
            <dialog
                className="dialog"
                style={{ position: "absolute" }}
                open
                onClick={this.handleShowDialog}>
                <img
                className="image"
                src={image}
                onClick={this.handleShowDialog}
                alt="no image"/>
            </dialog>)})
            </div>)
           
        })}
           
                
            </div>

        )
    }
}