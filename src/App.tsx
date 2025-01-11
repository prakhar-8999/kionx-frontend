import axios from "axios";
import {ChevronUp} from "lucide-react";
import {useEffect, useState} from "react";
import AboutBitcoin from "./components/AboutBitcoin";
import Navbar from "./components/Navbar";
import Performance from "./components/Performance";
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
  const [price, setPrice] = useState({
    inr: 8128662,
    inr_24h_change: 0.7701690540020005,
    usd: 94328,
    usd_24h_change: 0.7313891910569587,
  });
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
      )
      .then((res) => {
        setPrice(res.data.bitcoin);
      })
      .catch((err) => console.log(err));
  }, []);
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

                  <div className="flex items-start gap-8 mb-6">
                    <div>
                      <div className="text-3xl font-bold">
                        ${price.usd.toLocaleString()}
                      </div>
                      <div className="text-gray-600">
                        ₹ {price.inr.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-500 bg-green-50 px-2 py-1 rounded">
                      <ChevronUp className="w-4 h-4" />
                      <span>2.51%</span>
                      <span className="text-gray-500">(24H)</span>
                    </div>
                  </div>
                  <TradingView />
                </div>

                <div className="flex gap-6 my-8 border-b overflow-x-scroll">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(index)}
                      className={`pb-4 w-full text-md font-medium ${
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
