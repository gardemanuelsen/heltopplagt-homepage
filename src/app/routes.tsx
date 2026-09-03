import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ReferanserPage } from "./pages/ReferanserPage";
import { OmOssPage } from "./pages/OmOssPage";
import { AktueltPage } from "./pages/AktueltPage";
import { ArtikkelPage } from "./pages/ArtikkelPage";
import { AnsvarPage } from "./pages/AnsvarPage";
import { KontaktPage } from "./pages/KontaktPage";
import { KarrierePage } from "./pages/KarrierePage";
import { FruktPage } from "./pages/tjenester/Frukt";
import { LunsjPage } from "./pages/tjenester/Lunsj";
import { RenholdPage } from "./pages/tjenester/Renhold";
import { CateringPage } from "./pages/tjenester/Catering";
import { InneklimaPage } from "./pages/tjenester/Inneklima";
import { KantinePage } from "./pages/tjenester/Kantine";
import { SubServicePage } from "./pages/tjenester/SubServicePage";
import { TjenesterPage } from "./pages/TjenesterPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "referanser", Component: ReferanserPage },
      { path: "om-oss", Component: OmOssPage },
      { path: "aktuelt", Component: AktueltPage },
      { path: "aktuelt/:slug", Component: ArtikkelPage },
      { path: "ansvar", Component: AnsvarPage },
      { path: "kontakt", Component: KontaktPage },
      { path: "karriere", Component: KarrierePage },
      { path: "tjenester", Component: TjenesterPage },
      { path: "tjenester/frukt", Component: FruktPage },
      { path: "tjenester/lunsj", Component: LunsjPage },
      { path: "tjenester/renhold", Component: RenholdPage },
      { path: "tjenester/catering", Component: CateringPage },
      { path: "tjenester/inneklima", Component: InneklimaPage },
      { path: "tjenester/kantine", Component: KantinePage },
      /* The combined "lunsjesker" sub-page was split into the three box pages
         (Hverdags-/Go'-/Superlunsjen) — keep the retired URL alive. */
      {
        path: "tjenester/lunsj/lunsjesker",
        element: <Navigate to="/tjenester/lunsj/golunsjen" replace />,
      },
      { path: "tjenester/:service/:slug", Component: SubServicePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
  // Standalone design exploration, not linked from the live site's navigation.
  // Lazy-loaded so its Phosphor-icons weight doesn't ship to real site visitors.
  {
    path: "/landing-demo",
    lazy: () => import("./pages/LandingDemo").then((m) => ({ Component: m.LandingDemo })),
  },
]);
