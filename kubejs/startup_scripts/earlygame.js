StartupEvents.registry('item', event => {
        event.create('wooden_hammer', 'pickaxe').tier('wood').unstackable().maxDamage(64).displayName(`Wooden Hammer`)
        event.create('stone_pebble').displayName(`Stone Pebble`)
        event.create('andesite_pebble').displayName(`Andesite Pebble`)
        event.create('diorite_pebble').displayName(`Diorite Pebble`)
        event.create('granite_pebble').displayName(`Granite Pebble`)
});

StartupEvents.registry("block", (event) => {
        event.create("andesite_machine_hull")
        .displayName("Andesite Machine Hull")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("mineable/axe")
        .tagBlock("mineable/pickaxe")
    })
StartupEvents.registry("block", (event) => {
        event.create("dust")
        .displayName("Dust")
        .hardness(1.0)
        .resistance(1.0)
        .tagBlock("mineable/shovel")
    })

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('kinetic_crusher')
            .category('crusher')
            .setEUIO('in')
            .setMaxIOSize(1, 1, 0, 0) // 
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.MACERATOR)
    })
GTCEuStartupEvents.registry('gtceu:machine', event => {
        event.create('kinetic_crusher', 'kinetic', GTValues.ULV)
            .recipeType('kinetic_crusher', true, true)
            .rotationState(RotationState.NON_Y_AXIS)
            .workableTieredHullRenderer("gtceu:block/machines/macerator");
    })