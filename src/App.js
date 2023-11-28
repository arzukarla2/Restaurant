import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Workshop from "./pages/Workshop";
import Classes from "./pages/Classes";
import Restaurant from "./pages/Restaurant";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/shop":
        title = "";
        metaDescription = "";
        break;
      case "/workshop":
        title = "";
        metaDescription = "";
        break;
      case "/classes":
        title = "";
        metaDescription = "";
        break;
      case "/restaurant":
        title = "";
        metaDescription = "";
        break;
      case "/reservation":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
export default App;
