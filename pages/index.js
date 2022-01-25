import HeadLayout from '../components/headLayout.js';
import Player from '../components/player.js';
import FooterLayout from "../components/footerLayout";

function Home() {
  return (
    <div className="base">
      <HeadLayout/>
      <main>
        <h1 className="title">Random play</h1>
        <Player/>
      </main>
      <FooterLayout/>
    </div>
  )
}

export default Home;
