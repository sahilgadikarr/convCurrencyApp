import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]= useState('usd')
  const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const BackgroundImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert=()=>(setConvertedAmount(amount* currencyInfo[to]))

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        
    >
        <Header/>
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={(amount)=>setAmount(amount)}
                            currencyOptions={options }
                            onCurrencyChange={(currency)=>setAmount(amount)}
                            selectCurrency={from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
<button
  type="button"
  onClick={swap}
  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-zinc-800 text-white border border-gray-600 
             px-4 py-1 rounded-full shadow-md hover:bg-blue-700 
             hover:text-white transition duration-300"
>
  🔁 Swap
</button>

                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>

                    <button type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
)
}

export default App
