import { Navigate, Route, Routes } from "react-router-dom";
import { AddsPage, AnalyticsPage, CRMPage, MetaPage } from "../pages";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/meta" element={<MetaPage />} />
      <Route path="/google-adds" element={<AddsPage />} />
      <Route path="/google-analytics" element={<AnalyticsPage />} />
      <Route path="/crm" element={<CRMPage />} />
      <Route path="/" element={<Navigate to={"/meta"} />} />
    </Routes>
  );
};
