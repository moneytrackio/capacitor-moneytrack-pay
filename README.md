# capacitor-moneytrack-pay

Allows access to moneytrack features

## Install

```bash
npm install capacitor-moneytrack-pay
npx cap sync
```

## API

<docgen-index>

* [`setEnvironment(...)`](#setenvironment)
* [`openAddCard()`](#openaddcard)
* [`openPay()`](#openpay)
* [`openMap()`](#openmap)
* [`openOnboarding(...)`](#openonboarding)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setEnvironment(...)

```typescript
setEnvironment(options: { environment: 'production' | 'staging'; }) => Promise<void>
```

| Param         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| **`options`** | <code>{ environment: 'production' \| 'staging'; }</code> |

--------------------


### openAddCard()

```typescript
openAddCard() => Promise<void>
```

--------------------


### openPay()

```typescript
openPay() => Promise<void>
```

--------------------


### openMap()

```typescript
openMap() => Promise<void>
```

--------------------


### openOnboarding(...)

```typescript
openOnboarding(options: { payload: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ payload: string; }</code> |

--------------------

</docgen-api>
