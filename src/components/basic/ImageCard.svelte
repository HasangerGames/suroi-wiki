<script lang="ts">
	export let image: string;
	export let title: string;
	export let href: string = '';
</script>

<a
	{href}
	class="transition-colors flex flex-row gap-4 p-4 rounded-md border-border border not-prose hover:border-primary hover:text-primary"
>
	<img src={image} alt={`${title} image`} width={96} height={96} class="w-24 h-24" />
	<div class="flex flex-col gap-2">
		<h1 class="text-xl font-bold">{title}</h1>
		<slot />
	</div>
</a>
