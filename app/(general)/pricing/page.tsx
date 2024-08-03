import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'SEO Descripcion Pricing Page',
 keywords: ['hola mundo']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}