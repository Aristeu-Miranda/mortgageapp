import Image from "next/image";

export default function ResultDefault() {
    return (
        <section className="w-full p-5 lg:h-full lg:py-24">
            <div className="flex w-full justify-center mb-4">
                <Image src="/illustration-empty.svg" alt="desenho" width={170} height={170} priority/>
            </div>
            <div className="w-full text-center space-y-7">
                <p className="text-xl font-bold text-white ">Results shown here</p>
                <p className="text-sm font-light text-slatetwo">{`Complete the form and click 'calculate repayments' to see what your monthly repayments would be.`}</p>
            </div>
        </section>
    )
}