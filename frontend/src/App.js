
import { useState, useEffect } from "react";

import { ethers } from "ethers";

import Home from './components/Home'
import PatNav from "./components/PatNav";
import Govern from "./components/Govern";

import addContent from './artifacts/contracts/addContent.sol/addContent.json';
import NFT from './artifacts/contracts/NFT.sol/NFT.json'

// import Doc from './components/Doc'
import FileUpload from './components/FileUpload'
import Patient from './components/Patient'

import { Toaster, toast } from "react-hot-toast";





import { useAccount } from "wagmi";


function App() {

  const [contract, setContract] = useState(null);
  const [contract1, setContract1] = useState(null);

  const [provider, setProvider] = useState(null);
  const [hashes, sethashes] = useState([]);
  const [minted, setminted] = useState([]);



  const { address } = useAccount({
    onConnect: (address) => {

      toast.success('Wallet Connected!');
      getAllReportsUI(address.address);
      getMinted();

      console.log("Connected", address);

    },
    onDisconnect: () => {
      toast.success('Logged Out Successfully!')
    }
  });
  const { ethereum } = window;



  useEffect(() => {
    const loadProvider = async () => {
      let contractAddress = "0x9FB29601342445B4644aA41c7712879367E200b9";
      let contract1Address = "0x82a6afD49815637348FDFfB99801383142230125";

      try {

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, addContent.abi, signer);
          const contract1 = new ethers.Contract(contract1Address, NFT.abi, signer);


          setContract(contract);
          setContract1(contract1);

          setProvider(provider);
          console.log(contract);
          console.log(contract1);


        } else {
          console.log("Ethereum object doesn't exist!")
        }
      } catch (error) {
        console.log(error);
      }



    };
    loadProvider();
  }, []);

  const UploadFile = async (_address, _IPFShash) => {


    const signer = contract.connect(provider.getSigner());
    const receipt = await signer.addReports(_address, _IPFShash);
    console.log(receipt);
    const tx = await receipt.wait();

    console.log("Added", tx);
    toast.success('File Uploaded Successfully!')




  };

  const mintNFT = async (inewHash) => {



    const metadataURI = `https://gateway.pinata.cloud/ipfs/${inewHash}`;


    const signer = contract1.connect(provider.getSigner());

    const z = await signer.totalSupply();


    const tokenId = (z).toNumber() + 1;
    console.log(tokenId)

    const receipt = await signer.mint(metadataURI, tokenId, inewHash);
    const tx = await receipt.wait();
    toast('NFT Minted Successfully!', {
      icon: '👏',
    });
    console.log(tx)


  };

  const getMinted = async () => {
    const mints = await contract1.getAllMinted();
    setminted(mints);
  }

  const getAllReportsUI = async (addr) => {
    const hash = await contract.getAllReports(addr);
    sethashes(hash);
    console.log(hash)
  };





  return (



    < div className='flex-col '>
      <Toaster position="bottom-right" />

      {
        address ?
          (<div>
            <PatNav></PatNav>
            <Patient hashes={hashes} mintNFT={mintNFT} minted={minted}></Patient>
            <FileUpload UploadFile={UploadFile}></FileUpload>
            <Govern></Govern>
          </div>)
          :

          <div>
            <Home></Home>

          </div>
      }




      {/* <Doc></Doc>

      <FileUpload UploadFile={UploadFile}></FileUpload>
      
      <Patient hashes = {hashes} mintNFT= {mintNFT} minted={minted}></Patient>  */}



    </div>
  );
}

export default App;
