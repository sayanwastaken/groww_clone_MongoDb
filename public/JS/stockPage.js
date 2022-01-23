import navbar from "/JS/navbar.js";

const navDiv = document.getElementById("navDiv");

navDiv.innerHTML = navbar();

// const product = {
//   product_image: "https://groww.in/images/partners/icici_groww.svg",
//   product_name: "ICICI Prudential Technology",
//   amc: "ICICI",
//   risk: "High Risk",
//   category: "Equity",
//   rating: "5",
//   percentage_interval: ["2.32%", "95.53%", "41.88%"],
//   fund_Category: 4.5,
//   fund_size: "4532.50 Cr",
//   nav: 172.76,
//   return_percentage: 36.76,
//   price: 0,
//   symbol: "000002.SHZ",
// };

getClick();
async function getClick() {
  let data = await fetch("http://localhost:6789/redis_pro/clicked_get");
  let final = await data.json();

  let product = final[0];

  //  graph generation starts below------------------------

  let key = "PVGLLU3V7BS9R8FT";
  getDataFotGraph();
  async function getDataFotGraph() {
    let dataPoints = [];
    let linedata = [];
    let proSymbol = product.symbol;
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${proSymbol}&apikey=${key}`;

    let data = await fetch(url);
    let res = await data.json();
    const finalData = res["Monthly Time Series"];

    for (let k in finalData) {
      dataPoints.push(k);
    }
    for (let i = 0; i < dataPoints.length; i++) {
      linedata.push(finalData[dataPoints[i]]["4. close"]);
    }
    dataPoints.reverse();
    linedata.reverse();
    generateGraph(linedata, dataPoints);
  }

  function generateGraph(linedata, dataPoints) {
    let ctx = document.getElementById("myChart").getContext("2d");

    const data = {
      labels: dataPoints,
      datasets: [
        {
          label: product.product_name,
          data: linedata,
          backgroundColor: ["skyblue"],
          display: false,
          borderColor: ["#00d09c"],
          borderWidth: 3,
          radius: 0,
          hitRadius: 80,
          pointHoverRadius: 10,
          tension: 0.3,
          verticalLine: true,
          fill: false,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            ticks: {
              display: true,
              callback: (value) => {
                return "₹" + " " + value * 70;
              },
            },

            beginAtZero: false,
            grid: {
              display: false,
              borderColor: "#fff",
            },
          },
          x: {
            ticks: {
              display: false,
            },

            beginAtZero: false,
            grid: {
              display: false,
            },
          },
        },
      },
    };
    const stockChart = new Chart(ctx, config);
  }

  // graph generation finishes here ---------------------

  document.getElementById("nav-amt").innerHTML = `&#8377;${product.nav}`;

  document.getElementById("rating").textContent = product.rating;

  document.getElementById("fund-amt").innerHTML = `&#8377;${product.fund_size}`;

  document.getElementById("logoImg").src = product.product_image;

  document.getElementById("pro-title").textContent = product.product_name;

  document.getElementById("month-btn").onclick = () => {
    monthSip();
  };

  document.getElementById("oneTime-btn").onclick = () => {
    oneTime();
  };

  function oneTime() {
    let btn = document.getElementById("oneTime-btn");
    let btnNotClicked = document.getElementById("month-btn");

    let inputDiv = document.getElementById("input-Div");
    inputDiv.innerHTML = null;
    inputDiv.style.height = "20%";
    inputDiv.innerHTML = ` <div class="input-one">
  <div class="amt-title">Amount</div>
  <div class="input-amt" id="input-amt">
    <div  id="divvi" class="divvi" >
      &#8377;
      <input
        type="text"
        name=""
        id="given-amt"
        class="amt-input"
        placeholder="0"
      />
    </div>
  </div>
</div>`;
    btnNotClicked.style.color = "var(--primaryClr)";
    btnNotClicked.style.border = "0";
    btn.style.color = "#44475b";
    btn.style.borderBottom = "3px solid var(--primaryClr)";

    let sipBtn = document.getElementById("sip-btn");
    sipBtn.textContent = "GO TO CART";
    let btnDiv = document.getElementById("btnDiv1");
    btnDiv.style.top = "38%";
    let greenInput = document.getElementById("divvi");
    greenInput.style.height = "60%";
  }

  function monthSip() {
    let btn = document.getElementById("month-btn");
    let btnNotClicked = document.getElementById("oneTime-btn");

    let inputDiv = document.getElementById("input-Div");
    inputDiv.innerHTML = null;
    inputDiv.style.height = "30%";

    inputDiv.innerHTML = `<div class="input-one">
    <div class="amt-title">SIP Amount</div>
    <div class="input-amt" id="input-amt">
      <div  id="divvi" class="divvi" >
        &#8377;
        <input
          type="text"
          name=""
          id="given-amt"
          class="amt-input"
          placeholder="0"
        />
      </div>
    </div>
  </div>
  <div class="input-two">
    <div class="amt-title">Monthly SIP Date</div>
    <div class="input-amt">
      <div  id="divvi" class="divvi" >
        <i class="fa fa-calendar"></i>
        <input
          type="text"
          name=""
          id=""
          class="amt-input"
          placeholder="24th"
        />
      </div>
    </div>
  </div>`;

    btnNotClicked.style.color = "var(--primaryClr)";
    btnNotClicked.style.border = "0";
    btn.style.color = "#44475b";
    btn.style.borderBottom = "3px solid var(--primaryClr)";
    let sipBtn = document.getElementById("sip-btn");
    sipBtn.textContent = "GO TO CART";

    let btnDiv = document.getElementById("btnDiv1");
    btnDiv.style.top = "26%";
    let greenInput = document.getElementById("divvi");
    greenInput.style.height = "35%";
  }
  const cartArr = JSON.parse(localStorage.getItem("cartData")) || [];
  document.getElementById("ac-btn").onclick = () => {
    let price = document.getElementById("given-amt").value;

    const pro = {
      name: product.product_name,
      logo: product.product_image,
      rating: product.rating,
      nav: product.nav,
      category: product.category,
      fundSize: product.fund_size,
      price: price,
    };
    // console.log(price)

    cartArr.push(pro);
    console.log(cartArr);
    alert("Successfully Added To Cart");

    localStorage.setItem("cartData", JSON.stringify(cartArr));
  };

  document.getElementById("sip-btn").onclick = () => {
    window.location.href = "Grow_cart_page";
  };

  document.getElementById("groww-logo").onclick = () => {
    window.location.href = "Grow_Home_page";
  };
}
