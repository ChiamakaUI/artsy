import MainLayout from "../src/layouts/MainLayout";
import delivery from "../src/images/delivery_mob.png";
import deliveryWeb from "../src/images/delivery_web.png";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../AppContext";

const Main = () => {
  const { user } = useContext(UserContext);
  return (
    <MainLayout>
      <div className="w-[95%] mx-auto lg:hidden md:hidden">
        <Image src={delivery} alt="payment confirmation" className="w-full" />
      </div>
      <div className="hidden w-[82%] mx-auto lg:block md:block">
        <Image
          src={deliveryWeb}
          alt="payment confirmation"
          className="w-[88%] lg:w-[70%] h-[450px] mx-auto mb-6"
        />
      </div>

      <div className="text-center font-bold p-2 text-lg lg:text-4xl md:text-2xl">
        <p className="my-4 lg:my-4">
          Hey <span className="text-[#159947]">{user?.fullname || "there"}</span>,
          thank you for your purchase.
        </p>
        <p className="lg:mt-8">
          You are amazing. Cheers to being
          <span className="text-[#159947] text-xl lg:text-4xl ml-2">
            ARTSY!
          </span>
        </p>
      </div>
    </MainLayout>
  );
};

export default Main;
