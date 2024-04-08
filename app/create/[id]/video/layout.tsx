import { PropsWithChildren, ReactNode } from "react";
import VideoBreadcrumb from "./VideoBreadcrumb";

const VideoLayout = ({
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
        <VideoBreadcrumb id={id} />
      </div>
      {children}
    </>
  );
};

export default VideoLayout;
