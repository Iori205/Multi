"use client";
import { useState } from "react";
import { Input, Text, Button } from "@/components";

export default function Home() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirm: "",
  });
  console.log(form);
  const [step, setStep] = useState("Step1");

  function submit() {
    setStep("Step2");
  }
  const handleOnBack = () => {
    setForm("Step1");
  };

  if (step === "Step1") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
        <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px]">
          <header>
            <img src="ima/Main 1.svg" />
            <p className="text-[#202124] text-[26px] font-semibold py-[8px]">
              Join Us! 😎
            </p>
            <p className="text-[#8E8E8E] text-[18px] font-normal">
              Please provide all current information accurately.
            </p>
          </header>
          <div className="pt-[28px]">
            <Text>First name</Text>
            <Input
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <Text>Last name</Text>
            <Input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            <Text>Username</Text>
            <Input
              value={form.userName}
              onChange={(e) => setForm({ ...form, userName: e.target.value })}
            />
          </div>
          <Button onClick={submit}>Continue 1/3 </Button>
        </div>
      </div>
    );
  }

  if (step === "Step2") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
        <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px]">
          <header>
            <img src="ima/Main 1.svg" />
            <p className="text-[#202124] text-[26px] font-semibold py-[8px]">
              Join Us! 😎
            </p>
            <p className="text-[#8E8E8E] text-[18px] font-normal">
              Please provide all current information accurately.
            </p>
          </header>
          <div className="pt-[28px]">
            <Text>Email</Text>
            <Input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Text>Phone number</Text>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Text>Password</Text>
            <Input
              value={form.email}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Text>Confirm password</Text>
            <Input
              value={form.email}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
          </div>
          <div>
            <Button
              onClick={handleOnBack}
              className={"bg-amber-900"}
              variant="secondary"
            >
              Back
            </Button>
            <Button variant="primary">Continue 2/3</Button>
          </div>
        </div>
      </div>
    );
  }
}
