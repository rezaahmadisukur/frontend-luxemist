import PageHead from "@/components/commons";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <PageHead title="LuxeMist | Homepage" />
      <h1>HomePage</h1>
      <Button onClick={() => alert("Hello World")}>Klik Me</Button>
    </div>
  );
}
