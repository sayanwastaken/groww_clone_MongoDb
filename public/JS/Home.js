

document.querySelector(".goHomeOnClickLogo").onclick=()=>{
    window.location.href="Home"
}

let watchMasterList = [
    {
        "stockName": "ICICI Prudential Technology",
        "price": "36.76"
    },
]
let watchListStore = localStorage.setItem("WatchListData", JSON.stringify(watchMasterList))
let StockData = document.querySelector(".StockData")

let container = document.getElementById("navbar-main");

// container.innerHTML = navbar();
let borderBottom = document.getElementsByClassName("bottomBorderOnClick")

let UsStocksContent = document.querySelector(".UsStocksContent")
let FDdiv = document.querySelector(".FDdiv")
let MutualContent = document.querySelector(".MutualContent")
let StockContentDiv = document.querySelector(".StockContentDiv")

let footerMainDiv=document.querySelector(".footerMainDiv")
let bB = Array.from(borderBottom)
bB.forEach((el, i) => {
    console.log(el, i);
    el.onclick = () => {
        bB[i].style.borderBottom = "3px solid #00d09c";
        if (i === 0) {
            StockContentDiv.style.visibility = "visible"
            FDdiv.style.visibility = "hidden"
            MutualContent.style.visibility = "hidden"
            UsStocksContent.style.visibility = "hidden"
            footerMainDiv.style.top="370%"
            bB[1].style.borderBottom = "hidden";
            bB[2].style.borderBottom = "hidden";
            bB[3].style.borderBottom = "hidden";

        }
        if (i === 1) {
            FDdiv.style.visibility = "hidden"
            StockContentDiv.style.visibility = "hidden"
            MutualContent.style.visibility = "visible"
            UsStocksContent.style.visibility = "hidden"
            bB[0].style.borderBottom = "hidden";
            bB[2].style.borderBottom = "hidden";
            bB[3].style.borderBottom = "hidden";
            footerMainDiv.style.top="230%"
        }
        if (i === 2) {
            MutualContent.style.visibility = "hidden"
            FDdiv.style.visibility = "visible"
            StockContentDiv.style.visibility = "hidden"
            UsStocksContent.style.visibility = "hidden"
            bB[1].style.borderBottom = "hidden";
            bB[0].style.borderBottom = "hidden";
            bB[3].style.borderBottom = "hidden";
            footerMainDiv.style.top="320%"
        }
        if (i === 3) {
            UsStocksContent.style.visibility = "visible"
            MutualContent.style.visibility = "hidden"
            FDdiv.style.visibility = "hidden"
            StockContentDiv.style.visibility = "hidden"
            bB[1].style.borderBottom = "hidden";
            bB[2].style.borderBottom = "hidden";
            bB[0].style.borderBottom = "hidden";
            footerMainDiv.style.top="240%"
        }
    }
})
// .bottomBorderOnClick{
// border-bottom: 3px solid #00d09c;
// line-height: 37px;

