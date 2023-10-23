/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const MemberContext = createContext({});

export const MemberProvider = ({children})=>{

    //database 
    const usermock = [
        { id:1,
            username:'John',
            name:'ว่ายน้ำ 1พันไมล์',
            description:'ว่ายน้ำเพื่อการกุศล',
            type:'swimming',
            startingTime:'Sun Oct 07 2023 00:00:00 GMT+0700 (เวลาอินโดจีน)',
            endingTIme:'Sun Oct 07 2023 17:00:00 GMT+0700 (เวลาอินโดจีน)'
        },
        { id:2,
            username:'John',
            name:'วิ่่งสุดชีวิต',
            description:'ลดน้ำหนัก ตั้งเป้าหมายไว้ต้องผอม',
            type:'running',
            startingTime:'Sun Oct 08 2023 05:00:00 GMT+0700 (เวลาอินโดจีน)',
            endingTIme:'Thu Feb 08 2024 07:00:00 GMT+0700 (เวลาอินโดจีน)'
        },
        { id:3,
            username:'Arm',
            name:'วิ่งทุก 5โมงเช้า',
            description:'วิ่งทุกวันเพื่อเตรียมตัวไป โอลิมปิก',
            type:'running',
            startingTime:'Sun Oct 08 2023 05:00:00 GMT+0700 (เวลาอินโดจีน)',
            endingTIme:'Wed Nov 08 2023 07:00:00 GMT+0700 (เวลาอินโดจีน)'
        }
    ]

    const [member , setMember] = useState(usermock);
    const [auth , setAuth] = useState({});
    //auth = {accessToken}

    //export to use in another component
    return(
        <MemberContext.Provider value={{member , setMember , auth ,setAuth}}>
            {children}
        </MemberContext.Provider>
    )
}

export default MemberContext;