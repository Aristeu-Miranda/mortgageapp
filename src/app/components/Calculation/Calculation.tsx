"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiCalculatorFill } from "react-icons/pi";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const formSchema = z.object({
  amount: z
    .string()
    .min(1, "This field is required!"),
  years: z
    .string()
    .min(1, "This field is required!"),
  rate: z
    .string()
    .min(1, "This field is required!"),
  select: z.enum(["repayment", "interest"], {
    required_error: "This field is required!",
  }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Calculation({ onSubmit }: any) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      amount: "", 
      years: "", 
      rate: "", 
    },
  });

  function sendForm(values: z.infer<typeof formSchema>) {
    onSubmit(values)
  }

  function clear() {
    window.location.reload();
  }

  const [selectedRadio, setSelectedRadio] = useState<string | undefined>(undefined);

  return (
    <section className="w-full pb-5">
      <h2 className="text-2xl font-semibold text-slatefiv">
        Mortgage Calculator
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(sendForm)} className="space-y-4">
          <Button type="button" onClick={clear} variant="ghost" size="ghost">
            Clear All
          </Button>
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => {
              const { error } = useFormField();
              return (
                <FormItem>
                  <FormLabel>Mortgage Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      icon="€"
                      variant="currency"
                      error={!!error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="space-y-4 lg:flex lg:space-y-0 lg:gap-4">
          <FormField
            control={form.control}
            name="years"
            render={({ field }) => {
              const { error } = useFormField();
              return (
                <FormItem>
                  <FormLabel>Mortgage Term</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      icon="years"
                      variant="years"
                      error={!!error}
                      {...field}
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => {
              const { error } = useFormField();
              return (
                <FormItem>
                  <FormLabel>Interest Rate</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      icon="%"
                      variant="years"
                      error={!!error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          </div>
          <FormField
            control={form.control}
            name="select"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Mortgage Type</FormLabel>
                <FormControl>
                <RadioGroup
                    value={selectedRadio}
                    onValueChange={(value) => {
                      setSelectedRadio(value);
                      field.onChange(value); 
                    }}
                    className="flex flex-col"
                  >
                    <div
                      className={`h-11 lg:h-9 w-full rounded-md border py-[9px] lg:py-[6px] pl-4 ${
                        selectedRadio === "repayment" ? "border-lime bg-yellow-100" : "border-slatetre"
                      }`}
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="repayment" />
                        </FormControl>
                        <FormLabel className="text-slatefiv font-bold text-base lg:text-sm">Repayment</FormLabel>
                      </FormItem>
                    </div>
                    <div
                      className={`h-11 lg:h-9 w-full rounded-md border py-[9px] lg:py-[6px] pl-4 ${
                        selectedRadio === "interest" ? "border-lime bg-yellow-100" : "border-slatetre"
                      }`}
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="interest" />
                        </FormControl>
                        <FormLabel className="text-slatefiv font-bold text-base lg:text-sm ">
                          Interest Only
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="calc" size="calc" type="submit"><PiCalculatorFill className="text-slatefiv "/>Calculate Repayments</Button>
        </form>
      </Form>
    </section>
  );
}