let svgData = [

    ``
    ,
    `<svg width="100" height="25"><g><line class="spk43Opacity3" x1="0" y1="24" x2="100" y2="24" fill="transparent" shapeRendering="crispEdges" stroke="var(--subText)" stroke-width="1.5" pointerEvents="none" stroke-dasharray="4.5,1.5"></line><path class="visx-linepath" d="M0,3.2258064516129714L1.3888888888888888,1L2.7777777777777777,4.477822580645135L4.166666666666667,5.776209677419406L5.555555555555555,4.9879032258065905L6.944444444444445,7.352822580645029L8.333333333333334,7.723790322580594L9.722222222222221,15.050403225806432L11.11111111111111,9.903225806451463L12.5,12.963709677419352L13.88888888888889,19.17741935483849L15.277777777777779,12.546370967742105L16.666666666666668,15.235887096774006L18.055555555555557,18.435483870967783L19.444444444444443,19.73387096774205L20.833333333333332,20.1512096774193L22.22222222222222,21.542338709677352L23.61111111111111,19.73387096774205L25,21.588709677419455L26.38888888888889,23.026209677419192L27.77777777777778,19.965725806451726L29.166666666666668,18.852822580645032L30.555555555555557,19.084677419354705L31.944444444444443,19.31653225806438L33.333333333333336,19.919354838709623L34.72222222222222,20.61491935483865L36.111111111111114,20.522177419354865L37.5,18.945564516128815L38.888888888888886,20.846774193548328L40.27777777777778,17.786290322580438L41.666666666666664,18.80645161290335L43.05555555555556,17.879032258064647L44.44444444444444,19.687499999999947L45.833333333333336,19.780241935483733L47.22222222222222,20.61491935483865L48.611111111111114,20.104838709677196L50,18.71370967741914L51.388888888888886,19.780241935483733L52.77777777777778,18.760080645161246L54.166666666666664,19.687499999999947L55.55555555555556,18.760080645161246L56.94444444444444,15.931451612903032L58.333333333333336,12.129032258064434L59.72222222222222,4.616935483871025" fill="transparent" stroke-linecap="round" stroke="var(--primaryClr)" stroke-width="2" stroke-opacity="0.8" shapeRendering="geometricPrecision"></path></g></svg>`
    ,
    `<svg width="100" height="25"><g><line class="spk43Opacity3" x1="0" y1="1" x2="100" y2="1" fill="transparent" shapeRendering="crispEdges" stroke="var(--subText)" stroke-width="1.5" pointerEvents="none" stroke-dasharray="4.5,1.5"></line><path class="visx-linepath" d="M0,7.119266055045777L1.3888888888888888,15.981651376146361L2.7777777777777777,16.403669724770474L4.166666666666667,19.217125382262843L5.555555555555555,17.247706422018055L6.944444444444445,19.14678899082528L8.333333333333334,20.553516819571463L9.722222222222221,20.623853211009028L11.11111111111111,17.81039755351666L12.5,20.975535168195574L13.88888888888889,24L15.277777777777779,22.733944954128305L16.666666666666668,22.311926605504194L18.055555555555557,18.865443425076297L19.444444444444443,18.373088685015258L20.833333333333332,17.951070336391147L22.22222222222222,17.81039755351666L23.61111111111111,18.162079510703204L25,23.226299694189343L26.38888888888889,22.593272171253815L27.77777777777778,23.437308868501397L29.166666666666668,21.256880733944556L30.555555555555557,21.116207951070066L31.944444444444443,22.94495412844036L33.333333333333336,22.94495412844036L34.72222222222222,23.366972477063833L36.111111111111114,20.694189602446592L37.5,22.452599388379323L38.888888888888886,22.030581039755212L40.27777777777778,20.623853211009028L41.666666666666664,16.403669724770474L43.05555555555556,16.333333333332906L44.44444444444444,16.685015290519452L45.833333333333336,16.122324159021492L47.22222222222222,15.911314984709435L48.611111111111114,18.93577981651386L50,17.458715596330112L51.388888888888886,18.865443425076297L52.77777777777778,17.107033639143566L54.166666666666664,15.911314984709435L55.55555555555556,16.403669724770474L56.94444444444444,17.036697247705998L58.333333333333336,18.51376146788975L59.72222222222222,15.489296636085324" fill="transparent" stroke-linecap="round" stroke="var(--growwRed)" stroke-width="2" stroke-opacity="0.8" shapeRendering="geometricPrecision"></path></g></svg>`
    ,
    `<svg width="100" height="25"><g><line class="spk43Opacity3" x1="0" y1="14.703065134099505" x2="100" y2="14.703065134099505" fill="transparent" shapeRendering="crispEdges" stroke="var(--subText)" stroke-width="1.5" pointerEvents="none" stroke-dasharray="4.5,1.5"></line><path class="visx-linepath" d="M0,8.53448275862061L1.3888888888888888,13.909961685823767L2.7777777777777777,12.984674329501972L4.166666666666667,17.302681992337078L5.555555555555555,15.187739463601579L6.944444444444445,10.076628352490333L8.333333333333334,8.886973180076627L9.722222222222221,9.327586206896548L11.11111111111111,9.107279693486587L12.5,9.59195402298846L13.88888888888889,10.649425287356312L15.277777777777779,11.001915708812328L16.666666666666668,15.496168582375443L18.055555555555557,10.781609195402368L19.444444444444443,10.649425287356312L20.833333333333332,11.66283524904221L22.22222222222222,10.737547892720215L23.61111111111111,10.473180076628303L25,6.331417624521006L26.38888888888889,2.982758620689644L27.77777777777778,3.6877394636014778L29.166666666666668,1L30.555555555555557,2.4540229885058196L31.944444444444443,3.4233716475095655L33.333333333333336,6.727969348658974L34.72222222222222,7.609195402298816L36.111111111111114,7.741379310344872L37.5,11.486590038314201L38.888888888888886,12.235632183907986L40.27777777777778,9.327586206896548L41.666666666666664,7.1245210727969415L43.05555555555556,6.860153256705029L44.44444444444444,10.605363984674359L45.833333333333336,10.164750957854439L47.22222222222222,10.649425287356312L48.611111111111114,13.909961685823767L50,14.042145593869623L51.388888888888886,15.936781609195364L52.77777777777778,24L54.166666666666664,23.250957854406014L55.55555555555556,22.10536398467426L56.94444444444444,20.342911877394574L58.333333333333336,19.02107279693481L59.72222222222222,15.980842911877316" fill="transparent" stroke-linecap="round" stroke="var(--growwRed)" stroke-width="2" stroke-opacity="0.8" shapeRendering="geometricPrecision"></path></g></svg>`
    ,
    `<svg width="100" height="25"><g><line class="spk43Opacity3" x1="0" y1="12.040000000000026" x2="100" y2="12.040000000000026" fill="transparent" shapeRendering="crispEdges" stroke="var(--subText)" stroke-width="1.5" pointerEvents="none" stroke-dasharray="4.5,1.5"></line><path class="visx-linepath" d="M0,1L1.3888888888888888,4.105000000000054L2.7777777777777777,4.220000000000077L4.166666666666667,4.105000000000054L5.555555555555555,5.024999999999999L6.944444444444445,6.980000000000054L8.333333333333334,9.05L9.722222222222221,9.280000000000053L11.11111111111111,8.935000000000105L12.5,10.085000000000104L13.88888888888889,9.510000000000105L15.277777777777779,9.625L16.666666666666668,9.625L18.055555555555557,11.695000000000078L19.444444444444443,12.155000000000053L20.833333333333332,11.810000000000105L22.22222222222222,13.075L23.61111111111111,11.465000000000027L25,10.430000000000053L26.38888888888889,11.35L27.77777777777778,11.695000000000078L29.166666666666668,11.925L30.555555555555557,12.730000000000052L31.944444444444443,12.845000000000079L33.333333333333336,15.490000000000027L34.72222222222222,18.710000000000104L36.111111111111114,18.710000000000104L37.5,18.825L38.888888888888886,19.860000000000106L40.27777777777778,19.4L41.666666666666664,19.055000000000053L43.05555555555556,19.630000000000052L44.44444444444444,21.585000000000104L45.833333333333336,24L47.22222222222222,23.425L48.611111111111114,21.010000000000105L50,18.480000000000054L51.388888888888886,19.515000000000025L52.77777777777778,21.7L54.166666666666664,19.860000000000106L55.55555555555556,21.240000000000027L56.94444444444444,19.17000000000008L58.333333333333336,18.135000000000105L59.72222222222222,16.410000000000103L61.111111111111114,16.87000000000008" fill="transparent" stroke-linecap="round" stroke="var(--growwRed)" stroke-width="2" stroke-opacity="0.8" shapeRendering="geometricPrecision"></path></g></svg>`
]

