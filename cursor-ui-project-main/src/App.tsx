import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';

// Getting Started
import { Introduction } from './pages/Introduction';
import { Installation } from './pages/Installation';
import { QuickStart } from './pages/QuickStart';

// Foundations
import { ColorsPage } from './pages/foundations/ColorsPage';
import { TypographyPage } from './pages/foundations/TypographyPage';
import { SpacingPage } from './pages/foundations/SpacingPage';

// Components
import { ButtonPage } from './pages/ButtonPage';
import { InputPage } from './pages/InputPage';
import { CardPage } from './pages/CardPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { SwitchPage } from './pages/SwitchPage';
import { BadgePage } from './pages/BadgePage';
import { AvatarPage } from './pages/AvatarPage';
import { TabsPage } from './pages/TabsPage';
import { BreadcrumbPage } from './pages/BreadcrumbPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-bg-primary">
        <Header onMenuClick={handleMenuClick} />
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        <MainContent>
          <Routes>
            {/* Getting Started */}
            <Route path="/" element={<Introduction />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/quick-start" element={<QuickStart />} />

            {/* Foundations */}
            <Route path="/foundations/colors" element={<ColorsPage />} />
            <Route path="/foundations/typography" element={<TypographyPage />} />
            <Route path="/foundations/spacing" element={<SpacingPage />} />

            {/* Components */}
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/components/card" element={<CardPage />} />
            <Route path="/components/checkbox" element={<CheckboxPage />} />
            <Route path="/components/switch" element={<SwitchPage />} />
            <Route path="/components/badge" element={<BadgePage />} />
            <Route path="/components/avatar" element={<AvatarPage />} />
            <Route path="/components/tabs" element={<TabsPage />} />
            <Route path="/components/breadcrumb" element={<BreadcrumbPage />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;

