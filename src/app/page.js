import { lazy } from "react";
import { ThemedComponent } from "./components/ex-use-theme";

export default function Home() {

  const LzyComponent = lazy(() => import("./components/ex-lazy-component"));

  return (
    <div className="bg-white h-screen p-4">
      {/* <UserForm/> */}
      {/* <FinalComponent /> */}
      {/* <MemoComponent /> */}
      {/* <CallbackComponent /> */}
      {/* <ReducerComponent /> */}
      {/* <ControlledAndUnControlledComponent/> */}
      {/* <Suspense fallback={<h2 className="text-black">Loading...</h2>}>
        <LzyComponent />
      </Suspense> */}
      <ThemedComponent />
    </div>
  );
}
