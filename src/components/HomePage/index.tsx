import About from "./components/about";
import Access from "./components/Access";
import Functionalities from "./components/functionalities";
import HomeTitle from "./components/homeTitle";
import StyledHeader from "./components/styledHeader";
declare module '*.jpg';
declare module '*.gif';
declare module '*.png';
function HomePage() {
  return (
    <div>
        <StyledHeader />
        <HomeTitle />
        <About />
        <Functionalities/>
        <Access/>
    </div>
  );
}

export default HomePage;
