import axios from "axios";
import {ChevronUp} from "lucide-react";
import {useEffect, useState} from "react";
import sidebarFrame from "../assets/sidebarFrame.svg";

interface coinInterface {
  item: {
    id: number;
    small: string;
    symbol: string;
    name: string;
    data: {total_volume_btc: number};
  };
}

const SideBar = ({customClass}: {customClass?: string}) => {
  const [coins, setCoins] = useState<coinInterface[]>([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        setCoins(res.data.coins.splice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div
        className={`bg-sidebarBackground text-white rounded-lg p-6 text-center mb-6 shadow-md ${customClass}`}
      >
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

      <div className={`bg-white rounded-lg p-6 shadow-md ${customClass}`}>
        <h2 className="text-lg font-bold mb-4">Trending Coins (24h)</h2>
        <div className="space-y-4">
          {coins.map((coin: any) => (
            <div
              key={coin.item.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  src={coin.item.small}
                  alt={coin.item.symbol}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{coin.item.name}</span>
                <span className="text-gray-600">({coin.item.symbol})</span>
              </div>
              <div className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded text-sm">
                <ChevronUp className="w-3 h-3" />
                <span>
                  {Number(coin.item.data.total_volume_btc).toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
