<script lang="ts">
	import { BrandIcon, RegularIcon, SolidIcon } from '$lib/components/icons';
</script>

<svelte:head>
	<title>Contact me</title>
</svelte:head>

<div class="flex h-screen items-center">
	<div class="card md:w-[50%] w-screen md:ml-16 bg-primary shadow-xl">
		<div class="card-body text-white">
			<p><BrandIcon brand="discord" />@kuraik4rasu</p>

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
				<SolidIcon name="envelope" />
				<a href="mailto:peter@k4rasudev.me">
					peter@k4rasudev.me
				</a>
				<span style="font-size: 20px;">|</span>
				<a href="mailto:ppiotr.madura@gmail.com">
					ppiotr.madura@gmail.com
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
