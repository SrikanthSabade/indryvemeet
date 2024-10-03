"use client"; // Ensures the component is client-side only

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { toast } from "react-toastify";
import { Large } from "@/components/Large";
import { Small } from "@/components/Small";

function MeetingContent() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username"); // Get the username from query param
  const router = useRouter();

  if (!username) return <p>Loading...</p>;

  return (
    <div className="bg-[#000000] h-[100vh] overflow-hidden">
      <Large>
        <JaaSMeeting
          appId="vpaas-magic-cookie-a03a390d39ed4fd69d3be86f23ee08d6"
          roomName={`${username}-meeting-room`} // Generate unique room for the user
          configOverwrite={{
            prejoinPageEnabled: false,
          }}
          interfaceConfigOverwrite={{
            filmStripOnly: false,
          }}
          userInfo={{
            displayName: username, // Show username in the meeting
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "100vh";
          }}
          onReadyToClose={() => {
            toast.update("Meeting closed", {
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            router.push("/");
          }}
        />
      </Large>
      <Small>
        <JaaSMeeting
          appId="vpaas-magic-cookie-a03a390d39ed4fd69d3be86f23ee08d6"
          roomName={`${username}-meeting-room`} // Generate unique room for the user
          configOverwrite={{
            prejoinPageEnabled: false,
          }}
          interfaceConfigOverwrite={{
            filmStripOnly: false,
          }}
          userInfo={{
            displayName: username, // Show username in the meeting
          }}
          getIFrameRef={(iframeRef) => {
            iframeRef.style.height = "90vh";
          }}
          onReadyToClose={() => {
            toast.update("Meeting closed", {
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            router.push("/");
          }}
        />
      </Small>
    </div>
  );
}

export default function Meeting() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MeetingContent />
    </Suspense>
  );
}
