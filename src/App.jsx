import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitsTicker from './components/BenefitsTicker';
import ExpertTestimonials from './components/ExpertTestimonials';
import Comparison from './components/Comparison';
import Ingredients from './components/Ingredients';
import Habit from './components/Habit';
import Science from './components/Science';
import Purchase from './components/Purchase';
import CustomerReviews from './components/CustomerReviews';
import Stats from './components/Stats';
import Technical from './components/Technical';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-paper text-ink">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BenefitsTicker />
      <ExpertTestimonials />
      <Comparison />
      <Ingredients />
      <Habit />
      <Science />
      <Purchase />
      <CustomerReviews />
      <Stats />
      <Technical />
      <FAQ />
      <Footer />
    </div>
  );
}
