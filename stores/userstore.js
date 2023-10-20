import { defineStore } from 'pinia'
import data from '@/data/data.json'
export const usedb = defineStore('dbdb', {
    state: () => {
        return {
            dbusers: JSON.parse(JSON.stringify(data)),
            userfind:[]
        }
    },
    getters: {
        getallusers(){
            if(this.userfind.length){
                let users = this.dbusers.filter((user)=>{
                    let use = this.userfind.find(i=>{
                        if(i == user.level || i == user.role){
                            return user
                        }else{
                            return this.func(user,i)
                        }
                    })
                    return use
                })
                return users
            }else {
                return this.dbusers
            }
        },
    },
    actions: {
        func(user,i){
            let lang = user.languages.find(item=>{
                return item == i
            })
            let tool = user.tools.find(item=>{
                return item == i
            })
            if(lang){
                return lang
            }else{
                return tool
            }
        },
        remov(item){
            let index = this.userfind.findIndex((i)=>{
                    return i === item
            })
            this.userfind.splice(index,1)
        }
    }
})


