<script lang="ts">
	import { getSuroiEmote } from '$lib/suroi';
	import type { GunDefinition } from 'suroi/common/src/definitions/guns';
	import type { PageData } from './$types';
	import GenericSidebar from '../../../../components/sidebar/utils/GenericSidebar.svelte';
	import { FireMode } from 'suroi/common/src/constants';
	import Notice from '../../../../components/article/notices/Notice.svelte';
	import GunSidebar from '../../../../components/sidebar/GunSidebar.svelte';

	export let data: PageData;

	const item: GunDefinition | undefined = data.item;
</script>

<main class="flex flex-col gap-4 flex-justify-between lg:flex-row-reverse">
	{#if item}
		<GunSidebar gun={item} />
	{/if}

	{#if data.article}
		<article class="grow w-full">
			<h1>{item?.name}</h1>
			<svelte:component this={data.article} />
		</article>
	{:else}
		<Notice image={getSuroiEmote('question_mark')}>This article appears to be empty</Notice>
	{/if}
</main>
