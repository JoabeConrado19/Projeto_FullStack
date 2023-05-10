import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { HomePageProvider } from "../HomePageContext";
import { EditAdressProvider } from "../EditAddress";
import { ResetPasswordProvider } from "../ResetPasswordContext";
import { AnnouncementPageProvider } from "../AnnouncementPageContext";

interface IProvidersPropps {
 children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
 return (
  <RegisterUserProvider>
   <ResetPasswordProvider>
    <EditAdressProvider>
     <AnnouncementPageProvider>
      <HomePageProvider>{children}</HomePageProvider>
     </AnnouncementPageProvider>
    </EditAdressProvider>
   </ResetPasswordProvider>
  </RegisterUserProvider>
 );
};
export default Providers;
