import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { EditDeleteUserProvider } from "../EditDeleteProfile";
import { HomePageProvider } from "../HomePageContext";
import { AnnouncementPageProvider } from "../AnnouncementPageContext";

interface IProvidersPropps {
 children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
 return (
  <>
   <HomePageProvider>
<<<<<<< HEAD
    <AnnouncementPageProvider>
    <RegisterUserProvider>{children}</RegisterUserProvider>
    </AnnouncementPageProvider>
=======
   <RegisterUserProvider>
   <EditDeleteUserProvider>{children}</EditDeleteUserProvider>
    </RegisterUserProvider>
>>>>>>> d7a9463c0316e31bfd24f79b576c5dcc4be4477d
   </HomePageProvider>
  </>
 );
};
export default Providers;
