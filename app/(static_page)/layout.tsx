import Header from "@/components/home/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
       <>
        <Header />
        {children}
       </>
        
     
  );
}
