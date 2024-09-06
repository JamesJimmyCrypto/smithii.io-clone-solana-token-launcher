import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { HiOutlineExternalLink } from "react-icons/hi"

const Tokencreatorsolana = () => {
  return (
    <div className='bg-[#141414] mx-auto mt-10 px-4 sm:px-6 lg:px-10 py-8 rounded-2xl max-w-7xl w-full'>
      <div className='flex flex-col items-center mb-10 mt-3'>
        <h1 className='textColor font-black text-5xl'>Solana Token Creator</h1>
        <p className='textColor mt-3 font-normal'>Easily Create your own Solana SPL Token in just 7+1 steps without Coding.</p>
      </div>
      <form>
        {/* Token Details */}
        <div className='flex gap-5'>
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-base textColor mb-2" htmlFor="name">
              <span className='text-red-500'>*</span> Name:
            </label>
            <input
              className="w-full text-base p-3 bgColor font-normal borderColor border-2 rounded-xl textColor"
              type="text"
              id="name"
              placeholder="Put the name of your Token"
              required
            />
          </div>
          
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-base textColor mb-2" htmlFor="symbol">
              <span className='text-red-500'>*</span> Symbol:
            </label>
            <input
              className="w-full text-base p-3 bgColor font-normal borderColor border-2 rounded-xl textColor"
              type="text"
              id="symbol"
              placeholder="Put the symbol of your Token"
              required
            />
          </div>
        </div>
        
        <div className='flex gap-5'>
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-base textColor mb-2" htmlFor="decimals">
              <span className='text-red-500'>*</span> Decimals:
            </label>
            <input
              className="w-full text-base p-3 bgColor font-normal borderColor border-2 rounded-xl textColor"
              type="number"
              id="decimals"
              placeholder="Put the decimals of your Token"
              required
            />
          </div>
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-base textColor mb-2" htmlFor="supply">
              <span className='text-red-500'>*</span> Supply:
            </label>
            <input
              className="w-full text-base p-3 bgColor font-normal borderColor border-2 rounded-xl textColor"
              type="number"
              id="supply"
              placeholder="Put the supply of your Token"
              required
            />
          </div>
        </div>
        
        {/* Image and Description */}
        <div className='flex gap-5'>
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-base textColor mb-2" htmlFor="image">
              <span className='text-red-500'>*</span> Image:
            </label>
            <div className="border-2 borderColor rounded-xl p-4 flex items-center justify-center bgColor w-full py-8">
              <label
                className="cursor-pointer text-gray-400 flex flex-col items-center"
                htmlFor="image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className='text-base textColor font-medium'>Upload Image</span>
                <input type="file" id="image" className="hidden" />
              </label>
            </div>
            <p className="textColor text-sm mt-2">
              Most meme coins use a squared 1000x1000 logo
            </p>
          </div>
          <div className="mb-4 w-full md:w-1/2">
            <label className="block text-base textColor mb-2" htmlFor="description">
              <span className='text-red-500'>*</span> Description:
            </label>
            <textarea
              className="w-full h-[68%] text-base p-3 bgColor textColor font-normal borderColor border-2 rounded-xl"
              id="description"
              placeholder="Put the description of your Token"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
        
        {/* Social Links Toggle */}
        <div className="flex items-center mb-3 space-x-2">
          <Label htmlFor="add-social-links" className="textColor text-lg font-medium">Add Social Links</Label>
          <Switch id="add-social-links" />
        </div>
        
        {/* Social Links Inputs */}
        <div className='flex justify-between w-full gap-5'>
          {['Website', 'Twitter', 'Telegram', 'Discord'].map((site, index) => (
            <div className="mb-4 w-full sm:w-1/2 lg:w-1/4" key={index}>
              <label className="block text-base font-medium textColor mb-2" htmlFor={`social-${index}`}>
                {site}:
              </label>
              <input
                className="text-base w-full p-3 bgColor font-normal borderColor border-2 rounded-xl textColor"
                type="url"
                id={`social-${index}`}
                placeholder={`Enter your ${site} URL`}
              />
            </div>
          ))}
        </div>
        
        {/* Revoke Authorities */}
        <div className='textColor my-5'>
          <p className='font-medium text-lg textColor leading-8 tracking-wider'>Revoke Authorities</p>
          <p className='font-normal text-base textColor tracking-wider'>
            Solana Token has 3 authorities: Freeze Authority, Mint Authority, and Update Authority. Revoke them to attract more investors.
          </p>
          <div className='mt-8 flex justify-between gap-6'>
            {[
              { title: 'Revoke Update (Immutable)', description: 'Update Authority allows you to update token metadata', cost: '0.1 SOL' },
              { title: 'Revoke Freeze (Immutable)', description: 'Freeze Authority allows you to freeze token transfers', cost: '0.1 SOL' },
              { title: 'Revoke Mint (Immutable)', description: 'Mint Authority allows you to mint new tokens', cost: '0.1 SOL' },
            ].map((auth, index) => (
              <div className='flex flex-col gap-3 w-full md:w-1/3' key={index}>
                <h4 className='font-medium text-lg textColor tracking-wider'>{auth.title}</h4>
                <p className='font-normal text-sm textColor tracking-wider'>{auth.description}</p>
                <div className='flex items-center gap-2'>
                  <Switch />
                  <span className='font-medium textColor text-base'>(+{auth.cost})</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Create Token Button */}
          <div className='flex flex-col justify-center items-center mt-14'>
            <button className='btnColor tracking-wide rounded-lg text-base py-4 px-12'>Create Token</button>
            <p className='text-base font-normal mt-3'>Total Fees: <span className='text-base font-normal'>0.20 SOL</span></p>
          </div>
          
          {/* Liquidity Pool Link */}
          <div className='flex justify-center mt-12 border-2 bgGradient rounded-xl py-4 w-full sm:w-3/4 lg:w-2/3 mx-auto border-[#18a2b4]'>
            <h4 className='flex font-bold text-xl'>
              Want to Create a Liquidity Pool? 💰 
              <span className='flex ml-4 font-semibold text-lg items-center gap-1 text-[#18A2B4]'>
                Create it here <HiOutlineExternalLink size={20} />
              </span>
            </h4>
          </div>
        </div>
        
        {/* Additional Section */}
        <div className='textColor bgGradient py-8 px-4 sm:px-6 lg:px-40 rounded-xl mt-10 mb-3 flex flex-col gap-4'>
          <h2 className='flex font-black text-xl'>Are you going to Create a Liquidity Pool?</h2>
          <p className='text-base font-semibold'>
            If you want to <span className='font-extrabold'>create a liquidity pool</span> you will need to <span className='font-extrabold'>Revoke Freeze Authority</span> of the Token.
          </p>
          <p className='text-base font-semibold'>
            You can also Revoke the Mint Authority to gain trust from the community.
          </p>
          <p className='text-base font-semibold'>
            You can do both here, each one costs 0.1 SOL.
          </p>
          <div className='relative my-3'>
            <input
              className="w-full text-xl py-4 px-14 bgColor font-normal borderColor border-2 rounded-xl textColor"
              type="text"
              id="liquidity-pool"
              placeholder="Liquidity Pool Address"
            />
            <span className='absolute left-3 top-4'><HiOutlineExternalLink size={30} /></span>
          </div>
          <div className='flex justify-between w-full sm:w-[90%] md:w-[100%] items-center gap-4'>
            <button className='btnColor tracking-wide rounded-lg text-base py-4 px-24'>Revoke Freeze Authority</button>
            <button className='btnColor tracking-wide rounded-lg text-base py-4 px-24'>Revoke Mint Authority</button>
          </div>
        </div>
        
        <hr className='mx-auto btnBorderColor' />
      </form>
      
      {/* Video and Instructions */}
      <div className='flex justify-between gap-6 mt-9 px-6 textColor items-center'>
        <div className='w-full md:w-1/2'>
          <div className="relative aspect-video">
            <iframe 
              className='rounded-xl w-full h-full' 
              src="https://www.youtube.com/embed/B37FtZohUKU" 
              title="Create Solana Token + Liquidity Pool (Guide without coding)" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <div className='mt-5 text-base font-bold tracking-wide w-full md:w-4/5 flex flex-col gap-3'>
            <p>The cost of creating the Token is 0.1 SOL, it includes all fees needed for the SPL Token Creation.</p>
            <p>The creation process will start and will take some seconds. After that you will receive the total supply of the token in the wallet you chose.</p>
            <p>Check here a whole blog post about <span className='font-semibold underline'>how to create a Solana Token</span></p>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <h4 className='text-xl font-bold tracking-wide'>How to use Solana Token Creator</h4>
          <ul className='mt-5 text-lg list-disc font-normal tracking-wide w-full md:w-4/5 flex flex-col gap-3'>
            <li>Connect your Solana wallet</li>
            <li>Write the name you want for your Token</li>
            <li>Indicate the symbol (max 8 characters)</li>
            <li>Select the decimals quantity (0 for Whitelist Token, 6 for utility token)</li>
            <li>Write the description you want for your SPL Token</li>
            <li>Upload the image for your token (PNG)</li>
            <li>Put the Supply of your Token</li>
            <li>Click on create, accept the transaction and wait until your token is ready</li>
          </ul>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className='flex flex-col items-center text-white my-16'>
        <h3 className='text-xl'>FREQUENTLY ASKED QUESTIONS</h3>
        {/* Add your FAQ content here */}
      </div>
    </div>
  )
}

export default Tokencreatorsolana
