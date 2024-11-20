import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51QBcbDJv93whSyUMuU8YrvT5TpvTQqmqtGuyYt16FqbowAe8Rqv7ejccwaD2bqxAuyCiDN4eqeseP89NkJ2EjUZy00EyqlhHNG',
);

export default stripePromise;

