## rax-example

## Install

```
$ npm install rax-example --save
```

## Usage

```
import RaxExample from 'rax-example';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|name|String|''|describe|

### Function

|name|param|return|describe|
|:---------------|:--------|:----|:----------|
|name|Object|/|describe|

## Example

```
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import RaxExample from 'rax-example';

render(<RaxExample />, document.body, { driver: DriverUniversal });
```
