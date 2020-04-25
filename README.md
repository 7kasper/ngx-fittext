# Ngx-FitText

ngx-fittext is a simple component that fit text into the div.

[Demo Page](https://pikselinweb.github.io/ngx-fittext/?target=_blank)

![Fit Text](/src/assets/fittextgif.gif 'Preview Fit Text')

## Import Module

```ts
import { NgxFitTextModule } from 'ngx-fit-text';

@NgModule({
imports: [
// other modules
NgxFitTextModule
]
})
```

## Basic Usage

```html
<fit-text [text]="'Lorem Impsum'"></fit-text>
```

## Full Features

```html
<fit-text
  [text]="'Lorem Impsum'"
  (resized)="newFontSize($event)"
  height="800px"
  width="100%"
  maxFontSize="140px"
  minFontSize="12px"
  [delay]="120"
  [middle]="true"
  [showLogs]="true"
>
</fit-text>
```

## Get Font Size In Compenent

```ts
 newFontSize(fSize: number) {
    console.log(fSize);
    // this.fontSize = fSize;
    return fSize;
  }
```

> If you want to resize text on window resize event use fit-text-windowresize selector instead of fit-text.

```html
<fit-text-windowresize
  [text]="'Lorem Impsum'"
  (resized)="newFontSize($event)"
  height="800px"
  width="100%"
  maxFontSize="140px"
  minFontSize="12px"
  [delay]="120"
  [middle]="true"
  [showLogs]="true"
>
</fit-text-windowresize>
```

## Options

| Option        | Type           | Description                                                                                                                                 |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [text]        | string         | You can pass string values to display in fit component. When you pass new value component will be updated.                                  |
| [height]      | px, em, %, etc | Set to component fixed height.                                                                                                              |
| [width]       | px, em, %, etc | Set to component fixed width. Default value is '100%'                                                                                       |
| [maxFontSize] | px             | Set maximum font size of component                                                                                                          |
| [minFontSize] | px             | Set minimum font size of component. Not recommend, text may overflow                                                                        |
| [middle]      | boolean        | Work only in fixed height, text will vertical align to middle                                                                               |
| [delay]       | number         | If you use animation or lazy load, component height may render as 0. To avoid this, you can pass number to delay. Defalt value is 100 (ms). |
| [showLogs]    | boolean        | Show changes in console step by step                                                                                                        |
| (resized)     | output         | Fire event that return new font size when text resized. Simple usage : (resized)="fooFunction(\$event)"                                     |
