import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ReferanserPage } from "./pages/ReferanserPage";
import { OmOssPage } from "./pages/OmOssPage";
import { AktueltPage } from "./pages/AktueltPage";
import { AnsvarPage } from "./pages/AnsvarPage";
import { KontaktPage } from "./pages/KontaktPage";
import { KarrierePage } from "./pages/KarrierePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "referanser", Component: ReferanserPage },
      { path: "om-oss", Component: OmOssPage },
      { path: "aktuelt", Component: AktueltPage },
      { path: "ansvar", Component: AnsvarPage },
      { path: "kontakt", Component: KontaktPage },
      { path: "karriere", Component: KarrierePage },
    ],
  },
]);
