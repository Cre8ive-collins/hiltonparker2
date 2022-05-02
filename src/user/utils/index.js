
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
    if(stat == 1) return "Document" 
    if(stat == 2) return "Document" 
    if(stat == 3) return "Applied" 
    if(stat > 3) return "Successfull" 

}

export const image = async (obj) => {
   console.log(obj, "obff")
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
    if(obj){
        let fileNames = obj.split('|')
        let names = fileNames.map(file => {
            return file.split("~")[1].split('.')[0]
        }) 
        console.log(names, fileNames)
        let files = []
        for(let i of fileNames){
            console.log(i)
                files.push(await getDownloadURL(ref(firebaseStorage, `hps/${i}`)))
        }
        let data = {}
        names.forEach((elem, ind) => {
            data[elem] = files[ind]
        })
        console.log(data)
        return data
    }
    
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

export const uploadFileToFirebase = (file, filename, ent, user) => {
    NProgress.start()
    const fileRef = ref(firebaseStorage, `hps/${filename}`)
    uploadBytes(fileRef, file).then((snapshot) => {
        let name =user && user.supporting_docs ? `${user.supporting_docs}|${user.id}~${docName}.${uploadedFileExt(file.type)}` : filename
        console.log(name, "filename fix")
        User.api().fileUpload(name, ent)
        NProgress.done()
        return snapshot
    }).catch(err => console.log(err))
}
export const uploadFileToFirebase5 = (file,docName, filename, ent, user) => {
    NProgress.start()
    const fileRef = ref(firebaseStorage, `hps/${filename}`)
    uploadBytes(fileRef, file).then((snapshot) => {
        let name =user && user.supporting_docs ? `${user.supporting_docs}|${user.id}~${docName}.${uploadedFileExt(file.type)}` : filename
        console.log(name, "filename fix")
        User.api().fileUpload(name, ent)
        NProgress.done()
        return snapshot
    }).catch(err => console.log(err))
}


// /*
//  * The following functions are used in multiple forms
//  * reset, money_num etc
//  */
// export const reset = (obj, obj_init) => {
//   // let init = initial[obj_name] ? initial[obj_name] : obj_name;
//   Object.assign(obj, obj_init);
//   return obj;
// };

// export const passwordFormat = (password) => {
//   const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
//   return regex.test(password)
// }

// export const money_num = (money) => {
//   return money
//     .toString()
//     .replace(",", "")
//     .replace("₦ ", "");
// };

// export const formly = (data) => {
//   const p = new FormData();
//   const skip = ["", "validate", "form", "loading", "reset", "submit", "update", "form_btn"];
//   for (let key in data) {
//     if (skip.indexOf(key) > 0) continue;
//     p.append(key, data[key]);
//   }
//   return p;
// };

// export const clean = (data) => {
//   const p = {};
//   const skip = ["", "validate", "loading", "form", "reset", "submit", "router"];
//   for (let key in data) {
//     if (skip.indexOf(key) > 0) continue;
//     // console.log("MMMMMM", key, data[key]);
//     if (key.split(".")[1]) {
//       p[key.split(".")[0]] = p[key.split(".")[0]] ? p[key.split(".")[0]] : {};
//       p[key.split(".")[0]][key.split(".")[1]] = data[key];
//       console.log("MY", key.split(".")[0]);
//       console.log("MY", p[key.split(".")[0]]);
//     } else if (typeof data[key] === "object" && data[key] !== null) {
//       continue;
//     } else {
//       p[key] = data[key];
//     }
//     // if (key.split(".")[1]) delete p[key];
//   }
//   return p;
// };

// /*
//  *
//  *
//  */

// export function isEmail(email) {
//   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// export function isPhone(phone) {
//   // remove +
//   // phone = phone.replaceAll("+", "");
//   phone = phone.split("+").join("");
//   let len = phone.length;
//   // console.log("C", len);
//   // if (len != 11 && len != 13) return false;
//   // if (len == 11 && phone[0] != "0") return false;
//   if (len == 10) return "234" + phone;
//   if (len == 11) return "234" + phone.slice(1, 11);
//   if (len == 13 && phone.slice(0, 3) == "234") return phone;
//   return false;
// }

// export function isMobile() {
//   var w = window.innerWidth > 0 ? window.innerWidth : screen.width;
//   return w < 641 ? true : false;
// }

// /*
//  * Helper Function, previous - filters in Vue 2
//  * currency, percent etc
//  */
// export const currency = (value) => {
//   if (typeof value !== "number") {
//     value = value ? value.replace("₦", "").replace(",", "") : "";
//   }

//   value = value ? (isNaN(value) ? 0 : parseFloat(value)) : 0;
//   return "₦ " + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
// };

// export const curr_num = (value) => {
//   if (typeof value !== "number") {
//     value = value ? value.replace("₦", "").replace(/,/g, "") : "";
//   }
//   return value;
// };

// export const percent = (value) => {
//   if (typeof value !== "number") value = parseFloat(value);
//   return value.toFixed(2) + "%";
// };

// export const rating = (value) => {
//   if (typeof value !== "number") value = parseFloat(value);
//   return value.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
// };

// export const num = (value) => {
//   if (typeof value !== "number") value = parseFloat(value);
//   return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
// };

// export const num_ = (value) => {
//   value = parseFloat(value.toString().replaceAll(",", ""));
//   return value
//     .toFixed(2)
//     .replace(/\d(?=(\d{3})+\.)/g, "$&,")
//     .toString()
//     .replace(".00", "");
// };

// export function numxx(num, digits) {
//   let units = ["k", "M", "G", "T", "P", "E", "Z", "Y"];
//   let floor = Math.floor(Math.abs(num).toString().length / 3);
//   let value = +(num / Math.pow(1000, floor));
//   return value.toFixed(value > 1 ? digits : 2) + units[floor - 1]; 
// }

// export function numx(num, digits) {
//   var units = ["K", "M", "G", "T", "P", "E", "Z", "Y"],
//     decimal;

//   for (var i = units.length - 1; i >= 0; i--) {
//     decimal = Math.pow(1000, i + 1);
//     if (num <= -decimal || num >= decimal) {
//       return +(num / decimal).toFixed(digits) + "<span class='text-6xl'>" + units[i] + "</span>";
//     }
//   }
//   return num;
// }

// export const currencyx = (value) => {
//   return "₦ " + numx(value);
// };

// export const yes_no = (value) => (value ? "Yes" : "No");

// export const color_letter = (letter) => {
//   let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   let colors = [
//     "1046a2",
//     "ee2879",
//     "0a93ad",
//     "fa7820",
//     "4a5b67",
//     "84243f",
//     "4a7db7",
//     "9653d5",
//     "915c6c",
//     "63299f",
//     "e2152f",
//     "12ad2b",
//     "93d75f",
//     "84243f",
//   ];

//   let j = 0;

//   if (letter) {
//     let first = letter[0];
//     let i = letters.indexOf(first.toUpperCase());
//     j = i > 12 ? i - 12 : i;
//   }

//   return colors[j];
// };

// export const image = (obj) => {
//   if (obj && obj.first_name) obj.name = obj.first_name;
//   return obj && obj.image && obj.image.name
//     ? "https://storage.googleapis.com/payedin-uploads/" + obj.image.name
//     : "https://ui-avatars.com/api/?name=" +
//         obj.name +
//         "&background=" +
//         color_letter(obj.name) +
//         "&color=FFFFFF&size=256&bold=false&format=svg&font-size=0.35";
// };

// export const logo = (obj) => {
//   if (obj.first_name) obj.name = obj.first_name;
//   return obj.logo && obj.logo.link
//     ? obj.logo.link
//     : "https://ui-avatars.com/api/?name=" +
//         obj.name +
//         "&background=" +
//         color_letter(obj.name) +
//         "&color=FFFFFF&size=256&bold=false&format=svg&font-size=0.35";
// };

// //
// //
// //
// // Dates
// //
// export const date_only = (value) => {
//   let datetime = value ?? new Date().toJSON();
//   return datetime.split(" ")[0];
// };

// export const date_text = (value) => {
//   let datetime = new Date(value);
//   let d = datetime.toString().split(" ");
//   return d[0] + ", " + d[1] + " " + parseInt(d[2]) + ", " + d[3];
// };

// export const date_md = (value) => {
//   let datetime = new Date(value);
//   let d = datetime.toString().split(" ");
//   return d[1] + " " + parseInt(d[2]);
// };

// export const date_d = (value) => {
//   let datetime = new Date(value);
//   let d = datetime.toString().split(" ");
//   return parseInt(d[2]);
// };

// function pad(n, width, z) {
//   z = z || "0";
//   n = n + "";
//   width = width || 2;
//   return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
// }

// export const last_days = (days) => {
//   let date = new Date();
//   let last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
//   let m = pad(date.getMonth() + 1);
//   let mm = pad(last.getMonth() + 1);
//   return (
//     "start_date=" +
//     last.getFullYear() +
//     "-" +
//     mm +
//     "-" +
//     pad(last.getDate()) +
//     "&end_date=" +
//     date.getFullYear() +
//     "-" +
//     m +
//     "-" +
//     pad(date.getDate())
//   );
// };

// export const monthz = (prev) => {
//   prev = prev ?? 0;
//   const date = new Date();
//   date.setMonth(date.getMonth() + prev);
//   return date.toLocaleString("default", { month: "long" });
// };

// export const countdown = (endtime) => {
//   const total = Date.parse(endtime) - Date.parse(new Date());
//   // if (total < 0) return "00:00:00";
//   if (total < 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));
//   return { days: days ? pad(days) : "0", hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
//   // return (days ? days + " days, " : "") + hours + ":" + pad(minutes) + ":" + pad(seconds);
//   // return { total, days, hours, minutes, seconds };
// };

// export const time_text = (value) => {
//   let date = new Date(value);
//   let d = date.toString().split(" ");

//   // Make a fuzzy time
//   var delta = Math.round((+new Date() - date) / 1000);

//   var minute = 60,
//     hour = minute * 60,
//     day = hour * 24,
//     week = day * 7;

//   var nice_time;

//   if (delta < 20) {
//     nice_time = "just now";
//   } else if (delta < minute) {
//     nice_time = delta + " seconds ago";
//   } else if (delta < 2 * minute) {
//     nice_time = "a minute ago";
//   } else if (delta < hour) {
//     nice_time = Math.floor(delta / minute) + " minutes ago";
//   } else if (Math.floor(delta / hour) == 1) {
//     nice_time = "1 hour ago";
//   } else if (delta < day) {
//     nice_time = Math.floor(delta / hour) + " hours ago";
//   } else if (delta < day * 2) {
//     nice_time = "yesterday";
//   } else if (delta > day * 2) {
//     nice_time = Math.floor(delta / day) + " days ago";
//   } else if (delta > week) {
//     nice_time = "about a week ago";
//   } else {
//     return d[0] + ", " + d[1] + " " + parseInt(d[2]) + ", " + d[3];
//   }
//   return nice_time;
// };

// //
// //
// //
// //
// // Status
// //

// export const status = (value) => {
//   let statuses = ["<span class='text-red'>INACTIVE</span>", "<span class='text-green-500'>ACTIVE</span>"];
//   return statuses[value];
// };

// export const ustatus = (value) => {
//   let statuses = ["<span class='text-gray-500'>PENDING</span>", "<span class='text-green-500'>APPROVED</span>"];
//   return statuses[value];
// };

// export const pstatus = (value) => {
//   let statuses = ["<span class='text-red'>UNPAID</span>", "<span class='text-green-500'>PAID</span>"];
//   return statuses[value];
// };

// export const freq_type = (value) => {
//   let freq_type = ["DAILY", "MONTHLY", "WEEKLY", "YEARLY"];
//   return freq_type[value];
// };

// export const trunc = (str, len) => {
//   return str.length > len ? str.substring(0, len - 1) + "..." : str;
// };

// export const fee_ = (amt, total = false) => {
//   let amtx = parseFloat(amt) * 0.02;
//   let fee = parseFloat(amt) >= 2500 ? amtx + 100 : amtx;
//   return total ? fee + parseFloat(amt) : fee;
// };

// export const fee = (amt, total = false) => {
//   return currency(fee_(amt, total));
// };

// export const toggleArray = (array, value) => {
//   let index = array.indexOf(value);
//   if (index === -1) array.push(value);
//   else array.splice(index, 1);
// };

// export const copy_link = (link) => {
//   const el = document.createElement("textarea");
//   el.value = link;
//   el.setAttribute("readonly", "");
//   el.style.position = "absolute";
//   el.style.left = "-9999px";
//   document.body.appendChild(el);
//   const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
//   el.select();
//   document.execCommand("copy");
//   document.body.removeChild(el);
//   if (selected) {
//     document.getSelection().removeAllRanges();
//     document.getSelection().addRange(selected);
//   }
// };

// export function pwd_strength(value) {
//   var format = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

//   let count = 0;
//   // if str is greater than 5
//   if( value.length > 7 ) count++; // len is greater than 7
//   if( value.length > 5 && /[a-z]/.test(value) ) count++; // lowercase
//   if( value.length > 5 && /[A-Z]/.test(value) ) count++; // uppercase
//   if( value.length > 5 && /\d/.test(value) ) count++; // numbers
//   if( value.length > 5 && format.test(value) ) count++; // special characters

//   if( !count ) count++;
//   let pass = ['very weak', 'very weak', 'weak', 'medium', 'strong', 'very strong'];
//   // let color = ['text-red', 'text-red', 'text-orange', 'text-yellow', 'text-lime', 'text-green'];
//   let mm = ['w-1/5 bg-red', 'w-1/5 bg-red', 'w-2/5 bg-yellow-500', 'w-3/5 bg-yellow-300', 'w-4/5 bg-green-400', 'bg-green'];


//   return {strength: pass[count], meter: mm[count]};
// }



