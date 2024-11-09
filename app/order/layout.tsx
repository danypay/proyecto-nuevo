import OrderSidebar from "@/Components/Order/OrderSidebar";
import OrderSummary from "@/Components/Order/OrderSummary";
import ToastNotification from "@/Components/ui/ToastNotification";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return(
        <>
            <div className="md:flex">
                <OrderSidebar/>
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
                <OrderSummary/>

                <ToastNotification/>
            </div>
        </>
    )
}