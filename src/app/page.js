"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";
import illustration from "@/assets/ill.jpg";
import { Large } from "@/components/Large";
import {
  Button,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Small } from "@/components/Small";

export default function Home({ name }) {
  const router = useRouter();
  const MentoringIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M12 22L10 16H2L4 22H12ZM12 22H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const [username, setUsername] = useState("srikanth");

  const handlechange = (e) => {
    setUsername(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      name = username;
      // Redirect to meeting page with the username as query param
      router.push(`/meeting?username=${username}`);
    }
  };

  return (
    <div className="h-screen flex flex-col  w-screen bg-white">
      <div className="w-full h-[10vh] p-4  ">
        <div className="flex flex-row justify-between rounded-xl shadow-lg items-center gap-4">
          <div className="flex flex-row gap-2">
            <div className="h-full p-4 pr-0">
              <img
                src={logo.src}
                style={{ height: "40px", width: "auto" }}
                alt="logo"
              />
            </div>
            <div className="h-full flex flex-col p-4 pl-0 ">
              <h1 className="text-lg font-bold text-black">Meet</h1>
            </div>
          </div>
          <div
            onClick={() => router.push("/login")}
            className="p-4 flex cursor-pointer flex-row gap-2 items-center justify-center h-full"
          >
            <MentoringIcon />
            <div className="h-full flex flex-col justify-end">
              <h1 className="text-base  text-black">Support</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[90vh] flex flex-col items-center justify-center">
        <Large>
          <div className="flex w-[80vw]  ">
            <div className="w-full h-full bg-white flex grid grid-cols-5 gap-8">
              <div className="w-full col-span-3 h-full flex flex-col justify-center items-center">
                <img src={illustration.src} alt="logo" fill />
              </div>
              <div className="w-full col-span-2 h-full flex flex-col gap-2 ">
                <h1 className="text-lg text-start font-bold text-black">
                  MEET. CONNECT. COMMUNICATE.
                </h1>

                <h1 className="text-base text-start font-bold text-black">
                  Connect with your team, wherever you are.
                </h1>
                <br />
                <FormHelperText>
                  This username is fetched from JWT token recieved from WSO2.For
                  now we can select the name and proceed.
                </FormHelperText>
                <Select
                  size="small"
                  className="mb-4"
                  value={username}
                  onChange={handlechange}
                >
                  <MenuItem value="srikanth">Srikanth</MenuItem>
                  <MenuItem value="raghav">Raghav</MenuItem>
                  <MenuItem value="pavan">Pavan</MenuItem>
                  <MenuItem value="kiran">Kiran</MenuItem>
                </Select>
                <TextField
                  variant="outlined"
                  disabled
                  label="Username"
                  value={username}
                />
                <br />
                <Button variant="contained" onClick={handleLogin}>
                  Join Meeting
                </Button>
              </div>
            </div>
          </div>
        </Large>
        <Small>
          <div className="flex w-[80vw]  overflow-y-auto">
            <div className="w-full h-full bg-white flex grid grid-cols-5 gap-8">
              <div className="w-full col-span-5 h-full flex flex-col justify-center items-center">
                <img src={illustration.src} alt="logo" fill />
              </div>
              <div className="w-full col-span-5 h-full flex flex-col gap-2 ">
                <h1 className="text-lg text-start font-bold text-black">
                  MEET. CONNECT. COMMUNICATE.
                </h1>

                <h1 className="text-base text-start font-bold text-black">
                  Connect with your team, wherever you are.
                </h1>
                <br />
                <FormHelperText>
                  This username is fetched from JWT token recieved from WSO2.For
                  now we can select the name and proceed.
                </FormHelperText>
                <Select
                  size="small"
                  className="mb-4"
                  value={username}
                  onChange={handlechange}
                >
                  <MenuItem value="srikanth">Srikanth</MenuItem>
                  <MenuItem value="raghav">Raghav</MenuItem>
                  <MenuItem value="pavan">Pavan</MenuItem>
                  <MenuItem value="kiran">Kiran</MenuItem>
                </Select>
                <TextField
                  variant="outlined"
                  disabled
                  label="Username"
                  value={username}
                />
                <br />
                <Button variant="contained" onClick={handleLogin}>
                  Join Meeting
                </Button>
              </div>
            </div>
          </div>
        </Small>
      </div>

      {/* <button onClick={() => router.push("/login")}>Navigate to login</button> */}
    </div>
  );
}
