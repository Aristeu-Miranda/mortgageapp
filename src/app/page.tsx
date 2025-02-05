"use client"
import Calculation from "./components/Calculation/Calculation";
import ResultDefault from "./components/ResultDefault/ResultDefault";
import Results from "./components/Results/Results";
import { useState } from "react";
import { z } from "zod";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
  amount: z.string().transform((val) => Number(val)),
  years: z.string().transform((val) => Number(val)),
  rate: z.string().transform((val) => Number(val)),
  select: z.string()
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const [formData, setFormData] = useState<FormData | null>(null);
  
  return (
    <>
<section className="w-full h-screen flex items-center justify-center">
    <div className="m-auto bg-white md:max-w-carde w-mob h-full lg:flex lg:w-[860px] lg:max-h-[500px] lg:rounded-3xl">
        <div className="bg-white w-full px-5 py-6 lg:max-w-[430px] lg:rounded-l-3xl">
            <Calculation onSubmit={setFormData} />
        </div>
        <div className="bg-slatefiv w-full lg:max-w-[430px] lg:rounded-se-3xl lg:rounded-e-3xl lg:rounded-es-[50px]">
            {!formData ? (
                <ResultDefault />
            ) : (
                <Results amount={formData.amount} years={formData.years} rate={formData.rate} select={formData.select} />
            )}
        </div>
    </div>
</section>

    </>
  );
}
