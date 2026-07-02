import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import DevApplications from './pages/DevApplications'
import ExpertiseVideo from './pages/ExpertiseVideo'
import References from './pages/References'
import Temoignages from './pages/Temoignages'
import CasEtraelec from './pages/CasEtraelec'
import TemoignageEtraelec from './pages/TemoignageEtraelec'
import EquipeDavney from './pages/EquipeDavney'
import Partenaires from './pages/Partenaires'
import DevenirPartenaire from './pages/DevenirPartenaire'
import Jobs from './pages/Jobs'
import Article from './pages/Article'
import Contact from './pages/Contact'
import Cgu from './pages/Cgu'
import MentionsLegales from './pages/MentionsLegales'
import ProtectionDonnees from './pages/ProtectionDonnees'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dev-applications" element={<DevApplications />} />
        <Route path="/expertise-video" element={<ExpertiseVideo />} />
        <Route path="/references" element={<References />} />
        <Route path="/temoignages" element={<Temoignages />} />
        <Route path="/cas-etraelec" element={<CasEtraelec />} />
        <Route path="/temoignage-etraelec" element={<TemoignageEtraelec />} />
        <Route path="/equipe-davney" element={<EquipeDavney />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/protection-donnees" element={<ProtectionDonnees />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
