<template>
<div class="py-8"> 
    <div class=" mt-8">
            <h2 class="text-center text-base md:text-xl font-bold m-3">This form will take 5 mins to complete</h2>
       <div class="flex w-full border text-white text-center gap-1">
            <div class="w-1/3 " :class="User.info().applications_status >= 0 ? 'bg-brand-major' : 'bg-brand-gray'">
                <h2 class="text-sm md:text-lg m-3">Personal Information</h2>
            </div>   
            <div class="w-1/3 "  :class="User.info().applications_status >= 1 ? 'bg-brand-major' : 'bg-brand-gray'">
                <h2 class="text-sm md:text-lg m-3">Program</h2>
            </div>   
            <div class="w-1/3 "  :class="User.info().applications_status == 2 ? 'bg-brand-major' : 'bg-brand-gray'">
                <h2 class="text-sm md:text-lg m-3">Documents</h2>
            </div>   
        </div> 
    </div>
    <div class=" mt-8">
        <!-- User.info().applications_status  -->
        <Form @submit="submit" class="w-full px-8 ease-in-out duration-300" :class="User.info().applications_status  < 1 ? '' : 'hidden'" v-if="User.info().applications_status  < 1 " >
            <div class="w-full  md:flex block  gap-5">
                <div class="md:w-1/2 w-full ">
                    <div v-if="User.info().first_name && !editMode" >
                        <label for="">First Name </label>
                        <input name="first_name" type="text" disabled :value="User.info().first_name" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">First Name</label>
                        <Field rules="required" name="first_name" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="first_name" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-5 md:mt-0">
                    <div v-if="User.info().last_name && !editMode" >
                        <label for="">Last Name </label>
                        <input name="last_name" type="text" disabled :value="User.info().last_name" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                    <label for="" class="pl-1 mb-3">Last Name</label>
                        <Field rules="required" name="last_name" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="last_name" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-5 md:mt-0">
                  <div v-if="User.info().other_name && !editMode" >
                        <label for="">Other Name </label>
                        <input name="other_name" type="text" disabled :value="User.info().other_name" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                     <label for="" class="pl-1 mb-3">Other Name</label>
                    <Field rules="" name="other_name" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                </div>
                </div>
                   
            </div>
            <div class="w-full md:flex block mt-5 md:mt-10 gap-5 ">
                <div class="md:w-2/3 w-full mt-5 md:mt-0">
                 <div v-if="User.info().email && !editMode" >
                        <label for="">Email </label>
                        <input name="email" type="text" disabled :value="User.info().email" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                    <label for="" class="pl-1 mb-3">Last Name</label>
                        <Field rules="email|required" name="email" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="email" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-5 md:mt-0">
                     <div v-if="User.info().phone && !editMode" >
                        <label for="" class="pl-1 mb-3">Phone Number</label>
                        <input name="phone_number" type="text" disabled :value="User.info().phone" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Phone Number</label>
                        <Field rules="required" name="phone_number" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="phone_number" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
            </div>
            <div class="w-full md:flex block mt-5 md:mt-10 gap-5 ">
                 <div class="md:w-1/2 w-full mt-5 md:mt-0">
                    <div v-if="User.info().nationality && !editMode" >
                        <label for="" class="pl-1 mb-3">Phone Number</label>
                        <input name="nationality" type="text" disabled :value="User.info().nationality" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Nationality</label>
                        <Field rules="required" name="nationality" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="nationality" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-2/3 w-full mt-5 md:mt-0">
                     <div v-if="User.info().address && !editMode" >
                        <label for="" class="pl-1 mb-3">Address</label>
                        <input name="address" type="text" disabled :value="User.info().address" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Address</label>
                        <Field rules="required" name="address" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="address" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
               
            </div>
              <div class="w-full  md:flex block  mt-5 md:mt-10 gap-5">
                <div class="md:w-1/2 w-full ">
                    <div v-if="User.info().date_of_birth && !editMode" >
                        <label for="" class="pl-1 mb-3">Date of Birth</label>
                        <input name="date_of_birth" type="text" disabled :value="date_only(User.info().date_of_birth)" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Date of Birth</label>
                        <Field rules="required" name="date_of_birth" type="date" class=" block p-2 border-brand-major border rounded-lg w-full text-brand-omajor" placeholder=" "   />
                        <ErrorMessage name="date_of_birth" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-5 md:mt-0">
                    <div v-if="User.info().place_of_birth && !editMode" >
                        <label for="" class="pl-1 mb-3">Place of Birth</label>
                        <input name="place_of_birth" type="text" disabled :value="User.info().place_of_birth" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Place of Birth</label>
                        <Field rules="required" name="place_of_birth" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="place_of_birth" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-5 md:mt-0">
                    <div v-if="User.info().gender && !editMode" >
                        <label for="" class="pl-1 mb-3">Gender</label>
                        <input name="place_of_birth" type="text" disabled :value="User.info().gender" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Gender</label>
                        <Field rules="required" name="gender" as="select" class=" block p-2 border-brand-major border rounded-lg w-full text-brand-omajor" >
                            <option value="male" >Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="gender" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/2 w-full mt-5 md:mt-0">
                    <div v-if="User.info().marital_status && !editMode" >
                        <label for="" class="pl-1 mb-3">Marital Status</label>
                        <input name="marital_status" type="text" disabled :value="User.info().marital_status" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Marital Status</label>
                        <Field rules="required" name="marital_status" as="select" class=" block p-2 border-brand-major border rounded-lg w-full text-brand-omajor" placeholder=" ">
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                        </Field>
                        <ErrorMessage name="marital_status" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
            </div>

            <div class="md:w-2/3 mt-16 w-full mx-auto flex gap-10  z-50 border text-white  hover:text-white rounded rounded-input hover:border  cursor-pointer ransition  ">
                <button @click.prevent="editMode = true"  class="bg-brand-gray rounded-lg w-1/2 text-white p-3 text-center ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">Edit</button>
                <input type="submit" value="Next" class="bg-brand-major w-1/2 text-white rounded-lg  p-3 ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
            </div>
        </Form>
        <Form @submit="submit2" class="w-full px-8" v-if="User.info().applications_status  == 1 " >
            <div class="w-full  md:flex block  gap-5">
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <div v-if="User.info().program && !editMode" >
                        <label for="" class="pl-1 mb-3">Program</label>
                        <input name="program" type="text" disabled :value="User.info().program" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Program</label>
                        <Field rules="required" name="program" as="select" class=" block p-2 border-brand-major border rounded-lg w-full text-brand-omajor" placeholder=" ">
                            <option value="BSC">BSc/Certificate Programe</option>
                            <option value="MSC">Masters Program</option>
                            <option value="PGD">PGD Program</option>
                        </Field>
                        <ErrorMessage name="gender" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
            </div>
            <p class="mt-5 md:mt-10 mtb-5 md:mb-10 ">Courses ( you must select up to 3 course choices  )</p>
            <div class="w-full  md:flex block gap-5"> 
                <div class="md:w-1/3 w-full ">
                     <div v-if="User.info().program && !editMode" >
                    <label for="" class="pl-1 mb-3">Course 1</label>
                        <input name="program" type="text" disabled :value="course_spliter(User.info().courses)[0]" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Course 1</label>
                        <Field rules="required" name="course1" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="course1" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                     <div v-if="User.info().program && !editMode" >
                    <label for="" class="pl-1 mb-3">Course 2</label>
                        <input name="course2" type="text" disabled :value="course_spliter(User.info().courses)[1]" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Course 2</label>
                        <Field rules="required" name="course2" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="course2" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>
                </div>
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                     <div v-if="User.info().program && !editMode" >
                    <label for="" class="pl-1 mb-3">Course 3</label>
                        <input name="course3" type="text" disabled :value="course_spliter(User.info().courses)[2]" class="block p-2 border-brand-major border rounded-lg w-full">
                    </div>
                    <div v-else>
                        <label for="" class="pl-1 mb-3">Course 3</label>
                        <Field rules="required" name="course3" type="text" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                        <ErrorMessage name="course3" class="text-red-500 text-[0.6em] absolute mt-2"/>
                    </div>

                </div>
            </div>

            <div class="md:w-2/3 mt-16 w-full mx-auto flex gap-10 z-50 border  ">
                <button @click.prevent="prev(0)"  class="bg-brand-gray rounded-lg w-1/3 text-white p-3 text-center ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">Previous</button>
                <button @click.prevent="editMode = true"  class="bg-brand-gray rounded-lg w-1/3 text-white p-3 text-center ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">Edit</button>
                <input type="submit" value="Next" class="bg-brand-major w-1/3 text-white rounded-lg  p-3 ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 ">
            </div>
        </Form>
        <Form @submit="submit3" class="w-full px-8" v-if="User.info().applications_status  == 2 " >
            <file-select 
            v-if="!User.info().passport_photo"
            accepts="image/*"
            expextedFile="Passport Phototgraph" 
            :expectedFormat="['JPG', 'JPEG' , 'PNG']" 
            @input="fileUpload($event, 'passport_photo')"
            />
            <file-select 
            v-else-if="!User.info().international_passport && User.info().passport_photo"
            accepts="image/*"
            expextedFile="International Passport" 
            :expectedFormat="['JPG', 'JPEG' , 'PNG']" 
            @input="fileUpload($event, 'international_passport')"
            />

            <file-select 
            :spDocs="true"
            :count="User.info().supporting_docs ? docCount(User.info().supporting_docs) : 0" 
            v-if="User.info().international_passport && User.info().passport_photo"
            accepts="image/*"
            expextedFile="Supporting documents" 
            :expectedFormat="['JPG', 'JPEG' , 'PNG']" 
            @sinput="sfileUpload($event, 'international_passport')"
            />
            <!-- <div class="w-full  md:flex block  gap-5">
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">Passport Photograph</label>
                    <Field rules="required" name="passport_photo" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                    <ErrorMessage name="passport_photo" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">International Passport</label>
                    <Field rules="required" name="international_pasport" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                    <ErrorMessage name="international_pasport" class="text-red-500 text-[0.6em] absolute mt-2"/>
                </div>
            </div>
            <p class="mt-5 md:mt-10 mtb-5 md:mb-10 ">Other supporting documents ( You can upload up to 5 )</p>
            <div class="w-full  md:flex block gap-5">
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">Document 1</label>
                    <Field rules="" name="international_pasport" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                </div>
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">Document 2</label>
                    <Field rules="" name="international_pasport" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                </div>
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">Document 3</label>
                    <Field rules="" name="international_pasport" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                </div>
            </div>
            <div class="w-full mt-5 md:mt-10  md:flex block gap-5">
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">Document 4</label>
                    <Field rules="" name="international_pasport" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                </div>
                <div class="md:w-1/3 w-full mt-5 md:mt-0">
                    <label for="" class="pl-1 mb-3">Document 4</label>
                    <Field rules="" name="international_pasport" type="file" class=" block p-2 border-brand-major border rounded-lg w-full" placeholder=" "   />
                </div>
               
            </div> -->

          
            <div class="md:w-2/3 mt-16 w-full mx-auto flex gap-10 z-50 border  ">
                <button @click.prevent="prev(1)"  class="bg-brand-gray rounded-lg mx-auto w-1/2 text-white p-3 text-center ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">Previous</button>
                <button 
                @click.prevent="done" 
                v-if="User.info().passport_photo && User.info().international_passport && User.info().supporting_docs"  
                class="bg-brand-major rounded-lg mx-auto w-1/2 text-white p-3 text-center ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300">Done</button>
            </div>
        </Form>
    </div>
