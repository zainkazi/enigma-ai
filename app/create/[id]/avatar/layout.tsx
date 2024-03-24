import { PropsWithChildren } from "react";
import AvatarBreadcrumb from "./AvatarBreadcrumb";

const AvatarLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="p-8">
        <AvatarBreadcrumb />
      </div>
      {children}
    </>
  );
};

export default AvatarLayout;
