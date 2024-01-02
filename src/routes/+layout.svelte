<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
</script>

<main
	class="bg-background text-foreground min-h-screen min-w-screen font-sans antialiased box-border"
>
	<div class="prose prose-truegray prose-invert max-w-screen-xl mx-auto">
		<slot />
	</div>
</main>
