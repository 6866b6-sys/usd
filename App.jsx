import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import TradingPage from './pages/TradingPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import MarketsPage from './pages/MarketsPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import FuturesPage from './pages/FuturesPage.jsx';
import LeveragePage from './pages/LeveragePage.jsx';
import PerpetualsPage from './pages/PerpetualsPage.jsx';
import ColdWalletPage from './pages/ColdWalletPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/markets" element={<MarketsPage />} />

          {/* Protected Routes */}
          <Route
            path="/trading"
            element={
              <ProtectedRoute>
                <TradingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <PortfolioPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          
          {/* Advanced Trading Routes */}
          <Route
            path="/futures"
            element={
              <ProtectedRoute>
                <FuturesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leverage"
            element={
              <ProtectedRoute>
                <LeveragePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perpetuals"
            element={
              <ProtectedRoute>
                <PerpetualsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cold-wallet"
            element={
              <ProtectedRoute>
                <ColdWalletPage />
              </ProtectedRoute>
            }
          />

          {/* 404 Fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-background flex items-center justify-center px-4">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
                  <p className="text-xl text-muted-foreground mb-8">Page not found</p>
                  <a href="/" className="text-primary hover:underline">
                    Back to home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
