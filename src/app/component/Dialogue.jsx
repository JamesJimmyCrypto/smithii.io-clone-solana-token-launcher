import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Assuming Tabs component exists
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

// Example for importing icons, replace with actual assets
import metamaskIcon from "../../../assets/logo.webp";
import coinbaseIcon from "../../../assets/logo.webp";
import walletConnectIcon from "../../../assets/logo.webp";
import phantomIcon from "../../../assets/logo.webp";

export function Dialogue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-neutral-900 text-white p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-4xl font-black">Connect Wallet</DialogTitle>
          <DialogDescription className="text-neutral-400 mt-3 text-xl">
            Choose how you want to connect. If you don’t have a wallet, you can select a provider and create one.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="ethereum" className="mt-6">
          {/* Tabs Navigation */}
          <TabsList className="flex space-x-4 mb-4">
            <TabsTrigger
              value="ethereum"
              className="flex-1 btnColor text-white py-2 px-4 rounded-md text-center">
              Ethereum
            </TabsTrigger>
            <TabsTrigger
              value="solana"
              className="flex-1 btnColor text-white py-2 px-4 rounded-md text-center">
              Solana
            </TabsTrigger>
          </TabsList>

          {/* Ethereum Tab Content */}
          <TabsContent value="ethereum">
            <div className="flex flex-col space-y-4">
              <Button variant="outline" className="flex items-center gap-3 bg-neutral-800 py-3 px-4 rounded-lg">
                <Image src={metamaskIcon} alt="MetaMask" className="w-6 h-6" />
                MetaMask
                <span className="ml-auto text-xs text-neutral-500">Recommended</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-3 bg-neutral-800 py-3 px-4 rounded-lg">
                <Image src={coinbaseIcon} alt="Coinbase" className="w-6 h-6" />
                Coinbase Wallet
              </Button>
              <Button variant="outline" className="flex items-center gap-3 bg-neutral-800 py-3 px-4 rounded-lg">
                <Image src={walletConnectIcon} alt="WalletConnect" className="w-6 h-6" />
                WalletConnect
              </Button>
              <Button variant="outline" className="flex items-center gap-3 bg-neutral-800 py-3 px-4 rounded-lg">
                <Image src={phantomIcon} alt="Phantom" className="w-6 h-6" />
                Phantom
              </Button>
            </div>
          </TabsContent>

          {/* Solana Tab Content */}
          <TabsContent value="solana">
            <div className="flex flex-col space-y-4">
              <Button variant="outline" className="flex items-center gap-3 bg-neutral-800 py-3 px-4 rounded-lg">
                <Image src={phantomIcon} alt="Phantom" className="w-6 h-6" />
                Phantom
              </Button>
              {/* Add more Solana wallets here */}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
