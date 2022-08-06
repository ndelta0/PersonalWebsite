<script lang="ts">
	export let address: string;
	export let content: string;
</script>

<a href={address} class="btn btn-secondary text-md" target="_blank">
	<slot />
	{content}
</a>
