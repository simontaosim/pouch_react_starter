import React from "react";
import * as qiniu from 'qiniu-js'

class TextQiniu extends React.Component{
    constructor(props){
        super(props)
        let  observable = qiniu.upload("file, key, token, putExtra, config")
        this.observable = observable;
        var subscription = observable.subscribe("observer") // 上传开始
        // or
        var subscription = observable.subscribe("next, error, complete") // 这样传参形式也可以
        subscription.unsubscribe() // 上传取消
    }

    onChange = (e) =>{
        console.log(e.target.files[0]);
        
    }

    render(){
        return (
            <div>
            上传图片
            <input type='file'  onChange={this.onChange}/>

            <div>
                <img src='' alt="show"/>
            </div>
        </div>
        )
       
    }

}


export default TextQiniu;