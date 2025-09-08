import Pocketbase from 'pocketbase';
import { PUBLIC_PB_URL } from '$env/static/public';

export const pb = new Pocketbase(PUBLIC_PB_URL);
console.log('[PocketBase] Connected to', PUBLIC_PB_URL);
pb.health
	.check()
	.then(() => {
		console.log('[PocketBase] Health check passed');
	})
	.catch((err) => {
		console.error('[PocketBase] Health check failed', err);
	});
