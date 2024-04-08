import { PropsWithChildren, ReactNode } from "react";
import SpeechBreadcrumb from "./SpeechBreadcrumb";

const SpeechLayout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) => {
  const { id } = params;
  return (
    <>
      <div className="p-8">
        <SpeechBreadcrumb id={id} />
      </div>
      {children}
    </>
  );
};

export default SpeechLayout;
