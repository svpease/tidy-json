# tidy-json

Simple recursive serializer of a JSON object into a string with newlines and spaces.

# Install

Install using npm:
```console
npm i tidy-json;
```

### Usage

```js
import tidyjson from 'tidy-json';
console.log(tidyjson({'hi':'world',something:['4','a','13ois', true, false, null, '42', 34], somethingElse:{'hey':'WORLD!', s3: {'new': 'saopg!!!'}}}));
```
