import { Grid, Separator } from "@radix-ui/themes";
import SliderMenu from "../../components/SliderMenu";
import { Outlet } from 'react-router-dom';
import Navbardash from "../../components/Navbardash";

const Dashboard = () => {
  return (
    <div>
      <Grid columns="1"  rows="1fr" style={{ minHeight: "100vh" }}>
        <nav style={{ height: "64px", width: "100%", margin: 0, padding: 0 }}>
          <Navbardash />
        </nav>
        <Separator orientation="horizontal" size="4" style={{ margin: 0 }} />
        <main style={{ overflowY: "auto", minHeight: "calc(100vh - 64px)", margin: 0, padding: 0 }}>
          <Grid columns="2" gap="1" rows="repeat(1, 64px)" width="auto">
            <SliderMenu />
            <Outlet />
          </Grid>
        </main>
      </Grid>
    </div>
  );
};

export default Dashboard;
