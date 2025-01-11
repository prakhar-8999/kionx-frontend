import {useState} from "react";
import AboutBitcoin from "./components/AboutBitcoin";
import Navbar from "./components/Navbar";
import Performance from "./components/Performance";
import Pricing from "./components/Pricing";
import Sentiments from "./components/Sentiments";
import SideBar from "./components/SideBar";
import TeamSection from "./components/Teams";
import Tokenomics from "./components/Tokenomics";
import Trades from "./components/Trades";
import TradingView from "./components/TradingView";

const tabs = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];
const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div>
        <div className="min-h-screen bg-background">
          <Navbar />

          <div className="px-4 sm:px-12 py-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-medium text-gray-600">
                Cryptocurrencies
              </span>
              <span>›</span>
              <span className="text-black font-medium">Bitcoin</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                      alt="Bitcoin"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <h1 className="text-2xl font-bold">Bitcoin</h1>
                    <span className="text-gray-600">BTC</span>
                    <span className="px-3 py-1 bg-gray-500 text-white rounded text-sm">
                      Rank #1
                    </span>
                  </div>

                  <Pricing />
                  <TradingView />
                </div>

                <div className="flex gap-6 my-8 border-b overflow-x-scroll">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(index)}
                      className={`pb-4 w-full text-md font-medium whitespace-nowrap  ${
                        index === selectedTab
                          ? "text-blue-600 border-b-4 border-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <Performance />
                <Sentiments />
                <AboutBitcoin />
                <Tokenomics />
                <TeamSection />
              </div>

              <div className="md:w-[25%] hidden md:block">
                <SideBar />
              </div>
            </div>
          </div>
          <div className="px-4">
            <Trades />
          </div>
          <div className="mt-5 px-4 mb-5">
            <SideBar customClass="block md:hidden" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
