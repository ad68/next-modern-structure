
import ReactQueryProvider from '@/shared/providers/ReactQueryProvider'
import TopLoader from '@/shared/providers/TopLoader'
import { Toaster } from 'react-hot-toast'
export default function Index({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ReactQueryProvider>
            <TopLoader />
            <Toaster toastOptions={{ duration: 3000 }} />
            <main>{children}</main>
        </ReactQueryProvider>
    )
}
