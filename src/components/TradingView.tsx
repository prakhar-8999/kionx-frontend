// @ts-nocheck
import {memo, useEffect, useRef} from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
          "symbols": [
            [
              "Apple",
              "AAPL|1D"
            ],
            [
              "NASDAQ:AMD|1D"
            ],
            [
              "NASDAQ:MSFT|1D"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "500",
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "Andale Mono, monospace",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|5"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(41, 98, 255, 0.24)",
          "bottomColor": "rgba(209, 212, 220, 0.13)",
          "dateFormat": "MM/dd/yy",
          "timeHoursFormat": "12-hours"
        } `;
    container.current.appendChild(script);
    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
