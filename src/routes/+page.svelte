<svelte:head>
	<title>Hello</title>
</svelte:head>

<div class="flex h-screen items-center">
	<div class="card md:w-auto w-screen md:ml-16 bg-primary shadow-xl">
		<div class="card-body text-white">
			<h2 class="card-title">
				Hello <span class="line-through">world</span>
				<span class="text-amber-400 pr-0">visitor</span>
			</h2>

			<p>
				I'm <span class="text-orange-300">Peter</span> from
				<span class="text-blue-200"><i class="fa-solid fa-earth-europe" /> Warsaw, Poland</span>.
			</p>
			<p>
				I'm currently studying <span class="text-green-500"
			><i class="fa-solid fa-screwdriver-wrench" /> automation, robotics and industrial IT on Warsaw University of Technology</span
			>
				and I consider myself an enthusiast of
				<span class="text-red-500"
				>all <i class="fa-solid fa-code" /> software and <i class="fa-solid fa-microchip" /> hardware
					projects</span
				>, especially embedded.
				<br />
				I also like to play around with <!-- devops and server management, --> <span class="text-blue-500"
			><i class="fa-solid fa-server" /> server management</span>.
				<br />
				I'd like to make things, except my budget doesn't really allow for that right now, so I stick to software .
			</p>

			<div class="card-actions justify-end">
				<a class="btn btn-accent" href="projects">See what I did</a>
				<a href="contact" class="btn btn-error">Contact me</a>
			</div>
		</div>
	</div>
</div>
