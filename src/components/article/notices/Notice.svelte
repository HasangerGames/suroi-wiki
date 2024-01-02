<script lang="ts">
	export let image: string;
</script>

<div class="bg-muted p-4 rounded-md flex flex-row gap-4 w-full h-26 not-prose">
	<img src={image} width={72} height={72} class="w-18 h-18" alt="Notice" />
	<div class="prose my-auto">
		<slot />
	</div>
</div>
