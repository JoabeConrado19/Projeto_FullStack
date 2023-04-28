import { ReactNode } from "react";
import { RegisterUserProvider } from "../RegisterLoginContext";
import { HomePageProvider } from "../HomePageContext";
import { EditAdressProvider } from "../EditAddress";
import { AnnouncementPageProvider } from "../AnnouncementPageContext";

interface IProvidersPropps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersPropps) => {
  return (
    <>
      <HomePageProvider>
        <AnnouncementPageProvider>
          <EditAdressProvider>
            <RegisterUserProvider>{children}</RegisterUserProvider>
          </EditAdressProvider>
        </AnnouncementPageProvider>
      </HomePageProvider>
    </>
  );
};
export default Providers;
