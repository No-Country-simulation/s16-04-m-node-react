import { Box } from "@radix-ui/themes";
import LogoImage from "../assets/CHEALTH.png";

const Logo = () => (
  <Box width="74px" height="74px" style={{ padding: "8px" }}>
    <img src={LogoImage} alt="logo" style={{ height: "100%", width: "100%" }} />
  </Box>
);

export default Logo;