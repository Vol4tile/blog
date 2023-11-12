import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import MainPage from "./pages/MainPage";
import CVPage from "./pages/CVPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";

import ProjectsPage from "./pages/ProjectsPage";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route index={true} element={<MainPage />} />
            <Route path="/CV" element={<CVPage />} />
            <Route path="/Me" element={<AboutPage />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Projects" element={<ProjectsPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
