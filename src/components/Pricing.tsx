import axios from "axios";
import {ChevronUp} from "lucide-react";
import {useEffect, useState} from "react";

const Pricing = () => {
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
      <div className="flex items-start gap-8 mb-6">
        <div>
          <div className="text-3xl font-bold">
            ${price.usd.toLocaleString()}
          </div>
          <div className="text-gray-600">₹ {price.inr.toLocaleString()}</div>
        </div>
        <div className="flex items-center gap-2 text-green-500 bg-green-50 px-2 py-1 rounded">
          <ChevronUp className="w-4 h-4" />
          <span>2.51%</span>
          <span className="text-gray-500">(24H)</span>
        </div>
      </div>
    </>
  );
};

export default Pricing;