let data = [
    {
        "id": "001",
        "product_image": "https://groww.in/images/partners/icici_groww.svg",
        "product_name": "ICICI Prudential Technology",
        "amc": "ICICI",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "5",
        "percentage_interval": ["2.32%", "95.53%", "41.88%"],
        "fund_Category": "4.5",
        "fund_size": "4532.50 Cr",
        "nav": "172.76",
        "return_percentage": "36.76",
        "price": "0",
        "symbol": "000002.SHZ"
    },
    {
        "id": "002",
        "product_image": "https://groww.in/images/partners/tata_groww.svg",
        "product_name": "TATA Digital India Fund Direct Growth",
        "amc": "TATA",
        "risk": "Low Risk",
        "category": "Debt",
        "rating": "5",
        "percentage_interval": ["2.06%", "91.46%", "40.94%"],
        "fund_Category": "8.2",
        "fund_size": "8232.50 Cr",
        "nav": "41.71",
        "return_percentage": "36.44",
        "price": "0",
        "symbol": "IBM"
    },
    {
        "id": "003",
        "product_image": "https://groww.in/images/partners/axis_groww.svg",
        "product_name": "Axis Small Cap Fund Direct Growth",
        "amc": "Axis",
        "risk": "Moderate Risk",
        "category": "Hybrid",
        "rating": "3",
        "percentage_interval": ["1.03%", "77.84%", "34.28%"],
        "fund_Category": "1.2",
        "fund_size": "1249.30 Cr",
        "nav": "65.35",
        "return_percentage": "26.05",
        "price": "0",
        "symbol": "TSCO.LON"
    },
    {
        "id": "004",
        "product_image": "https://groww.in/images/partners/ppfas_groww.svg",
        "product_name": "Paragh Parikh Flexi Cap Fund Direct Growth",
        "amc": "Paragh Parikh",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "3",
        "percentage_interval": ["1.22%", "64.55%", "31.13%"],
        "fund_Category": "0.8",
        "fund_size": "828.10 Cr",
        "nav": "53.79",
        "return_percentage": "24.91",
        "price": "0",
        "symbol": "SHOP.TRT"
    },
    {
        "id": "005",
        "product_image": "https://groww.in/images/partners/uti_groww.svg",
        "product_name": "UTI Flexi Cap Fund Direct Growth",
        "amc": "UTI",
        "risk": "High Risk",
        "category": "Debt",
        "rating": "4",
        "percentage_interval": ["1.59%", "66.88%", "28.50%"],
        "fund_Category": "1.8",
        "fund_size": "1835.60 Cr",
        "nav": "281.65",
        "return_percentage": "21.47",
        "price": "0",
        "symbol": "GPV.TRV"
    },
    {
        "id": "006",
        "product_image": "https://groww.in/images/partners/kotak_groww.svg",
        "product_name": "Kotak Bluechip Fund Direct Growth",
        "amc": "Kotak",
        "risk": "Moderate Risk",
        "category": "Hybrid",
        "rating": "4",
        "percentage_interval": ["1.35%", "56.73%", "23.95%"],
        "fund_Category": "3.8",
        "fund_size": "3289.90 Cr",
        "nav": "424.52",
        "return_percentage": "18.48",
        "price": "0",
        "symbol": "DAI.DEX"
    },
    {
        "id": "007",
        "product_image": "https://groww.in/images/partners/birla_groww.svg",
        "product_name": "Aditya Birla Sun Life Corporate Bond",
        "amc": "Aditya Birla",
        "risk": "Low Risk",
        "category": "Equity",
        "rating": "3",
        "percentage_interval": ["0.01%", "4.90%", "9.12%"],
        "fund_Category": "0.7",
        "fund_size": "782.10 Cr",
        "nav": "89.57",
        "return_percentage": "2.17",
        "price": "0",
        "symbol": "RELIANCE.BSE"
    },
    {
        "id": "008",
        "product_image": "https://groww.in/images/partners/hdfc_groww.svg",
        "product_name": "HDFC Index Sensex Direct Plan Growth",
        "amc": "HDFC",
        "risk": "Moderate Risk",
        "category": "Debt",
        "rating": "4",
        "percentage_interval": ["1.40%", "52.53%", "21.32%"],
        "fund_Category": "6.7",
        "fund_size": "6719.30 Cr",
        "nav": "549.44",
        "return_percentage": "17.16",
        "price": "0",
        "symbol": "600104.SHH"
    },
    {
        "id": "009",
        "product_image": "https://groww.in/images/partners/sbi_groww.svg",
        "product_name": "SBI Technology Oppurtunities Fund Direct Growth",
        "amc": "SBI",
        "risk": "High Risk",
        "category": "Hybrid",
        "rating": "4",
        "percentage_interval": ["2.09%", "83.30%", "38.09%"],
        "fund_Category": "5.8",
        "fund_size": "5816.80 Cr",
        "nav": "168.57",
        "return_percentage": "32.96",
        "price": "0",
        "symbol": "000002.SHZ"
    },
    {
        "id": "010",
        "product_image": "https://groww.in/images/partners/nippon_groww.png",
        "product_name": "Nippon India Pharma",
        "amc": "Nippon India Pharma",
        "risk": "Low Risk",
        "category": "Equity",
        "rating": "5",
        "percentage_interval": ["0.96%", "37.18%", "25.98%"],
        "fund_Category": "3.6",
        "fund_size": "3610.60 Cr",
        "nav": "325.24",
        "return_percentage": "9.61",
        "price": "0",
        "symbol": "IBM"
    },
    {
        "id": "011",
        "product_image": "https://groww.in/images/partners/icici_groww.svg",
        "product_name": "ICICI Prudential Commodities Fund Direct Growth",
        "amc": "ICICI",
        "risk": "Moderate Risk",
        "category": "Debt",
        "rating": "4",
        "percentage_interval": ["1.87%", "132.05%", "36.71%"],
        "fund_Category": "7.5",
        "fund_size": "7581.50 Cr",
        "nav": "26.11",
        "return_percentage": "2.57",
        "price": "0",
        "symbol": "TSCO.LON"
    },
    {
        "id": "012",
        "product_image": "https://groww.in/images/partners/tata_groww.svg",
        "product_name": "TATA Buisness Cycle Fund Direct Growth",
        "amc": "TATA",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "4",
        "percentage_interval": ["1.64%", "64.11%", "42.79%"],
        "fund_Category": "3.6",
        "fund_size": "3681.50 Cr",
        "nav": "10.76",
        "return_percentage": "26.98",
        "price": "0",
        "symbol": "SHOP.TRT"
    },
    {
        "id": "013",
        "product_image": "https://groww.in/images/partners/axis_groww.svg",
        "product_name": "Axis Mid Cap Direct Growth",
        "amc": "Axis",
        "risk": "Low Risk",
        "category": "Debt",
        "rating": "4",
        "percentage_interval": ["1.39%", "67.27%", "29.53%"],
        "fund_Category": "5.8",
        "fund_size": "5189.30 Cr",
        "nav": "126.81",
        "return_percentage": "32.11",
        "price": "0",
        "symbol": "GPV.TRV"
    },
    {
        "id": "014",
        "product_image": "https://groww.in/images/partners/hdfc_groww.svg",
        "product_name": "HDFC Short Term Debt Fund Direct Plan Growth",
        "amc": "HDFC",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "3",
        "percentage_interval": ["3.70%", "79.14%", "27.19%"],
        "fund_Category": "3.1",
        "fund_size": "3100.80 Cr",
        "nav": "51.44",
        "return_percentage": "19.29",
        "price": "0",
        "symbol": "DAI.DEX"
    },
    {
        "id": "015",
        "product_image": "https://groww.in/images/partners/sbi_groww.svg",
        "product_name": "SBI Banking & Financial Services Fund Direct Growth",
        "amc": "SBI",
        "risk": "Moderate Risk",
        "category": "Debt",
        "rating": "5",
        "percentage_interval": ["0.68%", "128.14%", "24.15%"],
        "fund_Category": "4.6",
        "fund_size": "4619.70 Cr",
        "nav": "95.13",
        "return_percentage": "28.15",
        "price": "0",
        "symbol": "RELIANCE.BSE"
    },
    {
        "id": "016",
        "product_image": "https://groww.in/images/partners/icici_groww.svg",
        "product_name": "ICICI Prudential Short term Fund Direct Plan Growth",
        "amc": "ICICI",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "5",
        "percentage_interval": ["1.97%", "82.12%", "46.67%"],
        "fund_Category": "4.5",
        "fund_size": "4532.50 Cr",
        "nav": "172.76",
        "return_percentage": "36.76",
        "price": "0",
        "symbol": "000002.SHZ"
    },
    {
        "id": "017",
        "product_image": "https://groww.in/images/partners/tata_groww.svg",
        "product_name": "TATA Large & Mid Cap Fund Direct Growth",
        "amc": "TATA",
        "risk": "Low Risk",
        "category": "Debt",
        "rating": "5",
        "percentage_interval": ["1.98%", "93.81%", "38.97%"],
        "fund_Category": "8.2",
        "fund_size": "8232.50 Cr",
        "nav": "41.71",
        "return_percentage": "36.44",
        "price": "0",
        "symbol": "IBM"
    },
    {
        "id": "018",
        "product_image": "https://groww.in/images/partners/axis_groww.svg",
        "product_name": "Axis Bluechip Fund Direct Growth",
        "amc": "Axis",
        "risk": "Moderate Risk",
        "category": "Hybrid",
        "rating": "3",
        "percentage_interval": ["0.97%", "87.91%", "32.39%"],
        "fund_Category": "1.2",
        "fund_size": "1249.30 Cr",
        "nav": "65.35",
        "return_percentage": "26.05",
        "price": "0",
        "symbol": "TSCO.LON"
    },
    {
        "id": "019",
        "product_image": "https://groww.in/images/partners/ppfas_groww.svg",
        "product_name": "Paragh Parikh Tax Server Fund Direct Growth",
        "amc": "Paragh Parikh",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "3",
        "percentage_interval": ["0.91%", "72.28%", "33.14%"],
        "fund_Category": "0.8",
        "fund_size": "828.10 Cr",
        "nav": "53.79",
        "return_percentage": "24.91",
        "price": "0",
        "symbol": "SHOP.TRT"
    },
    {
        "id": "020",
        "product_image": "https://groww.in/images/partners/uti_groww.svg",
        "product_name": "UTI Nifty Index Fund Direct Growth",
        "amc": "UTI",
        "risk": "High Risk",
        "category": "Debt",
        "rating": "3",
        "percentage_interval": ["0.14%", "81.34%", "15.14%"],
        "fund_Category": "1.8",
        "fund_size": "1835.60 Cr",
        "nav": "281.65",
        "return_percentage": "21.47",
        "price": "0",
        "symbol": "GPV.TRV"
    },
    {
        "id": "021",
        "product_image": "https://groww.in/images/partners/kotak_groww.svg",
        "product_name": "Kotak Smallcap Fund Direct Growth",
        "amc": "Kotak",
        "risk": "Moderate Risk",
        "category": "Hybrid",
        "rating": "4",
        "percentage_interval": ["2.16%", "65.14%", "21.58%"],
        "fund_Category": "3.8",
        "fund_size": "3289.90 Cr",
        "nav": "424.52",
        "return_percentage": "18.48",
        "price": "0",
        "symbol": "DAI.DEX"
    },
    {
        "id": "022",
        "product_image": "https://groww.in/images/partners/birla_groww.svg",
        "product_name": "Aditya Birla Sun Life Digital India Fund Direct Growth",
        "amc": "Aditya Birla",
        "risk": "Low Risk",
        "category": "Equity",
        "rating": "3",
        "percentage_interval": ["0.91%", "24.15%", "19.92%"],
        "fund_Category": "0.7",
        "fund_size": "782.10 Cr",
        "nav": "89.57",
        "return_percentage": "2.17",
        "price": "0",
        "symbol": "RELIANCE.BSE"
    },
    {
        "id": "023",
        "product_image": "https://groww.in/images/partners/hdfc_groww.svg",
        "product_name": "HDFC Index Fund 50 Direct Plan Growth",
        "amc": "HDFC",
        "risk": "Moderate Risk",
        "category": "Debt",
        "rating": "4",
        "percentage_interval": ["3.13%", "64.18%", "25.31%"],
        "fund_Category": "6.7",
        "fund_size": "6719.30 Cr",
        "nav": "549.44",
        "return_percentage": "17.16",
        "price": "0",
        "symbol": "600104.SHH"
    },
    {
        "id": "024",
        "product_image": "https://groww.in/images/partners/sbi_groww.svg",
        "product_name": "SBI Small Cap Fund Direct Growth",
        "amc": "SBI",
        "risk": "High Risk",
        "category": "Hybrid",
        "rating": "4",
        "percentage_interval": ["1.18%", "72.19%", "14.19%"],
        "fund_Category": "5.8",
        "fund_size": "5816.80 Cr",
        "nav": "168.57",
        "return_percentage": "32.96",
        "price": "0",
        "symbol": "000002.SHZ"
    },
    {
        "id": "025",
        "product_image": "https://groww.in/images/partners/nippon_groww.png",
        "product_name": "Nippon India Small Cap Fund Direct Growth",
        "amc": "Nippon India Pharma",
        "risk": "Low Risk",
        "category": "Equity",
        "rating": "4",
        "percentage_interval": ["1.56%", "25.91%", "18.19%"],
        "fund_Category": "3.6",
        "fund_size": "3610.60 Cr",
        "nav": "325.24",
        "return_percentage": "9.61",
        "price": "0",
        "symbol": "IBM"
    },
    {
        "id": "026",
        "product_image": "https://groww.in/images/partners/icici_groww.svg",
        "product_name": "ICICI Prudential Small Cap Fund Direct Growth",
        "amc": "ICICI",
        "risk": "Moderate Risk",
        "category": "Debt",
        "rating": "5",
        "percentage_interval": ["3.18%", "85.18%", "18.01%"],
        "fund_Category": "7.5",
        "fund_size": "7581.50 Cr",
        "nav": "26.11",
        "return_percentage": "2.57",
        "price": "0",
        "symbol": "TSCO.LON"
    },
    {
        "id": "027",
        "product_image": "https://groww.in/images/partners/tata_groww.svg",
        "product_name": "TATA India Tax Savings Fund Direct Growth",
        "amc": "TATA",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "4",
        "percentage_interval": ["2.18%", "75.19%", "38.17%"],
        "fund_Category": "3.6",
        "fund_size": "3681.50 Cr",
        "nav": "10.76",
        "return_percentage": "26.98",
        "price": "0",
        "symbol": "SHOP.TRT"
    },
    {
        "id": "028",
        "product_image": "https://groww.in/images/partners/axis_groww.svg",
        "product_name": "Axis Flexi Cap Direct Growth",
        "amc": "Axis",
        "risk": "Low Risk",
        "category": "Debt",
        "rating": "4",
        "percentage_interval": ["2.17%", "71.19%", "37.18%"],
        "fund_Category": "5.8",
        "fund_size": "5189.30 Cr",
        "nav": "126.81",
        "return_percentage": "32.11",
        "price": "0",
        "symbol": "GPV.TRV"
    },
    {
        "id": "029",
        "product_image": "https://groww.in/images/partners/hdfc_groww.svg",
        "product_name": "HDFC Small Cap Fund Direct Plan Growth",
        "amc": "HDFC",
        "risk": "High Risk",
        "category": "Equity",
        "rating": "3",
        "percentage_interval": ["1.18%", "84.18%", "37.18%"],
        "fund_Category": "3.1",
        "fund_size": "3100.80 Cr",
        "nav": "51.44",
        "return_percentage": "19.29",
        "price": "0",
        "symbol": "DAI.DEX"
    },
    {
        "id": "030",
        "product_image": "https://groww.in/images/partners/sbi_groww.svg",
        "product_name": "SBI Contra Fund Direct Growth",
        "amc": "SBI",
        "risk": "Moderate Risk",
        "category": "Debt",
        "rating": "5",
        "percentage_interval": ["1.28%", "82.26%", "32.18%"],
        "fund_Category": "4.6",
        "fund_size": "4619.70 Cr",
        "nav": "95.13",
        "return_percentage": "28.15",
        "price": "0",
        "symbol": "RELIANCE.BSE"
    }
]
let lifeArr = ["/Images/life1.png", "/Images/life2.png"]
let click = 0;

