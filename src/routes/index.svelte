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
				I'm <span class="text-orange-300">Peter</span> and I'm from
				<span class="text-blue-200"><i class="fa-solid fa-earth-europe" /> Warsaw, Poland</span>.
			</p>
			<p>
				I'm currently studying <span class="text-green-500"
					><i class="fa-solid fa-screwdriver-wrench" /> automation, robotics and industrial IT on Warsaw University of Technology</span
				>
				and I really like
				<span class="text-red-500"
					>all <i class="fa-solid fa-code" /> software and <i class="fa-solid fa-microchip" /> hardware
					projects</span
				>.
				<br />
				I also like some networking.
				<br />
				I'd love to make things, except my budget doesn't really allow for that, so I stick to software
				(at least currently).
			</p>

			<div class="card-actions justify-end">
				<a href="projects" class="btn btn-accent">Projects and contributions</a>
				<a href="contact" class="btn btn-error">Contact me</a>
			</div>
		</div>
	</div>
</div>
