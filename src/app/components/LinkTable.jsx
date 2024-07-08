import React from 'react'
import Link from './Link';
import { SlSocialGithub } from "react-icons/sl";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";

const LinkTable = () => {
  return (
    <div className="h-100 px-10  flex-row m-10">
      <Link icon={<SlSocialGithub />} social='My GitHub' link="https://github.com/Rhema-dev"/>
      <Link icon={<CgWebsite />} social='My Portfolio' link="https://personal-website-indol-zeta-24.vercel.app/"/>
      <Link icon={<ImWhatsapp/>} social='Whatsapp Me' link="https://wa.me/+2347041099662"/>
      <Link icon={<SiGmail/>} social='Email Me' link="mailto:emmarhema20000@gmail.com"/>
      <Link icon={<TbBrandTiktokFilled />} social='My Tiktok' link="https://www.tiktok.com/@khua.a"/>
    </div>
  )
}

export default LinkTable
