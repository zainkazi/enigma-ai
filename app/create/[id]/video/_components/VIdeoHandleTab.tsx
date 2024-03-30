import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const VideoHandleTab = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className=" rounded-xl text-center p-8 max-w-sm mx-auto flex flex-col justify-center">
      <div className="text-2xl text-indigo-500 font-bold mb-2">
        This is a success create! <span className="text-green-500">✔</span>
      </div>
      <p className="text-white mb-8">
        Congrats! You have built the most amazing video in the world!
      </p>
      <div className=" flex flex-col space-y-2">
        <Button type="button">
          Download
          <Download className="ml-2 w-5" />
        </Button>
        <Link href="/dashboard">
          <Button type="button" className="w-full" variant="secondary">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VideoHandleTab;
