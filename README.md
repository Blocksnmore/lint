# @studios/lint
An assortment of various lint rules made for Deno's linter. 
These are made on a case by case basis as they're needed.
Feel free to suggest new lint rules by creating an issue. 

## Usage
Install the plugin by updating your `deno.json` to include the following:

```diff
{
  ...,
  "lint": {
+   "plugins": ["jsr:@studios/lint"]
  }
}
```
You can additionally limit these rules to only explicit ones by providing the lint rule name at the end.
ie. `jsr:@studios/lint/no-func`