let wlistArr = JSON.parse(localStorage.getItem("WatchListData"))

function showStack(data) {
    let start = 0;
    let end = 10

    let modofiedData = data.slice(start, end)
    modofiedData.forEach(el => {
        let stockName = document.createElement("p")
        stockName.setAttribute("Id", "watchliststockName")
        stockName.style.fontSize = "14px"


        let stockLife = document.createElement("img")
        stockLife.style.width = "70%"
        let price = document.createElement("p")
        let div = document.createElement("div")
        let clickToAddinWatchList = document.createElement("img")
        clickToAddinWatchList.src = "/SVG/toadd.svg";
        clickToAddinWatchList.style.cursor = "pointer"


        // div.style.display = "flex"
        div.setAttribute("class", "divInsideStockData")
        stockName.textContent = el.product_name
        stockLife.src = lifeArr[Math.floor(Math.random() * 2)]
        price.textContent = "₹" + ((el.return_percentage) * 30).toFixed(2)
        let wData = {
            stockName: el.product_name,
            price: el.return_percentage
        }

        clickToAddinWatchList.onclick = () => {
            click++;
            if (click % 2 !== 0) {
                clickToAddinWatchList.src = "/SVG/clicked.svg"
                wlistArr.push(wData)
                watchListfunt(wlistArr)
                localStorage.setItem("WatchListData", JSON.stringify(wlistArr))

            }

            if (click % 2 == 0) { clickToAddinWatchList.src = "/SVG/toadd.svg" }
        }
        div.append(stockName, stockLife, price, clickToAddinWatchList)

        StockData.append(div)
    })


} showStack(data)


