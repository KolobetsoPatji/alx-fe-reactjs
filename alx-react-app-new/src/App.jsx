import WelcomeMessage from './components/WelcomeMessage'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Counter />
      <Footer />

      {/* Example usage of UserProfile */}
      <UserProfile
        name= "Alice"
        age={25}
        bio="Loves hiking and photography"
        />
        <UserProfile
          name="BOb"
          age={30}
          bio="Enjoys cooking and traveling"
          />
    </div>
  );
}
       
export default App;
