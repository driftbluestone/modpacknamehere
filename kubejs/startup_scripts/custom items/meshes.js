//very simple sieving system :trolllaugh:

const meshtypes = [
    'String',
    'Flint',
    'Andesite',
    'Copper',
    'Zinc',
    'Iron',
    'Brass',
    'Bronze',
    'Rose_Gold',
    'Quartz',
    'Rose_Quartz',
    'Diamond',
    'Emerald',
    'Netherite',
    'Radioactive',
    'Naquadah',
    'Trinium',
    'Darmstadtium',
    'Tritanium',
    'Neutronium',
    //unsorted meshes
    'Void',
    'Signalum',
    'Lumium',
    'Enderium',
    'Osmiridium',
    'Titanium',
    'Tungstensteel'
];

StartupEvents.registry('item', event => {

    for (const element of meshtypes) {
        event.create(`${element.toLowerCase()}_mesh`)
            .displayName(`${element} Mesh`)
    }
    
});

