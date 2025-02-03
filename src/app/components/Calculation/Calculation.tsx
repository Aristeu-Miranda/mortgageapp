"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiCalculatorFill } from "react-icons/pi";

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
    .number({
      required_error: "This fild is required!",
      invalid_type_error: "",
    })
    .positive(),
  years: z
    .number({
      required_error: "This fild is required!",
    })
    .positive(),
  rate: z
    .number({
      required_error: "This fild is required!",
    })
    .positive(),
  select: z.enum(["repayment", "interest"], {
    required_error: "This fild is required!",
  }),
});

export default function Calculation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold text-slatefiv">
        Mortgage Calculator
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Button variant="ghost" size="ghost">
            Clear All
          </Button>
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => {
              const { error } = useFormField();
              return (
                <FormItem>
                  <FormLabel>Mortgage Term</FormLabel>
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
          <FormField
            control={form.control}
            name="select"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Mortgage Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col"
                  >
                    <div className="h-11 w-full rounded-md border border-slatetre bg-transparent py-[9px] pl-4">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="repayment" />
                        </FormControl>
                        <FormLabel className="text-slatefiv font-bold text-base">Repayment</FormLabel>
                      </FormItem>
                    </div>
                    <div className="h-11 w-full rounded-md border border-slatetre bg-transparent py-[9px] pl-4">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="interest" />
                        </FormControl>
                        <FormLabel className="text-slatefiv font-bold text-base">
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

          <Button variant="calc" size="calc" type="submit"><PiCalculatorFill className="text-slatefiv"/>Calculate Repayments</Button>
        </form>
      </Form>
    </section>
  );
}
