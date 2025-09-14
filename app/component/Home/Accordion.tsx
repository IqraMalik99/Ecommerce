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
      question: "Product Information",
      answer:
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
      id: "2",
      question: "Shipping Details",
      answer:
        "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
    },
    {
      id: "3",
      question: "Return Policy",
      answer:
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
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
    <section className="flex justify-center items-center flex-col mx-auto px-4 py-10 bg-gray-50 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-md sm:max-w-xl md:max-w-3xl"
      >
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={`item-${faq.id}`}>
            <AccordionTrigger className="text-base font-medium text-gray-800 dark:text-gray-200">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 sm:p-6 mt-2 text-sm text-gray-700 dark:text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
