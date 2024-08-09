import "./App.css";
import { AppTheme } from "./theme";
import { DashboardRoutes } from "./dashboard/routes/DashboardRoutes";

function App() {
  return (
    <AppTheme>
      <DashboardRoutes />
    </AppTheme>
  );
}

export default App;
