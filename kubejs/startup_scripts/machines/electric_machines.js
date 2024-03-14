
// Creating the recipe types
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('sieve')
        .category('sieve')
        .setEUIO('in')
        .setMaxIOSize(3, 6, 1, 2) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);

});

// Creating the machines
GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('sieve', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV, GTValues.MAX)
        .recipeType('sieve', true, true)
        .tankScalingFunction(tier => tier * 8000)
        .rotationState(RotationState.NON_Y_AXIS)
        .workableTieredHullRenderer('gtceu:block/machines/sifter');

});