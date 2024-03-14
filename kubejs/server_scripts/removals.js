
ServerEvents.recipes(event => {

    [
        'minecraft:brush',
        'create:item_application/andesite_casing_from_log_using_deployer',
        'create:item_application/andesite_casing_from_wood_using_deployer',
        'create:item_application/andesite_casing_from_log',
        'create:item_application/andesite_casing_from_wood'
    ].forEach((recipeID) => event.remove({id: recipeID}));

});