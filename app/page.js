import { View } from "lib/scene";
import { view } from "./index.module.css";
import dynamic from "next/dynamic";

const Client = dynamic(() => import("./client"), { ssr: false });

export default function Home() {
  return (
    <View className={view}>
      <ambientLight />
      <Client />
    </View>
  );
}
