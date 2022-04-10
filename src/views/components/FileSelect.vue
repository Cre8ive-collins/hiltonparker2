<template>
  <div  v-if="!spDocs">
    <h3 class=" font-bold text-center m-5">Upload {{ expextedFile }}</h3>
    <label class="file-select">
        <div class="select-button">
        <span v-if="file">Selected File: {{file.name}}</span>
        <span v-else>Select File</span>
        <img  src="../../assets/images/icons/fileUpload.svg" class="  md:w-20 mx-auto mt-5 w-28" >
        </div>
        <input type="file" @change="handleFileChange" :accept="accepts"/>
    </label>

    <div class="md:w-2/3 mt-16 w-full mx-auto flex gap-10 z-50 border" v-if="file">
            <input @click.prevent="uploadFile" type="submit" value="Upload" class="bg-brand-major w-1/2 mx-auto text-white rounded-lg  p-3 ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
    </div>
  </div>
  <div  v-if="spDocs">
    <h3 class=" font-bold text-center m-5">Upload {{ expextedFile }} </h3>
    <div class="relative my-10 border-b border-brand-major focus-within:border-brand-major md:w-1/4 w-full mx-auto rounded-lg px-3">
        <input v-model="docName" type="text" class="block w-full appearance-none focus:outline-none bg-transparent" placeholder=" "   />
        <label  class=" w-full absolute top-0 -z-1 origin-0 text-brand-major ">Document Title</label>
    </div>
    <label class="file-select">
        <div class="select-button">
        <span v-if="file">Selected File: {{file.name}}</span>
        <span v-else>Select File</span>
        <img  src="../../assets/images/icons/fileUpload.svg" class="  md:w-20 mx-auto mt-5 w-28" >
        </div>
        <input type="file" @change="handleFileChange" :accept="accepts"/>
    </label>

    <div class="md:w-2/3 mt-16 w-full mx-auto flex gap-10 z-50 border" v-if="file">
        <input @click.prevent="uploadDoc" type="submit" value="Upload" class="bg-brand-major w-1/2 mx-auto text-white rounded-lg  p-3 ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
        <!-- x<input @click.prevent="addDoc" type="submit" value="Add +" class="bg-brand-major w-1/2 mx-auto text-white rounded-lg  p-3 ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 "> -->
    </div>
  </div>
<h4 class="text-brand-major text-xs md:text-base font-bold text-center m-5">Expected format {{ expectedFormat }}</h4>
<p class="text-red-500 text-[0.6em]  md:text-base text-center m-5 italic">Please confirm that you have selected the right file, all files uploaded cannot be changed </p>
</template>

<script>
import { flash } from '../../main'
// import { docCount } from '../../utils'


export default {
  props: {
    // Using value here allows us to be v-model compatible.
    value: File,
    expextedFile : String,
    expectedFormat : Array,
    spDocs : Boolean,
    count : Number,
    accepts : {
        type : String,
        required : true
    }
  },

  data(){
      let docName
      return {
          file : null,
          docName
      }
  },

  methods: {
    uploadDoc(){
        console.log(this.count)
        if(this.count == 5){
             flash.error('You can upload up to 5 documents', {
                position : 'top'})
            return
        }
        if(!this.docName){
            flash.error('Document title cannot be empty', {
                position : 'top'})
            return
            }
        if(this.docName.includes('|')){
            flash.error('Document title cannot include "|"', {
                position : 'top'})
            return
            }
        if(this.docName.includes('/')){
            flash.error('Document title cannot include "/"', {
                position : 'top'})
            return
            }
        if(this.docName.length < 3){
            flash.error('Document title must be more than 3 characters long', {
                position : 'top'})
            return
            }
        this.$emit('sinput', { file : this.file, docName : this.docName})
        this.file = null
        this.docName = null
    },

    uploadFile(){
        this.$emit('input', this.file)

    },
    handleFileChange(e) {
      // Whenever the file changes, emit the 'input' event with the file data.
      this.file = e.target.files[0]
    }
  }
}
</script>

<style scoped>
.file-select > .select-button {
  padding: 3rem;
  height: 20rem;
  /* color: white; */
  border: 2px dashed;
  border-radius: .3rem;
  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>