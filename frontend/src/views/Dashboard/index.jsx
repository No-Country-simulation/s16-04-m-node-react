import {  Grid, Separator } from "@radix-ui/themes"
import Navbar from "../../components/Navbar"



const Dashboard = () => {
  return (
    <div>
      
       <Grid
        columns="1"
        gap="3"
        rows="auto 1fr"
        style={{ minHeight: "100vh" }}
      >
        <nav style={{ height: "64px", width: '100%' }}>
          <Navbar/>
        </nav>
        <Separator orientation="horizontal" size="4" />
        <main style={{ overflowY: "auto", minHeight: "calc(100vh - 64px)" }}>
          
          contenido
        </main>
      </Grid>
    </div>
  
  )
}

export default Dashboard