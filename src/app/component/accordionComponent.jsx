import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
//   import "./AccordionComponent.css" // Import custom styles
  
  export function AccordionComponent() {
    return (
      <Accordion type="single" collapsible className="w-full accordion-custom">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Solana Token Creator?</AccordionTrigger>
          <AccordionContent>
            Solana Token Creator is a Smart Contract that allows everyone, without coding experience, to create SPL Tokens (tokens from Solana Chain) customized with the data you want (supply, name, symbol, description and image).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  