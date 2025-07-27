export async function createCheckoutSession(priceId: string) {
  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ priceId }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create checkout session: ${res.statusText}`);
  }

  return await res.json(); // { url: 'https://checkout.stripe.com/...' }
}
