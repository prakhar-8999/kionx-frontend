import {TrendingUp} from "lucide-react";
import logo from "./assets/logo.svg";
import AboutBitcoin from "./components/AboutBitcoin";
import Performance from "./components/Performance";
import Sentiments from "./components/Sentiments";
import SideBar from "./components/SideBar";
import TradingView from "./components/TradingView";
const App = () => {
  return (
    <>
      <div>
        <div className="min-h-screen bg-background">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-12 py-4 bg-white border-b">
            <div className="text-2xl font-bold text-blue-600">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm font-medium">
                Crypto Taxes
              </a>
              <a href="#" className="text-sm font-medium">
                Free Tools
              </a>
              <a href="#" className="text-sm font-medium">
                Resource Center
              </a>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                Get Started
              </button>
            </div>
          </nav>

          <div className="px-4 sm:px-12 py-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-medium text-gray-600">
                Cryptocurrencies
              </span>
              <span>›</span>
              <span className="text-black font-medium">Bitcoin</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Main Content */}
              <div className="flex-1">
                {/* Bitcoin Header */}
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
                      <div className="text-3xl font-bold">$46,953.04</div>
                      <div className="text-gray-600">₹ 39,42,343</div>
                    </div>
                    <div className="flex items-center gap-2 text-green-500 bg-green-50 px-2 py-1 rounded">
                      <TrendingUp className="w-4 h-4" />
                      <span>2.51%</span>
                      <span className="text-gray-500">(24H)</span>
                    </div>
                  </div>
                  <TradingView />
                </div>

                {/* Tabs */}
                <div className="flex gap-6 my-8 border-b overflow-x-scroll">
                  {[
                    "Overview",
                    "Fundamentals",
                    "News Insights",
                    "Sentiments",
                    "Team",
                    "Technicals",
                    "Tokenomics",
                  ].map((tab, index) => (
                    <button
                      key={tab}
                      className={`pb-4 w-full text-md font-medium ${
                        index === 0
                          ? "text-blue-600 border-b-4 border-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Performance */}
                {/* <div className="bg-white rounded-lg p-6 mt-6">
                  <h2 className="text-xl font-bold mb-6">Performance</h2>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-sm text-gray-600">Today's Low</div>
                      <div>46,930.22</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Today's High</div>
                      <div>49,343.83</div>
                    </div>
                  </div>
                </div> */}
                <Performance />
                <Sentiments />
                <AboutBitcoin />
              </div>

              {/* Sidebar */}
              <div className="sm:w-[25%]">
                {/* Get Started Card */}
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
