import {edition2 ,edition3, fireworks1 , leader ,user} from "../Constants/images";
export const data =[
    {id:1 , name:'a'},
    {id:2 , name:'ab'},
    {id:3 , name:'ac'},
    {id:4 , name:'ad'},
    {id:5 , name:'af'},
]
export const edition =[
    {id:1 , lock:false , img:fireworks1,editionNo:'Edition 1' },
    {id:2 , lock:true,img:edition2,editionNo:'Edition 2' },
    {id:3 , lock:true,img:edition3,editionNo:'Edition 3' },
]
export const players =[
    {id:1,img:leader , error:false, name:'Name 1' },
    {id:2,img:user , error:false, name:'Name 2'},
    {id:3,img:user , error:true ,name:'Name 3'},
    {id:4,img:user , error:false ,name:'Name 4'},
]
export const answerList =[
    {id:1,ans:true ,value:'23',usr:'Name 1'},
    {id:2,ans:false ,value:'25',usr:'Name 3'},
    {id:3,ans:false ,value:'26',usr:'Name 4'},
    // {id:3,ans:false ,value:'26'},usr:'Name 4'}
]