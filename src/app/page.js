import Image from "next/image";
import ProfileCard from "./components/ProfileCard";
import LinkTable from "./components/LinkTable";
import Footer from "./components/Footer";

export default function Home() {
 const backgroundImage = '/assets/backdrop.webp'
  
  return (
    <>
     <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     }}
     className=" flex items-center justify-center h-screen" >
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
