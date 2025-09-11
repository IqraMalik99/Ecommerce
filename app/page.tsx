import CardList from "./component/Home/CardList";
import { Categories } from "./component/Home/Categories";
import { HeroBanner } from "./component/Home/HeroBanner";
import { Deal } from "./component/Home/Deal";
import { TopSeller } from "./component/Home/TopSeller";
import { AccordionDemo } from "./component/Home/Accordion";
import Footer from "./component/Home/Footer";
import BlogSection from "./component/Home/BlogSection";
import Testimonial from "./component/Home/Testimonal";





export default function Home() {
  return (
  <>
<HeroBanner/>
<Categories/>
<CardList/>
<Deal/>
<TopSeller/>
<Testimonial/>
<AccordionDemo/>
<BlogSection/>
<Footer/>
  </>
  );
}
