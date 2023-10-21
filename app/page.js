import { View } from "lib/scene";
import { view } from "./index.module.css";
import dynamic from "next/dynamic";

const Client = dynamic(() => import("./client"), { ssr: false });

export default function Home() {
  return (
    <>
      <h1 style={{ color: "white" }}>Hello</h1>
      <View className={view}>
        <ambientLight />
        <Client />
      </View>
    </>
  );
}
