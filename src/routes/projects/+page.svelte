<script lang="ts">
	import {
		ProjectCard,
		ProjectCardButton as Button,
		ProjectCardButtonList as ButtonList
	} from '$lib/components/projectCard';
	import { BrandIcon } from '$lib/components/icons';
</script>

<svelte:head>
	<title>Projects and contributions</title>
</svelte:head>

<div class="flex flex-col gap-5 items-center my-5 mx-5">
	<div><a href="/" class="btn">Go back</a></div>

	<ProjectCard
		title="Obsidian"
		tag="Contribution"
		type="Software"
		description="Obsidian is a C# clean-room implementation of the Minecraft server."
		logoUrl="https://avatars.githubusercontent.com/ObsidianMC"
	>
		<span>
			GitHub description:
			<span class="font-mono">A C# implementation of the Minecraft server protocol.</span>
		</span>

		<ButtonList>
			<Button address="https://github.com/obsidianmc/obsidian" content="GitHub">
				<BrandIcon brand="github" />
			</Button>
			<Button address="https://discord.gg/gQBtqyXChu" content="Discord">
				<BrandIcon brand="discord" />
			</Button>
		</ButtonList>
	</ProjectCard>

	<ProjectCard
		title="Remore"
		tag="Contribution"
		type="Software"
		description="A 21st century successor to TeamSpeak"
		logoUrl="https://avatars.githubusercontent.com/remore-chat"
	>
		<span>
			GitHub description:
			<span class="text-mono">Remore - voice and text chat software</span>
		</span>

		<ButtonList>
			<Button address="https://github.com/remore-chat/Remore" content="GitHub">
				<BrandIcon brand="github" />
			</Button>
			<Button address="https://discord.gg/jPpCDesttm" content="Discord">
				<BrandIcon brand="discord" />
			</Button>
			<Button address="https://remore.roxxel.moe/" content="Website" />
		</ButtonList>
	</ProjectCard>

	<ProjectCard
		title="BinData"
		tag="Project"
		type="Software"
		description=".NET binary serialization library"
	>
		<ButtonList>
			<Button address="https://github.com/ndelta0/BinData" content="GitHub">
				<BrandIcon brand="github" />
			</Button>
		</ButtonList>
	</ProjectCard>

	<ProjectCard
		title="scs-sdk-plugin"
		tag="Contribution"
		type="Software"
		description="Plugin to access data from SCS games"
	>
		<span>
			GitHub description:
			<span class="text-mono break-words"
				>ETS2 (Euro Truck Simulator 2) & ATS (American Truck Simulator) SDK plug-in. Telemetry data
				is shared via SharedMemory/Memory Mapped Files.</span
			>
		</span>

		<ButtonList>
			<Button address="https://github.com/RenCloud/scs-sdk-plugin" content="GitHub">
				<BrandIcon brand="github" />
			</Button>
		</ButtonList>
	</ProjectCard>

	<ProjectCard
		title="Advanced Rest Client"
		tag="Contribution"
		type="Software"
		description="Advanced REST Client - Desktop application"
		logoUrl="https://avatars.githubusercontent.com/u/19393150"
	>
		<ButtonList>
			<Button address="https://github.com/advanced-rest-client/arc-electron" content="GitHub">
				<BrandIcon brand="github" />
			</Button>
		</ButtonList>
	</ProjectCard>
</div>
