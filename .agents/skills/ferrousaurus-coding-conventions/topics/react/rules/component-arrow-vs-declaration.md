---
title: Arrow for Simple Components, Function Declaration for Hooks or Reused Computations
impact: CRITICAL
impactDescription: Aligns component syntax with the pure/side-effect convention from the TypeScript skill
tags: react, component, arrow, declaration, hooks
---

## Arrow for Simple Components, Function Declaration for Hooks or Reused Computations

**Impact: CRITICAL (aligns component syntax with the pure/side-effect convention)**

Although React components are technically side-effecting (they render to the DOM), the developer's mental model distinguishes between simple presentational components and components with hooks. Simple components that just render JSX without hooks are conceptually pure — they map props to UI. Components that use hooks manage state and effects, making them side-effecting. A pure component may also use a function declaration when it computes a value once and reuses it in multiple places.

Follow the TypeScript skill's pure/side-effect convention:

- **Arrow function (`const`)** for simple components: no hooks, just props → JSX
- **Function declaration** for hook-using components: uses `useState`, `useEffect`, custom hooks, etc.
- **Function declaration** for pure components that compute a value once and reuse it, instead of repeating the computation in JSX

**Incorrect (function declaration for simple presentational component with no hooks or reused computation):**

```tsx
function Badge({ label }: BadgeProps) {
  return <span className="badge">{label}</span>;
}
```

**Incorrect (arrow function for component with hooks):**

```tsx
const UserProfile = ({ userId }: UserProfileProps) => {
  const [user, setUser] = useState(null);
  const { data } = useUserQuery(userId);

  return <div>{user?.name}</div>;
};
```

**Correct (arrow for simple, declaration for hook-using):**

```tsx
const Badge = ({ label }: BadgeProps) => <span className="badge">{label}</span>;

function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState(null);
  const { data } = useUserQuery(userId);

  return <div>{data?.name}</div>;
}
```

**Correct (function declaration for a pure component with a reused computation):**

```tsx
function Badge({ label }: BadgeProps) {
  const lowercase = label.toLowerCase();

  return <span className="badge" data-content={lowercase}>{lowercase}</span>;
}
```

This creates an immediate visual signal: `const Component = () =>` tells you "this is a simple presentational component," while `function Component()` tells you "this component manages state, side effects, or a reused computation."

### Cross-References

- Related: [component-function-over-class.md](../../react/rules/component-function-over-class.md)
- TS Skill: `function-pure-arrow` — Pure functions generally use arrow syntax; function declarations are appropriate when a pure component reuses a computed value
