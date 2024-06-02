import React ,{useState} from 'react'

export default function MainPage() {

    const[date,setDate] = useState(null);
    const[sourceCurrency,setSourceCurrency] = useState("");
    const[targetCurrency,setTargetCurrency] = useState("");
    const[amountInSourceCurrency,setAmountInSourceCurrency] = useState(0);
    const[amountInTargetCurrency,setAmountInTargetCurrency] = useState(0);

    const handleSubmit = (e=>{

        e.preventDefault();
        console.log(
            date,
            setSourceCurrency,
            targetCurrency,
            amountInSourceCurrency
        )
    }

  return (
    <div>
      <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert your currency today</h1>
      <p className='lg:mx-32 opacity-40 py-6'>Welcome to "Convert Your Currencies Today"! This application allows you to easily convert currencies based on the latest exchange rates. Whether you're planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.</p>
      <div>
        <form onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col items-center justify-center ">
            <div className='w-2/3 lg:w-1/2 py-4'>
                <label htmlFor="date" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Date</label>
                <input 
                    type="date" 
                    id={date} 
                    name={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            
        
            <div className='w-2/3 lg:w-1/2 py-4'>
                <label htmlFor={sourceCurrency}
                className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Source currency</label>
                <select 
                    onChange={(e) => setSourceCurrency(e.target.value)}
                    className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name={sourceCurrency}
                    id={sourceCurrency}
                    value={sourceCurrency}
                >
                <option value="">Select source currency</option>
                </select>
            </div>
        
            <div className='w-2/3 lg:w-1/2 py-4'>
                <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Target currency</label>
                <select 
                    onChange={(e) => setTargetCurrency(e.target.value)}
                    className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name={targetCurrency}
                    id={targetCurrency}
                    value={targetCurrency}>
                <option value="">Select target currency</option>
                </select>
            </div>

            <div className='w-2/3 lg:w-1/2 py-4'>
                <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Amount in source currency</label>
                <input type="number" 
                    id={amountInSourceCurrency}
                    name={amountInSourceCurrency}
                    onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                    className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in source courrency" required />
            </div>
            <button 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-green-800 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span 
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get the target Currency
                </span>
            </button>    
        </div>
        </form>
      </div>
    </div>
  )
}
