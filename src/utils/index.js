
import { firebaseStorage } from "../main"
import { ref, uploadBytes, getStorage, getDownloadURL  } from "firebase/storage";
import NProgress from 'nprogress'
import { User } from "../store/models";




export const date_only = (value) => {
    let datetime = value ?? new Date().toJSON();
    if(value.includes("T")) return datetime.split("T")[0];
        return datetime.split(" ")[0];
  };

export const color_letter = (letter) => {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let colors = ["1046a2", "ee2879", "0a93ad", "fa7820", "4a5b67", "84243f", "4a7db7", "9653d5", "915c6c", "63299f", "e2152f", "12ad2b", "93d75f", "84243f"];
  
    let j = 0;
  
    if (letter) {
      let first = letter[0];
      let i = letters.indexOf(first.toUpperCase());
      j = i > 12 ? i - 12 : i;
    }
  
    return colors[j];
  };

export const application_stats = (stat) => {
    if(!stat) return 'Pending'
    if(stat == 1) return "Pending" 
    if(stat == 2) return "Document" 
    if(stat == 3) return "Payment" 
    if(stat > 3) return "Successfull" 

}

export const image = async (obj) => {
   console.log(obj, "obff")
    // if (obj.first_name) obj.name = obj.first_name;
    if(obj.passport_photo){
      return await getDownloadURL(ref(firebaseStorage, `hps/${obj.passport_photo}`))
    }else{
        return  "https://ui-avatars.com/api/?name=" + obj.first_name + "&background=" + color_letter(obj.name) + "&color=FFFFFF&size=256&bold=false&format=svg&font-size=0.35";
    }
  };
export const interPass = async (obj) => {
   console.log(obj, "obff")
    // if (obj.first_name) obj.name = obj.first_name;
    if(obj.international_passport){
      return await getDownloadURL(ref(firebaseStorage, `hps/${obj.international_passport}`))
    }else{
        return  "https://ui-avatars.com/api/?name=" + obj.first_name + "&background=" + color_letter(obj.name) + "&color=FFFFFF&size=256&bold=false&format=svg&font-size=0.35";
    }
  };

export const supp_docs = async (obj) => {
    let fileNames = obj.split('|')
    let names = fileNames.map(file => {
        return file.split("~")[1].split('.')[0]
    }) 
    console.log(names, fileNames)
    let files = []
    for(let i of fileNames){
        console.log(i)
        await getDownloadURL(ref(firebaseStorage, `hps/${i}`)).then(resu => {
            files.push(resu)
        })
    }
    console.log(files)
    
}

export const course_spliter = (values) => {
    let course1, course2, course3
    let d = values.split('~')
    course1 = d[0]; course2 = d[1]; course3 = d[2]
    return [course1 , course2, course3]
}
export const uploadedFileExt = (values) => {
    return values.split('/')[1]
}

export const docCount = (values) => {
    return values.split('|').length
}

export const uploadFileToFirebase = (file, filename, ent) => {
    NProgress.start()
    const fileRef = ref(firebaseStorage, `hps/${filename}`)
    uploadBytes(fileRef, file).then((snapshot) => {
        // console.log(snapshot, 'file uploaded')
        User.api().fileUpload(filename, ent)
        NProgress.done()
        return snapshot
    }).catch(err => console.log(err))
}