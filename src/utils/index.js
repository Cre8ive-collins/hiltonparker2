
import { firebaseStorage } from "../main"
import { ref, uploadBytes } from "firebase/storage";
import NProgress from 'nprogress'
import { User } from "../store/models";


export const date_only = (value) => {
    let datetime = value ?? new Date().toJSON();
    if(value.includes("T")) return datetime.split("T")[0];
        return datetime.split(" ")[0];
  };

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