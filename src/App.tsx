import { AppLayout } from "@diligentcorp/atlas-react-bundle";
import { Outlet, Route, Routes } from "react-router";
import "./styles.css";

import Navigation from "./Navigation.js";
import ObjectListPage from "./pages/ObjectListPage.js";
import ObjectDetailPage from "./pages/ObjectDetailPage.js";
import RecordDetailPage from "./pages/RecordDetailPage.js";
import SchemaManagementPage from "./pages/SchemaManagementPage.js";
import SchemaViewerPage from "./pages/SchemaViewerPage.js";
import FormPreviewDestinationPage from "./pages/FormPreviewDestinationPage.js";
import { FORM_PREVIEW_DESTINATION_ROUTE } from "./pages/formPreviewShared.js";

/**
 * Milestone MVP routes only — see PROTOTYPE_SCOPE.md in this folder.
 */
export default function App() {
  return (
    <Routes>
      <Route
        element={
          <AppLayout orgName="Acme Corp — MVP prototype" navigation={<Navigation />}>
            <Outlet />
          </AppLayout>
        }
      >
        <Route path="/" element={<ObjectListPage />} />
        <Route path="/objects/:objectType" element={<ObjectDetailPage />} />
        <Route path="/objects/:objectType/records/:recordId" element={<RecordDetailPage />} />
        <Route path="/objects/:objectType/schema" element={<SchemaManagementPage />} />
        <Route path="/schema-viewer" element={<SchemaViewerPage />} />
      </Route>
      <Route path={FORM_PREVIEW_DESTINATION_ROUTE} element={<FormPreviewDestinationPage />} />
    </Routes>
  );
}