let watchListData = document.querySelector(".watchListDataapnd")


let dwb = JSON.parse(localStorage.getItem("WatchListData"))

let flArr=[3,2,2.3,2.4,4,3.1,2.4,3.2,3.9,1.99,.90,3,3.2,3.01]
let frArr=[.12,.13,.06,.7,.01,.22,.112,.26,.11,.10]
function watchListfunt(dwb) {

    dwb.forEach((elm) => {
        watchListData.textContent = ""
        let wdiv = document.createElement("div")
        wdiv.style.display = "flex"
        let wname = document.createElement("p")
        wname.setAttribute("class", "wnameP")
        wname.style.marginLeft="4%"

        let flData=document.createElement("p")
        flData.textContent=`-${flArr[Math.floor(Math.random()*14)]}(${frArr[Math.floor(Math.random()*9)]+"%"})`

        let wprice = document.createElement("p")
        wprice.setAttribute("class", "wnameP")
        wname.textContent = elm.stockName;
        wprice.textContent = "₹" + (((elm.price) * 30)*frArr[Math.floor(Math.random()*9)]).toFixed(2)
      
        flData.style.color="red"
        wprice.append(flData)
        wprice.style.display="flex"
        wprice.style.flexDirection="column"
        wdiv.append(wname, wprice)
        watchListData.append(wdiv)
        console.log("miimikmnkm");
    })
} watchListfunt(dwb)


