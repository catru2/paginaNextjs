export const metadata ={
    title:'Nexts.js',
    description:'general by next.js ',
}

export default function RootLayout({ children }){
    return(
        <html lang="en">
          <body> {children}</body>  
        </html>
      
        
    )
}