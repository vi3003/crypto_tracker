import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if(prices2.length>0) {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label: 'Crypto1',
          data: prices1.map((price) => price[1]),
          borderColor: '#D81B60',
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: 'crypto1',
        },
        {
          label: 'Crypto2',
          data: prices2.map((price) => price[1]),
          borderColor: '#6934da',
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: 'crypto2',
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: '#D81B60',
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: 'rgb(216, 27, 96,0.1)',
          pointRadius: 0,
          yAxisID: 'crypto1',
        },
      ],
    });
  }
};
