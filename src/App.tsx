import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/templates/PageLayout'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'
import { ExperiencePage } from './pages/ExperiencePage'

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/projects"    element={<ProjectsPage />} />
          <Route path="/skills"      element={<SkillsPage />} />
          <Route path="/experience"  element={<ExperiencePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
