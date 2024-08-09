import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MetaPage } from "../pages";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/meta" element={<MetaPage />} />
      <Route path="/" element={<Navigate to={"/meta"} />} />
    </Routes>
  );
};
