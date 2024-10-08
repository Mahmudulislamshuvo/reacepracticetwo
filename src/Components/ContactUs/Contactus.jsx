import React, { useState } from "react";
import { MdChat } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Services from "../../assets/services.svg";

const Contactus = () => {
  //  All states
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleform = (e) => {
    e.preventDefault();
  };
  // take all values from inputs inside state
  const Handleinputs = (eveent) => {
    const { id, value } = eveent.target;
    setinputs({
      ...inputs,
      [id]: value,
    });
  };

  //   handle submit and show valus
  const handleSubmit = () => {
    localStorage.setItem("InputsTest", JSON.stringify(inputs));
    // JSON.parse(localStorage.getItem("InputsTest"));
    alert("done");
    setinputs({
      name: "",
      email: "",
      text: "",
    });
  };

  return (
    <div>
      <div>
        <div className="px-[180px] mt-[60px]">
          <h2 className="font-Poppins text-[48px] font-extrabold">
            CONTACT US
          </h2>
          <h5 className="font-Poppins text-xs text-[#5A5959] pr-[240px]">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </h5>
        </div>
        <div className="flex">
          <div className="w-full pr-[150px] pl-[185px]">
            <div className="w-[472px] mt-[40px]">
              <div className="flex items-center justify-between">
                <button className="bg-black text-white flex justify-center items-center px-[18px] py-[10px] rounded-md">
                  <span className="pr-[10px]">
                    <MdChat />
                  </span>
                  VIA SUPPORT CHAT
                </button>
                <button className="bg-black text-white flex justify-center items-center px-[60px] py-[10px] rounded-md">
                  <span className="pr-[10px]">
                    <IoCallSharp />
                  </span>
                  VIA CALL
                </button>
              </div>
              <button className="flex items-center justify-center border border-solid border-black w-full text-[16px] font-Poppins font-semibold py-[10px] mt-[17px] rounded-md">
                <span className="pr-[10px]">
                  <MdChat />
                </span>
                VIA EMAIL FORM
              </button>
              <div className="mx-3 my-5">
                <form action="#" onSubmit={handleform}>
                  <div className="flex flex-col gap-y-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=""
                        id="name"
                        name="name"
                        onChange={Handleinputs}
                        value={inputs.name}
                        className="border border-solid border-black block w-full rounded-md py-1.5 px-4 focus:outline-none"
                      />
                      <label
                        htmlFor="name"
                        className="absolute top-[-11px] left-8 bg-white z-10 text-[14px] font-semibold"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder=""
                        id="email"
                        name="email"
                        onChange={Handleinputs}
                        value={inputs.email}
                        className="border border-solid border-black block w-full rounded-md py-1.5 px-4 focus:outline-none"
                      />
                      <label
                        htmlFor="email"
                        className="absolute top-[-11px] left-8 bg-white z-10 text-[14px] font-semibold"
                      >
                        E-Mail
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        type="text"
                        placeholder=""
                        id="text"
                        name="text"
                        onChange={Handleinputs}
                        value={inputs.text}
                        className="border border-solid border-black block w-full rounded-md py-1.5 px-4 focus:outline-none"
                      />
                      <label
                        htmlFor="text"
                        className="absolute top-[-11px] left-8 bg-white z-10 text-[14px] font-semibold"
                      >
                        TEXT
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse">
                    <button
                      className="px-[80px] py-[10px] bg-black text-white font-Poppins font-semibold rounded-md mt-[20px]"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full mr-[100px]">
            <img src={Services} alt={Services} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
