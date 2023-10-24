import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "../pages/customer-details/search";
import Overview from "../pages/customer-details/overview";
import ActivityLogs from "../pages/customer-details/activity-logs";
import PaymentDetails from "../pages/customer-details/payment-details";
import Communications from "../pages/customer-details/communications";
import Reports from "../pages/reports";
import Dashboard from "../pages/dashboard";

function AppRoutes(props) {
  return (
    <div className="app-routes">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer-details">
          <Route path="search" element={<Search />} />
          <Route path="overview" element={<Overview />} />
          <Route path="activity-logs" element={<ActivityLogs />} />
          <Route path="payment-details" element={<PaymentDetails />} />
          <Route path="communication" element={<Communications />} />
        </Route>
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
