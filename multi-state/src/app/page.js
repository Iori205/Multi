"use client";
import { useState, useEffect } from "react";
import { Input, Text, Button } from "@/components";
import {motion, AnimatePresence} from "framer-motion"

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
    const newErrors = {};
     if (form.firstName === "") {
      newErrors.firstName = "First name cannot contain special characters or numbers."
     } else {
     newErrors.firstName = null;
     }


     if (form.lastName === "") {
       newErrors.lastName = "Last name cannot contain special characters or numbers."
      } else {
        newErrors.lastName = null;
      }

       if (form.userName === "") {
       newErrors.userName = "This username is already taken. Please choose another one."
      } else {
        newErrors.userName = null;
      }

      setErrors(newErrors)


      if (!newErrors.firstName && !newErrors.lastName) {
        setStep("Step2");
      }
   
  }

  const handleOnBack = () => {
    setStep("Step1")
  };


  const handleOnClick = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+.[^s@]+$/

    if (emailRegex.test(form.email)) {
      newErrors.email = null
    } else {
      newErrors.email = "Please provide a valid email address."
    }

    const phoneRegex = /^\d{8}$/

    if (phoneRegex.test(form.phone)) {
      newErrors.phone = null
    } else {
      newErrors.phone = "Please enter a valid phone number."
    }

    setErrors(newErrors) 

    if (!newErrors.email && !newErrors.phone) {
      setStep("Step3")
    }
  };


  const handleOnBack1 = () => {
    setStep("Step2");
  };


  const handleOnClick1 = () => {
    setStep("Step4");
  };

  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   const newErrors = {};

  //   const phoneRegex = /^\d{8}$/;

  //   if (phoneRegex.test(form.phone)) {
  //     newErrors.phone = null;
  //   } else {
  //     newErrors.phone = "Please enter a valid phone number.";
  //   }
  //   setErrors(newErrors);
  // }, [form.phone]);

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
            {errors.firstName && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.firstName}</div>}
            <Text>Last name</Text>
            <Input
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            {errors.lastName && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.lastName}</div>}
            <Text>Username</Text>
            <Input
              value={form.userName}
              onChange={(e) => setForm({ ...form, userName: e.target.value })}
            />
            {errors.userName && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.userName}</div>}
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
            {errors.email && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.email}</div>}
            <Text>Phone number</Text>
            <Input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.phone}</div>}
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
            <Text>Date of birth</Text>
            <input
              type="date"
              className=" border mb-3 w-[416px] h-[44px] rounded-md p-3 text-[#8B8E95]"
            />
          </div>
          <Text>Profile image</Text>
          <div className="bg-[#7F7F800D] h-[180px] relative text-[#09090B] font-[14px] flex justify-center items-center">
            <img className="absolute top-11" src="ima/file.png" />
            Add image
            <input type="file" className="absolute opacity-0 inset-0" />
          </div>
          <div className="flex gap-[8px] mt-[-48px]">
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



// import { motion, AnimatePresence } from "framer-motion";

// export default function Home() {
//   // step-ээ тоон байдлаар удирдаж байгаа гэж үзлээ
//   // const [step, setStep] = useState(1);

//   return (
//     <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
//       <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px] overflow-hidden relative">
        
//         {/* AnimatePresence ашиглаж байна */}
//         <AnimatePresence mode="wait">
//           {step === "Step1" && (
//             <motion.div
//               key="step1"
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 40 }}
//               transition={{ duration: 0.4 }}
//             >
//               <header>
//                 <img src="ima/Main 1.svg" />
//                 <p className="text-[#202124] text-[26px] font-semibold py-[8px]">
//                   Join Us! 😎
//                 </p>
//                 <p className="text-[#8E8E8E] text-[18px] font-normal">
//                   Please provide all current information accurately.
//                 </p>
//               </header>

//               <div className="pt-[28px]">
//                 <Text>First name</Text>
//                 <Input
//                   value={form.firstName}
//                   onChange={(e) =>
//                     setForm({ ...form, firstName: e.target.value })
//                   }
//                 />
//                 {errors.firstName && (
//                   <div className="text-[#E14942] pb-[12px] pt-[-4px]">
//                     {errors.firstName}
//                   </div>
//                 )}

//                 <Text>Last name</Text>
//                 <Input
//                   value={form.lastName}
//                   onChange={(e) =>
//                     setForm({ ...form, lastName: e.target.value })
//                   }
//                 />
//                 {errors.lastName && (
//                   <div className="text-[#E14942] pb-[12px] pt-[-4px]">
//                     {errors.lastName}
//                   </div>
//                 )}

//                 <Text>Username</Text>
//                 <Input
//                   value={form.userName}
//                   onChange={(e) =>
//                     setForm({ ...form, userName: e.target.value })
//                   }
//                 />
//                 {errors.userName && (
//                   <div className="text-[#E14942] pb-[12px] pt-[-4px]">
//                     {errors.userName}
//                   </div>
//                 )}
//               </div>

//               <button onClick={submit}>Continue 1/3</button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }



// if (step === "Step1") {
//     return (
//       <div className="bg-[#F4F4F4] w-full h-screen pt-[182px] flex justify-center">
//         <div className="bg-[#FFFFFF] w-[480px] h-fit border-transparent rounded-lg p-[32px]">
//           <header>
//             <img src="ima/Main 1.svg" />
//             <p className="text-[#202124] text-[26px] font-semibold py-[8px]">
//               Join Us! 😎
//             </p>
//             <p className="text-[#8E8E8E] text-[18px] font-normal">
//               Please provide all current information accurately.
//             </p>
//           </header>
//           <div className="pt-[28px]">
//             <Text>First name</Text>
//             <Input
//               value={form.firstName}
//               onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//             />
//             {errors.firstName && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.firstName}</div>}
//             <Text>Last name</Text>
//             <Input
//               value={form.lastName}
//               onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//             />
//             {errors.lastName && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.lastName}</div>}
//             <Text>Username</Text>
//             <Input
//               value={form.userName}
//               onChange={(e) => setForm({ ...form, userName: e.target.value })}
//             />
//             {errors.userName && <div className="text-[#E14942] pb-[12px] pt-[-4px]">{errors.userName}</div>}
//           </div>
//           <Button onClick={submit}>Continue 1/3 </Button>
//         </div>
//       </div>
//     );
//   }
