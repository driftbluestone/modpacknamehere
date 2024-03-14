
StartupEvents.registry('item', event => {

    event.create('wooden_hammer', 'pickaxe')
        .tier('wood')
        .unstackable()
        .maxDamage(64)
        .displayName('Wooden Hammer');

});