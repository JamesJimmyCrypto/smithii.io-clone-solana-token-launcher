'use client'
import Navbar from "./component/Navbar";
import CreateToken from "./component/createToken";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Navbar setOpen={setOpen} open={open} />
      <CreateToken setOpen={setOpen} open={open} />
    </>
  )
}
