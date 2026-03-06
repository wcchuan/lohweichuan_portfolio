import React, { useState } from 'react';
import { projects, info, seoEvidence } from './data';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import SEOEvidence from './components/SEOEvidence';
import Footer from './components/Footer';
import FullScreenModal from './components/FullScreenModal';

function App() {
  const [hoveredImg, setHoveredImg] = useState({});
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleHover = (projectIdx, img) => {
    setHoveredImg(prev => ({ ...prev, [projectIdx]: img }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700 relative">
      <FullScreenModal image={fullScreenImage} onClose={() => setFullScreenImage(null)} />
      <Navigation />

      <main>
        <Hero info={info} />
        <Experience />
        <FeaturedProjects
          projects={projects}
          hoveredImg={hoveredImg}
          handleHover={handleHover}
          setFullScreenImage={setFullScreenImage}
        />
        <SEOEvidence seoEvidence={seoEvidence} />
      </main>

      <Footer info={info} setFullScreenImage={setFullScreenImage} />
    </div>
  );
}

export default App;