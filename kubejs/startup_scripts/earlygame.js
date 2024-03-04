StartupEvents.registry('item', event => {
        event.create('wooden_hammer', 'pickaxe').tier('wood').unstackable().maxDamage(64).displayName(`Wooden Hammer`)
        event.create('stone_pebble').displayName(`Stone Pebble`)
        event.create('andesite_pebble').displayName(`Andesite Pebble`)
        event.create('diorite_pebble').displayName(`Diorite Pebble`)
        event.create('granite_pebble').displayName(`Granite Pebble`)
});