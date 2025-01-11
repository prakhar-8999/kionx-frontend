import {TrendingUp} from "lucide-react";
import sidebarFrame from "../assets/sidebarFrame.svg";

const SideBar = () => {
  return (
    <>
      <div className="bg-sidebarBackground text-white rounded-lg p-6 text-center mb-6 shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Get Started with KoinX <br /> for FREE
        </h2>
        <p className="text-md mb-6">
          With our range of features that you can equip for <br /> free, KoinX
          allows you to be more educated and <br /> aware of your tax reports.
        </p>
        <img
          src={sidebarFrame}
          alt="Get Started"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <button className="w-[80%] bg-white text-black font-medium py-2 rounded-lg">
          Get Started for FREE →
        </button>
      </div>

      {/* Trending Coins */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Trending Coins (24h)</h2>
        <div className="space-y-4">
          {[
            {
              name: "Ethereum",
              symbol: "ETH",
              change: "8.21",
              image:
                "https://www.iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.1024.png",
            },
            {
              name: "Bitcoin",
              symbol: "BTC",
              change: "5.26",
              image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            },
            {
              name: "Polygon",
              symbol: "MATIC",
              change: "4.32",
              image: "https://cdn-icons-png.freepik.com/512/12114/12114233.png",
            },
          ].map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  src={coin.image}
                  alt={coin.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{coin.name}</span>
                <span className="text-gray-600">({coin.symbol})</span>
              </div>
              <div className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded text-sm">
                <TrendingUp className="w-3 h-3" />
                <span>{coin.change}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
