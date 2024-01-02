<script lang="ts">
	import type { ImageTab } from '$lib/types';

	export let images: ImageTab[];

	let currentTab = 0;
	$: currentImage = images[currentTab];
</script>

<div class={`flex flex-col items-center justify-start gap-2 bg-white/5 rounded-md`}>
	{#if images.length != 1}
		<div class="flex flex-row flex-wrap w-full justify-around gap-2 items-center p-1">
			{#each images as image, i}
				<button
					class={`flex justify-center grow rounded-md min-w-[7ch] hover:bg-white/5 cursor-pointer text-muted-foreground hover:text-white ${
						currentTab === i ? '!text-white bg-white/10 ring-primary ring' : ''
					}`}
					on:click={() => {
						currentTab = i;
					}}
					>{image.title ?? i + 1}
				</button>
			{/each}
		</div>
	{/if}
	<img
		src={currentImage.src}
		alt={currentImage.alt ?? currentImage.title ?? currentImage.src}
		width={128}
		height={128}
		class={`w-40 h-40 my-4 p-4`}
	/>
</div>