let stopper=setInterval(() => {
    watchListfunt(dwb)
}, 1000);

// if(localStorage.getItem("productData")===null){
//     localStorage.setItem("productData",JSON.stringify([]))
// }

// let DataFetch=JSON.parse(localStorage.getItem("productData"))


let four_box = document.querySelector("#four_box")
let four_box_data = data.slice(0, 4)
function showFourBoxData() {
    four_box_data.forEach((element, index) => {



        let div = document.createElement("div")
        div.onclick=()=>{

            // DataFetch.push(element)
            localStorage.setItem("productData",JSON.stringify(element))
            window.location.href="stockPage"

        }
        div.setAttribute("class", "box shadow")
        let boxImg = document.createElement("img")
        let yearlyData = document.createElement("p")
        let mutualName = document.createElement("p")
        yearlyData.style.fontSize = "14px"
        mutualName.style.fontSize = "14px"
        mutualName.style.height = "39px"
        mutualName.style.lineHeight = "20px"
        mutualName.style.width = "100%"
        boxImg.setAttribute("class", "box_img")
        boxImg.src = element.product_image
        yearlyData.textContent = element.return_percentage + "% (3Y) "
        mutualName.textContent = element.product_name
        div.append(boxImg, mutualName, yearlyData)
        four_box.append(div)

    });
}
showFourBoxData()

