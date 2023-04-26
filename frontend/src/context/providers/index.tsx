import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { HomePageProvider } from "../HomePageContext";
import { AnnouncementPageProvider } from "../AnnouncementPageContext";

interface IProvidersPropps {
 children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
 return (
  <>
   <HomePageProvider>
    <AnnouncementPageProvider>
    <RegisterUserProvider>{children}</RegisterUserProvider>
    </AnnouncementPageProvider>
   </HomePageProvider>
  </>
 );
};
export default Providers;
