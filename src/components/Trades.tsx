import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRef} from "react";
import RandomChart from "./RandomChart";

interface CryptoCard {
  name: string;
  symbol: string;
  price: string;
  change: string;
  logo: string;
  color: string;
}

const Trades = () => {
  const youMayLikeRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);

  const youMayLike: CryptoCard[] = [
    {
      name: "BNB",
      symbol: "BNB",
      price: "$319.34",
      change: "+0.52%",
      logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
      color: "#4CAF50",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "$109.33",
      change: "-2.89%",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
      color: "#F44336",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: "$0.634810",
      change: "+0.78%",
      logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      color: "#4CAF50",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: "$0.614869",
      change: "-1.57%",
      logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      color: "#F44336",
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      price: "$41.05",
      change: "-3.78%",
      logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=040",
      color: "#4CAF50",
    },
  ];

  const trendingCoins: CryptoCard[] = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "$45,332.83",
      change: "+0.10%",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png",
      color: "#F44336",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,375.15",
      change: "-0.21%",
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      color: "#4CAF50",
    },
    {
      name: "Staked ETH",
      symbol: "stETH",
      price: "$2,371.72",
      change: "-0.34%",
      logo: "https://s2.coinmarketcap.com/static/img/coins/200x200/8085.png",
      color: "#F44336",
    },
    {
      name: "Uniswap",
      symbol: "UNI",
      price: "$7.3192",
      change: "-4.02%",
      logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
      color: "#4CAF50",
    },
    {
      name: "Centrifuge",
      symbol: "CFG",
      price: "$0.773600",
      change: "-1.76%",
      logo: "https://cryptologos.cc/logos/centrifuge-cfg-logo.png",
      color: "#F44336",
    },
  ];

  const scroll = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 200;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 space-y-8">
      <div className="px-8 md:px-32">
        <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
        <div className="relative">
          <div
            ref={youMayLikeRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
          >
            {youMayLike.map((coin) => (
              <div
                key={coin.symbol}
                className="min-w-[300px] p-4 border rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={coin.logo}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium">{coin.symbol}</span>
                  <span
                    className={`text-sm ${
                      coin.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.change}
                  </span>
                </div>
                <div className="text-lg font-semibold">{coin.price}</div>
                <div className="h-[60px] w-full flex justify-center mb-5 mt-2">
                  <RandomChart color={coin.color} />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(youMayLikeRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(youMayLikeRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-8 md:px-32">
        <h2 className="text-2xl font-semibold mb-4">Trending Coins</h2>
        <div className="relative">
          <div
            ref={trendingRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
          >
            {trendingCoins.map((coin) => (
              <div
                key={coin.symbol}
                className="min-w-[300px] p-4 border rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={coin.logo}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium">{coin.symbol}</span>
                  <span
                    className={`text-sm ${
                      coin.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.change}
                  </span>
                </div>
                <div className="text-lg font-semibold">{coin.price}</div>
                <div className="h-[60px] w-full flex justify-center mb-5 mt-2">
                  <RandomChart color={coin.color} />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll(trendingRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(trendingRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trades;
