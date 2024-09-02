import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/LandingPage"
import LearnMorePage from "./pages/LearnMorePage"
import ListExcessFoodPage from "./pages/ListExcessFoodPage"
import UpcomingPickupsPage from "./pages/UpcomingPickupsPage"
import ViewDonationsPage from "./pages/ViewDonationsPage"
import MyListedItems from "./pages/MyListedItems"

function App() {
  return (
    <div>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/auth" element={<AuthPage/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/leaderboard" element={<ViewDonationsPage/>} />
    <Route path="/upcoming-pickups" element={<UpcomingPickupsPage/>} />
    <Route path="/list-food" element={<ListExcessFoodPage/>} />
    <Route path="/my-listings" element={<MyListedItems/>} />
    <Route path="/learn-more" element={<LearnMorePage/>} />
  </Routes>
  </BrowserRouter>
    </div>
  
  )
}

export default App
