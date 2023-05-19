---
group: Function
---

# Lucky item weight

:::info{title=Information}
This part is only for those who want to know the principle.\
Actually, you only need to know that the larger the weight, the greater the probability of being drawn.
:::

## How are items drawn when the lucky block is opened?

The lucky block opening process is as follows:

1. First, add up the weights of all items of the same quality.
2. Take any value from 0 to the sum of the weights.
3. Determine which item’s interval this value belongs to.

In fact, from this you can see that the larger the weight, the greater the probability of being drawn.

## How is the probability displayed in the GUI calculated?

In fact, if you understand the content above, it is not difficult to understand.

The probability is obtained by dividing the weight of the item by the sum of the weights of all items of the same quality, and then multiplying by 100%.
