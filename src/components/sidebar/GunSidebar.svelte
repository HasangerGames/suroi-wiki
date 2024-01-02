<script lang="ts">
	import type { GunDefinition } from 'suroi/common/src/definitions/guns';
	import GenericSidebar from './utils/GenericSidebar.svelte';
	import { getSuroiImageLink, getSuroiKillfeedImageLink } from '$lib/suroi';
	import { FireMode } from 'suroi/common/src/constants';
	import InfoboxCol from './utils/InfoboxCol.svelte';
	import InfoboxRow from './utils/InfoboxRow.svelte';

	export let gun: GunDefinition;
</script>

<GenericSidebar
	title={gun.name}
	images={[
		{
			src: getSuroiImageLink(gun),
			title: 'Loot'
		},
		{
			src: getSuroiImageLink(gun, undefined, 'world'),
			title: 'World'
		},
		{
			src: getSuroiKillfeedImageLink(gun),
			title: 'Killfeed'
		}
	]}
>
	<InfoboxRow>
		<InfoboxCol title="Fire Mode">
			{FireMode[gun.fireMode]}
		</InfoboxCol>
		<InfoboxCol title="Ammo Type">
			<!-- TODO: Ammo icon -->
		</InfoboxCol>
		<InfoboxCol title="Capacity">{gun.capacity}</InfoboxCol>
	</InfoboxRow>
	<InfoboxRow>
		<InfoboxCol title="Reload">
			{gun.singleReload ? '1' : gun.capacity} in {gun.reloadTime}s
		</InfoboxCol>
		<InfoboxCol title="Firing Delay" abbr="Delay between shots">
			{gun.fireDelay}ms
		</InfoboxCol>
		<InfoboxCol
			title="Switch Delay"
			abbr="Cooldown between switching between this weapon and another"
		>
			{gun.switchDelay}ms
		</InfoboxCol>
	</InfoboxRow>

	{#if gun.fireMode === FireMode.Burst}
		<InfoboxRow>
			<InfoboxCol title="Burst Cooldown">
				{gun.burstProperties.burstCooldown}ms
			</InfoboxCol>
			<InfoboxCol title="Shots per Burst">
				{gun.burstProperties.shotsPerBurst} shots
			</InfoboxCol>
		</InfoboxRow>
	{/if}
	<InfoboxRow>
		<InfoboxCol title="Spread" abbr="Spread (angle of inaccuracy) when still">
			{gun.shotSpread}°
		</InfoboxCol>
		<InfoboxCol title="Move Spread" abbr="Spread (angle of inaccuracy when moving)">
			{gun.moveSpread}°{' '}
			<abbr title="When compared to normal spread">
				({gun.moveSpread - gun.shotSpread > 0 ? '+' : ''}
				{(gun.moveSpread - gun.shotSpread).toFixed(2)}°)
			</abbr>
		</InfoboxCol>
	</InfoboxRow>
</GenericSidebar>
