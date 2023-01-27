/* eslint-disable import/no-cycle */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./url";

const Home = React.lazy(() => import("./Home"));

const Services = React.lazy(() => import("./Services"));
const Projects = React.lazy(() => import("./Projects"));
const Contact = React.lazy(() => import("./Contact"));
const HandoutProject = React.lazy(() => import("./HandoutProject"));

function Routers() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex align-center justify-center  ">
            <div className="flex align-center justify-center font-bold mt-60">
              Loading...
            </div>
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.Home} element={<Home />} />

          <Route path={NonAuthRoutes.Services} element={<Services />} />
          <Route path={NonAuthRoutes.Projects} element={<Projects />} />
          <Route path={NonAuthRoutes.Contact} element={<Contact />} />
          <Route
            path={NonAuthRoutes.HandoutProject}
            element={<HandoutProject />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;
