<template>
  <!-- 图片上传组件 -->
    <div class="upload-wraper">
      <input type="file" id="upload-ele" multiple="false"  accept="image/*" @change="uploadFile(url,quality,hasApi,BigUrl)">
      <toast v-model="total.isShow" type="text">{{total.text}}</toast>
    </div>
  </template>
  <script>
  import { Indicator } from 'mint-ui';
  import { Toast } from 'vux';
  export default {
    name: 'uploadImage',
    components: {
      Indicator,
      Toast,
    },
    props: {
      'url': String, //小与1M的api
      'quality': Number, //图片质量
      'BigUrl': {
        type: String,
        default: '',
      }, //大于1M图片的api
      'hasApi': {
        type: Boolean,
        default: false
      } //是否对大于1M的图片单独分配接口
    },
    data() {
      return {
        total: {isShow:false,text:""}
      }
    },
    methods: {
      uploadFile(url,quality,hasApi,BigUrl) {
        Indicator.open(`上传中`);
        // files是input设置为file后的一个内置对象。files对象是一个只读属性，不可被修改。
        var oFile = document.getElementById('upload-ele').files[0];
        console.log('File Object',oFile);
        var form = new FormData();
        // 大小判断 如果大于1M就新型压缩处理
        // console.log('File Size Unit：KB',(oFile.size / 1024))
        if((oFile.size / 1024) > 1024) {
          if(hasApi) {  
            form.append('file',oFile);
            let xhr = new XMLHttpRequest(); //XMLHttpRequest Object
            xhr.open('post',BigUrl,true); // Method: post,url: server receive address,true/false isAsync
            xhr.timeout = 30 * 1000;  //Timeout one minute;
            xhr.ontimeout = this.uploadTimeout; // Upload Timeout Function
            xhr.upload.onprogress = this.progress; //Progress Function
            xhr.onload = this.uploadComplete; //Upload Success Function
            xhr.onerror = this.uploadFailed; //Upload Failed Funciton
            xhr.upload.onloadstart = () => {
              let date = new Date().getTime(); // TimeStamp Prevents Caching
              let initSize = 0; // Init File Size Zero
            } // Upload Start
            xhr.send(form);
          } else {
            this.imgCompress(oFile,{quality: quality},
            (base64Codes) => {
              var bl = this.convertBase64UrlToBlob(base64Codes);
              form.append("file", bl, "file_" + Date.parse(new Date()) + ".jpg"); // 文件对象
              console.log(form);
              let xhr = new XMLHttpRequest(); // XMLHttpRequest 对象
              xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
              xhr.upload.onprogress = this.progress; //Progress Function
              xhr.ontimeout = this.uploadTimeout; // Upload Timeout Function
              xhr.onload = this.uploadComplete; //Upload Success Function
              xhr.onerror = this.uploadFailed; //Upload Failed Funciton
              xhr.upload.onloadstart = function() {
                let ot = new Date().getTime(); // TimeStamp Prevents Caching
                let oloaded = 0; // Init File Size Zero
              };// Upload Start
              xhr.send(form); 
            })
          }
        } else {
          // 小与1M
          form.append('file',oFile);
          let xhr = new XMLHttpRequest(); //XMLHttpRequest Object
          xhr.open('post',url,true); // Method: post,url: server receive address,true/false isAsync
          xhr.timeout = 30 * 1000;  //Timeout one minute;
          xhr.ontimeout = this.uploadTimeout; // Upload Timeout Function
          xhr.upload.onprogress = this.progress; //Progress Function
          xhr.onload = this.uploadComplete; //Upload Success Function
          xhr.onerror = this.uploadFailed; //Upload Failed Funciton
          xhr.upload.onloadstart = () => {
            let date = new Date().getTime(); // TimeStamp Prevents Caching
            let initSize = 0; // Init File Size Zero
          } // Upload Start
          xhr.send(form); 
        }
      },
      /**
       * @description Request Success
       */
      uploadComplete(evt) {
        let res = JSON.parse(evt.target.responseText);
        if(evt.target.readyState == 4 && evt.target.status == 200) {
          this.$emit('upload',res.result.url);
        } else {
          this.uploadFailed();
        }
      },
      /**
       * @description Request Failed
       */
      uploadFailed(evt) {
        Indicator.close();
        this.total = {
          isShow:true,
          text:"上传失败"
        }
      },  
    /**  
     * @description Timeout Function  
     */  
    uploadTimeout(evt) {  
      this.cancleUploadFile(evt)  
      Indicator.close();  
      this.total = {  
        isShow:true,  
        text:"请求超时"  
      }  
    },  
    /**e  
     * @description Upload Cancel  
     */  
    cancleUploadFile(evt) {  
      evt.abort();  
    },  
    /**  
     * @description Requst Loading....  
     */  
    progress(progressEvent) {  
      if(!progressEvent.lengthComputable) {  
        this.total = {  
          isShow:true,  
          text:"进度读取失败"  
        }  
        return false;  
      }  
      let precent = Math.floor(100 * progressEvent.loaded / progressEvent.total); //Upload Progress  
      if(precent < 100) {  
        Indicator.open(`上传中${precent}%`);  
      } else {  
        Indicator.close();  
        this.total = {    
          isShow:true,  
          text:"上传成功"  
        }  
      }  
    },  
    /**  
      * @description 图片压缩  
      * @param {Object} file 压缩的文件  
      * @param {Number} width 压缩后端宽度，宽度越小，字节越小  
      */  
    imgCompress(file,width,callBack) {  
      var ready = new FileReader();  
      ready.readAsDataURL(file);  
      ready.onload = () => {  
        this.canvasDataURL(ready.result,width,callBack);  
      }      
    },  
    /**  
     * 将以base64的图片url数据转换为Blob  
     * @param urlData  
     * 用url方式表示的base64图片数据  
     */  
    convertBase64UrlToBlob(urlData) {  
      var arr = urlData.split(","),  
        mime = arr[0].match(/:(.*?);/)[1],  
        bstr = atob(arr[1]),  
        n = bstr.length,  
        u8arr = new Uint8Array(n);  
      while (n--) {  
        u8arr[n] = bstr.charCodeAt(n);  
      }  
      return new Blob([u8arr], { type: mime });  
    },    
    /**  
     * @description 大于1M的图片进行重新绘制压缩  
     */  
    canvasDataURL(path, obj, callback) {  
      var img = new Image();  
      img.src = path;  
      img.onload = () => {  
        // var that = this;  
        // 默认按比例压缩  
        var w = this.width,  
          h = this.height,  
          scale = w / h;  
        w = obj.width || w;  
        h = obj.height || w / scale;  
        var quality = 0.7; // 默认图片质量为0.7  
        //生成canvas  
        var canvas = document.createElement("canvas");  
        var ctx = canvas.getContext("2d");  
        // 创建属性节点  
        var anw = document.createAttribute("width");  
        anw.nodeValue = w;  
        var anh = document.createAttribute("height");  
        anh.nodeValue = h;  
        canvas.setAttributeNode(anw);  
        canvas.setAttributeNode(anh);  
        ctx.drawImage(img, 0, 0, w, h);  
        // 图像质量  
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {  
          quality = obj.quality;  
        }  
        // quality值越小，所绘制出的图像越模糊  
        var base64 = canvas.toDataURL("image/jpeg", quality);  
        // 回调函数返回base64的值  
        callback(base64);  
      };  
    },  
  }  
}  
</script>  
<style lang="less" scoped>
  /* .upload-wraper {  
      width:100%;  
      height:100%;  
    }   */
</style>