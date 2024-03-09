import GenericArticlePage from "@/components/generics/GenericArticlePage";
import ObstacleSidebar from "@/components/sidebars/ObstacleSidebar";
import { Obstacles } from "@/vendor/suroi/common/src/definitions/obstacles";

const toExport = GenericArticlePage({
  items: Obstacles.definitions,
  path: "obstacles",
  Sidebar: ObstacleSidebar,
  combinedArticles: [
    {
      title: "Crates",
      items: [
        "aegis_crate",
        "flint_crate",
        "regular_crate",
        "melee_crate",
        "grenade_crate",
      ],
      fileName: "crates",
    },
    {
      title: "Barrels",
      items: ["barrel", "super_barrel"],
      fileName: "barrels",
    },
    {
      title: "Trees",
      items: ["oak_tree", "birch_tree", "pine_tree"],
      fileName: "trees",
    },
    {
      title: "Airdrops",
      items: ["airdrop_crate_locked", "airdrop_crate", "gold_airdrop_crate"],
      fileName: "airdrops",
    },
    {
      title: "Gun Mounts",
      items: ["gun_mount_mcx_spear", "gun_mount_stoner_63", "gun_mount_maul"],
      fileName: "gun_mounts",
    },
    {
      title: "Toilets",
      items: [
        "toilet",
        "used_toilet",
        "porta_potty_toilet_open",
        "porta_potty_toilet_closed",
      ],
      fileName: "toilets",
    },
    {
      title: "Drawers",
      items: ["small_drawer", "large_drawer"],
      fileName: "drawers",
    },
    {
      title: "Doors",
      items: ["door", "vault_door", "garage_door", "porta_potty_door"],
      fileName: "doors",
    },
    {
      title: "Fences",
      items: ["port_fence", "port_fence_side"],
      fileName: "fences",
    },
    {
      title: "Control Panels",
      items: [
        "control_panel",
        "control_panel_activated",
        "control_panel_2",
        "control_panel_small",
        "tugboat_control_panel",
      ],
      fileName: "control_panels",
    },
  ],
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
