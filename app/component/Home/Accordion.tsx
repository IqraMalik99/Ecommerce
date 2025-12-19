"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react"

type FAQ = {
  id: string
  question: string
  answer: string
}

export function AccordionDemo() {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "Are these products 100% original?",
      answer:
        "Absolutely! All products sold at Opaline are 100% authentic and sourced directly from the official brands, including Huda Beauty, Benetint, and premium hair care lines.",
    },
    {
      id: "2",
      question: "What are the payment options?",
      answer:
        "We offer both Cash on Delivery (COD) and card payments, so you can choose whichever is convenient for you.",
    },
    {
      id: "3",
      question: "How long does shipping take?",
      answer:
        "All orders are shipped within 7 days. We ensure safe packaging and fast delivery to your doorstep.",
    },
  ])

  // Simulate API fetch
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch("/api/faqs")
        if (res.ok) {
          const data: FAQ[] = await res.json()
          setFaqs(data)
        }
      } catch (err) {
        console.error("Failed to fetch FAQs:", err)
      }
    }

    fetchFAQs()
  }, [])

  return (
    <section className="flex justify-center items-center flex-col mx-auto px-4 py-10 bg-[#f9f3ed] w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#6f4e37]">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-md sm:max-w-xl md:max-w-3xl"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger className="text-base font-medium text-[#8b5e3c] hover:text-[#a3704b]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="bg-[#f2e7dc] rounded-md p-4 sm:p-6 mt-2 text-sm text-[#5a3e2b]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
