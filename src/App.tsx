import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const PokemonByTypes = lazy(() => import("./pages/PokemonByTypes"));

function App() {
  return (
    <Router>
      <Suspense fallback={false}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/types/:type' element={<PokemonByTypes />} />
            <Route path='*' element={<Navigate to={"/"} replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
