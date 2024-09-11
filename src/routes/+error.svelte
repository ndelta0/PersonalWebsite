<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen items-center">
	{#if $page.status === 404}
		<div class="text-warning">Ya dun goofed. There's no page like this dummy. <a href="/" class="link">Get back here.</a></div>
	{:else}
		<div class="text-error">
			<p>Something went wrong. Please try again later.</p>
			{#if $page.error}
				<br />
				<span class="badge badge-error">{$page.status}</span>
				<pre class="text-error">{$page.error.message}</pre>
			{/if}
		</div>
	{/if}
</div>