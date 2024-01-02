<script lang="ts">
	export let title: string;
	export let abbr: string | undefined = undefined;
</script>

<div class="p-2 flex flex-col gap-1 basis-0 grow">
	<span class={`font-bold`}>
		{#if abbr}
			<abbr title={abbr}>{title}</abbr>
		{:else}
			{title}
		{/if}
	</span>
	<div class="flex justify-center items-center flex-1"><slot /></div>
</div>
