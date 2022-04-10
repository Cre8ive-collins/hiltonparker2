import { User } from '../'
export const userDT = {
    dataTransformer : (res) => {
      if(res && res.data){
        User.create({
            data : res.data.data.user
        })
      }
    }
  }