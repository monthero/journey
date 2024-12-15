import { Navigate, Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import { App } from './App.tsx';

const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const ProfessionalJourneyPage = lazy(
  () => import('./pages/professional-jorney/ProfessionalJourneyPage.tsx')
);
const AcademicPathPage = lazy(() => import('./pages/AcademicPathPage.tsx'));

export const AppRouter = () => {
  return (
    <Router root={App}>
      <Route path="/personal" component={AboutPage} />
      <Route path="/professional" component={ProfessionalJourneyPage} />
      <Route path="/academic" component={AcademicPathPage} />
      <Route path="*paramName" component={() => <Navigate href="/personal" />} />
    </Router>
  );
};
