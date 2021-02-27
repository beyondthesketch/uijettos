# *** BETA DEVELOPMENT ***

## This project is still in early development stages and should not be used for public, production websites or apps

# Uijettos

Stateful & stateless, React UI widget components for websites and web apps, styleable with BEM.

Uijettos components are intended to be used inside your project, they are distributed as source files to be used within your own projects and bundled/minified through your own project's toolchain.

Production ready, default styling is provided for convenience, but the idea is developers style their own to fit their designs.

# Included Widgets/Components

## UijettosToggleButton

Click on. Click off. That is all.

## UijettosOptionsButton

The lovechild of the button and dropdown. Click the main segment for the primary button action, click the smaller segment for a list of other actions.

## UijettosSelectList

A different take on the radio buttons. Select 1 of multiple options, but instead of a radio button, it's whatever you want.

# Build Assets

To build the production ready default styles CSS files:

```shell
npm run build
```

# Development Setup

1. Install dependencies:

```shell
npm install
```

2. Start the local development storybook:

```shell
npm start
```

The local storybook page will open automatically and changes will trigger a update/reload.

# Usage

Uijettos are either stateful or stateless with hooks. This allows use in a variety of usage scenarios.

## Naming

All uijettos follow a simple naming convention in upper camel case/Pascal case:

`Uijettos[ComponentName]`


## Components Config

Each Uijetto has different props and usage details:

## UijettosToggleButton

### props

__labelOff__ : string > _optional_, _default : 'off'_ - The text for the button when it's in the false state

__labelOn__ : string > _optional_, _default : 'on'_ - The text for the button when it's in the true state

__initialState__ : boolean > _optional_, _default : false_ - What state to start off on - use this to set the state when mounted when using like an 'uncontrolled' component (i.e. stateful).

__state__ : boolean > _optional_, _default : undefined_ - Current on/off state of the button - use this to set the state when using like a 'controlled' component, such as when you are managing this value in app state (i.e. stateless).

__disabled__ : boolean > _optional_, _default : false_ - Whether the button is disabled

__whenClicked__ : Function > _optional_ - A callback function to fire when the button is clicked. The callback accepts an argument that contains the state (after the click) of the button

## UijettosOptionsButton

### props

__label__ : string - The text for the main button

__options__ : Map - A map object with each item being a `string` to use for the label and a function to call when the option is selected.

example:
```javascript
<UijettosOptionsButton
    label="foo"
    options={
        new Map(
            [
                ['widgets', () => console.log('widgets')],
                ['doodads', () => console.log('doodads')],
            ]
        )
    }
/>
```

__whenClicked__ : Function > _optional_ - A callback function to fire when the main button is clicked.

## UijettosSelectList

### props

__initialSelected__ : string > _optional_, _defaults to the first option_ - The initially selected option when the component mounts - use this to set the selected item when using like an 'uncontrolled' component (i.e. stateful)

__selected__ : string > _optional_, _default : undefined_ - Current selected option - use this to set the selected item when using like a 'controlled' component,such as when you are managing this value in app state (i.e. stateless)

__whenChanged__ : Function > _optional_ - A callback to fire when an option is selected. The callback accepts one argument that contains the value of the selected option.

__important usage notes__

This component should be treated like a `<ul>` or `<ol>` in that it must contain children that are `<li>`s.

Each `<li>` will be one option, and _must_ have a `data-value` attribute, containing text which will be used to identify the option.

When the option is selected, and it is not currently already selected, it will fire the `whenChanged` callback if supplied, with the `data-value` attribute's value as an argument.

Each `<li>` can contain any normally permitted markup you wish, and this is the opportunity to make the UI widget unique.

example use:

```javascript
<UijettosSelectList
        initialSelected="baz"
        whenChanged={(val) => console.log(val)}
    >
    <li
        data-value="bar"
    >
        bar
    </li>
    <li
        data-value="baz"
    >
        baz
    </li>
    <li
        data-value="bat"
    >
        bat
    </li>
</UijettosSelectList>
```


# Styling

Uijettos use the BEM naming convention in their markup structure. This allows for granular styling control of the elements to fit most design needs.

The block name for each Uijetto has a name prefix (`uijettos` by default), followed by the component name (in kebab-case)  - For example `uijettos-toggle-button`.

The name prefix can be changed for each component with the prop `cssClassPrefix`. This will replace the 'uijettos' in the block name.

Each uijetto will have a slightly different structure for their element and modifier classes, the details of which are documented below. To style the uijettos to your needs, simply add styles for the the BEM classes in your CSS.

## Included/Default Styling

By default Uijettos have no styling applied to them. However, for convenience, some styling is included to allow immediate use. This is especially useful for quick prototyping.

The styles are supplied in Sass for development or bundling in your own toolchain, or as production ready (compressed) CSS files that can be served to the client.

Development Sass files are located at:

`src/sass/`

and named with the convention:

`[component-name]-defaults.scss`

The production ready CSS is located at:

`styles/`

## UijettosToggleButton

__Block__

`uijettos-toggle-button` - The `button` element (i.e. the root element of the component).

__Elements__

`uijettos-toggle-button__label` - `span` element containing the text of the button.

__Modifiers__

`uijettos-toggle-button--on` - The block (`button`) when it is in a true state

`uijettos-toggle-button--disabled` - The block (`button`) when the button is disabled - __TIP:__ this class is included for convenience and flexibility to suit your styling needs, however, we strongly advise adding styles for the disabled state using the CSS pseudo class `:disabled` instead of relying on this one.

`uijettos-toggle-button__label--on` - The `span` with the text of the button when it is in a true state.

## UijettosOptionsButton

__Block__

`uijettos-options-button` - The main `div` element (i.e. the root element of the component)

__Elements__

`uijettos-options-button__main-button` - `button` element of the main action button.

`uijettos-options-button__options-trigger` - `button` element used as a trigger to open the list of other options.

`uijettos-options-button__options-list` - `div` element used as a 'wrapper' for all the options.

`uijettos-options-button__option` - `button` element used for each option.

__Modifiers__

`uijettos-options-button__options-list--open` - The `uijettos-options-button__options-list` element (`span`) when the options list is open

## UijettosSelectList

__Block__

`uijettos-select-list` - The main `div` element wrapper (i.e. the root element of the component)

__Elements__

`uijettos-select-list__options-list` - `ul` element containing the child `<li>`s you will add.

`uijettos-select-list__option` - This class is added to each `<li>` element you supply - __You must not put these in to the the child `<li>`s yourself, the component will handle this__.

__Modifiers__

`uijettos-select-list__option--selected` - This class is added to the currently select option `<li>` - __You must not put these in to the the child `<li>`s yourself, the component will handle this__.

# License

Licensed under the MIT license.