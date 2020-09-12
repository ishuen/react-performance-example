import React, { lazy, Suspense } from 'react';
const Cards = lazy(() => import('./components/Cards'));

export default function Page4() {
  return (
    <>
      <h2>Example 3</h2>
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Cards length={10}/>
      </Suspense>
    </>
  );
}