"use client"
import { useState } from "react"
import {Input, Text, Button} from "@/components"

export default function Home () {

  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    userName: ""
  })

  return (
  <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
    <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px]">
      <header>
        <img src="ima/Main 1.svg"/>
        <p className="text-[#202124] text-[26px] font-semibold py-[8px]">Join Us! 😎</p>
        <p className="text-[#8E8E8E] text-[18px] font-normal">Please provide all current information accurately.</p>
      </header>
      <div className="pt-[28px]">
        <Text>First name</Text>
        <Input value={form.firstName} onChange={(e) => setForm({...form,firstName: e.target.value})} />
        <Text>Last name</Text>
        <Input/>
        <Text>Username</Text>
        <Input/>
      </div>
      <Button>Continue</Button>
    </div>
  </div>
  )
}
