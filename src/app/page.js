import Image from "next/image";
import ProfileCard from "./components/ProfileCard";
import LinkTable from "./components/LinkTable";
import Footer from "./components/Footer";
import backdrop from '../../public/assets/myimage.jpeg'

export default function Home() {

  

  return (
    <>
     <div
     className=" flex items-center justify-center h-screen bg-black" >
      <div className="flex-row border-solid bg-purple-500 rounded-lg"
      style={{width: '40%'}}
      >
      <ProfileCard />
      <LinkTable />
      </div>
    </div>
    <div className="flex justify-center items-center">
      <Footer />
    </div>
    </>
   
  );
}
