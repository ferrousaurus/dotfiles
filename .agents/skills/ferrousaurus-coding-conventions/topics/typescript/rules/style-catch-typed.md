---
title: Narrow Caught Errors Before Use
impact: MEDIUM
impactDescription: Narrowing caught values enables proper error handling
tags: style, error, catch, typed
---

## Narrow Caught Errors Before Use

**Impact: MEDIUM (narrowing caught values enables proper error handling)**

Thrown values are not guaranteed to be `Error` instances. Use an unannotated `catch (error)` binding and narrow it with `error instanceof Error` before accessing `message`, `name`, or `stack`. Do not use `catch (error: Error)`: TypeScript rejects that catch binding annotation. Do not prescribe an `unknown` catch binding annotation; unannotated bindings support TypeScript configurations that disallow catch binding annotations while still narrowing safely at runtime.

**Incorrect (using a caught value without narrowing or opting into `any`):**

```typescript
try {
  await saveData(data);
} catch (error) {
  // error is unknown by default when useUnknownInCatchVariables is enabled
  console.log(error.message); // Error: Property 'message' does not exist on type 'unknown'
}

try {
  await saveData(data);
} catch (error: any) {
  // any — loses all type safety
  console.log(error);
}
```

**Correct (narrow the caught value):**

```typescript
try {
  await saveData(data);
} catch (error) {
  if (error instanceof ValidationError) {
    logError(error);
  } else if (error instanceof Error) {
    logError(error);
    throw error;
  } else {
    console.error(`Unexpected thrown value`, error);
    throw error;
  }
}
```

When using `.catch()` (preferred over try/catch — see `async-catch-over-trycatch`):

```typescript
const user = await fetchUser(id).catch((error: unknown) => {
  if (error instanceof Error) {
    logError(error);
  } else {
    console.error(`Unexpected thrown value`, error);
  }
  return undefined;
});
```
