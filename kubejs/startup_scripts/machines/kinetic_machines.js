const KineticWorkableTieredHullMachineRenderer = Java.loadClass('com.gregtechceu.gtceu.client.renderer.machine.KineticWorkableTieredHullMachineRenderer');

// Creating the recipes
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('kinetic_sieve')
        .category('sieve')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 1, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    event.create('kinetic_crusher')
        .category('crusher')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

    event.create('kinetic_squeezer')
        .category('squeezer')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

});

// Creating the machines
GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('kinetic_sieve', 'kinetic', GTValues.ULV)
        .recipeType('kinetic_sieve', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .renderer(() => new KineticWorkableTieredHullMachineRenderer(GTValues.ULV, 'kubejs:block/andesite_machine_hull', 'gtceu:block/machines/sifter'));

    event.create('kinetic_crusher', 'kinetic', GTValues.ULV)
        .recipeType('kinetic_crusher', true, true)
        .rotationState(RotationState.NON_Y_AXIS)
        .renderer(() => new KineticWorkableTieredHullMachineRenderer(GTValues.ULV, 'kubejs:block/andesite_machine_hull', 'gtceu:block/machines/macerator'));

    event.create('kinetic_squeezer', 'kinetic', GTValues.ULV)
        .recipeType('kinetic_squeezer', true, true)
        .tankScalingFunction(tier => tier * 8000)
        .rotationState(RotationState.NON_Y_AXIS)
        .renderer(() => new KineticWorkableTieredHullMachineRenderer(GTValues.ULV, 'kubejs:block/andesite_machine_hull', 'gtceu:block/machines/macerator'));
});