import React from "react";

class TextQiniu extends React.Component{

    onChange = (e) =>{
        let files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let  fileReader = new FileReader();
            
            fileReader.onload = (function (file) {
                return function(e){
                    console.log(e.target.result);
                    document.getElementById("showUpload").src = e.target.result;
                }
                
            })(file);
            fileReader.readAsDataURL(file);
        }
    


        
    }

    render(){
        return (
            <div>
            上传图片
            <input type='file'  onChange={this.onChange}/>

            <div>
                <img src='' alt="show" id="showUpload"/>
            </div>
        </div>
        )
       
    }

}


export default TextQiniu;