import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'Slash — A higher standard in business finance',icons:{icon:'/assets/favicon.png'},description:'Slash homepage recreation in TypeScript and Next.js.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