</div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate';
import { User } from '../store/models'
import { date_only, course_spliter, uploadedFileExt, uploadFileToFirebase, docCount } from '../utils'
import FileSelect from "./components/FileSelect.vue"

export default {
    name : 'Application',
    data(){
        let router = useRouter()
        let route = useRoute()
        let stats = 0
        let editMode = false
        return {
            router,
            route ,
            stats,
            User,
            editMode,
            date_only,
            course_spliter,
            uploadedFileExt, 
            docCount,
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
        FileSelect,
        
     },


    async created(){
        let code = this.route.query.code
        await User.api().verifyCode(code)
        // console.log(docCount(User.info().supporting_docs))
        
    },

    methods: {
        done(){
            User.api().update({}, 3)
            this.router.push('/successful')
        },
        submit(values){
            this.editMode = false
            let res = User.api().update(values, 1)
            console.log(res)
        },
        submit3(values){
            console.log(values)
            for (let i in values){
                console.log(i)
            }
        },
        submit2(values){
            console.log(values)
            this.editMode = false
            let data = {}
            if(values.program){
                let coursesString = `${values.course1}~${values.course2}~${values.course3}`
                data = {
                    program : values.program,
                    courses : coursesString
                }
            }
            let res = User.api().update(data, 2)
            console.log(data)
        },
        async fileUpload(e, tp){
            let fileName = `${User.info().id}~${tp}.${this.uploadedFileExt(e.type)}`
            await uploadFileToFirebase(e, fileName, tp)

        },
        async sfileUpload(e){
            // NAMING CONVENTION IS ERRORNOUS 
            let fileName = User.info().supporting_docs ? `${User.info().supporting_docs}|${User.info().id}~${e.docName}.${this.uploadedFileExt(e.file.type)}` :  `${User.info().id}~${e.docName}.${this.uploadedFileExt(e.file.type)}`
            await uploadFileToFirebase(e, fileName, 'supporting_docs')
        },
        prev(status){
            this.editMode = false
            User.changeStatus(User.info().id, status)
        }
    },
    setup() {
        
    },
}
</script>