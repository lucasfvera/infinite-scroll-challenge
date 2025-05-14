'use client';

import { isServer, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useEffect, useState } from 'react';
import {
	persistQueryClient,
	PersistQueryClientProvider,
} from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				// With SSR, we usually want to set some default staleTime
				// above 0 to avoid refetching immediately on the client
				staleTime: 60 * 1000,
				// We want to keep the cache for 12 hours
				gcTime: 1000 * 60 * 60 * 12,
			},
		},
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
	if (isServer) {
		// Server: always make a new query client
		return makeQueryClient();
	} else {
		// Browser: make a new query client if we don't already have one
		// This is very important, so we don't re-make a new client if React
		// suspends during the initial render. This may not be needed if we
		// have a suspense boundary BELOW the creation of the query client
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}

// Ideally we would use an IndexDB which has more capacity, it's faster and it
// doesn't require serialization because it can store JavaScript native types
const syncStoragePersister = createSyncStoragePersister({
	storage: typeof window !== 'undefined' ? window.localStorage : undefined,
});

export default function Providers({ children }: { children: ReactNode }) {
	const [isReady, setIsReady] = useState(false);
	const queryClient = getQueryClient();

	useEffect(() => {
		// We need to wait until subscribing the cache is done and restored
		// before rendering the app
		const [_, p] = persistQueryClient({
			queryClient: getQueryClient(),
			persister: syncStoragePersister,
		});
		p.then(() => setIsReady(true));
	}, [queryClient]);

	if (!isReady) return null;

	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister: syncStoragePersister }}
		>
			{children}
			<ReactQueryDevtools />
		</PersistQueryClientProvider>
	);
}
