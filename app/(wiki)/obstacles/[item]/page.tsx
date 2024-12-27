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
        "frozen_crate"
      ],
      fileName: "crates"
    },
    {
      title: "Barrels",
      items: ["barrel", "super_barrel"],
      fileName: "barrels"
    },
    {
      title: "Trees",
      items: ["oak_tree", "small_oak_tree", "birch_tree", "pine_tree", "dormant_oak_tree", "maple_tree"],
      fileName: "trees"
    },
    {
      title: "Airdrops",
      items: ["airdrop_crate_locked", "airdrop_crate", "gold_airdrop_crate"],
      fileName: "airdrops"
    },
    {
      title: "Gun Mounts",
      items: [
        "gun_mount_mcx_spear",
        "gun_mount_stoner_63",
        "gun_mount_hp18",
        "gun_mount_maul",
        "gun_mount_dual_rsh12",
        "gun_mount_mini14"
      ],
      fileName: "gun_mounts"
    },
    {
      title: "Toilets",
      items: [
        "toilet",
        "used_toilet",
        "porta_potty_toilet_open",
        "porta_potty_toilet_closed"
      ],
      fileName: "toilets"
    },
    {
      title: "Drawers",
      items: ["small_drawer", "large_drawer"],
      fileName: "drawers"
    },
    {
      title: "Doors",
      items: ["door", "metal_door", "vault_door", "garage_door", "porta_potty_door"],
      fileName: "doors"
    },
    {
      title: "Control Panels",
      items: [
        "control_panel",
        "control_panel2",
        "control_panel_small",
        "tugboat_control_panel"
      ],
      fileName: "control_panels"
    },
    {
      title: "Bush",
      items: ["bush", "blueberry_bush", "vibrant_bush"],
      fileName: "bushes"
    },
    {
      title: "Kitchen Units",
      items: ["kitchen_unit_1", "kitchen_unit_2", "kitchen_unit_3"],
      fileName: "kitchen_units"
    },
    {
      title: "Gifts",
      items: ["red_gift", "green_gift", "blue_gift", "black_gift", "purple_gift"],
      fileName: "gifts"
    },
    {
      title: "Pumpkins",
      items: ["pumpkin", "large_pumpkin"],
      fileName: "pumpkins"
    },
    {
      title: "Headquarters Desk",
      items: ["hq_desk_left", "hq_desk_right"],
      fileName: "headquarters_desk"
    },
    {
      title: "Couches",
      items: ["couch", "white_small_couch", "red_small_couch", "couch_part", "couch_end_left", "couch_end_right", "couch_corner"],
      fileName: "couches"
    },
    {
      title: "Tables",
      items: ["small_table", "large_table", "round_table"],
      fileName: "tables"
    },
    {
      title: "Sinks",
      items: ["sink", "sink2"],
      fileName: "sinks"
    }
  ]
});

export const { generateMetadata, generateStaticParams } = toExport;
export default toExport.default;
