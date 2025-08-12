"use client"
import { PricingInteraction } from "@/components/ui/pricing-interaction"

export  function PricingInteractionDemo() {
  return (
      <PricingInteraction
        starterMonth={20.00}
        starterAnnual={15.00}
        proMonth={200.00}
        proAnnual={150.00}
      />
  );
}

