// mr tab  para importar la metadata

import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO contact',
 description: 'SEO Description contact',
 keywords: [ 'Contact Page', 'Josue', 'Ceballos' ] 
 // para usar la keywords se debe importar Metadata
//  esto es para el Seo
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact page</span>
        </>
    )
} 