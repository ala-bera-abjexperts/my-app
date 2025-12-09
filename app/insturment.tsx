import { Suspense } from "react";

async function InstrumentsData() {
  return <pre></pre>;
}

export default function Instruments() {
  return (
    <Suspense fallback={<div>Loading instruments...</div>}>
      <InstrumentsData />
    </Suspense>
  );
}
