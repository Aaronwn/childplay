import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Activities } from './pages/Activities';
import { ActivityDetail } from './pages/ActivityDetail';
import { CategoryPage } from './pages/CategoryPage';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:slug" element={<ActivityDetail />} />
          
          {/* Age Categories */}
          <Route path="activities-for-1-year-olds" element={<CategoryPage title="Activities for 1 Year Olds" description="Simple, safe, and engaging activities for your one-year-old." filters={{ age: 1 }} />} />
          <Route path="activities-for-2-year-olds" element={<CategoryPage title="Activities for 2 Year Olds" description="Fun and educational activities for busy two-year-olds." filters={{ age: 2 }} />} />
          <Route path="activities-for-3-year-olds" element={<CategoryPage title="Activities for 3 Year Olds" description="Creative and active ideas for three-year-olds." filters={{ age: 3 }} />} />
          <Route path="age/3-4" element={<CategoryPage title="Activities for 3-4 Year Olds" description="Engaging activities for preschoolers." filters={{ age: 3 }} />} />
          <Route path="age/5-6" element={<CategoryPage title="Activities for 5-6 Year Olds" description="Challenging and fun activities for older kids." filters={{ age: 5 }} />} />
          
          {/* Type Categories */}
          <Route path="sensory-activities-for-toddlers" element={<CategoryPage title="Sensory Activities" description="Messy (and not-so-messy) sensory play ideas." filters={{ type: 'Sensory' }} />} />
          <Route path="easy-crafts-for-toddlers" element={<CategoryPage title="Easy Crafts" description="Simple crafts using household items." filters={{ type: 'Craft' }} />} />
          <Route path="gross-motor-activities-for-toddlers" element={<CategoryPage title="Gross Motor Activities" description="Get them moving and burning energy." filters={{ type: 'Active' }} />} />
          <Route path="fine-motor-activities-for-toddlers" element={<CategoryPage title="Fine Motor Activities" description="Help develop those little hand muscles." filters={{ type: 'Learning' }} />} />
          <Route path="indoor-activities-for-toddlers" element={<CategoryPage title="Indoor Activities" description="Perfect for when you're stuck inside." filters={{ space: 'normal' }} />} />
          
          {/* Situation Categories */}
          <Route path="5-minute-activities-for-toddlers" element={<CategoryPage title="5-Minute Activities" description="Quick ideas when you need a distraction fast." filters={{ time: 5 }} />} />
          <Route path="rainy-day-activities-for-toddlers" element={<CategoryPage title="Rainy Day Activities" description="Save the day when the weather doesn't cooperate." filters={{ situation: 'rainy-day' }} />} />
          <Route path="sick-day-activities" element={<CategoryPage title="Sick Day Activities" description="Low-key activities for when they're under the weather." filters={{ situation: 'sick-day' }} />} />
          <Route path="no-mess-activities-for-kids" element={<CategoryPage title="No Mess Activities" description="Fun without the cleanup." filters={{ situation: 'no-mess' }} />} />
          <Route path="screen-free-activities" element={<CategoryPage title="Screen-Free Activities" description="Unplug and play." filters={{ situation: 'screen-free' }} />} />
          <Route path="quiet-activities-for-kids" element={<CategoryPage title="Quiet Activities" description="Shhh... peaceful play ideas." filters={{ situation: 'quiet' }} />} />
          
          {/* Special Categories */}
          <Route path="energy/tired" element={<CategoryPage title="Tired Parent Mode" description="Activities where you can sit or lie down while they play." filters={{ tiredMode: true }} />} />
          <Route path="space/small" element={<CategoryPage title="Small Space Activities" description="Great ideas for apartments and small rooms." filters={{ space: 'small' }} />} />
          
          {/* Legal & Info */}
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
