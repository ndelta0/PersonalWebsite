<script lang="ts">
	export let title: string;
	export let tag: 'Contribution' | 'Project';
	export let type: 'Software' | 'Hardware';
	export let description: string;
	export let logoUrl: string | null = null;
</script>

<div class="card bg-primary shadow-xl w-[100%] md:w-[75%]">
	<div class="card-body text-white">
		<h2 class="card-title">
			{#if logoUrl}
				<div class="avatar">
					<div class="w-12 rounded"><img src={logoUrl} alt="{title} Logo" /></div>
				</div>
			{/if}
			{title}
			<div class="card-actions justify-end">
				<div class="badge badge-info badge-sm">{tag}</div>
				<div class="badge badge-success badge-sm">{type}</div>
			</div>
		</h2>
		<p>{description}</p>
		<div>
			<slot />
		</div>
	</div>
</div>