let handpickedImgs = document.querySelector(".handpickedImgs")
let hpArr = ["/SVG/hp1.svg", "/SVG/hp2.svg", "/SVG/hp3.svg", "/SVG/hp4.svg", "/SVG/hp5.svg", "/SVG/hp6.svg"]
let hptext = ["HIGH RETURN", "TAX SAVING", "BETTER THAN FD", 'TOP COMPANIES', 'SIP WITH ₹500', 'SECTOR BETS']

hpArr.forEach((im, tx) => {

    let div = document.createElement("div")
    let img = document.createElement("img")
    let txt = document.createElement("p")
    txt.style.fontSize = "12px"
    img.src = im
    txt.textContent = hptext[tx]
    div.append(img, txt)
    handpickedImgs.append(div)
})






let clickToShowFQS = document.getElementsByClassName("clickToShowFQS")

let hiddenText = document.getElementsByClassName("hiddenText")

let ingo = 0;

let hiddenTextArr = Array.from(hiddenText)
let clickToShowArr = Array.from(clickToShowFQS)
clickToShowArr.forEach((c, i) => {
    c.onclick = () => {
        ingo++;
        if (ingo % 2 !== 0) {
            hiddenText[i].style.display = "block"
        } else {
            hiddenText[i].style.display = "none"
        }
        //  hiddenText[i-1].style.display="none"
        //  hiddenText[i+1].style.display="none"
        //  hiddenText[i+2].style.display="none"
        //  hiddenText[i-2].style.display="none"
    }

})

