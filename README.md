# *** ALPHA DEVELOPMENT - DO NOT USE IN PRODUCTION ***

# Uijettos

Stateful & stateless, React UI widget components for websites and web apps, styleable with BEM.

# Build

```shell
npm run build
```

# Usage

Each uijetto is avaliable in two variants; stateful or stateless. This allows use in a variety of scenarios.

Use the stateful variants for websites or web apps where there is no global app state being managed.

Use stateless if your app is managing the state and you want the uijetto to simply display the current state and trigger changes to it.

All uijettos follow a simple naming convention:

All stateful variants are named:

`Uijettos[ComponentName]`

All stateless variants are named:

`UijettosStateless[ComponentName]`

Both variants accept the same props, and do the same thing, only the stateful uijettos will manage their own state.


# Styling

Uijettos use the BEM naming convention for their markup structure. This allows for granular styling control of the elements to fit most design needs.

The block name for each Uijetto has a name prefix (uijettos by default), followed by the component name - For example `uijettos-toggle-button`.

The name prefix can be changed for each component with the prop `cssClassPrefix`. This will replace the 'uijettos' in the block name.

Each uijetto will have a slightly different structure for their element and modifier classes, the details of which are documented below. To style the uijettos to your needs, simply add styles for the the BEM classes in your CSS.

## UijettosToggleButton classes

Block

`uijettos-toggle-button` - The button element (i.e. the root element of the component)

Elements

`uijettos-toggle-button__label` - The span element containing the text of the button

Modifiers

`uijettos-toggle-button--on` - The block when it is in a true state

`uijettos-toggle-button__label--on` - The span with the text of the button when it is in a true state

# License

Licensed under the MIT license.