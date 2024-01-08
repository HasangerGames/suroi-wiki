import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi"
import Image from "next/image"

export default function SuroiItemImage({itemID, width, height, rotation, variation, append, dual}: SuroiItemImageProps) {
	return (
		<Image
			width={width ?? 100}
			height={height ?? 100}
			style={{
				"rotate": `${rotation ?? 0}deg`
			}}
			src={getSuroiImageLink(getSuroiItem(itemID, variation ?? undefined, append ?? "", dual ?? false))}
			alt={getSuroiItem(itemID)?.name}
		/>
		)
}

export interface SuroiItemImageProps extends React.PropsWithChildren {
	itemID: string,
	width?: number,
	height?: number,
	rotation?: number,
	variation?: number,
	append?: string,
	dual?: boolean
}