// SideBarJs


let mode=document.querySelector(".mode")
let body=document.querySelector("HTML")
let j=document.querySelector(".sideBar")
let allDiv=document.querySelectorAll("div")
let allp=document.querySelectorAll("p")
console.log(body);
let changeMode=document.querySelector(".changeMode")
let Allimg=document.querySelectorAll("img")
let Allinp=document.querySelectorAll("input")
let footerDiv=document.querySelector(".footerDiv")
let dm=0;
mode.onclick=()=>{
dm++;
if(dm%2!==0){
changeMode.textContent="Bright Mode"
body.style.backgroundColor="black"
body.style.color="white"
j.style.backgroundColor="black"

allDiv.forEach((el)=>{
el.style.backgroundColor="black"
})
allp.forEach((el)=>{
el.style.backgroundColor="black"
el.style.Color="black"
})
Allinp.forEach((el)=>{
    el.style.backgroundColor="black"
})
}
if(dm%2===0){
changeMode.textContent="Dark Mode"
body.style.backgroundColor="white"
body.style.color="#44475b"
j.style.backgroundColor="white"

allDiv.forEach((el)=>{
el.style.backgroundColor="white"
})
allp.forEach((el)=>{
el.style.backgroundColor="white"
})
allp.forEach((el)=>{
    // el.style.backgroundColor="black"
    el.style.Color="#44475b"
    })
Allinp.forEach((el)=>{
    el.style.backgroundColor="white"
})
footerDiv.style.backgroundColor="#1e2232"
}
}

let sideBarClickableDiv=document.querySelector(".sideBarClickableDiv")
let sideBarMainDiv=document.querySelector(".sideBarMainDiv")
let b=0;
sideBarClickableDiv.onclick=()=>{
b++;
if(b%2!==0){
    sideBarMainDiv.style.display="block"
sideBarMainDiv.style.display="flex"
}else{
    sideBarMainDiv.style.display="none"
}
}

let userId=JSON.parse(localStorage.getItem("userId"))
//let userId="jerry@google.com"

let UserFirstLetterSideBar=document.querySelector(".UserFirstLetterSideBar")
let UserFirstLetter=document.querySelector(".UserFirstLetter")
let UserName=document.querySelector(".UserName")
let mailId=document.querySelector(".mailId")

mailId.textContent=userId

UserFirstLetterSideBar.textContent=userId[0].toUpperCase()
UserFirstLetter.textContent=userId[0].toUpperCase()
let s=""
userId=userId.trim().split("")
let st=[]
let kim=userId.indexOf("@")
//console.log(kim);
//console.log(userId);
for(var z=0;z<kim;z++){
        st.push(userId[z])
}
//console.log(st);
UserName.textContent=(st.join("")).toUpperCase()

// document.getElementById("groww-logo").onclick=()=>{
//     window.location.href = "../Grow_Home_page.html";
//   }
  


