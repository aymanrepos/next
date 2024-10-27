
import Header from "./components/shared/header";
import Sidebar from "./components/shared/sidebar";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header />

      <div className="flexStart mt-10 max-h-screen items-start gap-10">
          <Sidebar />
        {/* <NewSkeletton num={10} /> <Infobar /> */}
        <div className="flex-1">
          {children}
        </div>
      </div>

    </>


  );
}
