import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Stories from './Stories';
import StoryDetail from './StoryDetail';
import StoryForm from './StoryForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/stories" element={<Stories />}/>
          <Route path="/story-detail/:id" element={<StoryDetail />}/>
          <Route path="/create-story" element={<StoryForm />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
