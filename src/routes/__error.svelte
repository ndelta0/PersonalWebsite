<script lang="ts" context="module">
	import type { LoadEvent } from '@sveltejs/kit';

	export function load(loadEvent: LoadEvent) {
		return {
			props: {
				message: loadEvent.error?.message,
				statusCode: loadEvent.status
			}
		};
	}
</script>

<script lang="ts">
	export let message: string | null;
	export let statusCode: number | null;
</script>

<div class="flex h-screen items-center">
	{#if statusCode == 404}
		<div class="text-warning">Ya dun goofed. There's no page like this dummy. <a href="/" class="link">Get back here.</a></div>
	{:else}
		<div class="text-error">
			<p>Something went wrong. Please try again later.</p>
			{#if message}
				<br />
				<span class="badge badge-error">{statusCode}</span>
				<pre class="text-error">{message}</pre>
			{/if}
		</div>
	{/if}
</div>
