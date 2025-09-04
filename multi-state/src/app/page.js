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
    setStep("Step1");
  };
  const handleOnClick = () => {
    setStep("Step3");
  };
  const handleOnBack1 = () => {
    setStep("Step2");
  };
  const handleOnClick1 = () => {
    setStep("Step4");
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Text>Confirm password</Text>
            <Input
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            />
          </div>
          <div className="flex gap-[8px]">
            <Button
              className1={" !w-[128px]"}
              onClick={handleOnBack}
              variant="secondary"
            >
              Back
            </Button>
            <Button
              className1={" !w-[280px]"}
              onClick={handleOnClick}
              variant="primary"
            >
              Continue 2/3
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "Step3") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
        <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px]">
          <header className="pb-[28px]">
            <img src="ima/Main 1.svg" />
            <p className="text-[#202124] text-[26px] font-semibold py-[8px]">
              Join Us! 😎
            </p>
            <p className="text-[#8E8E8E] text-[18px] font-normal">
              Please provide all current information accurately.
            </p>
          </header>
          <div>
            <p className="text-[#334155] mb-2">
              Date of birth{" "}
              <span className="text-[#E14942] text-[14px]">*</span>
            </p>
            <input
              type="date"
              className=" border mb-3 w-[416px] h-[44px] rounded-md p-3 text-[#8B8E95]"
            />
          </div>
          <div className="flex gap-[8px]">
            <Button
              className1={" !w-[128px]"}
              onClick={handleOnBack1}
              variant="secondary"
            >
              Back
            </Button>
            <Button
              className1={" !w-[280px]"}
              onClick={handleOnClick1}
              variant="primary"
            >
              Continue 3/3
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (step === "Step4") {
    return (
      <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
        <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px]">
          <header>
            <img src="ima/Main 1.svg" />
            <p className="text-[#202124] text-[26px] font-semibold py-[8px]">
              You're All Set 🔥
            </p>
            <p className="text-[#8E8E8E] text-[18px] font-normal">
              We have received your submission. Thank you!
            </p>
          </header>
        </div>
      </div>
    );
  }
}
