import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ReferanserPage } from "./pages/ReferanserPage";
import { OmOssPage } from "./pages/OmOssPage";
import { AktueltPage } from "./pages/AktueltPage";
import { AnsvarPage } from "./pages/AnsvarPage";
import { KontaktPage } from "./pages/KontaktPage";
import { KarrierePage } from "./pages/KarrierePage";
import { FruktPage } from "./pages/tjenester/Frukt";
import { LunsjPage } from "./pages/tjenester/Lunsj";
import { RenholdPage } from "./pages/tjenester/Renhold";
import { CateringPage } from "./pages/tjenester/Catering";
import { InneklimaPage } from "./pages/tjenester/Inneklima";
import { KantinePage } from "./pages/tjenester/Kantine";

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
      { path: "tjenester/frukt", Component: FruktPage },
      { path: "tjenester/lunsj", Component: LunsjPage },
      { path: "tjenester/renhold", Component: RenholdPage },
      { path: "tjenester/catering", Component: CateringPage },
      { path: "tjenester/inneklima", Component: InneklimaPage },
      { path: "tjenester/kantine", Component: KantinePage },
    ],
  },
]);
