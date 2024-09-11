<script lang="ts">
	import { BrandIcon, SolidIcon } from '$lib/components/icons';
</script>

<svelte:head>
	<title>Contact me</title>
</svelte:head>

<div class="flex h-screen items-center">
	<div class="card md:w-[50%] w-screen md:ml-16 bg-primary shadow-xl">
		<div class="card-body text-white">
			<p>
				<BrandIcon brand="discord" />
				@madpie._
			</p>

			<p>
				<a href="https://github.com/ndelta0/" target="_blank">
					<BrandIcon brand="github" />
					madpie._ (ndelta0)
				</a>
			</p>

			<p>
				<a href="https://twitter.com/_madpie_/" target="_blank">
					<BrandIcon brand="twitter" />
					@_madpie_
				</a>
			</p>

			<p>
				<SolidIcon name="envelope" />
				<a href="mailto:peter@mad-pie.com">
					peter@mad-pie.com
				</a>
				<span style="font-size: 20px;">|</span> <span class="underline">not working? try</span>
				<a href="mailto:ppiotr.madura@gmail.com">
					ppiotr.madura@gmail.com
				</a>
			</p>
			<p>
				<SolidIcon name="person" />
				<span class="font-semibold">Want to get my CV?</span> Contact me and I'll send it to you.
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
