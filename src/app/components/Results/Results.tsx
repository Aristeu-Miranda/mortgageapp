import { Button } from "@/components/ui/button";

export interface ResultProps {
  amount: number;
  years: number;
  rate: number;
  select: string;
}

export default function Results({ amount, years, rate, select }: ResultProps) {

    const formatarNumeros = (num: number) => {
        return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
    }
    const calculoPag = () => {
        const juros = rate / 100;
        const jurosMes = juros / 12;
        const term = years * 12;
        let pagMes = 0;
        let pagTotal = 0;
        if (select === "repayment") {
            pagMes = (amount * jurosMes) / (1 - Math.pow(1 + jurosMes, -term));
            pagTotal = pagMes * term;
        } else if (select === "interest") {
            pagMes = amount * jurosMes;
            pagTotal = pagMes * term;
        }
        return { pagMes: formatarNumeros(pagMes), pagTotal: formatarNumeros(pagTotal) };
    };

    const { pagMes, pagTotal } = calculoPag();
  
    return (
    <section className="w-full h-3/4 py-5 px-10 lg:pt-7">
      <div className="w-full text-start space-y-3">
        <p className="text-xl font-bold text-white">Your results</p>
        <p className="text-sm font-light text-slatetwo">
          Your results are shown below based on the information you provided. To adjust the 
            results, edit the form and click "calculate repayments" again.
        </p>
      </div>
      <div className="space-y-4 mt-5 px-4 py-4 border-t-2 border-lime rounded-sm flex-col bg-slate-900 w-full h-full lg:h-3/4 justify-center mb-4">
            <p className="text-slatetwo text-sm">Your monthly repayments</p>
            <p className="text-lime text-5xl font-semibold">{`€ ${pagMes}`}</p>
            <hr className="border-slatefor"/>
            <p className="text-slatetwo text-sm">Total you'll repay over the term</p>
            <p className="text-white text-2xl">{`€ ${pagTotal}`}</p>
      </div>
    </section>
  );
}
