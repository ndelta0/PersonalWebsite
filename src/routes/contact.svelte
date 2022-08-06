<script lang="ts">
	import { BrandIcon, RegularIcon, SolidIcon } from '$lib/components/icons';
</script>

<svelte:head>
	<title>Contact me</title>
</svelte:head>

<div class="flex h-screen items-center">
	<div class="card md:w-[50%] w-screen md:ml-16 bg-primary shadow-xl">
		<div class="card-body text-white">
			<p><BrandIcon brand="discord" />KuraiK4rasu@3330</p>

			<p>
				<a href="https://github.com/ndelta0/" target="_blank">
					<BrandIcon brand="github" />KuraiK4rasu (ndelta0)
				</a>
			</p>

			<p>
				<a href="https://twitter.com/negative_delta0/" target="_blank">
					<BrandIcon brand="twitter" />@negative_delta0
				</a>
			</p>

			<p>
				<a href="mailto:peter@k4rasudev.me">
					<SolidIcon name="envelope" />peter@k4rasudev.me
				</a>
			</p>

            <p>
                <a href="/gpg_key.asc" download>
                    <SolidIcon name="key" />Download GPG public key
                </a>
            </p>

			<div class="card-actions justify-end">
				<a href="/" class="btn">Go back</a>
			</div>
		</div>
	</div>
</div>
