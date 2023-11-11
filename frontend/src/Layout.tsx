import Navigation from "./components/Navigation"

export default function RootLayout({ children }) {
    return (
        <html lang="es">
        <head>
            <title>App</title>
        </head>
        <body>
            <Navigation />
            {children}
        </body>
        </html>
    )
}