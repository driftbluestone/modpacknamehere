
LootJS.modifiers((event) => {
    event.addBlockLootModifier("dirt")
        .matchMainHand(Item.of("minecraft:brush").ignoreNBT())
        .addAlternativesLoot(
            LootEntry.of("minecraft:stone_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:andesite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:diorite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:granite_pebble").when((c) => c.randomChance(0.5)),
        );

    event.addBlockLootModifier("grass_block")
        .matchMainHand(Item.of("minecraft:brush").ignoreNBT())
        .addAlternativesLoot(
            LootEntry.of("minecraft:stone_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:andesite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:diorite_pebble").when((c) => c.randomChance(0.5)),
            LootEntry.of("minecraft:granite_pebble").when((c) => c.randomChance(0.5)),
        );

    event.addBlockLootModifier("gravel")
        .matchMainHand(Item.of("minecraft:brush").ignoreNBT())
        .addAlternativesLoot(
            LootEntry.of("gtceu:crushed_iron_ore").when((c) => c.randomChance(0.10)),
        );

    event.addBlockLootModifier("minecraft:cobblestone")
        .matchMainHand(Item.of("kubejs:wooden_hammer").ignoreNBT())
        .removeLoot("minecraft:cobblestone");
    
    event.addBlockLootModifier("minecraft:cobblestone")
        .matchMainHand(Item.of("kubejs:wooden_hammer")
        .ignoreNBT())
        .addLoot("minecraft:gravel");
});

LootJS.modifiers((event) => {
    
});

LootJS.modifiers((event) => {
    
});

LootJS.modifiers((event) => {
    
});