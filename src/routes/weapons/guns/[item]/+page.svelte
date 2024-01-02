<script lang="ts">
	import { getSuroiImageLink, getSuroiKillfeedImageLink } from '$lib/suroi';
	import type { GunDefinition } from 'suroi/common/src/definitions/guns';
	import type { PageData } from './$types';
	import GenericSidebar from '../../../../components/sidebar/utils/GenericSidebar.svelte';
	import InfoboxRow from '../../../../components/sidebar/utils/InfoboxRow.svelte';
	import InfoboxCol from '../../../../components/sidebar/utils/InfoboxCol.svelte';
	import { FireMode } from 'suroi/common/src/constants';

	export let data: PageData;

	const item: GunDefinition | undefined = data.item;
</script>

{#if item}
	<GenericSidebar
		title={item.name}
		images={[
			{
				src: getSuroiImageLink(item),
				title: 'Loot'
			},
			{
				src: getSuroiImageLink(item, undefined, 'world'),
				title: 'World'
			},
			{
				src: getSuroiKillfeedImageLink(item),
				title: 'Killfeed'
			}
		]}
	>
		<InfoboxRow>
			<InfoboxCol title="Fire Mode">
				{FireMode[item.fireMode]}
			</InfoboxCol>
			<InfoboxCol title="Ammo Type">
				<!-- TODO: Ammo icon -->
			</InfoboxCol>
			<InfoboxCol title="Capacity">{item.capacity}</InfoboxCol>
		</InfoboxRow>
		<InfoboxRow>
			<InfoboxCol title="Reload">
				{item.singleReload ? '1' : item.capacity} in {item.reloadTime}s
			</InfoboxCol>
			<InfoboxCol title="Firing Delay" abbr="Delay between shots">
				{item.fireDelay}ms
			</InfoboxCol>
			<InfoboxCol
				title="Switch Delay"
				abbr="Cooldown between switching between this weapon and another"
			>
				{item.switchDelay}ms
			</InfoboxCol>
		</InfoboxRow>

		{#if item.fireMode === FireMode.Burst}
			<InfoboxRow>
				<InfoboxCol title="Burst Cooldown">
					{item.burstProperties.burstCooldown}ms
				</InfoboxCol>
				<InfoboxCol title="Shots per Burst">
					{item.burstProperties.shotsPerBurst} shots
				</InfoboxCol>
			</InfoboxRow>
		{/if}
		<InfoboxRow>
			<InfoboxCol title="Spread" abbr="Spread (angle of inaccuracy) when still">
				{item.shotSpread}°
			</InfoboxCol>
			<InfoboxCol title="Move Spread" abbr="Spread (angle of inaccuracy when moving)">
				{item.moveSpread}°{' '}
				<abbr title="When compared to normal spread">
					({item.moveSpread - item.shotSpread > 0 ? '+' : ''}
					{(item.moveSpread - item.shotSpread).toFixed(2)}°)
				</abbr>
			</InfoboxCol>
		</InfoboxRow>
	</GenericSidebar>
{/if}

{#if data.article}
	<svelte:component this={data.article} />
{/if}
