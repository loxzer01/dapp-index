// ABI
const abiDapp = [fetch("/abi/dapp.json").then(res => res.json())];
const abiUSDT = [fetch("./abi/USDT.json").then(res => res.json())];
// ADDRESS
const addressDAPP = "0x7683420C948E4338c5418de977163F665f719E28";
const addressUSDT = "0x4Eb1E2D964777535ccc8E43C855a18AFdD045019";
// DOM
const IsConnect = document.getElementById("IsConnect");
const wallet1 = document.getElementById("wallet1");

// VARIABLES
let walletConnect;
let account;

async function metamask() {
  if (window.ethereum === undefined)
    window.open(`https://metamask.app.link/dapp/${window.location.href}`, "_blank");
  //conect to metamask
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  account = accounts[0];
  IsConnect.innerHTML = "Connected";
  wallet1.innerHTML = account;
  walletConnect = "ethereum";
  addNetwork(97);
  localStorage.setItem("walletConnect", "ethereum");
}
async function binance() {
    if (window.BinanceChain === undefined)
      window.open("https://metamask.io/", "_blank");
    //conect to metamask
    const accounts = await BinanceChain.request({
      method: "eth_requestAccounts",
    });
    account = accounts[0];
    IsConnect.innerHTML = "Connected";
    wallet1.innerHTML = account;
    walletConnect = "BinanceChain";
    localStorage.setItem("walletConnect", "BinanceChain");
}
async function addNetwork(id) {
  let networkData;
  switch (id) {
    // bsctestnet
    case 97:
      networkData = [
        {
          chainId: "0x61",
          chainName: "BSCTESTNET",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
          nativeCurrency: {
            name: "BINANCE COIN",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
        },
      ];
      break;
    // bscmainet
    case 56:
      networkData = [
        {
          chainId: "0x38",
          chainName: "BSCMAINET",
          rpcUrls: ["https://bsc-dataseed1.binance.org"],
          nativeCurrency: {
            name: "BINANCE COIN",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com/"],
        },
      ];
      break;
    default:
      break;
  }
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  });
}

if(localStorage.getItem("walletConnect") === "ethereum"){
    metamask();
}
if(localStorage.getItem("walletConnect") === "BinanceChain"){
    binance();
}

async function contracts(address, abi) {
    const provider = new ethers.providers.Web3Provider(window[walletConnect]);
    const signer = provider.getSigner();
    return await new ethers.Contract(address,abi,signer);
}

const approve = async () => {
    let contract = await contracts(addressUSDT, abiUSDT);
    let amount = ethers.utils.parseEther(String(10));
    await contract.approve(addressDAPP, amount).then((result) => {
      console.log(result);
    });
}
const balance = async () => {
    let contract = await contracts(addressUSDT, abiUSDT);
    await contract.balanceOf(account).then((result) => {
      console.log(result.toString());
    });
}
