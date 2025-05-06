
import Container from '@mui/material/Container';
import { ArrowRight } from "lucide-react";


export default function App() {
  return (
    <Container maxWidth="xl">
      <div className="my-4 text-pink-800">
      <ArrowRight className="w-5 h-5" />
        hello world
      </div>
    </Container>
  );
}
